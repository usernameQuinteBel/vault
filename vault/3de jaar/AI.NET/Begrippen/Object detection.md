---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 7
groep: Azure
aliases: [Objectdetectie]
---
# Object detection

> AI die in een afbeelding **objecten lokaliseert**: per gevonden object een **klasse**, een **waarschijnlijkheid** en een **[[Bounding box]]** (positie). Er kunnen meerdere objecten per beeld zijn.

## Trainen (HalloweenModel, Azure 3)
1. Custom Vision-project van het type **Object Detection**.
2. Op **elke** trainingsfoto elk object **omkaderen** en taggen (bv. `pumpkin`).
3. **Train & Publish**.

## Wat krijg je terug?
```json
{ "tagName": "pumpkin", "probability": 0.91,
  "boundingBox": { "left": 0.12, "top": 0.30, "width": 0.25, "height": 0.28 } }
```
De coördinaten zijn **relatief** (0–1): vermenigvuldig met breedte/hoogte van de afbeelding om pixels te krijgen, en teken zo een kader over de foto.

## Wanneer gebruiken?
Als je wil weten **waar** en **hoeveel**: pompoenen tellen, producten op een schap herkennen, objecten aanduiden in een foto.

## Model beoordelen
Naast precision en recall gebruikt Custom Vision **mAP** (mean average precision) en een **overlap-drempel** (IoU): een voorspelling telt pas als juist als het kader voldoende overlapt met het echte kader. Zie [[Bounding box]].

## Trainingstips
- Minstens ±15 foto's per tag, met objecten in verschillende **groottes, posities en achtergronden**.
- Kaders **strak** rond het object; ook gedeeltelijk zichtbare objecten taggen.
- Foto's met **meerdere** objecten opnemen.
- Custom Vision kan na de eerste training **kaders voorstellen** (smart labeler) — wel nakijken.

## Gerelateerd
[[Image classification]] · [[Bounding box]] · [[Custom Vision]]

---
Hoort bij: [[Azure Object Detection]]
