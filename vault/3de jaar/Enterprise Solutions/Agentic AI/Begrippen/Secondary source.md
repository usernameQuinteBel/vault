---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Handoffs
aliases: [Secundaire bron]
dictionary_nr: 47
---
# Secondary source

> Een beschrijving van een [[Primary source]], één stap verwijderd: documentatie over code, een samenvatting van een transcript, een rapport over zoekresultaten. Goedkoper om te laden, maar **lossy** van nature: wie het schreef, besliste wat belangrijk was.

## Context engineering = secundaire bronnen maken
- [[Compaction]] → samenvatting van de sessie.
- [[Subagent]] → kort rapport na lawaaierig zoekwerk.
- [[Handoff artifact]] → document met de beslissingen.
- [[Memory system]] → notities met wat geleerd werd.
Elk maakt dezelfde ruil: **getrouwheid voor ruimte**.

## Twee manieren van falen
1. **Lossy** – de samenvatting die de schemabeslissing verloor.
2. **Drift** – de primaire bron verandert, de beschrijving niet. Docs beschrijven de architectuur van vorig kwartaal met de zekerheid van dit kwartaal.
Werkt een agent op zo'n bron, dan werkt hij zelfzeker met foute info → stuur hem terug naar de primaire bron.

## Goede secundaire bron
Bevat een [[Context pointer]] terug naar het origineel ("samengevat uit transcript X", "beschrijft bestand Y"), zodat de lezer kan doorklikken als de samenvatting niet volstaat.

## Gerelateerd
[[Primary source]] · [[Compaction]] · [[Handoff artifact]] · [[Context pointer]]

## Bron
- AI Coding Dictionary – term 47/71: [Secondary source](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Secondary%20source.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
