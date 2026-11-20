---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
dictionary_nr: 13
---
# Input tokens

> De [[Token]]s die de [[Harness]] bij elke [[Model provider request]] verstuurt: [[System prompt]], gespreksgeschiedenis, [[Tool result]]s – alles wat het [[Model]] leest voor het schrijft. Goedkoper per token dan [[Output tokens]].

## Waarom vormen ze het grootste deel van je factuur?
Het model is [[Stateless]], dus elke beurt stuurt de **hele [[Session]] opnieuw** als input: je eerste bericht, elk antwoord, elk tool result. Beurt 50 bevat de 49 vorige. Eén request kan een paar honderd output-tokens opleveren maar honderdduizend input-tokens aan geschiedenis meesturen.

## Hoe beperk je de kost?
- De **[[Prefix cache]]**: geschiedenis die exact overeenkomt met een vorige request wordt aangerekend als goedkope [[Cache tokens]].
- **Minder meesturen**: [[Clearing]] of [[Compaction]] tussen taken.

## Gerelateerd
[[Output tokens]] · [[Cache tokens]] · [[Prefix cache]] · [[LLM-prijsmodel]] · [[Model provider request]]

## Bron
- AI Coding Dictionary – term 13/71: [Input tokens](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Input%20tokens.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
