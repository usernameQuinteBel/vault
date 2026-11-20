---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 12
groep: Client-side
aliases: [CSRF token, Synchronizer token]
---
# Anti-CSRF token

> Een **onvoorspelbare, willekeurige waarde** die de server genereert, **koppelt aan de sessie** van de gebruiker, en in elk formulier/state-changing request laat meesturen. De server **weigert** het verzoek als het token ontbreekt of niet klopt. Omdat een aanvaller op een andere site het token **niet kent**, faalt zijn vervalste verzoek — precies wat ontbrekende voorwaarde 3 van [[Cross-Site Request Forgery (CSRF)|CSRF]] herstelt.

```html
<form action="/change-email" method="POST">
  <input type="hidden" name="csrf" value="9f2c1e...a7" />
  <input name="email" />
</form>
```

## Correct implementeren (waar het vaak misloopt)
- **Uniek per sessie** (of per request) en cryptografisch **willekeurig** (geen voorspelbare teller).
- **Altijd** controleren — óók als de parameter **ontbreekt**, en ongeacht de HTTP-methode.
- Gekoppeld aan **de** sessie (niet een token uit een globale pool dat voor iedereen geldig is).

Frameworks hebben het ingebouwd: ASP.NET Core `[ValidateAntiForgeryToken]`, Django `{% csrf_token %}`, Laravel `@csrf`.

---
Hoort bij: [[Cross-Site Request Forgery (CSRF)]]
