---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Data operations
aliases: [API, HTTP, REST API]
---
# API aanroepen in een flow

> Een flow kan data ophalen van een externe web-API (via HTTP) en het [[JSON]]-antwoord verder gebruiken.

## Werkwijze
1. Roep de API aan (HTTP-actie; let op: de HTTP-connector is **premium** – zie [[Licenties]]).
2. Draai de flow en kopieer de JSON uit de output.
3. Gebruik [[Parse JSON]] met *Generate from sample*.
4. Gebruik de velden als dynamic content.

## Voorbeeld uit de les
De **yes/no-API** ([yesno.wtf](https://yesno.wtf/)) geeft willekeurig "yes" of "no" terug met een gif. Die afbeelding wordt in een **Teams-chatbericht** geplaatst (bericht in HTML-formaat). Zie [[Demo 3.7 - API-data in Teams]].

## Begrip: API
*Application Programming Interface* – een afgesproken manier waarop programma's met elkaar communiceren. [[Connectors]] zijn eigenlijk verpakte API's.

## Gerelateerd
[[JSON]] · [[Parse JSON]] · [[Connectors]] · [[Tools (Copilot Studio)]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
