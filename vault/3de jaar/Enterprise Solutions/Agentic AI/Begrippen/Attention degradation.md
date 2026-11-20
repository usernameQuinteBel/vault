---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Failure modes
dictionary_nr: 42
---
# Attention degradation

> Naarmate een [[Session]] groeit, wordt het [[Attention budget]] van elk token over meer concurrenten verdeeld. Het signaal op belangrijke relaties krimpt, ruis van irrelevante [[Context]] neemt toe. Zelfde model, zelfde parameters – gewoon meer monden om te voeden van hetzelfde bord. Oorzaak van het [[Smart zone]]-effect.

## Hoe zie je het?
- Regels die een uur gevolgd werden, beginnen te glippen.
- Het vraagt opnieuw wat al gezegd werd.
- Het schrijft code die een eerder gelezen bestand negeert.

## Moeilijk te merken
Het gaat **geleidelijk**: geen foutmelding, geen drempel. Elke beurt is maar een beetje slechter. Tegen dat het duidelijk is, zit je al een tijd in de "dumb zone".

## Herstel: context weghalen, niet toevoegen
- De genegeerde instructie opnieuw plakken = nog een concurrent → helpt maar kort.
- Wat werkt: [[Clearing]] en enkel herladen wat nodig is, [[Compaction]], of een [[Handoff]] naar een nieuwe sessie.
- Zie dalende instructie-opvolging als signaal over **contextlengte**, niet over het model.

## Gerelateerd
[[Attention budget]] · [[Smart zone]] · [[Hallucination]] · [[Context engineering]]

## Bron
- AI Coding Dictionary – term 42/71: [Attention degradation](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Attention%20degradation.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
