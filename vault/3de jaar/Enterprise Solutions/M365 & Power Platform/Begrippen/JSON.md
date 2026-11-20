---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [3, 5]
groep: Data operations
---
# JSON

> JavaScript Object Notation – een standaard tekstformaat om gestructureerde data uit te wisselen. Power Automate gebruikt het om met API's van andere systemen te communiceren.

## Waarom zie je het in Power Automate?
Power Automate praat met systemen (Outlook, OneDrive, SharePoint, externe API's) via **API's**. Om [[Dynamic content]] door te geven, moeten ze dezelfde "taal" spreken: JSON.

In de **run history** kan je bij elke stap **Show raw inputs / Show raw outputs** openen → daar zie je de JSON.

## Opbouw
```json
{
  "jobTitle": "Senior Analyst",
  "department": "Finance",
  "hiringManager": "Jane Doe",
  "files": [
    { "name": "foto.png", "id": "abc123", "size": 2048 }
  ]
}
```
- `{ }` = object met sleutel-waardeparen
- `[ ]` = array (lijst)
- Waarden: tekst, getal, true/false, null, object of array

## Waar kom je het tegen?
- [[Parse JSON]] om een JSON-antwoord bruikbaar te maken als dynamic content.
- [[Compose]] om zelf JSON op te bouwen.
- [[Arrays in Power Automate]].
- [[Adaptive cards]] worden in JSON beschreven.
- Een AI-prompt die JSON teruggeeft – zie [[AI Prompt in Power Automate]].
- Topics in Copilot Studio worden opgeslagen als **YAML** (een verwant formaat).

## Gerelateerd
[[Parse JSON]] · [[Compose]] · [[API aanroepen in een flow]] · [[Dynamic content]]

---
Hoort bij: [[Chapter 3 - Power Automate]] · [[Chapter 5 - Copilot Studio]]
