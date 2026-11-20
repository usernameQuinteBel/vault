---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Handoffs
aliases: [/handoff, opencode-handoff]
dictionary_nr: 45
---
# Handoff

> [[Context]] van een [[Agent]] overbrengen van de ene [[Session]] naar de andere. Kan via een geschreven [[Handoff artifact]], een samenvatting in het geheugen ([[Compaction]]), of anders. Verschilt van [[Clearing]] (daar gaat niets mee).

## Waarom?
- Van rol wisselen (planner → bouwer).
- Een [[AFK]]-run starten.
- Parallel werken in meerdere sessies.
- Ruimte maken in het [[Context window]] (uit de dumb zone geraken – zie [[Smart zone]]).

## Geen weg terug
De nieuwe sessie begint met **nul context** en kan de oude niet vragen wat ze bedoelde. Wat ze nodig heeft, moet expliciet meegegeven worden en op zichzelf staan.

## Mechanismen
| Mechanisme | Vorm | Eigenschappen |
|---|---|---|
| [[Handoff artifact]] | Bestand in de environment | Je kan het lezen en corrigeren; herbruikbaar voor meerdere sessies |
| [[Compaction]] | Samenvatting in het window | Automatisch en goedkoop; moeilijker te controleren; voor één opvolger |

## /handoff in OpenCode
De plugin **opencode-handoff** (geïnspireerd op Amp en de `/handoff`-skill van Matt Pocock):
- `/handoff <doel>` analyseert het gesprek en maakt een gerichte vervolgprompt;
- voegt een kleine set relevante bestanden toe (met token-schatting) en een leeslijst van andere bestanden;
- je kan alles nakijken en aanpassen voor de nieuwe sessie start;
- tool `read_session` om het volledige transcript van een vorige sessie op te halen als de samenvatting niet volstaat ([[Context pointer]] naar de [[Primary source]]).
- Installatie: in `opencode.json` → `"plugin": ["opencode-handoff"]` (let op: **plugin**, niet plugins). OpenCode v2+ nodig.
Zie [[Task 3.2 - Handoff-plugin in OpenCode]].

## Gerelateerd
[[Handoff artifact]] · [[Compaction]] · [[Clearing]] · [[Spec]] · [[Ticket]] · [[Subagent]]

## Bron
- AI Coding Dictionary – term 45/71: [Handoff](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Handoff.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
