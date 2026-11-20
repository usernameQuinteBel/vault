---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [1, 4]
groep: Power Platform
---
# Dataverse

> De cloud-database van de Power Platform: een beveiligde, relationele dataopslag met tabellen, relaties, business rules en rechten, waar apps, flows en rapporten samen op werken.

## Wat is het?
Dataverse (vroeger *Common Data Service* of *CDS*, nog vroeger *XRM*) is de manier waarop de [[Microsoft Power Platform]], [[Microsoft 365]] en [[Dynamics 365]] **één gedeeld systeem voor bedrijfsdata** gebruiken. Data zit in **tabellen** (rijen = records, kolommen = velden), elk met een datatype.

## Wat kan het?
- **Standaardtabellen** uit het [[Common Data Model]] (Account, Contact, Address, ...) en **eigen tabellen** – zie [[Dataverse tabeltypes]].
- **Relaties** tussen tabellen (lookups) – zie [[Dataverse relaties]].
- **Berekende en roll-up kolommen** voor consistente berekeningen over alle apps heen.
- **[[Business rule]]s**: validatie en standaardwaarden, server-side afgedwongen.
- **[[Dataverse views|Views]]**: opgeslagen selecties van kolommen en rijen.
- **Import** met [[Power Query]] en [[Dataflow]]s.
- **Beveiliging**: rollen, rechten op rijniveau, zelfs hiërarchieën – zie [[Security roles]].
- **API's** (OData/REST, .NET SDK) voor pro developers.

## Waarom niet gewoon Excel of een SharePoint-lijst?
| | Excel / SharePoint-lijst | Dataverse |
|---|---|---|
| Relaties | Beperkt | Volwaardig relationeel |
| Validatie | Zwak | Business rules server-side |
| Beveiliging | Per bestand/lijst | Rollen, rijniveau |
| Model-driven apps | Niet mogelijk | Vereist |
| Licentie | In M365 | Vraagt een omgeving met Dataverse-capaciteit |

## Opslag in de tenant
De default [[Environment]] heeft beperkte capaciteit (enkele GB database/bestanden/logs). In de schooltenant kan je enkel tijdelijke trial-environments van 30 dagen maken; daarom wordt vooral in de default environment gewerkt.

## Gerelateerd
[[Common Data Model]] · [[Dataverse tabeltypes]] · [[Dataverse relaties]] · [[Business rule]] · [[Model-driven app]] · [[Canvas app]] · [[Naamgeving in Dataverse]]

## Meer leren
- [Wat is Dataverse?](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-intro)

---
Hoort bij: [[Chapter 1 - Introductie & setup]] · [[Chapter 4 - Power Apps]]
