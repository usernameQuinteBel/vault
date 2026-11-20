---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 14
groep: Client-side
---
# Clickjacking

> Ook **UI redressing**. Een **interface-gebaseerde** aanval: het slachtoffer denkt op iets onschuldigs te klikken, maar klikt in werkelijkheid op een **onzichtbare iframe** van een andere applicatie die eroverheen ligt. Zo voert het slachtoffer, met zijn eigen sessie, een actie uit die hij niet bedoelde.

## De opbouw
1. Het slachtoffer krijgt een link naar een **lokpagina** met een zichtbare, verleidelijke knop ("Win!").
2. Daar bovenop ligt een **transparante iframe** met de **echte** knop van een andere app ("Betaal"/"Pay") waar het slachtoffer op ingelogd is.
3. De iframe is bijna volledig **doorzichtig** (`opacity` quasi 0) en ligt **hoger** in de stapel (`z-index`), zodat de klik op "Win" in werkelijkheid de "Betaal"-knop raakt.

(Tijdens het bouwen zet een aanvaller de opacity eerst op ~0.5 om de knoppen **exact** uit te lijnen, en daarna op bijna 0.)

## Is dit niet gewoon CSRF?
Beide laten het slachtoffer ongewild acties uitvoeren vanuit **zijn** browser. Het verschil: bij clickjacking wordt de **echte pagina geladen** en klikt de gebruiker **zelf**, dus wordt ook een **[[Anti-CSRF token]]** netjes meegestuurd. **Clickjacking omzeilt daardoor CSRF-bescherming** — een belangrijk inzicht.

## Wanneer kwetsbaar?
Zodra de site **zonder beperkingen in een frame** geladen kan worden.

## Beschermen
- **[[X-Frame-Options en CSP frame-ancestors]]** (HTTP-headers) — de **echte** oplossing.
- **Framebusting** (JavaScript dat controleert of de site in het top-window draait, alle frames zichtbaar maakt en klikken op onzichtbare frames tegenhoudt) — **zwakker**.
- Combineer beide voor gelaagde security.

## Waarom framebusting alleen onvoldoende is
Framebusting is **JavaScript**, dus een aanvaller laat de iframe in een **sandbox** draaien (bv. enkel `allow-forms`, zonder `allow-scripts`/`allow-top-navigation`): het framebusting-script kan dan niets doen of denkt dat het in het top-window draait. Daarom: gebruik **altijd** de headers, die kunnen niet zo omzeild worden.

## Oefenen
[[PortSwigger labs per onderwerp]] · https://portswigger.net/web-security/clickjacking

## Begrippen
[[X-Frame-Options en CSP frame-ancestors]]

---
Hoort bij: [[Application Security]]
