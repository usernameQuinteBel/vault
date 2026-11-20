---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 9
groep: Azure
aliases: [Speech service, Text-to-speech]
---
# Azure Speech

> Een prebuilt Azure-dienst voor **spraak**: tekst omzetten in spraak (**text-to-speech**) en spraak in tekst (**speech-to-text**), plus spraakvertaling.

## In de les: EchoTranslate
De `SpeechService` leest de vertaalde tekst **voor** met een gekozen stem (bv. een Nederlandstalige neurale stem).

## Toepassingen
| Richting | Voorbeeld |
|---|---|
| tekst → spraak | voorleesfunctie, toegankelijkheid |
| spraak → tekst | dicteren, ondertitels, spraakcommando's |

## Werking met de SDK
Package `Microsoft.CognitiveServices.Speech`:
```csharp
var config = SpeechConfig.FromSubscription(key, region);
config.SpeechSynthesisVoiceName = "nl-BE-DenaNeural";   // Vlaamse neurale stem
using var synthesizer = new SpeechSynthesizer(config);
await synthesizer.SpeakTextAsync(translatedText);
```
- **Key + regio** (niet enkel een endpoint).
- `SpeechSynthesisVoiceName` kiest taal en stem (nl-BE, nl-NL, en-US…).
- Speech-to-text werkt omgekeerd met een `SpeechRecognizer` en de microfoon.

## Typische fouten
| Probleem | Oorzaak |
|---|---|
| `401` | verkeerde key of regio |
| Engelse uitspraak van Nederlandse tekst | stemnaam niet ingesteld |
| geen geluid in een console | standaard audio-output ontbreekt (bv. in een container) |

## Gerelateerd
[[Azure Translator]] · [[Meer Azure AI Services]]

## Meer leren
- [Azure AI Speech](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/overview)

---
Hoort bij: [[Meer Azure AI Services]]
