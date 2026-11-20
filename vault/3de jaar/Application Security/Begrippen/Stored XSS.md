---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 10
groep: Client-side
aliases: [Persistent XSS]
---
# Stored XSS

> Het script wordt **permanent opgeslagen** op de backend (database) en **mee teruggestuurd** telkens iemand de betreffende data opvraagt. Ook **persistent XSS** genoemd.

## Waarom vaak gevaarlijker
In tegenstelling tot [[Reflected XSS]] hoeft het slachtoffer **niet** op een speciale link te klikken: **iedereen** die de pagina bezoekt, voert het script uit. Eén injectie raakt dus **alle** bezoekers — ook **admins**, wat de deur opent naar [[Privilege escalation]].

## Typische plekken
Een **commentaar** onder een blogpost, een **nickname** in een chatroom, een **productreview**, een profielveld — overal waar gebruikersinhoud wordt **opgeslagen** en later **aan anderen** getoond.

## Verdediging
- **Output encoding** op het moment van tonen (niet enkel bij opslaan): de data kan op meerdere plaatsen en in verschillende contexten verschijnen.
- Moet gebruikersinhoud **opmaak** bevatten (rich text)? Gebruik een beproefde **HTML-sanitizer** met een whitelist van toegelaten tags, nooit een zelfgeschreven filter.
- **Content Security Policy** als tweede verdedigingslaag.
- `HttpOnly`-sessiecookies.

## Impact
Omdat het script in de browser van elk slachtoffer draait **binnen de vertrouwde site**, kan het alles wat die gebruiker kan: pagina's aanpassen, acties uitvoeren, gegevens tonen aan de aanvaller. Bij een admin-slachtoffer is de schade het grootst.

---
Hoort bij: [[Cross-Site Scripting (XSS)]]
