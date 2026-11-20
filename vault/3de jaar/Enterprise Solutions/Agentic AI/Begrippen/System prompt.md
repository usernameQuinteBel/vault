---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Sessies & context
dictionary_nr: 22
---
# System prompt

> De instructies die de [[Harness]] vooraan elke [[Model provider request]] zet – de vaste briefing van de [[Agent]]: wie het is, hoe het zich moet gedragen, welke [[Tool]]s het kan gebruiken, welke conventies gelden. Meestal stabiel binnen een [[Session]].

## Wie schrijft het?
- De **harness-maker**, niet jij. Bij coding-harnesses is het groot: vaak tienduizenden [[Token]]s aan regels, toolbeschrijvingen en randgevallen – betaald als [[Input tokens]] bij elke beurt.
- Jouw eigen vaste instructies rijden mee: [[AGENTS.md]] wordt naast de system prompt geladen bij de start van de sessie.

## Prefix cache
Omdat de system prompt bij elke request identiek is, vormt hij het begin van de [[Prefix cache]]. Daarom houden harnesses hem vast tijdens een sessie.

## Voorrang
Modellen worden getraind om de system prompt **voorrang** te geven op gebruikersberichten. Houdt een agent vast aan een conventie die je nooit vroeg, of een opmaak die je niet weg krijgt? Dan volgt hij waarschijnlijk zijn system prompt – en verliest jouw bericht de discussie. Sommige harnesses laten je de system prompt lezen en aanpassen.

## Agent modes
Een [[Agent mode]] (bv. plan mode) injecteert extra gedragsinstructies in de system prompt.

## Gerelateerd
[[Harness]] · [[AGENTS.md]] · [[Prefix cache]] · [[Agent mode]] · [[Prompt engineering]]

## Bron
- AI Coding Dictionary – term 22/71: [System prompt](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/System%20prompt.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
