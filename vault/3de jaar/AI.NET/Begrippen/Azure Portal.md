---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 6
groep: Azure
aliases: [Azure for Students, portal.azure.com]
---
# Azure Portal

> De webinterface (https://portal.azure.com/) waarin je al je **Azure-resources** aanmaakt, beheert en opvolgt.

## Azure for Students
Via https://www.microsoftazuresponsorships.com/ krijg je als student **gratis tegoed** zonder kredietkaart. Daarmee maak je de AI-diensten van dit vak aan.

## Wat doe je in de portal?
1. Een **[[Resource Group]]** aanmaken (container voor je project).
2. Daarin de **resources** aanmaken: Custom Vision (training + prediction), Document Intelligence, een Storage account, Computer Vision, Translator, Speech…
3. Per resource het **endpoint** en de **keys** ophalen (*Keys and Endpoint*) om in je app te gebruiken.
4. **Kosten** opvolgen en resources verwijderen als je ze niet meer nodig hebt.

## Let op met keys
Keys zijn wachtwoorden. Zet ze niet in een publieke GitHub-repo; gebruik bv. een configuratiebestand dat in `.gitignore` staat.

## Een resource aanmaken (stappen)
1. **Create a resource** → zoek de dienst (bv. *Custom Vision*).
2. Kies **subscription** (Azure for Students) en **resource group**.
3. Kies een **regio** (bv. West Europe) en een **naam**.
4. **Pricing tier**: kies waar mogelijk de gratis **F0**-tier.
5. *Review + create* → na enkele seconden: *Go to resource* → **Keys and Endpoint**.

## Navigeren
| Onderdeel | Waarvoor |
|---|---|
| **Resource groups** | al je projecten |
| **Cost Management** | verbruik van je tegoed |
| **Keys and Endpoint** (per resource) | wat je in je app nodig hebt (2 keys: je kan er één roteren zonder downtime) |
| **Cloud Shell** | Azure CLI in de browser |

## Gerelateerd
[[Resource Group]] · [[Azure AI Services]]

---
Hoort bij: [[Azure Custom Vision]]
