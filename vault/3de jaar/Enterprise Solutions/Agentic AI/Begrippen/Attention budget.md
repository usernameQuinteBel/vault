---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [3, 4]
groep: Failure modes
dictionary_nr: 41
---
# Attention budget

> Elk [[Token]] heeft een **beperkte hoeveelheid invloed** te verdelen over de rest van de [[Context]]. Veel invloed op één relatie laat minder over voor andere. Het budget groeit niet mee met de context – daarom verdunnen lange sessies.

## Signaal en ruis
Je instructie is een signaal op vast volume; elk ander token is concurrerend geluid. De instructie wordt niet stiller (ze staat er nog letterlijk), maar de **kamer wordt luider**. Wat bij 10k tokens het luidste was, is bij 150k achtergrondgezoem. Het model *vergeet* niet; het signaal verdrinkt.

## Symptoom
Leest als ongehoorzaamheid: de agent ging akkoord met een regel en drijft er later van af. De regel opnieuw plakken helpt maar even.

## Wat kan je doen?
- Hou het window **klein** – content die de taak niet dient is niet neutraal, het is ruis.
- [[Clearing|Clear]] als de opgestapelde context zijn waarde verliest.
- Herhaal belangrijke regels i.p.v. te vertrouwen op een vroege vermelding.
- Gebruik [[Progressive disclosure]].

## Kleine modellen
Kleine lokale modellen hebben een **zwak** attention budget → nog strenger zijn met wat in de context komt. Zie [[Task 4.2 - Context engineering voor kleine modellen]].

## Gerelateerd
[[Attention relationship]] · [[Attention degradation]] · [[Smart zone]] · [[Progressive disclosure]]

## Bron
- AI Coding Dictionary – term 41/71: [Attention budget](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Attention%20budget.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]] · [[Module 4 - Local AI]]
