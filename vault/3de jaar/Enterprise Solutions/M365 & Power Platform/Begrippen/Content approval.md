---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [2, 3]
groep: SharePoint
aliases: [Inhoudsgoedkeuring, Approval status, Request sign-off]
---
# Content approval

> Een instelling in een SharePoint-bibliotheek waarbij nieuwe of gewijzigde documenten eerst goedgekeurd moeten worden voor ze zichtbaar zijn voor gewone lezers.

## Inschakelen
**Library settings → Versioning settings → Require content approval = Yes**. Er verschijnt een kolom **Approval status** (Pending / Approved / Rejected / Draft).

## Wie ziet wat?
- Lezers (visitors) en leden zien standaard enkel **goedgekeurde** items.
- **Afgekeurde** en **pending** documenten zijn enkel zichtbaar voor de **auteur** en de **goedkeurders**.
- Via **Draft item security** kan je dit overschrijven:
  - *Any user who can read items* → iedereen met leesrechten ziet alles, ongeacht status (de controle valt dan eigenlijk weg).
  - *Only users who can edit items* → enkel auteur en mensen met bewerkrechten zien niet-goedgekeurde items.

## Twee manieren om goed te keuren
1. **Lichte variant zonder flow**: in de bibliotheek *Integrate → Approvals → Enable approvals* (of *Request sign-off*). Er komt een statuskolom bij en je vraagt manueel goedkeuring; die verschijnt in Teams.
2. **Met Power Automate**: content approval aanzetten + een [[Approval flow]] die automatisch start en de status zet met de actie *Set content approval status*.

## Gerelateerd
[[Approval flow]] · [[Versiebeheer]] · [[Document library]] · [[Demo 3.2 - Goedkeuringsflow voor documenten]]

---
Hoort bij: [[Chapter 2 - M365 & SharePoint building blocks]] · [[Chapter 3 - Power Automate]]
