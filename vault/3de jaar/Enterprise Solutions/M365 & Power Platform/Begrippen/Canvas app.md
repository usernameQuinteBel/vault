---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Power Apps
aliases: [Canvas apps, Canvas-app]
---
# Canvas app

> Een Power App waarbij je start vanuit de **gebruikerservaring**: je tekent zelf de schermen pixel per pixel en koppelt die aan data uit honderden mogelijke bronnen.

## Kenmerken
- Voor **power users** / [[Citizen developer]]s.
- **WYSIWYG**-designer (what you see is what you get).
- Ideaal voor **taak- en rolgerichte** apps (een inspectie-app, een bestel-app, ...).
- Data uit **veel bronnen tegelijk** via [[Connectors]]: Excel, SharePoint, Dataverse, SQL, ...
- Layouts: telefoon of tablet; draait in browser, iOS, Android, Windows.

## Een canvas app maken
| Manier | Hoe |
|---|---|
| **Genereren uit data** | *Create → Start from data → From Excel* (of SharePoint, Dataverse) → Power Apps maakt automatisch een werkende app met lijst-, detail- en bewerkscherm. Zie [[Demo 4.1 - Canvas app genereren uit Excel]] |
| **Vanaf nul** | *Blank canvas app* → zelf schermen en controls toevoegen. Zie [[Demo 4.2 - Canvas app vanaf nul (CRUD)]] |
| **Vanuit Dataverse** | Een tabel maken (of laten maken uit Excel) en daar een app op bouwen |

## De editor (Power Apps Studio)
- **Tree view / controlpaneel** (links) – alle schermen en controls.
- **Canvas** (midden) – het ontwerp.
- **Eigenschappenpaneel** (rechts) – eigenschappen van de geselecteerde control; onder *Advanced* ook de events (OnSelect, OnSuccess, ...).
- **Formulebalk** (boven) – de [[Power Fx]]-formule voor de gekozen eigenschap.
- **F5** = app uitvoeren (preview als telefoon, tablet of browser).

## Belangrijkste controls
- **Gallery** – toont meerdere records – zie [[Data binding in canvas apps]].
- **Display form / Edit form** – één record bekijken of bewerken – zie [[Formulieren in canvas apps]].
- **Label, Text input, Button, Icon, Image**.

## Denkwijze
Je schrijft **geen code-behind** zoals in een C#-form. Elke eigenschap krijgt een **formule** (declaratief, zoals in Excel) in plaats van procedurele code.

## Publiceren en delen
Zie [[Apps publiceren en delen]].

## Canvas vs. model-driven
Zie [[Power Apps]] en [[Model-driven app]].

## Gerelateerd
[[Power Apps]] · [[Power Fx]] · [[Data binding in canvas apps]] · [[Formulieren in canvas apps]] · [[Navigatie in canvas apps]] · [[Dataverse]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
