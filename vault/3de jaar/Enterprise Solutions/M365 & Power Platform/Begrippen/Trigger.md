---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Triggers]
---
# Trigger

> Het startsignaal van een flow: de gebeurtenis, knop of het tijdstip waardoor een flow begint te lopen.

## Voorbeelden
- *When a new email arrives* (Outlook)
- *When a file is created in a folder* / *When a new file is added* (SharePoint)
- *When a new response is submitted* (Microsoft Forms)
- *Manually trigger a flow* (knop, met invoervelden)
- *Recurrence* (schema)
- *When a row is added, modified or deleted* (Dataverse)

## Triggerinstellingen
- Veel triggers hebben opties, bv. enkel mails **met bijlagen**, en de **inhoud van de bijlagen** meenemen.
- Met [[Trigger conditions]] beperk je wanneer de flow echt start.
- Een manuele trigger kan **invoervelden** vragen (tekst, getal, ja/nee, ...), verplicht of optioneel – zie [[Variabelen in Power Automate]].

## Output
De trigger levert data op (bv. onderwerp, afzender, bijlagen) die je verder in de flow gebruikt via [[Dynamic content]] of `triggerOutputs()` / `triggerBody()` in [[Expressions]].

## Gerelateerd
[[Flow]] · [[Actie (Power Automate)]] · [[Trigger conditions]] · [[Connectors]] · [[Soorten flows]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
