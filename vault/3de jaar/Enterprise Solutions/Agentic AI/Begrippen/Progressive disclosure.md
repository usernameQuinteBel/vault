---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Memory & steering
dictionary_nr: 55
---
# Progressive disclosure

> Enkel de [[Context]] laden die de [[Agent]] nú nodig heeft, met [[Context pointer]]s naar de rest. Komt uit UI-design: enkel de knoppen tonen die relevant zijn, de rest achter een klik.

## Waarom?
Context kost dubbel:
1. Elk token dat vooraf geladen wordt, betaal je als [[Input tokens]] bij **elke** beurt.
2. Elk token kost [[Attention budget]], of de agent het nu nodig heeft of niet.
Een AGENTS.md vol stijlgids, deploy-handleiding en database-conventies maakt de agent slechter in **alle** drie. Teken: een agent die regels negeert waarvan je weet dat ze in zijn context staan.

## Hoe?
- Hou de altijd-geladen laag klein: per onderwerp één zin + een pointer naar de details.
- De agent leest de stijlgids als hij een component schrijft, de deploy-handleiding als hij deployt, en geen van beide bij het fixen van een test.
- **[[Skill]]s** zijn dit patroon ingebouwd in de harness: enkel naam + beschrijving staan in de context; de volledige instructies pas als de skill getriggerd wordt.
- **Tweede niveau**: binnen een skill kan een sjabloon in `references/` pas geladen worden bij de stap die het gebruikt.

## Belang voor kleine modellen
Kleine lokale modellen hebben weinig ruimte en een zwak attention budget → progressive disclosure is daar essentieel. Zie [[Task 4.2 - Context engineering voor kleine modellen]].

## Gerelateerd
[[Context pointer]] · [[Skill]] · [[AGENTS.md]] · [[Context engineering]] · [[Attention budget]]

## Bron
- AI Coding Dictionary – term 55/71: [Progressive disclosure](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Progressive%20disclosure.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 4 - Local AI]]
