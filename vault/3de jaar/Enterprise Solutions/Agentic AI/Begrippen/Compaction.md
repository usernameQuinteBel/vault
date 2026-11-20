---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Handoffs
aliases: [Compacten, /compact]
dictionary_nr: 51
---
# Compaction

> Een [[Handoff]] in het geheugen: de geschiedenis van de sessie wordt samengevat, en die samenvatting start een nieuwe sessie. Lossy: het transcript is een [[Primary source]], de samenvatting een [[Secondary source]] – detail ingeruild voor ruimte. Manueel of automatisch ([[Autocompact]]).

## Werking
1. Het [[Context window]] raakt vol (elk tool result, elk bestand, elke verkeerde weg blijft staan).
2. De [[Harness]] vraagt het model de sessie samen te vatten.
3. De oorspronkelijke geschiedenis wordt weggegooid.
4. Een nieuwe sessie start met de samenvatting.
Wat niet in de samenvatting zit, is weg uit de context. Sommige harnesses bewaren het oude transcript op schijf met een [[Context pointer]] ernaar.

## Beter compacten
- De samenvatting is door het model geschreven → je kan **sturen** wat bewaard moet worden ("bewaar de schemabeslissingen").
- **Timing**: compact op een faseovergang (na het plan), niet midden in een taak.

## Gerelateerd
[[Autocompact]] · [[Clearing]] · [[Handoff]] · [[Secondary source]]

## Bron
- AI Coding Dictionary – term 51/71: [Compaction](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Compaction.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
