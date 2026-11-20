---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
dictionary_nr: 14
---
# Output tokens

> De [[Token]]s die het [[Model]] terug genereert. Duurder dan [[Input tokens]] – vaak zo'n **5×** zo duur – omdat ze meer rekenwerk kosten.

## Wat telt allemaal als output?
- De tekst die je leest.
- De code die het schrijft.
- [[Tool call]]s.
- **Denkwerk** vóór het antwoord ([[Effort]]) – ook als de harness het niet toont! Effort hoger zetten = meer output-tokens.

## Output bepaalt het tempo
Input wordt snel gelezen, maar output komt **één token per keer**. Voelt een beurt traag aan? Dan wordt er bijna altijd output geschreven. Lang wachten = er komt een lang antwoord.

## Kosten besparen
Een agent die **hele bestanden herschrijft** i.p.v. gerichte wijzigingen te maken, verbrandt veel output-tokens. Laat hem edits uitvoeren.

## Gerelateerd
[[Input tokens]] · [[Effort]] · [[LLM-prijsmodel]] · [[Next-token prediction]]

## Bron
- AI Coding Dictionary – term 14/71: [Output tokens](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Output%20tokens.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
