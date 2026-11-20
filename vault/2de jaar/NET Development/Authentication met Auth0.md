---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 14
groep: Deel B: ASP.NET Core API
aliases: [Auth0, Authentication, JWT Bearer, les 11 Authentication, Authenticatie .NET en React]
---
# Authentication met Auth0

> Met **Auth0** (identity management platform) laat je gebruikers inloggen in je React-app; die krijgt een **JWT (access token)** terug en stuurt dat mee in de `Authorization: Bearer`-header, waarna de **.NET API** het token valideert (**JwtBearer**: `Authority` + `Audience`) en endpoints met **`[Authorize]`** beschermt.

_Slides: "11. Authentication" (Auth0 in .NET & React, voorbeeld weather forecasts / KMI.API) en oefening MotoGP._

## 1. Het doel en de flow
Een React-front end met een **login-modal**; een **geauthenticeerde** gebruiker mag de **weather forecasts** zien, een niet-ingelogde gebruiker niet.
```
Gebruiker → Login (redirect naar Auth0) → Authenticated ← JWT
React → Authorized API call (met JWT) → API: "Get weather forecasts"
```
Zie [[JWT]], [[Authenticatie vs autorisatie]] en [[Auth0]].

## 2. Wat is Auth0?
Een **Identity Management Platform** met **authenticatie- en autorisatieoplossingen**. Features:
- **Single Sign-On (SSO)**;
- **Social login** (met bestaande Facebook/Twitter/Google-account inloggen i.p.v. een nieuw account, wat registratie en login vereenvoudigt) & **Enterprise login** (authenticatie via een externe, gefedereerde identity provider zoals Azure AD, Entra ID, Google Workspace…);
- **Role-Based Access Control (RBAC)**.
**JWT** = **JSON Web Token**.

## 3. Auth0 configureren
1. Account maken op auth0.com (**MFA is verplicht!**).
2. **Applications → Create Application**: type **Single Page Web Application** (voor Angular/React/Vue; naam bv. `KMI_lesson5`).
3. Start je API (`https://localhost:PORT`) en ga naar **Applications → APIs → Create API**: naam `KMI.API`, **Identifier = de URL van je API** (uniek en achteraf niet meer wijzigbaar; wordt gebruikt als **`audience`**; geen slash op het einde).

## 4. De .NET API configureren
1. NuGet-pakket **`Microsoft.AspNetCore.Authentication.JwtBearer`** installeren.
2. In `Program.cs`:
```csharp
// Add services to the container.
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = "https://YOUR_AUTH0_DOMAIN/";
        options.Audience = "YOUR_AUTH0_API_AUDIENCE";
    });
```
| Instelling | Waar vind je het | Opmerking |
|---|---|---|
| **Authority** | in Auth0 bij je SPA-app (*Settings → Domain*, bv. `yourtenant.yourregion.auth0.com`) | voeg **`https://`** toe vóór het domein in `Program.cs` |
| **Audience** | de URL (identifier) van je .NET API | |
Zie [[JwtBearer]].

3. **Secured endpoint** met `[Authorize]`:
```csharp
[Authorize]
[HttpGet("authorized")]
public async Task<ActionResult<WeatherForecast>> GetAllAuthorized()
{
    return Ok(Forecasts);
}
```
Zonder geldig token krijg je (via Swagger bv.) geen toegang. Zie [[Authorize]].

## 5. De React-front end configureren
```bash
npm create vite@latest lesson5 -- --template react
cd lesson5
npm install
npm install react-router-dom
npm install axios
npm run dev
```
**Resources kopiëren:** `assets/icons` → `public`, `vite.config.js` → root, `App.jsx`, `auth0_provider.jsx`, `components`, `api` → `src`.

### Auth0 React-pakket
`npm install @auth0/auth0-react` (Auth0 heeft pakketten voor React, Angular, Vue). Bevat: login/logout-functionaliteit, controle of er een geauthenticeerde gebruiker is, het **JWT ophalen** en meesturen met een API-request.

### Auth0Provider
`auth0_provider.jsx` is een **wrapper-component** voor alle Auth0-functionaliteit. Vul in: `domain` (zie authority), `clientId` (Client ID van de SPA-app), `audience` (URL van je API).
```jsx
function AuthProvider({ children }) {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,   // waar naartoe na login
        audience: audience                      // API waarmee verbonden wordt
      }}
    >
      {children}
    </Auth0Provider>
  );
}
```
In `App.jsx` gebruik je `AuthProvider` als **wrapper** (import niet vergeten).

### Menu: login/logout
`useAuth0()` levert wat we nodig hebben: **`loginWithRedirect`**, **`logout`**, **`isAuthenticated`**.
```jsx
{isAuthenticated && (<Link to="/weather">Weather Forecasts</Link>)}
…
{isAuthenticated ? (
  <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
) : (
  <button onClick={() => loginWithRedirect()}>Login</button>
)}
```
Geauthenticeerd → menu-item voor weather forecasts + logout-knop; anders de login-knop.

### Token ophalen en meesturen
```jsx
import { useAuth0 } from "@auth0/auth0-react";

function ListScreen() {
  const [forecasts, setForecasts] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  const getForecasts = async () => {
    try {
      const token = await getAccessTokenSilently();
      const result = await ForecastsService.getAllAuthorized(token);
      setForecasts(result.data);
    } catch (error) {
      console.error("Error fetching forecasts:", error);
    }
  };
}
```
```jsx
// api/forecasts_service.jsx
async getAllAuthorized(token) {
  return apiClient.get("/forecasts/authorized", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}
```
Controleer ook de `baseUrl` van de `apiClient`. Zie [[React - Axios]].

## 6. Uitproberen (en typische fouten)
1. API draait → in de app **Login** (redirect naar het Auth0-loginscherm met "Continue with Google").
2. **Fout:** *"Callback URL mismatch. The provided redirect_uri is not in the list of allowed callback URLs."* → voeg `http://localhost:PORT` (React-poort, bv. `5173`) toe aan **Allowed Callback URLs** (*Application Settings*).
3. Login met je **Google-account** en accepteer ("KMI_lesson5 is requesting access…: Profile").
4. Open de weather forecasts en controleer in de **developer tools** (Chrome → *Network*-tab → de request die de forecasts ophaalt → *Headers*) de **`Authorization: Bearer eyJ…`**-header (het JWT).
5. **Logout:** voeg een **Allowed Logout URL** toe (`http://localhost:5173/`) om terug te keren naar je login.
6. In Auth0 → *User Management → Users* zie je de gebruiker (`google-oauth2|…`) en de *Authorized Applications* (met audience).

## 7. Oefening MotoGP: user-based authentication
Doel: **enkel één admin-gebruiker** mag de ticketbetalingen registreren (role-based zou te ver gaan). Zie [[MotoGP - Authentication]].
1. **Auth0:** nieuwe SPA `MotoGP_frontend` en nieuwe API `MotoGP.API` (identifier = URL van je API, geen slash). In de API `JwtBearer` installeren, authenticatie toevoegen en **`GetTickets` beveiligen**; via Swagger testen dat dit **zonder token niet** lukt.
2. **Front end:** Auth0-pakket, `Auth0Provider`, `AuthProvider` in `App.jsx`; in de layout `const { loginWithRedirect, logout, isAuthenticated, error, user } = useAuth0();`, enkel de **Tickets**-optie tonen indien geauthenticeerd; login/logout-knop, foutmelding en gebruiker tonen; callback- en logout-URL's toevoegen. Wil je bij elke login een account kiezen (Auth0 hergebruikt standaard de vorige gebruiker), voeg dan `prompt: "login"` toe aan `authorizationParams`.
3. **User-based restrictie:** iedereen kan inloggen → beperk dit met een **Auth0 Action**. Kopieer het **Client ID** van `MotoGP_frontend`; ga naar *Actions → Triggers → post-login*, maak een **Action (Build from scratch)** `RestrictAccess`, voeg een **secret** `MOTOGP_CLIENT_ID` toe en programmeer:
```javascript
exports.onExecutePostLogin = async (event, api) => {
  // Only implement restricted access for the MotoGP front end
  if (event.client.client_id !== event.secrets.MOTOGP_CLIENT_ID) {
    return; // Skip execution for other applications
  }
  const allowedEmails = ["ADMIN_EMAIL"];
  if (!allowedEmails.includes(event.user.email)) {
    api.access.deny("Unauthorized", "You are not allowed to log in.");
  }
};
```
   Vervang `ADMIN_EMAIL` door het adres van de admin, **Deploy**, en sleep de trigger zodat hij **na de login maar vóór het token wordt uitgegeven** draait. Test met een niet-toegelaten gebruiker (of tijdelijk een lege `allowedEmails`): login wordt geweigerd; de admin blijft toegelaten.
4. **JWT meesturen:** pas `getAll()` van `TicketsService` aan zodat het token mee gaat. **Beveilig ook `PartiallyUpdateTicket()`** (anders kan je de betaalstatus zonder token wijzigen) en test dat zonder token niet lukt en met token wel. Zie [[Auth0 Action]].

## Tips en valkuilen
- **Authority** moet `https://` + tenantdomein bevatten; **Audience** is de API-identifier (**exact** dezelfde URL, zonder slash).
- Beveiligen op de **server** met `[Authorize]` is wat telt: een verborgen menu in React beschermt niets.
- Vergeet **Allowed Callback/Logout URLs** niet, anders *Callback URL mismatch*.
- Zet **geheimen** (zoals een client-id voor een Action) in Auth0 *secrets*, niet hardgecodeerd.
- Authenticatie (wie ben je?) ≠ autorisatie (wat mag je?) — [[Authenticatie vs autorisatie]].

## Begrippen
[[Auth0]] · [[JWT]] · [[JwtBearer]] · [[Authorize]] · [[Auth0 Action]] · [[Authenticatie vs autorisatie]] · [[CORS]] · [[React - Axios]]

## Oefening
[[MotoGP - Authentication]]

---
Hoort bij: [[NET Development|.NET Development]]
