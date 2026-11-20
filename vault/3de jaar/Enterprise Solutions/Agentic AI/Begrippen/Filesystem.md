---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Tools & environment
dictionary_nr: 26
---
# Filesystem

> De boom van mappen en bestanden waarin een coding-[[Agent]] leest, schrijft en commando's uitvoert – het standaard type [[Environment (agent)|environment]]. [[AGENTS.md]], [[Skill]]s, broncode en configs staan erin.

## Werking
- De agent raakt het enkel aan via [[Tool call]]s (bestand lezen, schrijven, shell-commando).
- Niets op schijf staat in het [[Context window]] tot een tool call het laadt. Daardoor kan een agent werken in een repo die veel groter is dan zijn window.
- Sommige harnesses laden de **bestandsnamen** van de map standaard in de context (niet de inhoud) – die werken als [[Context pointer]]s.

## Gedeeld met jou
Het is dezelfde map die jij opent in VS Code en waarvan je de diff in git bekijkt → de plek waar je nakijkt wat de agent deed.

## Valkuil
Laadt de agent je AGENTS.md niet? Misschien draait hij in een andere map (bv. de parent-map i.p.v. de project-root).

## Gerelateerd
[[Environment (agent)]] · [[Tool]] · [[AGENTS.md]] · [[Session]]

## Bron
- AI Coding Dictionary – term 26/71: [Filesystem](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Filesystem.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
