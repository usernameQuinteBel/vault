---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Actie, Acties, Action, Actions]
---
# Actie (Power Automate)

> Een stap in een flow die iets doet: data ophalen, een item maken, een mail sturen, een bestand kopiëren, een goedkeuring starten, ...

## Soorten acties
| Groep | Voorbeelden |
|---|---|
| **Connector-acties** | SharePoint *Get items / Create item / Delete item*, Outlook *Send an email*, OneDrive *Create file*, Planner *Create a task*, Excel *List rows / Add a row* |
| **Control** | *Condition*, *Apply to each*, *Switch*, *Scope*, *Terminate*, parallelle takken – zie [[Control-acties]] |
| **Variables** | *Initialize / Set / Append to array variable* – zie [[Variabelen in Power Automate]] |
| **Data operations** | *Compose*, *Parse JSON*, *Create HTML table*, *Create CSV table*, *Filter array*, *Select* – zie [[Compose]], [[Parse JSON]], [[Arrays in Power Automate]] |
| **AI capabilities** | *Run a prompt* – zie [[AI Prompt in Power Automate]] |
| **Approvals** | *Start and wait for an approval* – zie [[Approval flow]] |
| **HTTP** | Een API aanroepen – zie [[API aanroepen in een flow]] |

## Instellingen per actie
Via **Settings** van een actie: parallelisme (bij Apply to each), [[Control-acties|run after]], time-out, retry, ...

## Gerelateerd
[[Flow]] · [[Trigger]] · [[Control-acties]] · [[Dynamic content]] · [[Connectors]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
