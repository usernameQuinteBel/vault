---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 7
groep: Deel A: Azure AI
---
# Azure Object Detection

> Een [[Custom Vision]]-model dat objecten niet enkel **herkent** maar ook **lokaliseert**: per gevonden object een label, een **kader ([[Bounding box]])** en een waarschijnlijkheid. Voorbeeld uit de les: pompoenen vinden (**HalloweenModel**).

## Classification vs. detection
| | [[Image classification]] | [[Object detection]] |
|---|---|---|
| Vraag | "**wat** staat er op de foto?" | "**wat** staat er en **waar**?" |
| Output | één (of meer) tags voor de **hele** afbeelding | per object: tag + **bounding box** + probability |
| Meerdere objecten | nee | **ja** (bv. 3 pompoenen) |
| Labelen tijdens training | foto in een tag-map | **kader tekenen** rond elk object |
| Toepassing | soort dier, gerecht | tellen, aanduiden, positie gebruiken |

## Workflow
1. Nieuw Custom Vision-project, type **Object Detection** (domain *General*).
2. Afbeeldingen uploaden.
3. **Tag the images**: in elke foto een **rechthoek** rond elk object tekenen en een label geven (`pumpkin`). Custom Vision stelt soms zelf kaders voor.
4. **Train** → kijk naar **mAP** (mean average precision), precision, recall.
5. **Publish** als `HalloweenModel` → endpoint + key.
6. In de app de **detect**-endpoint aanroepen.

## Het resultaat interpreteren
Elke voorspelling bevat `tagName`, `probability` en een `boundingBox` met `left`, `top`, `width`, `height` als **fracties (0–1)** van de afbeelding:
```
x = left × afbeeldingsbreedte      y = top × afbeeldingshoogte
w = width × afbeeldingsbreedte     h = height × afbeeldingshoogte
```
Filter op een **drempel** (bv. probability > 0.5) om valse detecties weg te laten. Daarna kan je kaders over de foto tekenen (bv. met een `GraphicsView`) of simpelweg **tellen**.

## Tips voor goede training
- Minstens ±15 foto's per tag, met objecten in **verschillende groottes, posities en achtergronden**.
- Kaders **strak** rond het object.
- Ook foto's met **meerdere** objecten.

## Begrippen
[[Object detection]] · [[Bounding box]] · [[Custom Vision]] · [[Training (Custom Vision)]] · [[Prediction API]] · [[Image classification]]

---
Hoort bij: [[AI.NET]]
