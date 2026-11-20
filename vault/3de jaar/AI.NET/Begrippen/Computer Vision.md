---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 9
groep: Azure
aliases: [Azure AI Vision, Image Analysis]
---
# Computer Vision

> Een **prebuilt** Azure-dienst voor beeldanalyse **zonder eigen training**: tekst lezen ([[OCR]]), afbeeldingen beschrijven, tags en objecten herkennen.

## Mogelijkheden
| Functie | Resultaat | App in de les |
|---|---|---|
| **OCR / Read** | tekst uit een afbeelding | OCRFifa (rugnummers) |
| **Image Analysis** | beschrijving ("a man riding a bike"), tags, objecten | Visionary |
| **Smart crop** | interessant uitsnede voorstellen | — |

## Verschil met Custom Vision
| Computer Vision | [[Custom Vision]] |
|---|---|
| algemeen model van Microsoft | jouw eigen model |
| geen training | training met jouw foto's |
| kent "hond", "auto", "boom" | kent wat jij het leert ("Big Five", "pompoen") |

## Gebruik met de SDK
```csharp
var client = new ImageAnalysisClient(new Uri(endpoint), new AzureKeyCredential(key));
var result = await client.AnalyzeAsync(BinaryData.FromBytes(bytes),
    VisualFeatures.Caption | VisualFeatures.Tags | VisualFeatures.Objects | VisualFeatures.Read);
```
| `VisualFeatures` | Resultaat |
|---|---|
| `Caption` | één beschrijvende zin + confidence |
| `Tags` | trefwoorden met confidence |
| `Objects` | objecten met kader |
| `Read` | tekst (OCR): blocks → lines → words |
| `People`, `SmartCrops` | personen, voorgestelde uitsnedes |

## Grenzen
Het algemene model herkent geen **specifieke** dingen (welk diersoort precies, jouw product); daarvoor train je een [[Custom Vision]]-model. Gezichtsherkenning (Face API) is apart en beperkt toegankelijk.

## Gerelateerd
[[OCR]] · [[Meer Azure AI Services]] · [[Azure AI Services]]

## Meer leren
- [Azure AI Vision](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview)

---
Hoort bij: [[Meer Azure AI Services]]
