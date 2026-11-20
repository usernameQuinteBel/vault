---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [6, 7]
groep: Azure
---
# Custom Vision

> Een Azure-dienst om **zonder te programmeren** een **eigen beeldmodel** te trainen op je eigen foto's, en het daarna via een API in je app te gebruiken.

## Twee projecttypes
| Type | Antwoord | Voorbeeld |
|---|---|---|
| [[Image classification]] | welke **klasse** is deze afbeelding? | "olifant 97 %" (SafariSnap) |
| [[Object detection]] | **welke objecten waar**? | "pompoen op (x,y,b,h)" |

## Werkwijze (portaal customvision.ai)
1. **Resource** aanmaken (training + prediction).
2. **Project** maken: type en domein kiezen (bv. *General*).
3. **Afbeeldingen toevoegen en taggen** (classification) of **objecten omkaderen** (detection). Vergeet de **Negative**-tag niet bij classification.
4. **Train** het model (Quick training of Advanced). Zie [[Training (Custom Vision)]].
5. **Test** met nieuwe beelden (Quick Test).
6. **Publish** de iteratie → je krijgt een **[[Prediction API]]** (URL + Prediction-Key).
7. In MAUI de API aanroepen met de foto.

## Hoeveel foto's?
Minimum ±15 per tag, maar meer en **gevarieerder** (andere hoeken, licht, achtergronden) geeft een beter model.

## Gerelateerd
[[Azure Custom Vision]] · [[Azure Object Detection]] · [[Prediction API]] · [[Training (Custom Vision)]]

## Meer leren
- [What is Custom Vision?](https://learn.microsoft.com/en-us/azure/ai-services/custom-vision-service/overview)

---
Hoort bij: [[Azure Custom Vision]]
