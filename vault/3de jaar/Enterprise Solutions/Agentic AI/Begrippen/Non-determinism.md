---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
aliases: [Niet-deterministisch, Non-deterministic]
dictionary_nr: 9
---
# Non-determinism

> Dezelfde input kan verschillende output geven. Draai een [[Model]] twee keer met exact dezelfde [[Context]] en je krijgt mogelijk twee verschillende antwoorden – soms één woord anders, soms een totaal andere aanpak.

## Waarom?
1. **Sampling** – tijdens [[Inference]] maakt het model een kansverdeling over mogelijke volgende [[Token]]s en kiest er één, bewust met wat willekeur (altijd het meest waarschijnlijke token kiezen geeft repetitieve, slechtere tekst). Eén ander token vroeg in het antwoord verandert alles wat erna komt.
2. **Serving bij de provider** – requests worden gebundeld op gedeelde hardware; minieme verschillen in floating-point-berekeningen kunnen een twijfelgeval tussen twee tokens doen omslaan.
Er is **geen instelling** die dit volledig uitschakelt.

## Wat betekent dat in de praktijk?
- Verwacht een **spreiding** van resultaten. De meeste antwoorden vallen binnen een redelijke "klokcurve" van kwaliteit, maar de uitschieters bestaan echt.
- **Opnieuw proberen is legitiem**: een mislukte poging is één trekking uit de verdeling.
- **Verificatie wordt belangrijker** dan bij deterministische tools: je kan het gedrag van een agent niet één keer testen en erop rekenen dat het zich herhaalt → automatische checks moeten de slechte trekkingen opvangen.
- **Niet over-interpreteren**: een reeks slechte runs voelt als "het model is slechter geworden deze week", maar meestal is het gewoon de verdeling.

## In de tasks
In [[Task 1.1 - BPMN-prompt in twee LLMs vergelijken]] stuur je dezelfde prompt opnieuw in een nieuw gesprek en vergelijk je: is het non-deterministisch?

## Gerelateerd
[[Next-token prediction]] · [[Inference]] · [[Model]] · [[Hallucination]]

## Bron
- AI Coding Dictionary – term 9/71: [Non-determinism](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Non-determinism.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
