---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Dataverse
aliases: [Custom table, Tabeltypes, Virtual table, Activity table, Elastic table]
---
# Dataverse tabeltypes

> Dataverse kent vier soorten tabellen: standaard, activiteit, virtueel en elastisch.

| Type | Wat | Voorbeeld |
|---|---|---|
| **Standard** | De meeste kant-en-klare tabellen uit het [[Common Data Model]]. Nieuw geïmporteerde of gemaakte tabellen worden ook (aanpasbare) standaardtabellen. | Account, Contact, User, Business unit, *Drone Product* |
| **Activity** | Rijen met een activiteit-element: onderwerp, start, einde, vervaldatum, duur. Kunnen in een **agenda** komen. | Appointment, Task, Email, Phone call |
| **Virtual** | Data komt uit een **externe bron**; enkel het schema zit in Dataverse, de data blijft extern. | Salesforce-data in je app tonen |
| **Elastic** | Voor **zeer grote** datasets (tientallen miljoenen rijen en meer). | Logs, IoT-data |

## Custom tables
Elke organisatie heeft eigen tabellen nodig voor haar processen, bv. *Drone Product* en *Drone Manufacturer*. Eigen kolommen krijgen een **prefix** van de publisher (bv. `cr023_`) – zie [[Naamgeving in Dataverse]].

## Kolommen
- Mix van **automatisch voorziene** kolommen (ID, aangemaakt op, eigenaar, status, ...) en **eigen** kolommen.
- Datatypes van Dataverse zijn rijker dan bool/string/int: tekst, getal, valuta, datum, keuze (choice), ja/nee, **lookup**, afbeelding, bestand, ...

## Gerelateerd
[[Dataverse]] · [[Dataverse relaties]] · [[Common Data Model]] · [[Naamgeving in Dataverse]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
