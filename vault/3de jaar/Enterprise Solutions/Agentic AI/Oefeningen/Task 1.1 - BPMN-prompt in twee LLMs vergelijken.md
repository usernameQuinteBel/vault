---
type: oefening
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Tasks
---
# Task 1.1 - BPMN-prompt in twee LLMs vergelijken

> Je schrijft een eigen prompt om een BPMN-diagram voor te bereiden op basis van een interview (verbetervoorstellen van ziekenhuizen via Jira), test die in twee LLM's en kijkt of de antwoorden [[Non-determinism|non-deterministisch]] zijn.

**Deadline:** 4 okt 2026 · **Bronnen:** `bronnen/.../Module 1/tasks/Task 1.md`, `resources/interview.md`

## Wat moet je doen?
1. Schrijf **je eigen prompt** om van het interview een BPMN-diagram (voor) te bereiden.
2. Gebruik die prompt in **twee verschillende LLM's** naar keuze (bv. ChatGPT en Gemini) → vergelijk de antwoorden en noteer je mening over de verschillen.
3. Open in dezelfde LLM's een **nieuw gesprek** met exact dezelfde prompt → noteer de verschillen met de eerste keer. Is het non-deterministisch?
4. Upload screenshots van prompts en antwoorden + je eigen bedenkingen.

## Waarop letten bij het vergelijken?
- Worden **alle actoren** gevonden (ziekenhuis, helpdesk, dev-team/teamlead, domeinexpert, product lead manager, werkgroep)?
- Klopt het onderscheid **kleine vs. grote verandering** en alle **gateways** (voldoet aan voorwaarden? klein/groot? doorgaan? feedback werkgroep?)?
- Worden er **stappen verzonnen** die niet in het interview staan ([[Hallucination]])?
- Structuur, detail, lengte, formaat van de output.
- Bij het herhalen: andere volgorde, andere namen, andere gateways → [[Non-determinism]] via sampling ([[Next-token prediction]]).

## Begrippen
[[BPMN]] · [[Model provider]] · [[Non-determinism]] · [[Prompt engineering]] · [[LLM]]

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
