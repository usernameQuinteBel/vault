---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Memory & steering
dictionary_nr: 56
---
# Context pointer

> Een vermelding in één document die naar een ander document verwijst, zodat de [[Agent]] dat pas in het [[Context window]] haalt als de taak erom vraagt. De bouwsteen van [[Progressive disclosure]].

## Waarom?
Kost. Een pointer is één lijn; het document erachter kan duizenden tokens zijn, maar die kosten niets tot de agent de pointer volgt (met een [[Tool call]]).

## Een goede pointer heeft twee delen
1. Een **stabiel pad**.
2. Genoeg **beschrijving** zodat de agent weet wanneer het de moeite is.
- ❌ `zie docs/deploy.md` – geen reden om te volgen.
- ✅ `Release, deploy of rollback → lees eerst docs/deploy.md` – matcht hoe taken zich voordoen.

## Overal te vinden
- Lijnen in [[AGENTS.md]].
- De beschrijving van een [[Skill]] (de harness laadt de beschrijving, de body wacht).
- Bestandsnamen in een mappenlijst.
- Links tussen docs.
- In een [[Home Repo]]: lijnen die naar je andere repo's wijzen.
- Van een [[Secondary source]] terug naar de [[Primary source]] (bv. een samenvatting die het originele transcript noemt).

## Gerelateerd
[[Progressive disclosure]] · [[AGENTS.md]] · [[Skill]] · [[Memory system]]

## Bron
- AI Coding Dictionary – term 56/71: [Context pointer](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Context%20pointer.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 4 - Local AI]]
