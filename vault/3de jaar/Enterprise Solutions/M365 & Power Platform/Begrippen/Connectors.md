---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [1, 3, 4]
groep: Power Platform
aliases: [Connector, Data connectors, Connection]
---
# Connectors

> Kant-en-klare koppelingen (API-wrappers) waarmee Power Platform-tools data lezen en schrijven in andere diensten, zonder zelf API-code te schrijven.

## Wat is het?
Een **connector** is een "verpakking" rond de API van een dienst (Outlook, SharePoint, OneDrive, Excel, Dataverse, Planner, Twitter, SQL Server, ...). Hij levert:
- **Triggers** – gebeurtenissen die een flow kunnen starten (bv. "wanneer een nieuwe mail binnenkomt").
- **Acties** – dingen die je kan doen (bv. "maak een item", "stuur een mail").

Er zijn er **honderden** (meer dan 675 bij Power Apps). Bestaat er geen connector voor jouw systeem, dan kan je een **custom connector** maken.

## Connector vs. connection
| Connector | Connection |
|---|---|
| Het "type" koppeling (bv. SharePoint) | Een concrete ingestelde verbinding met die dienst |
| Gemaakt door Microsoft of een leverancier | Gemaakt door jou, met jouw login |
| | Bewaart login en toegekende rechten; kan gedeeld worden |

## Standaard vs. premium
| Standaard | Premium |
|---|---|
| Inbegrepen in een M365-licentie | Niet in M365, wel in de meeste andere Power Platform-licenties |
| SharePoint, Outlook, OneDrive, Excel, Teams, Planner, Forms, ... | Bv. HTTP, SQL Server, Dataverse in bepaalde scenario's, Salesforce, ... |

In dit vak werk je met **standaard connectors** – zie [[Licenties]].

## Gebruikt door
[[Power Apps]] · [[Power Automate]] · [[Power BI]] · [[Copilot Studio]] (als tool)

## Gerelateerd
[[JSON]] · [[Microsoft Power Platform]] · [[Dataverse]] · [[Tools (Copilot Studio)]]

---
Hoort bij: [[Chapter 1 - Introductie & setup]] · [[Chapter 3 - Power Automate]] · [[Chapter 4 - Power Apps]]
