---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
aliases: [Pricing, Tokenprijzen, Prijsmodel LLM]
---
# LLM-prijsmodel

> Hoe [[Model provider]]s gebruikers laten betalen: per [[Token]], met aparte prijzen voor input, output en gecachte tokens – meestal uitgedrukt **per miljoen tokens**.

## De onderdelen
| Soort | Prijs (relatief) | Wat |
|---|---|---|
| [[Input tokens]] | Basisprijs | Alles wat je meestuurt: system prompt, geschiedenis, bestanden |
| [[Cache tokens]] | Veel goedkoper (vaak ±10% van input) | Input die exact gelijk is aan een vorige request ([[Prefix cache]]) |
| [[Output tokens]] | Duurder (vaak ±5× input) | Alles wat het model schrijft, ook verborgen redenering ([[Effort]]) |

Daarnaast: **abonnementen** (vast bedrag per maand met gebruikslimieten, bv. ChatGPT Plus, Claude Pro) vs. **API-gebruik** (betalen per token).

## Rekenvoorbeeld (fictieve prijzen)
Input €3 / 1M tokens, output €15 / 1M tokens.
Een request met 100 000 input- en 2 000 output-tokens:
- input: 0,1 × €3 = €0,30
- output: 0,002 × €15 = €0,03
→ €0,33 – de **input** domineert!

## Waarom loopt de factuur op bij agents?
- Elke [[Model provider request]] stuurt de **volledige context** opnieuw.
- Eén [[Turn]] kan tientallen requests zijn (tool calls).
- Hoe langer de [[Session]], hoe groter elke request.

## Besparen
- [[Prefix cache]] intact houden (geen veranderende tijdstempels vooraan).
- [[Clearing]]/[[Compaction]] tussen taken.
- Kleiner/goedkoper [[Model]] voor eenvoudige taken; [[Effort]] laag waar het kan.
- Gerichte edits i.p.v. hele bestanden herschrijven.
- Of: [[Local AI]] – geen tokenfactuur, wel hardwarekosten en minder capaciteit.

## Meer leren
Video module 1: *Most devs don't understand how LLM tokens work* (zie `links.txt`).

## Gerelateerd
[[Token]] · [[Input tokens]] · [[Output tokens]] · [[Cache tokens]] · [[Tokenization (encoding & decoding)]]

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
