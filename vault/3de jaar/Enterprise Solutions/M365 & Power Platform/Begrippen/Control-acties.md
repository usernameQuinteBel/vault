---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Condition, Apply to each, Scope, Scopes, Terminate, Run after, Parallel branch, Parallelle takken]
---
# Control-acties

> Acties die de **flow zelf sturen**: condities, lussen, parallelle takken, scopes, stoppen, en wat er gebeurt als iets faalt.

## Condition
If/else: afhankelijk van een vergelijking gaat de flow het **ja**- of **nee**-pad uit.

## Apply to each
Een lus over alle elementen van een lijst (bijlagen, items, rijen, ...).
- Wordt vaak **automatisch** toegevoegd als je dynamic content uit een lijst gebruikt.
- Standaard loopt de lus **sequentieel**. Via **Settings → Concurrency control** kan je tot **50 parallelle** runs toelaten → veel sneller.

## Parallelle takken
Twee of meer reeksen acties die **tegelijk** lopen na dezelfde stap. Voorbeeld: na het ophalen van een formulierantwoord, in de ene tak een mail sturen en in de andere tak het geüploade bestand doorsturen en een Planner-taak maken.

## Run after
Standaard loopt een stap enkel als de vorige **gelukt** is. Via **Settings → Run after** kan je een tak maken die enkel loopt als een vorige stap **mislukt**, **overgeslagen** of **getimed-out** is → handig voor foutafhandeling.

## Scope
Groepeer acties en condities in een **scope**. Scopes kan je in- en uitklappen → overzicht bij complexe flows. Ook handig in combinatie met *run after* (try/catch-patroon).

## Terminate
Stopt de flow onmiddellijk (met status Succeeded, Failed of Cancelled). Handig tijdens het **ontwikkelen**: zet een Terminate na de stappen die al getest zijn, zodat je die niet telkens opnieuw uitvoert.

## Switch
Meerdere gevallen op basis van één waarde (alternatief voor geneste condities).

## Gerelateerd
[[Flow]] · [[Actie (Power Automate)]] · [[Best practices voor flows]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
