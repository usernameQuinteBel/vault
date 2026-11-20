---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [14]
groep: Authenticatie, logging en configuratie
aliases: [JSON Web Token, Access token, Bearer token]
---
# JWT

> Een **JSON Web Token**: het **access token** dat Auth0 na het inloggen teruggeeft en dat de React-app bij elke beveiligde call meestuurt in de header `Authorization: Bearer <token>`.

```
Gebruiker → Login (redirect naar Auth0) → Authenticated ← JWT
React → API call (met JWT) → API valideert het token en antwoordt
```
```jsx
const token = await getAccessTokenSilently();
apiClient.get("/forecasts/authorized", { headers: { Authorization: `Bearer ${token}` } });
```
Controleer in de browser: **Network-tab → request → Headers → `Authorization: Bearer …`**.

## Gerelateerd
[[Auth0]] · [[JwtBearer]] · [[Authorize]] · [[React - Axios]]

---
Hoort bij: [[Authentication met Auth0]]
