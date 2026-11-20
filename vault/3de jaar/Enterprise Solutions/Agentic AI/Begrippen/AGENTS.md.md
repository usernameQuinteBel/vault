---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [2, 4]
groep: Memory & steering
aliases: [CLAUDE.md, Agents.md]
dictionary_nr: 54
---
# AGENTS.md

> Een bestand in de [[Environment (agent)|environment]] dat de [[Harness]] bij de start van elke [[Session]] in het [[Context window]] laadt – de vaste briefing van het project aan de [[Agent]]. Een conventie over harnesses heen; Claude Code gebruikt zijn eigen variant **CLAUDE.md**.

## Waarom?
Het model is [[Stateless]]: een correctie in de ene sessie is weg in de volgende. Moest je de agent **twee keer** voor hetzelfde verbeteren? Dan hoort die correctie in AGENTS.md.

## Wat zet je erin?
Wat de agent **niet uit de code kan afleiden**:
- build- en testcommando's;
- conventies die niet vanzelfsprekend zijn;
- harde regels ("pas de gegenereerde client nooit aan").
Kort en declaratief – het is een briefing, geen documentatie.

## De keerzijde
Alles erin wordt **altijd** geladen: kost [[Token]]s bij elke beurt en verdunt zichzelf – hoe meer instructies, hoe minder betrouwbaar het model er één volgt ([[Attention budget]]).
→ Zet taakspecifieke info achter een [[Context pointer]] of in een [[Skill]] ([[Progressive disclosure]]).

## Structuur uit Task 4.2 (± 30 lijnen)
1. **Project** – 2-3 zinnen: wat, waar staat de data, wie hangt af van het formaat.
2. **Commands** – installeren en draaien.
3. **Structure** – één lijn per map/bestand.
4. **Read only what the task needs** – context pointers als *trigger → bestand*, bv. `- Nieuw of gewijzigd endpoint → docs/api-conventions.md`.
5. **Memory** – instructie voor het [[Memory system]].
6. **Never** – regels die altijd gelden (bv. nooit klantdata loggen).

## In OpenCode
`/init` laat de agent een AGENTS.md genereren op basis van je project.

## Gerelateerd
[[Progressive disclosure]] · [[Context pointer]] · [[Skill]] · [[Memory system]] · [[System prompt]]

## Bron
- AI Coding Dictionary – term 54/71: [AGENTS.md](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/AGENTS.md.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]] · [[Module 4 - Local AI]]
