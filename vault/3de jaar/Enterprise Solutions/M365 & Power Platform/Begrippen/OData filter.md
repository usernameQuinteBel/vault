---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [OData, Filter query, ODATA]
---
# OData filter

> Een filter die je meegeeft aan acties zoals *Get items*, zodat de **server** enkel de gevraagde records teruggeeft in plaats van alles.

## Waarom?
Connectors zijn gebouwd op REST-API's, en veel ondersteunen OData. Door server-side te filteren:
- haal je minder data binnen;
- hoef je minder te lussen om de juiste items te zoeken;
- is je flow sneller.

## Operatoren
| Operator | Betekenis |
|---|---|
| `eq` | gelijk aan |
| `ne` | niet gelijk aan |
| `gt` | groter dan |
| `lt` | kleiner dan |
| `ge` | groter dan of gelijk aan |
| `le` | kleiner dan of gelijk aan |
Combineren met `and` / `or`. Tekst tussen enkele quotes.

## Voorbeeld
Afgewerkte issues ophalen: `field_2 eq 'Completed'`

## Let op: interne veldnaam
Je moet de **interne naam** van de kolom gebruiken, die kan verschillen van de weergavenaam (bv. *Status* → `field_2` na een Excel-import). Opzoeken: **List settings → kolom aanklikken → kijk in de URL**. Spaties worden in interne namen gecodeerd of weggelaten.

## Gerelateerd
[[SharePoint list]] · [[Demo 3.3 - Issue Tracking archiveren]] · [[Arrays in Power Automate]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
