---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 5
groep: Copilot Studio
aliases: [Tools, Tool, Actions (Copilot Studio)]
---
# Tools (Copilot Studio)

> Mogelijkheden die je aan een agent toevoegt zodat hij meer kan dan chatten: andere systemen aanroepen via connectors of API's, flows uitvoeren of vaste prompts gebruiken.

## Soorten tools
| Tool | Wat |
|---|---|
| **Prompt tool** | Een herbruikbare prompt met parameters voor een specifieke taak (bv. de verkoopgeschiedenis van een klant samenvatten) |
| **Agent flow** | Een flow in Power Automate-stijl die logica uitvoert, diensten aanroept en resultaten terugstuurt |
| **Connector tool** | Een actie van een (standaard of custom) [[Connectors|connector]], bv. *Get rows from Dataverse*, *Send an email*, SharePoint *Create item* |
| **REST API tool** | Een rechtstreekse HTTPS/REST-aanroep als er geen connector bestaat |

## Werkwijze
1. **Add tool** → kies het type (bv. connector SharePoint → *Create item*).
2. Geef een **naam en duidelijke beschrijving** → daaruit begrijpt de agent wanneer hij de tool moet gebruiken.
3. Configureer de **invoervelden**: vaste waarden (bv. site-adres, lijstnaam) of **dynamisch ingevuld door AI** (bv. titel en antwoord), eventueel met extra uitleg.
4. Pas de **instructies** van de agent aan zodat hij de tool gebruikt wanneer nodig.
5. Opslaan en testen.

## Voorbeeld
Het antwoord van de agent op verzoek opslaan in een FAQ-lijst in SharePoint – zie [[Demo 5.3 - Antwoord bewaren in SharePoint-FAQ (tool)]].

## Gerelateerd
[[Topics (Copilot Studio)]] · [[Connectors]] · [[Power Automate]] · [[Agent-instructies]] · [[API aanroepen in een flow]]

---
Hoort bij: [[Chapter 5 - Copilot Studio]]
