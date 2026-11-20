---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 2
groep: Flutter
---
# Widget

> De **bouwsteen** van een Flutter-UI. (Bijna) alles is een widget: een knop, tekst, padding, een rij, een volledige pagina, de app zelf. Je bouwt schermen door widgets te **nesten** tot een **widget tree**.

## De widget tree
```
MaterialApp
 └─ Scaffold
     ├─ AppBar(title: Text)
     └─ Column
         ├─ Text
         ├─ Row(Icon, Text)
         └─ ElevatedButton(Text)
```
Elke widget heeft een `build()`-methode die beschrijft welke kind-widgets hij teruggeeft.

## De basiswidgets uit de cursus
| Categorie | Widgets | Waarvoor |
|---|---|---|
| App/pagina | `MaterialApp`, [[Scaffold]], `AppBar` | thema, paginaframe, bovenbalk |
| Layout | `Container`, `Row`, `Column`, `Expanded`, `Padding`, `SizedBox`, `Stack` | schikken, ruimte, overlappen |
| Inhoud | `Text`, `Image`, `Icon`, `CircleAvatar`, `Divider` | tonen |
| Interactie | `ElevatedButton`, `IconButton`, `TextField`, `DropdownButton` | invoer |
| Feedback | `AlertDialog`, `SnackBar` | meldingen |
| Lijsten | `ListView`, [[StreamBuilder]] | (realtime) lijsten |

## Row, Column en Expanded
- `Row` = horizontaal, `Column` = verticaal.
- `mainAxisAlignment` (langs de hoofdas) en `crossAxisAlignment` (dwars) bepalen de uitlijning.
- `Expanded` vult de **resterende ruimte** op (handig om overflow-fouten te vermijden).

## Eigen widgets
Herhaalde stukken UI zet je in een **eigen widget** (bv. `TripCard`, `FlagImage`): herbruikbaar, leesbaarder en Flutter kan ze efficiënter heropbouwen.

## Twee soorten
**Stateless** (onveranderlijk) en **stateful** (met state): zie [[Stateless en stateful widget]].

> Tip: het Flutter-YouTubekanaal heeft een **"Widget of the Week"**-reeks — handig om nieuwe widgets te ontdekken.

## Gerelateerd
[[Scaffold]] · [[Stateless en stateful widget]] · [[Material Design (Flutter)]]

## Meer leren
- [Flutter widget catalog](https://docs.flutter.dev/ui/widgets)

---
Hoort bij: [[Flutter aan de slag]]
