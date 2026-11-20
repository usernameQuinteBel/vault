---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [16, 18]
groep: React front end
aliases: [Single Page Application, Single-Page App, Multi-page]
---
# SPA

> Een **Single Page Application** laadt één pagina en past de weergave dynamisch aan, zonder telkens naar een volledig andere pagina te navigeren.

| | **Multi-page** | **SPA** |
|---|---|---|
| Werking | bijna elke actie navigeert naar een andere pagina; pagina's worden afgebroken en opnieuw getekend | de pagina wordt aangepast, geen volledige herlaad |
| Gevolg | weinig app-state te onthouden (cookies, server-side) | **vloeiendere** ervaring, zelfs overgangsanimaties |

Frameworks: Vue.js, Angular, [[React]]. Navigatie in een SPA loopt via [[React Router]] met `Link`/`NavLink`/`navigate`, **nooit** `<a href>` (dat herlaadt de pagina en wist de state). De data komt via een [[API]].

## Gerelateerd
[[Axios]] · [[Component]]

---
Hoort bij: [[React - Single Page Applications]]
