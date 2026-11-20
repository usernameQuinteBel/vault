---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Handoffs
aliases: [/new, Clear]
dictionary_nr: 44
---
# Clearing

> De huidige [[Session]] beëindigen en een nieuwe starten. Het volgende bericht begint met een lege sessie en een leeg [[Context window]]. Meestal door de gebruiker (in [[OpenCode]]: `/new`).

## Het medicijn voor vervuilde context
Een sessie verzamelt alles: mislukte pogingen, verkeerde wegen, verouderde tool results, verlaten plannen. Het model herleest dat allemaal bij elke beurt; slechte geschiedenis trekt nieuw werk naar beneden. Clearing verwijdert de ruis.

## Wat verdwijnt er (niet)?
- Het **transcript** blijft meestal bewaard op je pc (lezen of hervatten kan).
- De **werkstaat** van de agent is weg: de nieuwe sessie weet niets.
- Belangrijke beslissingen of voortgang? Laat de agent eerst een [[Handoff artifact]] schrijven en start de nieuwe sessie met een verwijzing ernaar.

## Clearing vs. compaction
| Clearing | [[Compaction]] |
|---|---|
| Start leeg, niets gaat mee (ook de rommel niet) | Vat de sessie samen en neemt die samenvatting mee |
| Botter middel | Automatisch, maar lossy |
| Gokt erop dat het essentiële al ergens beter opgeschreven staat | Probeert het essentiële mee te nemen |

## Gerelateerd
[[Compaction]] · [[Handoff]] · [[Handoff artifact]] · [[Session]] · [[Smart zone]]

## Bron
- AI Coding Dictionary – term 44/71: [Clearing](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Clearing.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
