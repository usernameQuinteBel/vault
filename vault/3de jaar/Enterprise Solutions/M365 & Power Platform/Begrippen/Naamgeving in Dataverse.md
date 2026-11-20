---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Dataverse
aliases: [Logical name, Schema name, Display name, Prefix]
---
# Naamgeving in Dataverse

> Elke tabel en kolom in Dataverse heeft meerdere namen: een display name (wat de gebruiker ziet), een schema name en een logical name (wat het systeem gebruikt).

## Overzicht
| | Display name | Schema name | Logical name |
|---|---|---|---|
| **Voorbeeld** | Drone Product | `cr023_DroneProduct` | `cr023_droneproduct` |
| **Doel** | Tonen aan gebruikers | Objecten maken, programmeren met sterke types, REST-endpoints | Unieke identifier voor het systeem |
| **Hoofdletters** | Vrij | PascalCase | Alles kleine letters |
| **Gebruik** | UI | Solutions, code, REST | Power Platform-automatisatie |

Tabellen hebben ook een **meervoudsnaam** (entity collection), bv. *Drone Products*.

## Prefix
Eigen tabellen en kolommen krijgen het prefix van de **publisher** (bv. `cr023_`). Zo zie je meteen wat zelfgemaakt is en vermijd je conflicten.

## Waarom belangrijk?
- In flows, web resources en code heb je de **logical name** nodig (bv. `cr023_logourl` om een URL-veld te lezen).
- Bij ontwikkeling worden namen soms omgezet tussen display en logical, wat verwarrend kan zijn.
- Zoeken: de logical name vind je in de kolominstellingen of in de form designer.

## Gerelateerd
[[Dataverse]] · [[Dataverse tabeltypes]] · [[Web resource]] · [[Solution]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
