---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Memory & steering
aliases: [Memory, Geheugensysteem]
dictionary_nr: 53
---
# Memory system

> Een systeem dat een [[Agent]] [[Stateful]] probeert te maken over sessies heen: tijdens een sessie wordt informatie in de [[Environment (agent)|environment]] bewaard, en bij de start van volgende sessies terug in het [[Context window]] geladen.

## Twee helften
| Write path | Read path |
|---|---|
| Tijdens de sessie schrijft de agent op wat hij leerde (voorkeur, projectfeit, beslissing) | Bij sessiestart laadt de [[Harness]] die bestanden (of een index ervan) terug in de context |

## Zelf bouwen
Veel harnesses hebben een ingebouwd memory system (bv. `/memory` in Claude Code), maar je kan er ook zelf één maken:
1. Een bestand of map met notities, bv. `notes/decisions.md`.
2. Een instructie in [[AGENTS.md]]: lees dit bestand bij de start van **elke** sessie, en voeg een regel toe wanneer de gebruiker een beslissing neemt.

Voorbeeldformaat (Task 4.2):
```
# Decisions
2026-11-20 – data in memory (geen database) – Wout: start simple
2026-11-20 – geen login – enkel Els en Jan in de winkel
```

## Waarom leest het "elke sessie" en de docs niet?
Beslissingen zijn relevant voor bijna elke taak en moeten de [[Stateless]]-heid van het model compenseren. Docs zijn taakspecifiek → [[Progressive disclosure]] via [[Context pointer]]s.

## Aandachtspunten
- Herinneringen stapelen op → laad een **index** van één regel per item, laat details achter pointers.
- Herinneringen zijn [[Secondary source]]s en **verouderen**: een feit van maart wordt in juni even zeker geladen. Snoei regelmatig.
- **Privacy**: nooit klantgegevens in memory-bestanden (regel van Els in de client brief).

## Gerelateerd
[[AGENTS.md]] · [[Stateful]] · [[Stateless]] · [[Context pointer]] · [[Task 4.2 - Context engineering voor kleine modellen]]

## Bron
- AI Coding Dictionary – term 53/71: [Memory system](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Memory%20system.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 4 - Local AI]]
