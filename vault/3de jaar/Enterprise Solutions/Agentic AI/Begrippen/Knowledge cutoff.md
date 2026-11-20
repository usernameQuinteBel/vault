---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Failure modes
aliases: [Cutoff, Kennisgrens]
dictionary_nr: 38
---
# Knowledge cutoff

> De datum waarna een [[Model]] geen [[Parametric knowledge]] meer heeft. Libraries, API's en gebeurtenissen van daarna zijn "verzinvallen", tenzij hun docs als [[Contextual knowledge]] geladen worden. Elk model heeft zijn eigen cutoff.

## Waarom bestaat het?
[[Training]] bakt een momentopname van tekst in de parameters; daarna zijn ze bevroren.

## Waarom is het verraderlijk?
Het model **weet niet** dat zijn kennis een rand heeft. Vraag je naar iets van na de cutoff, dan weigert het niet maar **extrapoleert** het van het dichtstbijzijnde dat het kent. Code voor een oude versie van een library ziet er plausibel uit, compileert vaak, en faalt op de delen die veranderd zijn.

## Oplossing
Actuele info in de [[Context]] krijgen: de changelog laden, verwijzen naar de type-definities van de geïnstalleerde versie, of de agent de docs laten lezen op het web (tool of [[MCP]]). Alles in context wint van niets-in-parameters.

## Gerelateerd
[[Parametric knowledge]] · [[Contextual knowledge]] · [[Hallucination]]

## Bron
- AI Coding Dictionary – term 38/71: [Knowledge cutoff](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Knowledge%20cutoff.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
