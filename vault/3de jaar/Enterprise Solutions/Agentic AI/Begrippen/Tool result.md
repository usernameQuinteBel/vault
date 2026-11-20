---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Tools & environment
dictionary_nr: 29
---
# Tool result

> Wat de [[Harness]] terugstuurt na het uitvoeren van een [[Tool call]]: de bestandsinhoud, de commando-output, de foutmelding. Het **enige** zicht van de [[Agent]] op de [[Environment (agent)|environment]].

## Levenscyclus
1. Harness voert de call uit (commando draaien, bestand lezen).
2. Vangt de uitkomst op: output, inhoud of fout.
3. Voegt het toe aan de [[Context]] als bericht.
4. Stuurt het mee in de **volgende** [[Model provider request]].
5. Het model beslist wat het ermee doet.

Tool call en tool result zijn de twee uiteinden van dezelfde uitwisseling, binnen één [[Turn]].

## Let op
- Grote tool results (lange logs, grote bestanden) vullen je [[Context window]] snel → overweeg een [[Subagent]] voor lawaaierig zoekwerk.
- Een geweigerde [[Permission request]] komt ook als tool result terug.
- Externe content in een tool result kan **prompt injection** bevatten (instructies die de agent proberen te sturen).

## Gerelateerd
[[Tool call]] · [[Tool]] · [[Context window]] · [[Subagent]]

## Bron
- AI Coding Dictionary – term 29/71: [Tool result](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Tool%20result.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
