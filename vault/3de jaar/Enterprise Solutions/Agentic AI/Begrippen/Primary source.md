---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Handoffs
aliases: [Primaire bron]
dictionary_nr: 46
---
# Primary source

> Een bron van waarheid in zijn **oorspronkelijke vorm**: de code, het transcript, de ruwe log, het echte API-antwoord. Geen beschrijving van het ding – het ding zelf. Tegenhanger van [[Secondary source]].

## Waarom belangrijk?
Wil je weten wat je codebase doet, dan is de code de primaire bron. Docs, architectuurschema's en README zijn beschrijvingen – juist toen ze geschreven werden, daarna op hun eigen tempo verouderd. Beweert een agent iets fout over je project? Vraag: **uit welke bron werkte hij?**

## Kost
Een primaire bron laden is duur (volledig bestand, volledig transcript → veel [[Input tokens]] en [[Attention budget]]). Wat je ervoor krijgt: **volledigheid** – niemand heeft al gefilterd wat belangrijk was.

## Wanneer?
Als precisie telt: de exacte signatuur, de echte fout, de lijn die crasht. Veel contextbeheer is beslissen wanneer je betaalt voor de primaire bron en wanneer een secundaire volstaat.

## In de tasks
Bij een BPMN-analyse is het **interview** de primaire bron; de analyse van de AI is secundair. Vergelijk altijd terug.

## Gerelateerd
[[Secondary source]] · [[Handoff artifact]] · [[Context pointer]] · [[Hallucination]]

## Bron
- AI Coding Dictionary – term 46/71: [Primary source](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Primary%20source.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
