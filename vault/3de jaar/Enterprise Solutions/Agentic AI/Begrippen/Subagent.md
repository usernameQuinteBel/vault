---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Memory & steering
aliases: [Subagents]
dictionary_nr: 58
---
# Subagent

> Een [[Agent]] die door een andere agent gestart wordt via een [[Tool call]]. Draait in een eigen [[Session]] met een eigen [[Context window]] en geeft één [[Tool result]] terug. Kan zelf **geen** subagents starten (één niveau diep).

## Waarvoor?
**Context isoleren.** Een brede zoektocht of veel bestanden lezen levert pagina's tool results op, waarvan het meeste maar even nodig is. In de hoofdagent blijft dat allemaal in de context hangen; in een subagent vult het een wegwerp-window en komt enkel het eindrapport terug.

## Let op
Het rapport is een [[Secondary source]]: de hoofdagent krijgt het verslag van de subagent, niet de ruwe resultaten.

## Parallel
Een hoofdagent kan meerdere subagents tegelijk starten voor onafhankelijke deeltaken.

## Subagent vs. handoff
| Subagent | [[Handoff]] |
|---|---|
| De ouder verwacht een antwoord terug | Geen weg terug |

## Gerelateerd
[[Agent]] · [[Context engineering]] · [[Secondary source]] · [[Handoff]]

## Bron
- AI Coding Dictionary – term 58/71: [Subagent](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Subagent.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 4 - Local AI]]
