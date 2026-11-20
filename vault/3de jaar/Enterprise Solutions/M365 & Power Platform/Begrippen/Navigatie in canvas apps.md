---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Power Apps
aliases: [Navigate, Back]
---
# Navigatie in canvas apps

> Schermen wisselen in een canvas app met `Navigate()` en `Back()`, meestal in de OnSelect van een knop, icoon of gallery-item.

## Functies
- `Navigate(Scherm)` – naar een scherm (optioneel met overgangseffect en contextvariabelen).
- `Back()` – terug naar het vorige scherm.

## Typische opbouw
```
Scherm 1: Gallery (lijst)  --pijl-->  Scherm 2: Display form (detail)
                                         |-- knop Edit -->  Scherm 3: Edit form
Scherm 1: + icoon  --NewForm-->  Scherm 3: Edit form
```

## Tips
- **Hernoem** schermen en controls (bv. *BrowseScreen*, *DetailScreen*, *BtnSave*) – formules worden automatisch mee aangepast en alles is veel leesbaarder.

## Gerelateerd
[[Canvas app]] · [[Formulieren in canvas apps]] · [[Power Fx]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
