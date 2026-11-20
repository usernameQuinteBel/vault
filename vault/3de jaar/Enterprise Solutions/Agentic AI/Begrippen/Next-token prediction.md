---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
dictionary_nr: 8
---
# Next-token prediction

> Wat een [[Model]] eigenlijk doet: gegeven een [[Context]] kiest het één volgend [[Token]], voegt het toe, en draait opnieuw. Elke output – een zin, een [[Tool call]], een bestand van duizend lijnen – wordt token per token opgebouwd. Een andere werkwijze heeft het model niet.

## Elke stap
1. De tokens in het [[Context window]] gaan door de [[Parameters]].
2. Het model berekent een **waarschijnlijkheid voor elk token** in de woordenschat.
3. Eén token wordt **gesampled** uit die kansverdeling.
4. Het wordt toegevoegd; de lus begint opnieuw met de iets langere context.

## Wat dit verklaart
- **[[Non-determinism]]**: door het samplen kan dezelfde prompt telkens andere output geven. Dat zit in het mechanisme, het is geen bug.
- **[[Hallucination]]**: het model controleert nooit of een token *waar* is, enkel of het *waarschijnlijk* is.
- **Vastgereden antwoorden**: het model legt zich token per token vast – een zelfzekere openingszin kan de rest van het antwoord de verkeerde kant op sturen.
- **Snelheid**: [[Output tokens]] komen strikt één voor één, dus de generatiesnelheid begrenst hoe snel een [[Agent]] kan werken.
- **Tool calls**: een agent "beslist" niet echt om een tool te gebruiken – een tool call is gewoon gestructureerde tekst die de [[Harness]] uit de output haalt.

## Gerelateerd
[[Token]] · [[Non-determinism]] · [[Hallucination]] · [[Model]] · [[Inference]]

## Bron
- AI Coding Dictionary – term 8/71: [Next-token prediction](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Next-token%20prediction.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
