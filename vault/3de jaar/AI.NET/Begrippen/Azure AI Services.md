---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [6, 7, 8, 9]
groep: Azure
aliases: [Azure AI, Cognitive Services]
---
# Azure AI Services

> Microsofts verzameling **kant-en-klare AI-diensten** in de cloud. Je app spreekt ze aan via een **REST API** (endpoint + key), zonder zelf een AI-model te bouwen.

## De diensten in dit vak
| Dienst | Wat | Training nodig? | App in de les |
|---|---|---|---|
| [[Custom Vision]] – classification | afbeelding in een **klasse** indelen | **ja** (eigen foto's) | SafariSnap |
| [[Custom Vision]] – object detection | objecten **lokaliseren** | **ja** | HalloweenModel (pompoenen) |
| [[Document Intelligence]] | velden uit documenten halen | ja (custom) / nee (prebuilt) | PatientReferral |
| [[Computer Vision]] | [[OCR]], image analysis | **nee** | OCRFifa, Visionary |
| [[Azure Translator]] | tekst vertalen | nee | EchoTranslate |
| [[Azure Speech]] | spraak ↔ tekst | nee | EchoTranslate |
| Face API | gezichten detecteren | nee (beperkte toegang) | — |

## Twee soorten
- **Custom** (zelf trainen met je eigen data): Custom Vision, custom Document Intelligence. Nodig als je iets herkent wat het algemene model niet kent (de "Big Five"-dieren, pompoenen, jouw formulieren).
- **Prebuilt** (meteen bruikbaar): Computer Vision, Translator, Speech.

## Algemene werkwijze
1. Resource aanmaken in de [[Azure Portal]] (in een [[Resource Group]]).
2. **Endpoint + key** kopiëren.
3. In MAUI een **service-klasse** maken die met [[HttpClient]] of de Azure SDK de dienst aanroept.
4. Het resultaat via het ViewModel tonen.

## Gerelateerd
[[Custom Vision]] · [[Document Intelligence]] · [[Computer Vision]] · [[Prediction API]]

## Meer leren
- [Azure AI services](https://learn.microsoft.com/en-us/azure/ai-services/what-are-ai-services)

---
Hoort bij: [[Azure Custom Vision]]
