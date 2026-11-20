---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 9
groep: Azure
aliases: [Translator]
---
# Azure Translator

> Een prebuilt Azure-dienst om **tekst te vertalen** tussen meer dan 100 talen, met automatische **taaldetectie**.

## In de les: EchoTranslate
Console-app die een tekstbestand inleest (`Documents/document_fr.txt`, via een `ReadFileHelper`), het met een `TranslationService` **vertaalt**, en het resultaat met [[Azure Speech]] **voorleest**.

## Werking
- Je stuurt tekst + doeltaal (`to=nl`) naar het endpoint, met je key en regio in de headers.
- Je krijgt de vertaling terug, en optioneel de gedetecteerde brontaal.

## De REST-call
```
POST https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=fr&to=nl
Headers: Ocp-Apim-Subscription-Key: <key>
         Ocp-Apim-Subscription-Region: <regio>
Body:    [ { "Text": "Bonjour tout le monde" } ]
```
Antwoord: `[ { "translations": [ { "text": "Hallo iedereen", "to": "nl" } ] } ]` → uitlezen met `Newtonsoft.Json` of `System.Text.Json`.

## Handig om te weten
- `from` weglaten → **automatische taaldetectie**.
- Meerdere `to`-parameters → in één call naar meerdere talen.
- Lange documenten: in stukken opdelen (limiet per request) of de **Document Translation**-functie gebruiken.
- Combineer met [[Azure Speech]] om de vertaling voor te lezen (EchoTranslate).

## Gerelateerd
[[Azure Speech]] · [[Meer Azure AI Services]]

## Meer leren
- [Azure AI Translator](https://learn.microsoft.com/en-us/azure/ai-services/translator/translator-overview)

---
Hoort bij: [[Meer Azure AI Services]]
