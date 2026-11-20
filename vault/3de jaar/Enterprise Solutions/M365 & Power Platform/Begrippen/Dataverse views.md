---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Dataverse
aliases: [Dataverse view, Table view]
---
# Dataverse views

> Een view is een vooraf gedefinieerde selectie van kolommen en rijen uit één of meer (gerelateerde) tabellen – zelf bewaart ze geen data.

## Kenmerken
- **Virtueel** – een dynamisch zicht op bestaande data.
- **Query-gebaseerd** – bepaalt welke kolommen, welke joins, welke filter en sortering.
- **Aanpasbaar** – met de juiste rechten maak, wijzig en verwijder je views.
- **Gebruiksvriendelijk** – gebruikers zien relevante data zonder de tabelstructuur te kennen.
- **Geoptimaliseerd** – Dataverse haalt ze efficiënt op.
- Veel gebruikt in **model-driven apps**, canvas apps en Power BI.

## Voorbeelden
- *Active / Inactive Drone Products* (bestaan standaard; filter op status 0/1).
- *Products by DJI* – enkel producten van fabrikant DJI.
- *High-end photography drones* – join met fabrikant, filter op categorie en prijs boven een drempel.

## View maken
**Tabel → Data experiences → Views → New view** → kolommen kiezen (bv. Name, Price, Drone Manufacturer) → filter toevoegen → sorteren (bv. op prijs) → **Save and publish**.

## View gebruiken in een canvas app
- In een **formulier/gallery** via de eigenschappen (data source → view).
- In een **formule**: `Filter('Drone Products', 'Drone Products (Views)'.'Products by DJI')`

## Gerelateerd
[[Dataverse]] · [[Model-driven app]] · [[SharePoint views]] · [[Filteren en sorteren in canvas apps]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
