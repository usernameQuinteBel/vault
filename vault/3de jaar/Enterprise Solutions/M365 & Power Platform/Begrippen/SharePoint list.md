---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [2, 3]
groep: SharePoint
aliases: [Lijst, Lijsten, SharePoint lijst, Microsoft Lists, List]
---
# SharePoint list

> Een lijst in SharePoint werkt zoals een tabel in een database of een Excel-tabel: rijen (items) met kolommen die elk een datatype hebben.

## Wat is het?
- Bevat **items**: afspraken, contacten, taken, issues, vacatures, ...
- Er zijn kant-en-klare lijsttypes, of je maakt een **eigen lijst** met de kolommen die je nodig hebt.
- Elke kolom heeft een **datatype** (tekst, keuze, datum, persoon, ja/nee, ...) – een lijst definiëren is dus hetzelfde als een databanktabel definiëren.
- Elke lijst heeft **instellingen**: kolommen, [[SharePoint views|views]], rechten, beleid, [[Versiebeheer|versieregels]].

## Lijst aanmaken
1. **Site contents → New → List → Create from blank** (of vanuit Excel importeren).
2. Kolommen toevoegen (bv. *Department*, *Hiring manager*).
3. Items invoeren.
4. Standaard zie je de view *All items*. Je kan **filteren, groeperen en sorteren** en die keuze opslaan als **nieuwe view**.
5. Alle instellingen via **List settings**.

## Interne kolomnamen
De naam die je in de view ziet, is **niet altijd** de interne naam (bv. *Status* kan intern `field_2` heten, vooral bij Excel-imports). De interne naam vind je via **List settings → kolom openen → in de URL**. Belangrijk voor [[OData filter]]s in flows.

## Gebruik in de Power Platform
- Databron voor [[Canvas app]]s.
- Triggers en acties in [[Power Automate]] (*Get items*, *Create item*, *Delete item*, ...).
- Doel van een [[Tools (Copilot Studio)|tool]] in Copilot Studio (FAQ-lijst).

## Gerelateerd
[[Document library]] · [[SharePoint views]] · [[Site columns]] · [[Web parts]] · [[OData filter]]

---
Hoort bij: [[Chapter 2 - M365 & SharePoint building blocks]] · [[Chapter 3 - Power Automate]]
