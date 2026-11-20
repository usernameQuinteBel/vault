---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 10
groep: Client-side
---
# Cross-Site Scripting (XSS)

> Een aanvaller laat **zijn eigen JavaScript draaien in de browser van een slachtoffer**, binnen de context van een **vertrouwde** website. Het gebeurt wanneer input met kwaadaardige inhoud (meestal JavaScript, via GET/POST-parameters, headers of cookies) **zonder validatie of encoding** wordt opgenomen in de dynamische inhoud die naar een gebruiker teruggaat.

## Denk eerst na: wat wil een aanvaller van een bezoeker?
Cookies en **sessie-info** (→ de sessie overnemen en zich voordoen als het slachtoffer), browserinfo, **toetsaanslagen** (keylogger), webcam/microfoon, of gewoon **acties uitvoeren alsof hij het slachtoffer is**.

## De drie soorten (waar zit het script?)
| Soort | Waar | Hoe geleverd |
|---|---|---|
| **[[Reflected XSS]]** | in het **request**, meteen **teruggekaatst** in de response; **niet** opgeslagen | een kwaadaardige **link** die het slachtoffer moet openen |
| **[[Stored XSS]]** | **opgeslagen** in de database, bij **elke** weergave uitgevoerd ("persistent") | een commentaar, nickname, review die iedereen te zien krijgt |
| **DOM-based XSS** | volledig **client-side**: JavaScript zet input onveilig in de DOM | genoemd in de [[OWASP WSTG]] onder client-side testing |

## Impact
Willekeurige **code-uitvoering aan clientzijde** → acties in naam van het slachtoffer, **datalekken**, en **[[Privilege escalation]]** als een **admin** de payload te zien krijgt (dan draait jouw script met admin-sessie).

## Detectie — de redenering
**Automatisch**: Burp Scanner, of **XSStrike** (https://github.com/s0md3v/XSStrike).
**Handmatig**: test **elk entry point** (parameters, headers, cookies). De sleutelvraag: **elke waarde die van het request naar de response gereflecteerd wordt, is een mogelijke vector.** Test met een onschuldig script en kijk of het **uitvoert** (tip: iets dat `document.domain` toont, zodat je zeker weet in welke context het draait).

## Filters omzeilen — de logica
| Filter | Waarom hij faalt / bypass |
|---|---|
| de app verwijdert **een deel** van `<script>` (bv. `<scr`) | **nesten**: het gefilterde stuk twee keer schrijven zodat er ná het filteren terug een geldige `<script>` overblijft |
| de app escapet **elke** variant van `<script>` | **een ander HTML-element met een event-handler** gebruiken: een afbeelding die een script uitvoert bij `onload` of `onmouseover`, een `<svg onload=...>` — er zijn tientallen tags/events |

Inspiratie: de **PortSwigger** en **OWASP** XSS cheat sheets. De les: `<script>` wegfilteren is **onvoldoende**, want JavaScript kan via veel andere wegen starten.

## Verdediging
- **Output encoding** volgens **context** (HTML-tekst, attribuut, JavaScript, URL): de input wordt zo als **tekst** getoond i.p.v. als code. Moderne frameworks (React, Razor, Blazor) doen dit standaard — **vermijd** bewust-onveilige ontsnappingen (`dangerouslySetInnerHTML`, `@Html.Raw`, rechtstreeks `innerHTML`).
- **Input valideren** tegen een allow-list.
- Een **Content Security Policy (CSP)** die inline scripts verbiedt, zodat zelfs geïnjecteerde scripts niet starten.
- Cookies met **`HttpOnly`** (niet leesbaar door JavaScript), zodat een XSS de sessiecookie niet kan stelen.

## Oefenen
[[PortSwigger labs per onderwerp]] · https://portswigger.net/web-security/cross-site-scripting

## Begrippen
[[Reflected XSS]] · [[Stored XSS]]

---
Hoort bij: [[Application Security]]
