---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 7
groep: Azure
---
# Bounding box

> Het **rechthoekige kader** rond een gedetecteerd object, met positie en grootte. Het resultaat van [[Object detection]].

## Hoe wordt het beschreven?
`left`, `top`, `width`, `height` — in Custom Vision **genormaliseerd** tussen 0 en 1 (fractie van de afbeelding).

## Omrekenen naar pixels
```csharp
double x = box.Left   * imageWidth;
double y = box.Top    * imageHeight;
double w = box.Width  * imageWidth;
double h = box.Height * imageHeight;
```
Daarmee teken je een kader (bv. een `Border` of een `GraphicsView`) bovenop de foto.

## Bij het trainen
Je **tekent** de bounding boxes zelf bij elke trainingsfoto. Hoe nauwkeuriger je kadert, hoe beter het model leert.

## Voorbeeld
Afbeelding 1000 × 800 px, box `left 0.12, top 0.30, width 0.25, height 0.28` → kader op **x = 120, y = 240**, **250 × 224 px**.

## Waarom genormaliseerd?
De API weet niet op welke grootte jij de foto toont. Met fracties werkt hetzelfde resultaat voor een thumbnail én voor de volledige foto — vermenigvuldig gewoon met de **getoonde** afmetingen (let op letterboxing bij `Aspect="AspectFit"`).

## Kwaliteit beoordelen
- **IoU** (Intersection over Union): hoeveel de voorspelde box overlapt met de echte; ≥ 0.5 telt meestal als juist.
- Filter op een **probability-drempel** (bv. > 0.5) om dubbele of valse boxen weg te laten.

## Gerelateerd
[[Object detection]] · [[Azure Object Detection]]

---
Hoort bij: [[Azure Object Detection]]
