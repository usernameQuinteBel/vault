---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Oefeningen
---
# Demo 3.6 - Array van issues als HTML-tabel mailen

> Een array opbouwen met de belangrijke issues, er een extra berekend veld aan toevoegen en het resultaat als opgemaakte HTML-tabel mailen.

**Scenario:** maak een overzicht van de issues met prioriteit *High* (velden Title, Priority, Status) en voeg een veld *Department* toe: altijd **IT**, behalve als de status *Blocked* is → dan **CIO**.

## Stappen
1. **Initialize variable** (type *Array*).
2. **Get items** met filter op prioriteit High.
3. **Apply to each**:
   - **Compose** die per item een JSON-object maakt met Title, Priority, Status en Department (Department via een `if(equals(...,'Blocked'),'CIO','IT')`-expressie);
   - **Append to array variable** met de output van de Compose.
4. **Buiten de lus**: **Create HTML table** op de array (of *Create CSV table*).
5. **Compose** (hernoemd naar bv. *CSS table style*) met de CSS uit `table_styling.css`.
6. **Send an email**: in de body eerst de CSS-output, dan de HTML-tabel.

## Gebruikte begrippen
[[Arrays in Power Automate]] · [[Compose]] · [[JSON]] · [[Variabelen in Power Automate]] · [[OData filter]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
