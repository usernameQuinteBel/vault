---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Failure modes
dictionary_nr: 39
---
# Contextual knowledge

> Feiten die de [[Agent]] nú rechtstreeks kan lezen uit de [[Context]]: de taak, bestanden die hij las, [[Tool result]]s, de inhoud van [[AGENTS.md]]. Tegenhanger van [[Parametric knowledge]]: parametrisch wordt *herinnerd*, contextueel wordt *gelezen*.

## Waarom belangrijk?
- [[Hallucination]]s komen veel minder voor als de agent uit contextuele kennis werkt – het antwoord staat voor zijn neus.
- Het is de **enige** soort kennis die jij controleert. Interne SDK, nieuwe library, beslissing van gisteren? → in de context zetten.
- Een groot deel van praktisch AI-coderen komt hierop neer: **de juiste feiten voor het model op het moment dat het ze nodig heeft**.

## Bij conflict
Contextueel wint meestal: plak de actuele API-docs en het model volgt die. Maar diep in een lange sessie kan de oude parametrische versie toch doorsijpelen → herhaal de correctie of zet ze dichter bij het werk.

## Niet gratis
Alles in het window kost [[Token]]s en [[Attention budget]]. Doel: de **relevante** feiten, niet alle feiten.

## Vermijd
"werkgeheugen" – contextuele kennis is wat *nu* in het window staat; een [[Memory system]] brengt inhoud van over sessies heen erin.

## Gerelateerd
[[Parametric knowledge]] · [[Context]] · [[Progressive disclosure]] · [[Gemini NotebookLM]]

## Bron
- AI Coding Dictionary – term 39/71: [Contextual knowledge](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Contextual%20knowledge.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
