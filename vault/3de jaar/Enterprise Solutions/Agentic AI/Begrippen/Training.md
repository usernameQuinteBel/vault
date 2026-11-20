---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
aliases: [Pre-training, Post-training]
dictionary_nr: 4
---
# Training

> Het proces dat de [[Parameters]] van een [[Model]] instelt door het enorme hoeveelheden tekst te tonen en telkens bij te sturen om [[Next-token prediction]] te verbeteren. Eenmalig, duur, en gedaan door de [[Model provider]].

## Hoe werkt het?
Herhaling op enorme schaal:
1. Toon het model een stuk tekst.
2. Laat het het volgende [[Token]] voorspellen.
3. Duw de parameters een beetje richting het juiste token.
4. Herhaal over biljoenen tokens.

Er worden geen feiten of regels "opgeslagen": alles wat het model weet is een bijeffect van beter worden in voorspellen → [[Parametric knowledge]].

**Pre-training** (de grote run) en **post-training** (verfijning: instructies volgen, veiligheid) vallen allebei onder training.

## Twee gevolgen voor de praktijk
1. Training eindigt op een moment → [[Knowledge cutoff]]. Het model kent de library-versie van vorige maand niet.
2. Jij kan niet trainen. Kent het model je codebase, conventies of interne API niet? Dan is de oplossing nooit "het model leren", maar die info in de [[Context]] zetten.

## Training vs. inference
Zie [[Inference]] voor de vergelijking.

## Gerelateerd
[[Parameters]] · [[Inference]] · [[Knowledge cutoff]] · [[Parametric knowledge]]

## Bron
- AI Coding Dictionary – term 4/71: [Training](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Training.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
