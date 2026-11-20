---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Power Apps
aliases: [Model-driven apps, Model driven app, Site map, Subgrid]
---
# Model-driven app

> Een Power App die vertrekt van het **datamodel** in Dataverse (tabellen, relaties, business processen). De interface wordt grotendeels automatisch en responsive gegenereerd.

## Kenmerken
- Gebouwd op **[[Dataverse]]** (enkel die databron).
- **Metadata-gedreven**: je definieert tabellen, formulieren, views en processen; de app wordt daaruit opgebouwd.
- **Component-gericht**: formulieren, views, dashboards en flows maak je één keer en **hergebruik** je in meerdere apps.
- **Responsive**: de UI past zich aan het scherm aan (web en mobiel).
- Ondersteunt **[[Business process flow]]s** en **server-side logica** ([[Business rule]]s, berekende en roll-up kolommen).
- Dynamics 365-apps zijn zelf model-driven apps → jouw apps staan er volwaardig naast.

## Wanneer kiezen?
Als je app **data- en procesgedreven** is (back-office, case management, aanvragen opvolgen) in plaats van een specifieke, vrij ontworpen UI.

## Onderdelen
| Onderdeel | Wat |
|---|---|
| **Pages** | Pagina's op basis van Dataverse-tabellen (lijst + formulier) |
| **Views** | Welke rijen/kolommen in de lijst – zie [[Dataverse views]] |
| **Forms** | Hoe een record getoond/bewerkt wordt (form designer) |
| **Site map** | De navigatie links (groepen en pagina's) |
| **Subgrid** | Gerelateerde records binnen een formulier (bv. alle producten van een fabrikant) |
| **Web resources** | Eigen HTML/JS/afbeeldingen – zie [[Web resource]] |
| **Business process flow** | Stappenbalk bovenaan het formulier |

## Developer-kant
Robuust [[Solution]]-framework, solution checker, OData Web API, .NET SDK, sandbox-environments voor **ALM** (application lifecycle management: van idee, bouw, uitrol, onderhoud tot uitfasering).

## Gerelateerd
[[Canvas app]] · [[Dataverse]] · [[Business process flow]] · [[Solution]] · [[Web resource]] · [[Demo 4.4 - Model-driven app Drone Management]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
