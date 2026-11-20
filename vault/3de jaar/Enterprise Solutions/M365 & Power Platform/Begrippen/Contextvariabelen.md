---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Power Apps
aliases: [UpdateContext, Context variable, Variabelen in Power Apps]
---
# Contextvariabelen

> Variabelen in een canvas app waarvan het bereik beperkt is tot het **scherm** waar ze aangemaakt worden. Je maakt ze met `UpdateContext`.

## Voorbeeld: sortering omdraaien
```
UpdateContext( {SortDescending: !SortDescending} )
```
- Bestaat de variabele nog niet, dan wordt ze aangemaakt.
- `!` = logisch omgekeerde → elke klik draait de sortering om.
- De gallery gebruikt de variabele in `Sort(...)` – zie [[Filteren en sorteren in canvas apps]].

## Soorten variabelen in Power Apps
| Soort | Functie | Bereik |
|---|---|---|
| **Context** | `UpdateContext()` | Eén scherm |
| **Globaal** | `Set()` | Hele app |
| **Collectie** | `Collect()`, `ClearCollect()` | Hele app, een tabel in het geheugen |

## Gerelateerd
[[Power Fx]] · [[Filteren en sorteren in canvas apps]] · [[Variabelen in Power Automate]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
