---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Oefeningen
---
# Demo 4.4 - Model-driven app Drone Management

> Een model-driven app bouwen in een solution, op de tabellen *Drone Products* en *Drone Manufacturers*, met aangepaste views, formulieren, subgrid en afbeeldingen.

## Stap 1 – Solution
**Solutions → New solution** (bv. *DroneProductManagement*) + publisher. Bestaande tabellen toevoegen met **Add existing**. Zie [[Solution]].

## Stap 2 – App maken
**New → App → Model-driven app** → pagina's toevoegen op basis van de Dataverse-tabellen.

## Stap 3 – Views en formulieren aanpassen
- De standaardview *Active Drone Products* toont de fabrikant niet → view aanpassen (via pagina-navigatie of de tabelinstellingen).
- Nieuw record maken: de business rule (min. €150) werkt, maar de fabrikant ontbreekt op het formulier → in de **form designer** het veld toevoegen.

## Stap 4 – Navigatie
**Solution → Site maps → Edit** om groepsnamen in de linkernavigatie aan te passen.

## Stap 5 – Relaties tonen
- Bij een fabrikant: tab **Related** toont de producten.
- Mooier: in het formulier een **Subgrid**-component toevoegen met de gerelateerde producten.

## Stap 6 – Afbeeldingen
- Vast logo: `sitelogo.png` als **image web resource** → publish → component *Image web resource* in het formulier.
- Logo per record uit een URL-veld: HTML-web resource met script (`loadimage.html`) → logical name van het veld invullen → publish → component *HTML web resource* met cross-frame scripting en recordcontext. Zie [[Web resource]].
- **Oefening**: doe hetzelfde om de juiste dronefoto per product te tonen.

## Gebruikte begrippen
[[Model-driven app]] · [[Solution]] · [[Dataverse views]] · [[Web resource]] · [[Dataverse relaties]] · [[Naamgeving in Dataverse]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
