---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Tools & environment
aliases: [Agent environment]
dictionary_nr: 25
---
# Environment (agent)

> De wereld waarop de [[Agent]] inwerkt: alles buiten de [[Harness]] dat de agent waarneemt via [[Tool result]]s en verandert via [[Tool call]]s. Meestal een [[Filesystem]], maar ook een database, API of browsersessie kan een environment zijn.

## Harness vs. environment
- De harness **draait** de agent.
- De environment is waar de agent **in werkt**.
- [[AGENTS.md]] staat in de environment; de harness laadt het in het context window.

## Momentopnames
De agent ziet de environment enkel wanneer hij kijkt. Alles wat hij weet is een **snapshot** op het moment van lezen. Verander je een bestand nadat hij het las, dan redeneert hij verder met de oude kopie tot iets hem doet herlezen.

## De laag die blijft bestaan
De environment is de enige laag die **altijd** [[Stateful]] is. De context verdwijnt met de sessie; bestanden blijven. Alles wat de agent morgen nog moet weten, moet in de environment terechtkomen.

## Grootte bepaal jij
- Een [[Sandbox]] maakt ze kleiner (minder bereik).
- Een extra [[Tool]] of [[MCP]]-server maakt ze groter (bv. een database erbij).

**Niet verwarren** met een Power Platform-[[Environment]] (M365-deel van het vak).

## Gerelateerd
[[Filesystem]] · [[Tool]] · [[Sandbox]] · [[Harness]] · [[Stateful]]

## Bron
- AI Coding Dictionary – term 25/71: [Environment](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Environment.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
