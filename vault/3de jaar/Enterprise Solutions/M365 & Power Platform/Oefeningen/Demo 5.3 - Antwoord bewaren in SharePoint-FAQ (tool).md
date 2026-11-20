---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 5
groep: Oefeningen
---
# Demo 5.3 - Antwoord bewaren in SharePoint-FAQ (tool)

> Een tool toevoegen zodat de agent op vraag van de gebruiker een antwoord opslaat als nieuw item in een FAQ-lijst in SharePoint.

## Stappen
1. Maak in SharePoint een lijst met FAQ's (titel + antwoord).
2. In de agent: **Add tool → Connector → SharePoint → Create item**.
3. Geef de tool een **naam** en een **duidelijke beschrijving** zodat de agent weet wat ze doet.
4. **Invoervelden**:
   - *Site address* en *List name* → vaste waarden;
   - *Title* en *Answer* → **dynamisch door AI** ingevuld, met extra uitleg over wat erin moet.
5. **Instructies** aanvullen: als de gebruiker vraagt een nieuw item in de FAQ-lijst te maken, gebruik dan deze tool.
6. **Opslaan en testen**: vraag iets, vraag dan om het op te slaan als FAQ → controleer de lijst.

## Extra
Bekijk in de **Settings** van de agent de andere opties, bv. het icoon wijzigen naar een drone.

## Gebruikte begrippen
[[Tools (Copilot Studio)]] · [[Agent-instructies]] · [[SharePoint list]] · [[Connectors]]

---
Hoort bij: [[Chapter 5 - Copilot Studio]]
