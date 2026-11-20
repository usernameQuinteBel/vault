---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
aliases: [Tokens]
dictionary_nr: 7
---
# Token

> De kleinste eenheid die een [[Model]] leest en schrijft. Ongeveer zo groot als een woord, maar niet precies. Contextgrootte, kost en snelheid worden allemaal in tokens geteld.

## Van tekst naar tokens
Tekst wordt omgezet door een **tokenizer**: een vaste woordenschat van tienduizenden tekstfragmenten (vastgelegd vóór [[Training]]) die elke input opsplitst in een reeks fragmenten. Het model ziet **nooit letters of woorden**, enkel tokens. Zie [[Tokenization (encoding & decoding)]].

## Vuistregels
- Een token ≈ ¾ Engels woord → 1000 tokens ≈ 750 woorden.
- Veelvoorkomende woorden = 1 token; zeldzame of lange woorden = meerdere tokens.
- Code is onvoorspelbaarder: `function` is 1 token, maar een hash zoals `a3f9c2e1`, base64 of geminifieerde code valt uiteen in veel kleine tokens.
- Tekst die vaak voorkwam in het bronmateriaal van de tokenizer krijgt korte coderingen; zeldzame tekst wordt fijngehakt. Ook **andere talen dan Engels** kosten vaak meer tokens voor dezelfde inhoud.
- Gevolg: een klein bestand vol rare strings kan verrassend veel van je [[Context window]] innemen.

## Alles wordt in tokens gemeten
| Wat | Eenheid |
|---|---|
| Kost | Per token – [[Input tokens]] en [[Output tokens]] apart aangerekend |
| Snelheid | Tokens per seconde (output komt token per token) |
| Context window | Vast aantal tokens |

**Vermijd** "woord" als je over limieten of kosten praat – tokengrenzen vallen niet samen met woordgrenzen.

## Gerelateerd
[[Tokenization (encoding & decoding)]] · [[LLM-prijsmodel]] · [[Next-token prediction]] · [[Context window]] · [[Input tokens]] · [[Output tokens]]

## Bron
- AI Coding Dictionary – term 7/71: [Token](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Token.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
