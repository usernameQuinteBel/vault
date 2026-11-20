---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [14]
groep: Authenticatie, logging en configuratie
aliases: [Auth0 platform, Identity management platform]
---
# Auth0

> Een **Identity Management Platform** met authenticatie- en autorisatieoplossingen; je app laat gebruikers via Auth0 inloggen en krijgt een [[JWT]] terug.

## Features
- **Single Sign-On (SSO)**
- **Social login** (met bestaand Facebook/Twitter/Google-account) en **Enterprise login**
- **Role-Based Access Control (RBAC)**

## Configuratie
1. Account op auth0.com (**MFA verplicht**).
2. **Applications → Create Application**: type **Single Page Web Application** (React/Angular/Vue).
3. **Applications → APIs → Create API**: naam + **Identifier = URL van je API** (uniek, achteraf niet meer te wijzigen).
4. Zet **Allowed Callback URLs** en **Allowed Logout URLs** (bv. `http://localhost:5173`).

## In de code
- API: [[JwtBearer]] + [[Authorize]]
- React: `@auth0/auth0-react` met `Auth0Provider` en `useAuth0()` (`loginWithRedirect`, `logout`, `isAuthenticated`, `getAccessTokenSilently`).

## Typische fout
*"Callback URL mismatch. The provided redirect_uri is not in the list of allowed callback URLs."* → voeg de URL van je React-app toe aan de allowed callback URLs.

## Gerelateerd
[[Authenticatie vs autorisatie]] · [[Auth0 Action]] · [[Authentication met Auth0]]

---
Hoort bij: [[Authentication met Auth0]]
