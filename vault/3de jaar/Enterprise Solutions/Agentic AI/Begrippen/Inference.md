---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
dictionary_nr: 5
---
# Inference

> Een getraind [[Model]] laten draaien om output te maken – wat er bij élke [[Model provider request]] gebeurt. De [[Parameters]] blijven vast; het model doet enkel [[Next-token prediction]] over de [[Context]] die het krijgt.

## Twee fases in het leven van een model
| Fase | Wanneer | Wat | Parameters |
|---|---|---|---|
| [[Training]] | Eén keer, vóór de release | Maakt de parameters uit een trainingscorpus | Worden geschreven |
| **Inference** | Elke keer iemand het model gebruikt | Laat de bevroren parameters over jouw context lopen | Enkel gelezen |

## Waarom leert een model niet van je correcties?
Niets tijdens inference schrijft terug naar de parameters. Het model dat morgen dezelfde fout maakt, heeft je niet genegeerd – het **kan** niet leren uit het gesprek. Continuïteit moet van buitenaf komen: het [[Context window]] of een [[Memory system]].

## Kosten
- Inference is goedkoop t.o.v. training, maar wordt **per token** aangerekend en is de grootste kost van het gebruik.
- Elke request laat het model over de volledige context lopen → kost schaalt met [[Input tokens]] en [[Output tokens]].
- Een [[Agent]] die tientallen tools aanroept, betaalt inference bij elke rondgang.
- Daarom is contextgrootte zowel een **kwaliteits-** als een **kostenvraag**.

## Lokaal
Bij [[Local AI]] gebeurt inference op je eigen pc (bv. met [[Ollama]]) – geen tokenfactuur, maar je hardware bepaalt hoe snel (tokens per seconde).

## Gerelateerd
[[Training]] · [[Model provider request]] · [[Input tokens]] · [[Output tokens]] · [[LLM-prijsmodel]]

## Bron
- AI Coding Dictionary – term 5/71: [Inference](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Inference.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
