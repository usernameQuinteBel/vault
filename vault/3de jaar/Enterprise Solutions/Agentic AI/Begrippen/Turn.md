---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Sessies & context
aliases: [Beurt]
dictionary_nr: 24
---
# Turn

> Eén bericht van de gebruiker plus alles wat de [[Agent]] daarna doet tot hij het woord teruggeeft. Bevat één of (bij tool-gebruik) veel [[Model provider request]]s.

## De agent bepaalt de lengte
Jij stuurt één bericht; de agent beslist hoeveel [[Tool call]]s hij na elkaar doet. Een beurt kan één zin zijn of twintig minuten lezen, aanpassen en testen.
- Lange beurten maken [[AFK]]-werk mogelijk...
- ...maar ook ongecontroleerd afdwalen: tegen dat de agent terugkomt, kan hij ver van je bedoeling zitten.

Een verduidelijkende vraag van de agent sluit de beurt af; jouw antwoord opent de volgende.

## Bijsturen
Binnen een beurt gebeurt alles zonder jou; **tussen beurten** stuur je bij. Veel harnesses laten je onderbreken of al een bericht typen. Ben je vaak ontevreden over waar beurten eindigen? Vraag **kleinere beurten**: eerst een plan, dan stap per stap.

## Gerelateerd
[[Session]] · [[Model provider request]] · [[Tool call]] · [[Agent mode]]

## Bron
- AI Coding Dictionary – term 24/71: [Turn](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Turn.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
