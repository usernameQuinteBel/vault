---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [14]
groep: Authenticatie, logging en configuratie
aliases: [Auth0 Actions, onExecutePostLogin, Login-flow Action]
---
# Auth0 Action

> Een stukje JavaScript in Auth0 dat in de **login-flow** draait; in MotoGP gebruikt om **enkel één admin-gebruiker** te laten inloggen (user-based restrictie).

```javascript
exports.onExecutePostLogin = async (event, api) => {
  // enkel voor de MotoGP front end
  if (event.client.client_id !== event.secrets.MOTOGP_CLIENT_ID) {
    return;
  }
  const allowedEmails = ["ADMIN_EMAIL"];
  if (!allowedEmails.includes(event.user.email)) {
    api.access.deny("Unauthorized", "You are not allowed to log in.");
  }
};
```
## Stappen
1. Kopieer het **Client ID** van de front-end-app en bewaar het als **secret** (`MOTOGP_CLIENT_ID`), niet hardgecodeerd.
2. *Actions → Triggers →* login-flow; vervang `ADMIN_EMAIL`, **Deploy**.
3. Sleep de trigger zodat hij **na de login maar vóór het token wordt uitgegeven** draait.
4. Test met een niet-toegelaten gebruiker.

## Gerelateerd
[[Auth0]] · [[Authorize]] · [[MotoGP - Authentication]]

---
Hoort bij: [[Authentication met Auth0]]
