---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 6
groep: Azure
aliases: [Beeldclassificatie]
---
# Image classification

> De **hele afbeelding** krijgt één (of enkele) **klasse(n)** met een waarschijnlijkheid: "dit is een olifant (97 %)". Zegt **niet waar** het object staat.

## Twee varianten
| Variant | Betekenis | Voorbeeld |
|---|---|---|
| **Multiclass** | één tag per afbeelding | welk dier is dit? |
| **Multilabel** | meerdere tags tegelijk | staat er een boom én een olifant op? |

## Wanneer gebruik je het?
Als je enkel moet weten **wat** er op de foto staat, niet waar of hoeveel. SafariSnap herkent de **Big Five** (olifant, leeuw, buffel, luipaard, neushoorn) en toont daarna info over dat dier.

## Verschil met object detection
| Image classification | [[Object detection]] |
|---|---|
| hele afbeelding → klasse | per object klasse **+ positie** |
| één antwoord | meerdere objecten |
| minder trainingswerk (enkel taggen) | elk object omkaderen |

## Hoe beoordeel je het model?
| Maat | Vraag |
|---|---|
| **Precision** | van alles wat het model "leeuw" noemde, hoeveel was echt een leeuw? |
| **Recall** | van alle echte leeuwen, hoeveel heeft het model gevonden? |
| **AP** | gemiddelde over drempels heen |
Lage precision → meer/gevarieerdere foto's van de *andere* klassen en een goede **Negative**-tag. Lage recall → meer en gevarieerdere foto's van die klasse zelf.

## Tips
- ±15+ foto's per tag, gevarieerd in hoek, licht, achtergrond.
- Gelijk aantal foto's per tag (anders bevoordeel je één klasse).
- Toon de **probability** aan de gebruiker en hanteer een drempel ("niet zeker").

## Gerelateerd
[[Custom Vision]] · [[Object detection]] · [[Training (Custom Vision)]]

---
Hoort bij: [[Azure Custom Vision]]
