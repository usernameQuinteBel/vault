---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Handoffs
dictionary_nr: 52
---
# Autocompact

> [[Compaction]] die de [[Harness]] **automatisch** start wanneer het [[Context window]] bijna vol is (vaak rond 80%).

## Het probleem
Compaction is lossy, en autocompact is lossy op een moment dat **jij niet koos**: misschien midden in een refactor, waarbij de samenvatting zelf beslist welke beslissingen belangrijk waren. Klassiek symptoom: de agent werkt zelfzeker verder maar is stilletjes een regel van een uur geleden vergeten – je merkt het pas als zijn werk ermee in tegenspraak komt.

## Verdediging
- Laat het niet afgaan: hou de context-indicator in het oog en **compact zelf** op een natuurlijk moment.
- Schrijf beslissingen in een plan-document of [[Handoff artifact]] op schijf, waar geen samenvatting ze kan verliezen.
- Stel de drempel in (vroeger/later) of zet autocompact uit, als je harness dat toelaat.

## Gerelateerd
[[Compaction]] · [[Handoff artifact]] · [[Smart zone]]

## Bron
- AI Coding Dictionary – term 52/71: [Autocompact](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Autocompact.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
