---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Failure modes
dictionary_nr: 40
---
# Attention relationship

> Bij het voorspellen van elk [[Token]] houdt het [[Model]] rekening met elk ander token in de [[Context]] – sommige sterk, andere nauwelijks. Zo'n koppeling tussen twee tokens heet een **attention relationship**.

## Voorbeelden
- "haar" ↔ "Sarah" in een tekst.
- Een `getUser()`-aanroep ↔ de `function getUser`-definitie die eerder gelezen werd.
Betekenisvolle paren beïnvloeden elkaar meer dan ongerelateerde. Daar zit het schijnbare "begrip" van het model. Niets wordt opgezocht: het wordt bij elke request opnieuw berekend, voor elk paar.

## N² groeit snel
Een context van N tokens heeft ongeveer N² relaties:
| Contextgrootte | Paren (~N²) |
|---|---|
| 1 000 tokens | ~1 miljoen |
| 10 000 tokens | ~100 miljoen |
| 100 000 tokens | ~10 miljard |

Elk extra token in de context concurreert dus met heel veel andere relaties.

## Gerelateerd
[[Attention budget]] · [[Attention degradation]] · [[Smart zone]] · [[Context window]]

## Bron
- AI Coding Dictionary – term 40/71: [Attention relationship](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Attention%20relationship.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
