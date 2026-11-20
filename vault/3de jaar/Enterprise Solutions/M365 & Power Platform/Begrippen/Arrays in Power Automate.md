---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Data operations
aliases: [Array, Arrays, Create HTML table, Create CSV table]
---
# Arrays in Power Automate

> Een array is een lijst van waarden of objecten. In flows gebruik je ze om meerdere items te verzamelen, te bewerken en daarna in één keer te tonen of te versturen.

## Typische werkwijze
1. **Initialize variable** van het type *Array*.
2. Data ophalen (bv. *Get items* met een [[OData filter]]).
3. **Apply to each** over de items:
   - per item een **Compose** die een JSON-object maakt met enkel de velden die je wil (+ eventueel extra berekende velden);
   - **Append to array variable** met de output van de Compose.
4. **Buiten** de lus: de array omzetten met **Create HTML table** (of **Create CSV table**).
5. De tabel in een mail plaatsen (eventueel met CSS-opmaak).

## Voorbeeld uit de les
Een overzicht van de *High*-prioriteit issues uit de lijst Issue Tracking, met een extra veld *Department* dat **IT** is, behalve als de status *Blocked* is → dan **CIO**. Het resultaat gaat als tabel per mail. Zie [[Demo 3.6 - Array van issues als HTML-tabel mailen]].

## HTML-tabel opmaken
- Een HTML-tabel uit Power Automate is standaard erg kaal.
- Zet **CSS** in een (hernoemde) [[Compose]] en plaats die output in de mailbody **vóór** de HTML-tabel.
- In de resources van chapter 3 zit een `table_styling.css`. Meer stijlen: [divtable.com table styler](https://divtable.com/table-styler/) en [deze blogpost](https://ryanmaclean365.com/2020/01/29/power-automate-html-table-styling/).

## Gerelateerd
[[Variabelen in Power Automate]] · [[Compose]] · [[JSON]] · [[Control-acties]] · [[OData filter]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
