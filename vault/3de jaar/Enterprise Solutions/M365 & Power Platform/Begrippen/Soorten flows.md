---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Automated flow, Instant flow, Scheduled flow, Desktop flow, Types of flows]
---
# Soorten flows

> Power Automate kent drie hoofdtypes: cloud flows (automated, instant, scheduled), desktop flows en business process flows.

## Cloud flows
| Type | Start | Voorbeeld |
|---|---|---|
| **Automated** | Door een **gebeurtenis** | Een mail van een bepaalde persoon komt binnen; een bestand wordt toegevoegd; je bedrijf wordt vermeld op sociale media |
| **Instant** | Met een **klik op een knop** (desktop/gsm, Teams, app) | Snel een herinnering naar het team sturen; een goedkeuring vragen |
| **Scheduled** | Volgens een **schema** | Elke dag data uploaden of items archiveren |

## Desktop flows
Automatiseren taken op de **desktop of in een webbrowser** (RPA – robotic process automation) met Power Automate for desktop. Handig voor oude apps zonder API. *Niet in scope van dit vak* (vraagt andere licentie).

## Business process flows
Geen automatisatie op de achtergrond, maar een **begeleidende balk** in een model-driven app die gebruikers stap voor stap door een proces leidt – zie [[Business process flow]].

## Wat zit in de schoollicentie?
- Cloud flows en business process flows: **ja**.
- Desktop flows: **nee**.
- In scope van het vak: **cloud flows met standaard [[Connectors]]**.

## Let op: requests
Elke trigger en actie telt als een **Power Platform request**. Een flow kan zijn limiet bereiken als hij vaker draait dan verwacht. Voorbeeld: een flow die je verwittigt als je manager mailt, moet bij **elke** binnenkomende mail draaien om te controleren wie de afzender is. Bekijk het aantal acties via **Analytics → Actions** op de detailpagina van de flow. Zie ook [[Trigger conditions]].

## Gerelateerd
[[Flow]] · [[Business process flow]] · [[Licenties]] · [[Trigger]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
