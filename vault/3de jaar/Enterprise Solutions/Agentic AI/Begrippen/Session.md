---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [2, 3]
groep: Sessies & context
dictionary_nr: 23
---
# Session

> Eén afgebakende reeks interactie met een [[Agent]]. Begint leeg, verzamelt berichten, [[Tool result]]s en gelezen bestanden, en eindigt bij [[Clearing]], afsluiten of [[Compaction]]. Als het [[Context window]] de doos is, is de sessie de inhoud die de doos langzaam vult.

## Werkgeheugen
De berichtgeschiedenis van de sessie is het werkgeheugen van de agent. Alles wat hij lijkt te onthouden zit daarin en wordt bij elke request opnieuw meegestuurd. Wat niet in de sessie zit, bestaat niet voor de agent.

## Eindigt met de sessie
Een nieuwe sessie begint vanaf nul. Wat overblijft is het [[Filesystem]] – daarop steunen [[Handoff]]s, [[Memory system]]s en [[AGENTS.md]].

## Hiërarchie
**Session > [[Turn]] > [[Model provider request]]**

## Best practice
**Eén taak per sessie.** Alles in een sessie beïnvloedt elke latere beurt; ongerelateerde taken laten "resten" achter. Een taak afronden is een natuurlijk moment om te clearen. Werk dat niet in één context window past, splits je over meerdere sessies (bv. via een [[Spec]] met [[Ticket]]s).

In [[OpenCode]] start je een nieuwe sessie met `/new`.

## Gerelateerd
[[Turn]] · [[Context window]] · [[Clearing]] · [[Compaction]] · [[Smart zone]] · [[Stateful]]

## Bron
- AI Coding Dictionary – term 23/71: [Session](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Session.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]] · [[Module 3 - Context]]
