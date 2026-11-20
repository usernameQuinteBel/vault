---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Oefeningen
---
# Demo 3.3 - Issue Tracking archiveren

> Een geplande flow vanaf nul: elke dag worden de afgewerkte items uit de lijst *Issue Tracking* naar een archieflijst verplaatst.

**Doel:** een flow zonder template bouwen, met OData-filters, interne veldnamen, lussen en de juiste ID's.

## Voorbereiding
1. Importeer het Excel-bestand `Issue Tracking.xlsx` (resources chapter 3) als **lijst** in de site *Drone Support*.
2. Maak een tweede lijst op basis van de eerste: het **archief**.

## Stappen
1. Nieuwe **scheduled** flow (bv. dagelijks).
2. Connector **SharePoint** → actie **Get items** op Issue Tracking.
3. **[[OData filter]]**: `field_2 eq 'Completed'` – `field_2` is de **interne** naam van *Status* (opzoeken via List settings/URL).
4. Actie **Create item** in het archief → er komt automatisch een **Apply to each** rond.
5. In dezelfde lus: **Delete item** in de originele lijst. Let op welke **ID** je gebruikt: die van *Get items* (het originele item), niet die van *Create item*.
6. **Concurrency** aanzetten in de instellingen van de lus (tot 50 parallel) – zie [[Control-acties]].
7. Testen vanuit de editor (scheduled flows kan je direct testen).

## Handig tijdens ontwikkelen
Een **Terminate**-actie om al geteste stappen niet telkens opnieuw uit te voeren.

## Oefening bij deze demo
Maak een **tweede flow** die de lijst Issue Tracking **herstelt**:
1. Lijst leegmaken: *Get items* + *Delete item* in een Apply to each.
2. Items opnieuw importeren uit het Excel-bestand: *List rows present in a table* (Excel Online) + *Create item* in een Apply to each.

## Gebruikte begrippen
[[SharePoint list]] · [[OData filter]] · [[Control-acties]] · [[Dynamic content]] · [[Soorten flows]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
