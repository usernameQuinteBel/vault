---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 14
groep: Oefeningen
---
# MotoGP - Authentication 📝

> Deel 11 van [[MotoGP - Overzicht|MotoGP]]: **user-based authentication** met **Auth0**, zodat alleen **één admin-gebruiker** ticketbetalingen kan registreren. Een rolgebaseerd systeem valt buiten deze oefening.

## 1. Auth0 configureren
1. In Auth0 een **Single Page Web Application** `MotoGP_frontend` en een **API** `MotoGP.API` maken. De identifier is de URL waar je API draait, **zonder slash** op het einde ([[Auth0]]).
2. In de API het NuGet-pakket **`Microsoft.AspNetCore.Authentication.JwtBearer`** installeren en de authentication service toevoegen ([[JwtBearer]]).
3. **`GetTickets`** beveiligen met [[Authorize|`[Authorize]`]] en in Swagger controleren dat het endpoint **zonder JWT** niet bereikbaar is.

## 2. Front-end
1. Het Auth0-pakket installeren, **`Auth0Provider`** configureren en in `App.jsx` als wrapper gebruiken.
2. In de layout `useAuth0()` gebruiken (`loginWithRedirect`, `logout`, `isAuthenticated`, `error`, `user`); toon de optie **Tickets** alleen als je aangemeld bent en voeg rechts een **Login/Logout**-knop toe (met gebruiker en foutmelding).
3. De eerste login faalt: voeg in de Application Settings de **allowed callback** en **logout URL** toe.
4. Wil je bij elke login opnieuw een account kiezen, voeg dan `prompt: "login"` toe aan de `authorizationParams` van de `Auth0Provider`.

## 3. Alleen de admin toelaten
1. Kopieer de **Client ID** van `MotoGP_frontend` (de beperking geldt enkel voor deze app).
2. In Auth0: *Actions → Triggers → post-login*, een action **`RestrictAccess`** (*Build from scratch*) met een secret **`MOTOGP_CLIENT_ID`** ([[Auth0 Action]]).
3. De triggercode uit de opgave controleert eerst de client-ID en weigert daarna elk e-mailadres dat niet in `allowedEmails` staat (met `api.access.deny`). Vervang `ADMIN_EMAIL` door het admin-adres.
4. **Deploy** en sleep de action in de flow **na de login, vóór het token wordt uitgegeven**.
5. Test met een andere gebruiker (wordt geweigerd) en met de admin (krijgt toegang).

## 4. JWT meesturen
- Pas `getAll()` in `TicketsService` aan zodat de request het **token** meestuurt ([[JWT]]).
- **Beveiligingslek**: de betaalstatus kan nog zonder token gewijzigd worden. Beveilig ook **`PartiallyUpdateTicket()`** in de API, controleer dat het zonder token niet meer lukt en stuur daarna het token mee bij die request.

## Valkuilen
- Identifier van de API **zonder** slash op het einde.
- Callback- en logout-URL's vergeten → login mislukt.
- Elk endpoint dat data wijzigt, moet je apart beveiligen.

## Begrippen
[[Auth0]] · [[JWT]] · [[JwtBearer]] · [[Authorize]] · [[Auth0 Action]] · [[Authenticatie vs autorisatie]] · [[Service class en apiClient]]

---
Hoort bij: [[Authentication met Auth0]]
