---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
aliases: [Request]
dictionary_nr: 12
---
# Model provider request

> Eén rondgang van de [[Harness]] naar de [[Model provider]]: de harness stuurt de huidige [[Context]], de provider geeft één antwoord terug (een [[Tool call]] of een eindantwoord). Eén bericht van jou kan veel requests veroorzaken als de [[Agent]] tools gebruikt.

## Elke request draagt álles mee
[[System prompt]], het volledige gesprek tot nu, elk [[Tool result]]. Het model is [[Stateless]], dus de provider houdt niets bij tussen requests: request 40 stuurt opnieuw alles wat request 39 stuurde, plus één extra tool result. De [[Prefix cache]] maakt die herhaling betaalbaar.

## Eenheid van facturatie
[[Input tokens]], [[Output tokens]] en cache-kortingen worden **per request** geteld. Een onschuldige vraag kan dus duur uitvallen: de kost is evenredig met *aantal requests × grootte van de context*, niet met de lengte van je bericht.

## Request ≠ turn
Een [[Turn]] is één uitwisseling met jou; die kan een hele ketting requests zijn. Voorbeeld "fix de falende test":
| Request | Model geeft terug | Harness doet daarna |
|---|---|---|
| 1 | Tool call: tests draaien | Draait ze, voegt de foutoutput toe |
| 2 | Tool call: testbestand lezen | Voegt de inhoud toe |
| 3 | Tool call: bronbestand lezen | Voegt de inhoud toe |
| 4 | Tool call: bronbestand aanpassen | Past aan, voegt resultaat toe |
| 5 | Tool call: tests opnieuw | Voegt "geslaagd" toe |
| 6 | Eindantwoord | Toont het aan jou |
Zes requests voor één turn – en elk stuurt de hele context opnieuw. **Tel requests, niet turns**, als je wil weten waar je tokens naartoe gingen.

## Gerelateerd
[[Turn]] · [[Session]] · [[Input tokens]] · [[Prefix cache]] · [[Tool call]]

## Bron
- AI Coding Dictionary – term 12/71: [Model provider request](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Model%20provider%20request.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
