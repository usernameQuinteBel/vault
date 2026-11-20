---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Power Apps
aliases: [Formula language, Power Apps formules, Formules]
---
# Power Fx

> De formuletaal van Power Apps, zo gelijkend mogelijk op Excel-formules. Je gebruikt ze om eigenschappen van controls in te stellen en om acties uit te voeren.

## Twee soorten functies
- Functies die een **waarde teruggeven** (bv. `Filter`, `Sort`, `If`, `IsBlank`, `Text`) → in eigenschappen als *Items*, *Text*, *Color*, *Visible*.
- Functies die een **actie uitvoeren** (bv. `Navigate`, `Back`, `SubmitForm`, `ResetForm`, `NewForm`, `EditForm`, `Remove`, `UpdateContext`, `Set`, `Patch`) → in **gedrag**-eigenschappen zoals *OnSelect*, *OnSuccess*, *OnVisible*.

Meerdere functies na elkaar scheid je met een **puntkomma** `;` (in Belgische/Europese taalinstellingen soms `;;`).

## Veelgebruikte formules uit de les
| Doel | Formule |
|---|---|
| Naar ander scherm | `Navigate(Screen2)` |
| Terug | `Back()` |
| Formulier opslaan | `SubmitForm(Form1)` |
| Wijzigingen annuleren | `ResetForm(Form1); Back()` |
| Nieuw record | `NewForm(Form1); Navigate(Screen3)` |
| Record bewerken | `EditForm(Form1); Navigate(Screen3)` |
| Record verwijderen | `Remove('Drone Products', Gallery1.Selected); Back()` |
| Sortering omdraaien | `UpdateContext({SortDescending: !SortDescending})` |
| Zoeken | `Filter('OverviewDrones', SearchInput1.Text in 'Name')` |

## Zoeken + sorteren gecombineerd
```
Sort(
  If(IsBlank(TextSearchBox.Text),
     'Drone Products',
     Filter('Drone Products', TextSearchBox.Text in Text(Name))),
  Name,
  If(SortDescending, SortOrder.Descending, SortOrder.Ascending)
)
```
Zie [[Filteren en sorteren in canvas apps]].

## Gerelateerd
[[Canvas app]] · [[Contextvariabelen]] · [[Formulieren in canvas apps]] · [[Navigatie in canvas apps]] · [[Data binding in canvas apps]]

## Meer leren
- [Power Fx formulereferentie](https://learn.microsoft.com/en-us/power-platform/power-fx/formula-reference)

---
Hoort bij: [[Chapter 4 - Power Apps]]
