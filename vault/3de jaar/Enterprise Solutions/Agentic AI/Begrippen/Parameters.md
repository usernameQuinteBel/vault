---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
aliases: [Weights, Gewichten]
dictionary_nr: 3
---
# Parameters

> De getallen in een [[Model]] – vaak miljarden – die tijdens [[Training]] worden afgesteld. Alles wat het model "weet", zit erin. Ook **weights** (gewichten) genoemd.

## Hoe werken ze?
[[Next-token prediction]] is één grote berekening: de [[Token]]s uit het [[Context window]] gaan erin, worden "door de parameters vermenigvuldigd" en er komt een voorspelling voor het volgende token uit.
- Er zit **geen database met feiten** in het model en geen opzoektabel.
- Feiten die het model kan opzeggen (bv. een standaard-API) zijn [[Parametric knowledge]]: opgeslagen in de getallen, niet opgezocht.

## Bevroren na training
Het belangrijkste inzicht: **parameters veranderen niet meer** na training.
- Geen correctie, geen codebase die je toont, geen fout waar het "van leert" past ze aan.
- Elke [[Session]] draait op exact dezelfde getallen.
- Daarom is het model [[Stateless]], stopt zijn kennis bij de [[Knowledge cutoff]], en moet alles projectspecifieks via [[Context]] binnenkomen.
- Parameters veranderen enkel door méér training → dan heb je eigenlijk een ander model (bv. fine-tunen).

## Link met lokale AI
Het aantal parameters bepaalt hoeveel geheugen een model nodig heeft. Met [[Quantization]] sla je elk getal met minder bits op zodat grote modellen op een laptop passen – zie [[Local AI]].

## Gerelateerd
[[Model]] · [[Training]] · [[Inference]] · [[Parametric knowledge]] · [[Quantization]]

## Bron
- AI Coding Dictionary – term 3/71: [Parameters](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Parameters.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
