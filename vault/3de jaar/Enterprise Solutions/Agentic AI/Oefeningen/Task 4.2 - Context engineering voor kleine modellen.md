---
type: oefening
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Tasks
---
# Task 4.2 - Context engineering voor kleine modellen

> Bereid een leeg project voor zodat een **klein lokaal model** in OpenCode een Flask-API kan bouwen voor een fietsenherstelatelier – door enkel de juiste contextbestanden te schrijven (AGENTS.md, docs, een skill, een memory system) en daarna te testen of ze werken.

**Deadline:** 22 nov 2026 · **Resource:** `Client Brief Fietsatelier De Spaak API.md`

## De klant (samengevat)
Els (fietsenhersteller) wil haar papieren herstelbonnen vervangen door een API. Haar neef Wout heeft een toonbankpagina die afhangt van het antwoordformaat. In de brief staan regels, beslissingen, terugkerende taken, zorgen én tegenstrijdigheden (bv. bonnummerformaat wijzigt in de e-mail, extra status *wacht op onderdelen*).

## Deel A – De brief sorteren
Maak een tabel met elke uitspraak in één van drie groepen:
| Groep | Wat | Gaat naar |
|---|---|---|
| **Regels** | Altijd te volgen (incl. Els' zorgen) | `docs/api-conventions.md` of `docs/business-rules.md` |
| **Beslissingen** | Keuzes die later kunnen veranderen | `notes/decisions.md` |
| **Terugkerende taken** | Werk dat steeds op dezelfde manier gebeurt | De skill `add-resource` |
Plus een lijst van **minstens 3 open vragen** (tegenstrijdigheden of onduidelijkheden) – niet zelf beslissen, niet laten raden.

## Deel B – De bestanden
```
my-project/
├── AGENTS.md                         (max ±30 lijnen, 6 delen)
├── docs/api-conventions.md           (URL-stijl, statuscodes, foutformaat, datum, geld in cent, JSON-errorhandlers 400/404)
├── docs/business-rules.md            (statussen in het Nederlands, toegelaten overgangen, prijsregels, klantvereisten, "Open"-sectie)
├── notes/decisions.md                (YYYY-MM-DD – beslissing – reden; enkel uit het interview!)
└── .opencode/skills/add-resource/
    ├── SKILL.md                      (frontmatter name + description, ±15 lijnen genummerde stappen)
    └── references/blueprint-template.py  (Flask-blueprint: list, get, create, update)
```
- **B1** – [[Context pointer]]s en [[Progressive disclosure]]: AGENTS.md kort, met pointers als *trigger → bestand*. Elke doc past op één scherm.
- **B2** – de [[Skill]]: de beschrijving werkt als context pointer; het sjabloon in `references/` is een tweede niveau van progressive disclosure.
- **B3** – het [[Memory system]]: `notes/decisions.md` + in AGENTS.md een pointer "lees bij de start van elke sessie" en een Memory-sectie "voeg een lijn toe bij elke beslissing". **Nooit klantgegevens** in dit bestand.

## Deel C – Experimenten (lokaal model, elke test in een nieuwe sessie met `/new`)
- **C1 – Laadt de skill?** Skelet laten bouwen (+ git commit/tag), dan "Els wil haar klanten bijhouden" en "...fietsen, elke fiets hoort bij een klant" → wordt `add-resource` geladen en hergebruikt? Screenshot van de skill tool call + `ollama ps`.
- **C2 – Overleeft het geheugen een lege sessie?** Repairs-resource laten maken (oud bonnummerformaat), dan punt 1 van de e-mail plakken (nieuw formaat met jaartal) → past de agent de code aan én schrijft hij zelf een lijn in `decisions.md`? Daarna `/new` en een nieuw endpoint vragen → gebruikt hij het nieuwe formaat zonder dat je het zegt?

## Indienen
Project (zip of GitHub) + PDF-rapport met tabel Deel A, open vragen, screenshots C1/C2 en een reflectie (max. 400 woorden) die deze vijf termen correct gebruikt: **memory system, AGENTS.md, progressive disclosure, context pointer, skill**.

## Waarom "elke sessie" voor decisions.md en niet voor de docs?
Beslissingen zijn bijna altijd relevant en compenseren dat het model [[Stateless]] is; docs zijn taakspecifiek en worden enkel geladen via hun trigger.

## Begrippen
[[AGENTS.md]] · [[Context pointer]] · [[Progressive disclosure]] · [[Skill]] · [[Memory system]] · [[Context engineering]] · [[Attention budget]] · [[Local AI]] · [[Ollama]]

---
Hoort bij: [[Module 4 - Local AI]]
