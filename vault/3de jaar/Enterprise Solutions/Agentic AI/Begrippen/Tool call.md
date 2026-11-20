---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Tools & environment
dictionary_nr: 28
---
# Tool call

> De output van het [[Model]] die een [[Tool]] en zijn argumenten benoemt – gewoon gestructureerde tekst. Doet zelf niets; de [[Harness]] moet het lezen en uitvoeren.

## Levenscyclus
| Stap | Wie | Wat |
|---|---|---|
| 1 | Model | Kent de beschikbare tools uit de beschrijvingen in de [[System prompt]] |
| 2 | Model | Schrijft een call (toolnaam + argumenten, meestal JSON) en stopt |
| 3 | Harness | Leest de call en checkt hem tegen de [[Permission mode]] |
| 4 | Harness | Vraagt eventueel toestemming ([[Permission request]]) |
| 5 | Harness | Voert uit en stuurt het [[Tool result]] terug |
| 6 | Model | Leest het resultaat in de volgende request en beslist verder |

## Voorbeeld (schematisch)
```json
{ "tool": "read", "arguments": { "path": "src/app.py" } }
```

## Belangrijk inzicht
De agent "besluit" niet echt – het is [[Next-token prediction]]: de tool call is een tekst die de harness herkent.

## Gerelateerd
[[Tool]] · [[Tool result]] · [[Permission request]] · [[Model provider request]]

## Bron
- AI Coding Dictionary – term 28/71: [Tool call](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Tool%20call.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
