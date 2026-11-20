---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
aliases: [Reasoning effort, Thinking effort]
dictionary_nr: 6
---
# Effort

> Een "draaiknop" voor hoeveel het [[Model]] nadenkt voor het antwoordt. Ook *reasoning effort* of *thinking effort*.

## Wat doet het?
Per [[Model provider request]] bepaalt effort hoe lang de denkfase is vóór het eigenlijke antwoord. Die redenering wordt gewoon tijdens [[Inference]] gegenereerd. De [[Harness]] verbergt ze vaak, maar het is echt werk.

## Kost
- Denken = [[Token]]s → aangerekend als [[Output tokens]], ook als je ze nooit ziet.
- Tokens komen één voor één → meer effort = langer wachten + hogere factuur.

## Typische ladder
| Niveau | Waarvoor |
|---|---|
| Low | Mechanische wijzigingen, opzoekwerk, duidelijk afgebakende aanpassingen |
| Medium | Dagelijks codeerwerk (standaard) |
| High | Lastige bugs, ontwerpbeslissingen, meerstappenplannen |
| Max | De moeilijkste problemen, waar een fout antwoord duur is |

## Fouten in beide richtingen
- **Te laag** op een moeilijk probleem → een zelfzeker maar oppervlakkig antwoord dat er goed uitziet maar fout is.
- **Te hoog** voor een simpele hernoeming → lang wachten voor niets.

**Stem effort af op de taak, niet op de sessie**: zet hem hoger voor het echt moeilijke deel en weer lager voor routinewerk.

## Gerelateerd
[[Output tokens]] · [[Inference]] · [[Model]]

## Bron
- AI Coding Dictionary – term 6/71: [Effort](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Effort.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
