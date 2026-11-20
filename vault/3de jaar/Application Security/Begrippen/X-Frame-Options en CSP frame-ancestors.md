---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 14
groep: Client-side
aliases: [X-Frame-Options, frame-ancestors, Framebusting]
---
# X-Frame-Options en CSP frame-ancestors

> Twee **HTTP-response-headers** die bepalen **of en door wie** je pagina in een `<iframe>` geladen mag worden. Samen vormen ze de echte verdediging tegen [[Clickjacking]], want in tegenstelling tot JavaScript-framebusting zijn ze **niet** met een sandbox-iframe te omzeilen.

## X-Frame-Options (ouder)
```
X-Frame-Options: DENY          # nooit in een frame
X-Frame-Options: SAMEORIGIN    # enkel door dezelfde origin
```
(`ALLOW-FROM` wordt door moderne browsers niet meer ondersteund.)

## Content-Security-Policy: frame-ancestors (modern, aanbevolen)
```
Content-Security-Policy: frame-ancestors 'none';
Content-Security-Policy: frame-ancestors 'self' https://partner.example.com;
```
Flexibeler dan X-Frame-Options: je kan **meerdere** toegelaten origins opgeven. Zet best **beide** headers voor compatibiliteit met oudere browsers.

## Instellen in de praktijk
| Omgeving | Voorbeeld |
|---|---|
| Nginx | `add_header Content-Security-Policy "frame-ancestors 'self'" always;` |
| ASP.NET Core | middleware die `context.Response.Headers["X-Frame-Options"] = "DENY";` zet |
| Express | het `helmet`-package (`frameguard`) |

## Controleren
Open DevTools → Network → een response → **Headers**, of gebruik een online header-checker. Een snelle test: probeer je pagina in een eigen `<iframe>` op een andere origin te laden; de browser moet weigeren.

## Wanneer mag framen wel?
Als je pagina bewust ingebed moet worden (bv. een betaalwidget bij partners), laat je **enkel** die partners toe via `frame-ancestors`.

---
Hoort bij: [[Clickjacking]]
