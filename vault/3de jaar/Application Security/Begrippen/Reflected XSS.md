---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 10
groep: Client-side
---
# Reflected XSS

> Het kwaadaardige script zit in het **request** (meestal in de URL) en wordt door de backend **meteen teruggekaatst** in de response. Het wordt **niet opgeslagen** — het bestaat enkel in dat ene verzoek.

## Het verloop (de opbouw)
1. De aanvaller maakt een **link** waarin het script in een parameter zit.
2. Hij stuurt die naar het slachtoffer (mail, chat, notificatie, een andere site).
3. Het slachtoffer **klikt** → de server zet de parameter **ongefilterd** in de pagina → de browser voert het script uit **in de context van de vertrouwde site**.

Omdat het script uit het verzoek komt, vereist reflected XSS dus dat het slachtoffer **iets doet** (de geprepareerde link openen). Dat maakt het iets minder krachtig dan [[Stored XSS]], maar nog altijd gevaarlijk — zeker gericht (spear phishing).

## Verdediging
| Maatregel | Uitleg |
|---|---|
| **output encoding** | gebruikersinvoer encoderen volgens de context (HTML, attribuut, JavaScript, URL) vóór het in de pagina komt; moderne frameworks (Razor, React, Angular) doen dit standaard |
| **input validatie** | enkel verwachte tekens/formaten toelaten (whitelist) |
| **Content Security Policy** | inline scripts en onbekende bronnen blokkeren als extra laag |
| `HttpOnly`-cookies | een script kan de sessiecookie niet uitlezen |
Let op met functies die encoding uitschakelen (`@Html.Raw`, `dangerouslySetInnerHTML`, `innerHTML`).

## Reflected vs. stored vs. DOM
| Type | Waar zit het script? |
|---|---|
| reflected | in het **request**, door de server teruggekaatst |
| [[Stored XSS]] | **opgeslagen** op de server |
| DOM-based | enkel in **client-side JavaScript** dat onveilig met de URL omgaat |

---
Hoort bij: [[Cross-Site Scripting (XSS)]]
