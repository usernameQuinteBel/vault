---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Power Apps
aliases: [Filter, Sort, Search, Zoeken in canvas app]
---
# Filteren en sorteren in canvas apps

> Met `Filter`, `Search` en `Sort` in de *Items*-eigenschap van een gallery laat je gebruikers zoeken en sorteren.

## Filter
`Filter(tabel, voorwaarde)` – evalueert de voorwaarde voor elk record.
Zoekveld: `Filter('Drone Products', TextSearchBox.Text in Text(Name))`
→ zoekt de tekst uit het zoekvak ergens in de naam.

## Sort
`Sort(tabel, kolom, richting)` met `SortOrder.Ascending` of `SortOrder.Descending`.

## Gecombineerd
```
Sort(
  If(IsBlank(TextSearchBox.Text),
     'Drone Products',
     Filter('Drone Products', TextSearchBox.Text in Text(Name))),
  Name,
  If(SortDescending, SortOrder.Descending, SortOrder.Ascending)
)
```
- Is het zoekvak leeg → alle records (de filter wordt overgeslagen).
- De richting komt uit de [[Contextvariabelen|contextvariabele]] *SortDescending*.

## Voorbereiding
- Text input toevoegen, hernoemen naar *TextSearchBox*, eigenschap *Default* leegmaken.
- Sorteericoon met `UpdateContext({SortDescending: !SortDescending})`.

## Filteren op een Dataverse-view
`Filter('Drone Products', 'Drone Products (Views)'.'Products by DJI')` – zie [[Dataverse views]].

## Delegatie (extra)
Bij grote databronnen kan niet elke functie op de server uitgevoerd worden ("delegation warning"). Dan worden enkel de eerste rijen (standaard 500) lokaal gefilterd.

## Gerelateerd
[[Power Fx]] · [[Contextvariabelen]] · [[Data binding in canvas apps]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
