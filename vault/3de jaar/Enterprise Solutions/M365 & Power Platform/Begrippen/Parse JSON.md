---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Data operations
---
# Parse JSON

> Een data operation in Power Automate die een JSON-tekst ontleedt volgens een schema, zodat de velden erin beschikbaar worden als dynamic content.

## Wanneer nodig?
Als een actie data teruggeeft als ruwe JSON (of als tekst), zie je de afzonderlijke velden niet in het dynamic content-menu. Voorbeelden:
- Het antwoord op een **file upload**-vraag in Microsoft Forms (een array met per bestand een id, naam, link, type en grootte).
- Het antwoord van een externe API (bv. de yes/no-API).

## Werkwijze
1. Draai de flow één keer en kopieer de **output** van de vorige stap uit de run history.
2. Voeg de actie **Parse JSON** toe; content = de output van die stap.
3. Klik op **Generate from sample** en plak de gekopieerde JSON → het **schema** wordt gegenereerd.
4. Nu zijn de velden beschikbaar als dynamic content.
5. Is het resultaat een array, dan komt er automatisch een **Apply to each**.

## Valkuil
Lukt het genereren van het schema niet, dan staan er vaak extra **backslashes** (`\`) voor elke `"`. Verwijder die (bv. met zoeken/vervangen in een teksteditor) en probeer opnieuw.

## Gerelateerd
[[JSON]] · [[Compose]] · [[Demo 3.4 - Forms-inschrijving met Planner-taak]] · [[API aanroepen in een flow]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
