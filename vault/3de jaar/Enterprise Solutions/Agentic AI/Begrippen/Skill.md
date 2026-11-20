---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [2, 4]
groep: Memory & steering
aliases: [Skills, SKILL.md]
dictionary_nr: 57
---
# Skill

> Een aanleerbare vaardigheid als één pakket: instructies en hulpmiddelen om één taak goed te doen, bewaard in de [[Environment (agent)|environment]] tot een [[Context pointer]] het in de context haalt. De eenheid van [[Progressive disclosure]] in een [[Harness]].

## Open standaard
Gedefinieerd op [agentskills.io](https://agentskills.io), oorspronkelijk door Anthropic, nu door de meeste harnesses overgenomen → één keer schrijven, overal bruikbaar.

## Structuur
```
.opencode/skills/add-resource/        ← mapnaam = name in de frontmatter
├── SKILL.md                          ← verplicht, hoofdletters
├── scripts/                          ← optioneel: scripts die de agent kan draaien
└── references/                       ← optioneel: sjablonen, naslag
    └── blueprint-template.py
```
SKILL.md:
```markdown
---
name: add-resource
description: Voegt een nieuwe resource (CRUD-endpoints) toe aan de Flask-API. Gebruik dit wanneer de gebruiker iets nieuws wil bijhouden (klanten, fietsen, onderdelen, ...).
---
1. Lees docs/api-conventions.md (en docs/business-rules.md bij herstellingen/prijzen).
2. Kopieer references/blueprint-template.py naar app/routes/<naam>.py en vervang RESOURCE/RESOURCES.
3. Voeg de data toe in app/store.py en registreer de blueprint in app/__init__.py.
4. Controleer dat `flask --app app run` zonder fouten start.
5. Rapporteer kort: enkel de gewijzigde bestanden.
```

## Hoe laadt het?
- Standaard staan enkel **naam + beschrijving** in de context (een paar tokens).
- Matcht de taak de beschrijving → de agent laadt de rest (via een skill-tool).
- De **beschrijving is dus de context pointer**: vermeld het soort verzoek dat het moet triggeren.

## Skill vs. AGENTS.md vs. tool
| [[AGENTS.md]] | Skill | [[Tool]] |
|---|---|---|
| Altijd geladen | Enkel geladen bij een passende taak | Iets dat de agent **aanroept** |
| Algemene projectregels | Instructies voor één terugkerende taak | Functie in de harness |

## Voorbeelden
Matt Pocock deelt populaire skills (o.a. voor analyse en coderen, en `/handoff`). In Task 2.2 installeer je skills voor het PowerShell-script en de BPMN-analyse.

## Tips
- Kort: genummerde stappen (kleine modellen volgen dat veel beter dan paragrafen).
- Eén skill = één terugkerende taak.

## Gerelateerd
[[Progressive disclosure]] · [[Context pointer]] · [[AGENTS.md]] · [[OpenCode]] · [[Task 2.2 - Skills demonstreren]]

## Bron
- AI Coding Dictionary – term 57/71: [Skill](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Skill.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]] · [[Module 4 - Local AI]]
