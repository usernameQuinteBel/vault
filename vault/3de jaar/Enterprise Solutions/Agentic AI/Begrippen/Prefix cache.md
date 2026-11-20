---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Het model
dictionary_nr: 15
---
# Prefix cache

> Een geheugen bij de [[Model provider]] waardoor opeenvolgende [[Model provider request]]s een gedeeld begin (prefix) niet opnieuw moeten verwerken. Dat stuk wordt aangerekend als goedkope [[Cache tokens]].

## Waarom werkt dit?
Sessies groeien **enkel aan het einde** (append-only). Elke request = de vorige + een paar nieuwe berichten. De provider verwerkt het lange gedeelde begin één keer, bewaart het resultaat en gaat verder vanaf waar de prefix stopt. Zonder cache zou een sessie van 50 beurten beurt 1 vijftig keer betalen.

## Breekbaar
- Het moet een **exacte** prefix zijn: één gewijzigd token (bv. een tijdstempel in de [[System prompt]]) en alles daarna wordt weer volle prijs.
- Caches **verlopen** na enkele minuten inactiviteit → na een pauze is de eerste request duurder.

## Voor jou als gebruiker
Vooral een zorg van harness-bouwers, maar je ziet het effect: requests na een lange pauze kosten meer, en een harness die vooraan iets verandert, maakt de sessie duur.

## Gerelateerd
[[Cache tokens]] · [[Input tokens]] · [[LLM-prijsmodel]] · [[System prompt]]

## Bron
- AI Coding Dictionary – term 15/71: [Prefix cache](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Prefix%20cache.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
