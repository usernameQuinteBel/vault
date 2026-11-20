---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 12
groep: Client-side
aliases: [SameSite, SameSite cookie]
---
# SameSite cookies

> Een **cookie-attribuut** dat bepaalt of de browser een cookie **meestuurt bij cross-site requests**. Het pakt [[Cross-Site Request Forgery (CSRF)|CSRF]] aan bij voorwaarde 2 (sessiebeheer enkel via cookies) door de cookie bij verzoeken van andere sites weg te laten.

```
Set-Cookie: session=abc123; Secure; HttpOnly; SameSite=Lax
```

| Waarde | Gedrag |
|---|---|
| `Strict` | **nooit** meegestuurd bij een request vanaf een andere site |
| `Lax` | enkel bij **top-level GET-navigatie** (een link aanklikken); **niet** bij POST, iframes of images. Default in moderne browsers als niets is ingesteld |
| `None` | **altijd** meegestuurd (moet samen met `Secure`) |

Let op: met `Lax` blijft een **state-changing GET**-endpoint kwetsbaar. Gebruik SameSite daarom als **extra laag** naast een [[Anti-CSRF token]], niet als enige maatregel.

## Wat is "same site"?
Twee URL's zijn *same site* als ze hetzelfde **registreerbare domein** hebben (bv. `app.example.com` en `shop.example.com`), ongeacht het subdomein. Dat is ruimer dan *same origin* (schema + host + poort exact gelijk). Een aanval vanaf een kwetsbaar subdomein is dus **niet** tegengehouden door SameSite.

## Aanbevolen instelling voor sessiecookies
```
Set-Cookie: session=...; Secure; HttpOnly; SameSite=Lax; Path=/
```
- `Lax` als goede standaard (links van buitenaf werken nog).
- `Strict` voor zeer gevoelige apps (bank), met de kost dat je via een externe link niet ingelogd binnenkomt.
- `None` enkel als je cookie bewust cross-site nodig is (embedded widgets), altijd met `Secure`.

---
Hoort bij: [[Cross-Site Request Forgery (CSRF)]]
