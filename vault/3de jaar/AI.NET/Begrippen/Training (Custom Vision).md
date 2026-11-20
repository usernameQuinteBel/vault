---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [6, 7]
groep: Azure
aliases: [Precision en recall, Iteratie]
---
# Training (Custom Vision)

> Het proces waarbij Custom Vision uit jouw **getagde afbeeldingen** leert welke kenmerken bij welke klasse horen.

## Het resultaat: metrics
| Metric | Vraag | Laag = |
|---|---|---|
| **Precision** | van alles wat het model "olifant" noemt, hoeveel is écht een olifant? | veel valse positieven |
| **Recall** | van alle echte olifanten, hoeveel vond het model? | veel gemiste objecten |
| **AP / mAP** (detection) | gemiddelde precisie over alle klassen | zwak detectiemodel |

## De Probability threshold
Een voorspelling telt pas mee boven een drempel (bv. 50 %). Hogere drempel → hogere precision, lagere recall.

## Iteraties
Elke training is een **iteratie**. Je kan meerdere iteraties vergelijken en de beste **publishen**.

## Tips voor een beter model
- Meer afbeeldingen, en **gelijk verdeeld** over de tags.
- **Variatie**: andere hoeken, belichting, achtergronden, groottes.
- Een **Negative**-tag voor beelden die bij geen enkele klasse horen (zodat het model "niets herkend" kan zeggen).
- Verkeerde voorspellingen uit tests **toevoegen** aan de trainingsset en opnieuw trainen.

## Gerelateerd
[[Custom Vision]] · [[Image classification]] · [[Object detection]]

---
Hoort bij: [[Azure Custom Vision]]
