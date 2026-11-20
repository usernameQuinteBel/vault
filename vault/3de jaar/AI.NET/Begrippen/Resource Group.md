---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 6
groep: Azure
---
# Resource Group

> In Azure een **container die alle resources van één oplossing** groepeert (bv. de Custom Vision-, Storage- en Document Intelligence-resources van één app).

## Waarom?
- **Overzicht**: alles van één project bij elkaar.
- **Samen beheren**: rechten en tags in één keer instellen.
- **Samen verwijderen**: verwijder je de resource group, dan verdwijnen alle resources erin — handig om je studententegoed niet nodeloos op te gebruiken.
- **Kosten** per project zien.

## Goede gewoonte
Eén resource group per project/app (bv. `rg-safarisnap`), in één regio (bv. West Europe), met een duidelijke naam.

## Hiërarchie in Azure
```
Tenant (je organisatie/school)
 └─ Subscription (Azure for Students → betaalt)
     └─ Resource group (rg-safarisnap)
         ├─ Custom Vision (training)
         ├─ Custom Vision (prediction)
         └─ Storage account
```

## Opruimen
Na het project: *Resource group → Delete resource group* → naam bevestigen. Alles erin verdwijnt in één keer, inclusief de kosten. Controleer in **Cost Management** dat er niets meer loopt.

## Gerelateerd
[[Azure Portal]] · [[Azure AI Services]]

---
Hoort bij: [[Azure Custom Vision]]
