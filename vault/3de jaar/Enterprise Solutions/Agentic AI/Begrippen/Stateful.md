---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Sessies & context
dictionary_nr: 20
---
# Stateful

> Informatie meedragen. Een [[Session]] is stateful over [[Turn]]s heen (context stapelt zich op). Een [[Agent]] kan stateful gemaakt worden over sessies heen met een [[Memory system]]. Het [[Model]] is **nooit** stateful. Tegenhanger van [[Stateless]].

## Waar zit state op elk niveau?
| Laag | Stateful? | Hoe |
|---|---|---|
| Model | Nooit | Bevroren [[Parameters]]; ziet enkel wat in elke request zit |
| Sessie | Over beurten heen | De harness voegt elk bericht en [[Tool result]] toe aan de context |
| Harness / omgeving | Over sessies heen | Memory-bestanden, [[AGENTS.md]], [[Handoff artifact]]s – opgeschreven en later herladen |

## Keerzijde
Omdat een sessie stateful is en context blijft opstapelen, drijft een lange sessie af naar de "dumb zone" – zie [[Smart zone]].

## Gerelateerd
[[Stateless]] · [[Memory system]] · [[Session]] · [[Environment (agent)]]

## Bron
- AI Coding Dictionary – term 20/71: [Stateful](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Stateful.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
