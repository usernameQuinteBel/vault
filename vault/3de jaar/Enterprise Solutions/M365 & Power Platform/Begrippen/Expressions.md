---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Expressie, Expressies, Expression, Workflow Definition Language, WDL]
---
# Expressions

> Formules in Power Automate, geschreven in de *Workflow Definition Language*, om data te bewerken, te berekenen of te vergelijken.

## Soorten functies
- **String**: `concat()`, `substring()`, `contains()`, `startsWith()`, `replace()`, ...
- **Datum & tijd**: `utcNow()`, `addDays()`, `formatDateTime()`, ...
- **Wiskunde**: `add()`, `mul()`, `sub()`, `div()`, ...
- **Logica**: `if()`, `equals()`, `and()`, `or()`, `not()`, ...
- **Conversie**: `int()`, `string()`, `json()`, `base64()`, ...
- **Verwijzingen**: `triggerBody()`, `triggerOutputs()`, `outputs('Naam_actie')`, `body('Naam_actie')`, `items('Apply_to_each')`

## Voorbeelden uit de les
| Doel | Expressie |
|---|---|
| Huidige tijd voor een unieke bestandsnaam | `utcNow()` |
| Vervaldatum 10 dagen na het indienen van een formulier | `addDays(outputs('Get_response_details')?['body/submitDate'],10)` |
| Prijs per persoon kiezen op basis van een ja/nee-invoer | `if(triggerBody()?['boolean'],100,180)` |
| Prijs × aantal deelnemers | `mul(outputs('Compose'),triggerBody()?['number'])` |
| Keuze uit een mail met opties omzetten naar 1/0 | `if(equals(outputs('Send_email_with_options')?['body/SelectedOption'],'Qualified'),1,0)` |
| Trigger condition: enkel bestanden met "Project" in de naam | `@contains(triggerOutputs()?['body/{FilenameWithExtension}'],'Project')` |

## Werkwijze in de editor
1. Klik in een veld → kies **fx** (expression).
2. Kies de functie.
3. Laat je cursor in het fx-veld staan en selecteer de gewenste **dynamic content** → de verwijzing wordt ingevoegd.
4. Keer terug naar de expressie en vul aan.

De standaard expressie-editor is niet erg gebruiksvriendelijk; via **experimentele functies** kan je een nieuwere editor testen.

## Valkuil uit de les
Bij het opslaan van bijlagen werd `utcNow()` **achteraan** de bestandsnaam gezet → de extensie (.docx, .xlsx) verdween. Zet de tijd **vooraan** de naam.

## Gerelateerd
[[Dynamic content]] · [[Compose]] · [[Trigger conditions]] · [[JSON]]

## Meer leren
- [Referentie expressiefuncties](https://learn.microsoft.com/en-us/azure/logic-apps/workflow-definition-language-functions-reference)

---
Hoort bij: [[Chapter 3 - Power Automate]]
