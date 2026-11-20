---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [2, 3]
groep: Sessies & context
dictionary_nr: 19
---
# Context window

> Alles wat het [[Model]] ziet bij één [[Model provider request]]. Eindig, modelspecifiek, en het **enige** kanaal waarlangs het model iets waarneemt.

## Wat zit erin?
Eén reeks [[Token]]s: de [[System prompt]], het gesprek tot nu, elk [[Tool result]] dat de [[Harness]] terugstuurde.
- Staat iets in die reeks → het model kan het gebruiken.
- Staat het er niet in → het bestaat niet voor het model (je codebase, het bestand van gisteren, de instructie van drie sessies geleden).
- Iets van buiten moet eerst binnengehaald worden, meestal via een [[Tool call]].

## Eindig = het loopt vol
- Elke beurt voegt toe; een lange [[Session]] raakt aan de limiet → [[Compaction]] of [[Clearing]] nodig.
- Alles concurreert: elk token dat je laadt is er één minder voor de rest, en onnodige content kost [[Attention budget]].
- **Behandel het window als een budget**: laad wat de taak nodig heeft, laat de rest weg.

## Grootte
Topmodellen: honderdduizenden tokens (bv. 200k). **Lokale modellen** hebben vaak veel kleinere windows (en [[Ollama]] zet standaard soms een lage limiet) – zie [[Local AI]].

Let op: kwaliteit zakt al lang voor de limiet bereikt is – zie [[Smart zone]].

## Vermijd
"geheugen" – het context window is werkgeheugen dat niet blijft bestaan over sessies. Een [[Memory system]] is iets apart.

## Gerelateerd
[[Context]] · [[Session]] · [[Smart zone]] · [[Attention budget]] · [[Compaction]] · [[Clearing]]

## Bron
- AI Coding Dictionary – term 19/71: [Context window](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Context%20window.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]] · [[Module 3 - Context]]
