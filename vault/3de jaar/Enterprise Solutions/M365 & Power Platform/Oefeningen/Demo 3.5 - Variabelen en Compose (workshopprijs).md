---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Oefeningen
---
# Demo 3.5 - Variabelen en Compose (workshopprijs)

> Een manueel gestarte flow die de prijs van een workshop berekent: één keer met variabelen en een conditie, één keer korter met een Compose.

**Scenario:** standaardworkshop in groep = €100 per persoon; workshop op maat = €180 per persoon.

## Versie A – Variabelen
1. Trigger **Manually trigger a flow** met **verplichte** invoer: aantal deelnemers (getal) en standaardworkshop? (ja/nee).
2. **Initialize variable** *Fee* (type Integer).
3. **Condition**: ja/nee-invoer is gelijk aan **true** → *Set variable* 100, anders 180.
4. Totaal: `mul(variables('Fee'), triggerBody()?['number'])`.

## Versie B – Compose
1. Compose *Fee*: `if(triggerBody()?['boolean'],100,180)`
2. Compose *Total*: `mul(outputs('Compose'),triggerBody()?['number'])`
Minder acties, geen conditie nodig.

## Wanneer wat?
Zie de vergelijking in [[Compose]].

## Gebruikte begrippen
[[Variabelen in Power Automate]] · [[Compose]] · [[Expressions]] · [[Trigger]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
