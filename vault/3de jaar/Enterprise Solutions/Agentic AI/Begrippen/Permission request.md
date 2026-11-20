---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Tools & environment
dictionary_nr: 31
---
# Permission request

> Wat de [[Harness]] aan de gebruiker toont vóór het uitvoeren van een [[Tool call]] die niet vooraf goedgekeurd is. Goedkeuren → uitvoeren; weigeren → de weigering gaat als [[Tool result]] terug naar het model.

## Levenscyclus
| Stap | Wie | Wat |
|---|---|---|
| 1 | Model | Maakt een tool call |
| 2 | Harness | Checkt tegen de [[Permission mode]] en opgeslagen goedkeuringen |
| 3 | Harness | Vooraf goedgekeurd → meteen uitvoeren; anders pauzeren en vragen |
| 4 | Gebruiker | Keurt goed (eenmalig of altijd) of weigert |
| 5 | Harness | Voert uit of meldt de weigering aan het model |

## Waarom?
Het mechanisme om een mens "in de loop" te houden voor riskante of gevoelige acties (bestanden verwijderen, commando's, pushen).

## Spanning
Veel vragen = veel onderbrekingen = minder autonomie. Een [[Sandbox]] is het alternatief: minder vragen, maar de schade blijft beperkt.

## Gerelateerd
[[Permission mode]] · [[Agent mode]] · [[Sandbox]] · [[Tool call]]

## Bron
- AI Coding Dictionary – term 31/71: [Permission request](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Permission%20request.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
