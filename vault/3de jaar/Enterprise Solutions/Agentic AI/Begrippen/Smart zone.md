---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Failure modes
aliases: [Dumb zone, Smart zone / Dumb zone]
dictionary_nr: 43
---
# Smart zone

> Vroeg in een [[Session]] zit de [[Agent]] in de **smart zone**: scherp, gefocust, goed geheugen. Naarmate de sessie groeit, drijft hij af naar de **dumb zone**: slordiger, vergeetachtiger, meer fouten en meer trouw-[[Hallucination|hallucinaties]]. Zelfde model, zelfde harness – gewoon meer context. Het gevoelde effect van [[Attention degradation]].

## Wanneer begint de dumb zone?
Bij topmodellen vaak rond **125k–150k tokens** (al is dat omstreden). Bij kleine/lokale modellen veel vroeger.

## Tekenen
- Vergeet een instructie van twintig beurten geleden.
- Herhaalt een fout die al gecorrigeerd was.
- Beweert zelfzeker iets dat de context tegenspreekt.
De gewone reactie – doorduwen en opnieuw uitleggen – voegt context toe en maakt het erger.

## Niet gelijk aan de window-limiet
Een sessie kan diep in de dumb zone zitten met het grootste deel van het [[Context window]] nog vrij. De limiet is waar de harness weigert verder te gaan; kwaliteit daalt al veel eerder. **Plan rond de smart zone, niet rond het window.**

## Wat doe je?
[[Clearing|Clear]] of [[Compaction|compact]] wanneer de sessie opzwelt; niet doorduwen. Splits groot werk in [[Ticket]]s die elk in de smart zone passen.

## Gerelateerd
[[Attention degradation]] · [[Clearing]] · [[Compaction]] · [[Ticket]] · [[Context engineering]]

## Bron
- AI Coding Dictionary – term 43/71: [Smart zone](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Smart%20zone.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
