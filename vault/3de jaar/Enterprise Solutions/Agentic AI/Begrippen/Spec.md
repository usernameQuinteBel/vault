---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Handoffs
aliases: [PRD, Specificatie]
dictionary_nr: 49
---
# Spec

> Een [[Handoff artifact]] dat werk over **meerdere sessies** beschrijft – wat er gebouwd wordt, niet hoe elke sessie haar deel doet. Evolueert mee met het werk. Bestaat uit [[Ticket]]s.

## Waarom?
Sessies zijn wegwerp, groot werk niet. Alles wat meer dan één [[Context window]] kost, heeft een thuis nodig buiten de context: een bestand in de repo, een GitHub-issue, een issue tracker. De spec bevat het doel, de beperkingen, de beslissingen tot nu en de lijst tickets met status. Elke nieuwe sessie leest ze en weet waar het werk staat – zonder de ruis van vorige sessies.

## Stijlen
| Stijl | Focus |
|---|---|
| **PRD** (product requirements document) | Wat en waarom voor de gebruiker: features, gedrag, acceptatiecriteria |
| **Design doc / RFC** | Technisch: gekozen aanpak, verworpen alternatieven, trade-offs |
| **plan.md** met checklist | Kleine variant voor een feature over meerdere sessies |
Voor de agent zijn ze allemaal hetzelfde: de duurzame intentieverklaring die hij leest bij de start van elke sessie.

## Gerelateerd
[[Ticket]] · [[Handoff artifact]] · [[Smart zone]] · [[Session]]

## Bron
- AI Coding Dictionary – term 49/71: [Spec](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Spec.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
