---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [2, 3]
groep: Sessies & context
dictionary_nr: 18
---
# Context

> De relevante informatie waar de [[Agent]] nú toegang toe heeft. Het abstracte begrip: niet de ruwe input (dat is het [[Context window]]), niet de lopende geschiedenis (dat is de [[Session]]), maar *wat de agent weet dat relevant is voor de taak*.

## Drie termen netjes gescheiden
| Term | Wat het benoemt |
|---|---|
| **Context** | De taakrelevante informatie die de agent nu heeft |
| [[Context window]] | De letterlijke reeks [[Token]]s die het model per request ziet |
| [[Session]] | Het lopende gesprek dat de [[Harness]] bijhoudt |

## Context engineering
"Iets in de context laden" = het deel maken van die set. **Context engineering** is de discipline van die set bewust samenstellen: de juiste info, op het juiste moment, en niets meer. Zie [[Context engineering]].

## Waarom zo belangrijk?
- Het model kan enkel werken met wat in de context zit ([[Contextual knowledge]]).
- Meer is niet beter: alles in de context kost tokens en [[Attention budget]].
- Slechte resultaten komen vaker door slechte context dan door een slecht model.

## Gerelateerd
[[Context window]] · [[Session]] · [[Context engineering]] · [[Contextual knowledge]] · [[Progressive disclosure]]

## Bron
- AI Coding Dictionary – term 18/71: [Context](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Context.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]] · [[Module 3 - Context]]
