---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Handoffs
dictionary_nr: 48
---
# Handoff artifact

> Een document dat dient als drager van een [[Handoff]]: geschreven naar de [[Environment (agent)|environment]] door één sessie, om gelezen te worden door een andere. [[Spec]]s, [[Ticket]]s en plan-documenten zijn allemaal handoff artifacts.

## Waarom?
Het model is [[Stateless]]: niets van een sessie overleeft [[Clearing]]. De environment blijft wel bestaan. Belangrijke staat in een bestand schrijven = ze op een plek zetten waar de volgende sessie ze terugleest.

## Het is een secundaire bron
Klein genoeg om een nieuwe sessie te briefen, maar het bevat wat de schrijvende sessie *geloofde*. Wat weggelaten of fout is, ziet de lezer niet → belangrijke claims verifiëren tegen de [[Primary source]] (code, tests).

## Een goed artifact
Geschreven voor een lezer met **nul context**:
- Concrete bestandspaden i.p.v. "het bestand waarover we spraken".
- Wat beslist werd **en waarom** (zodat het niet opnieuw bediscussieerd wordt).
- Wat af is en wat nog moet.
Tip: vertel de schrijvende sessie waar het naartoe gaat: "schrijf een handoff-document voor een verse sessie die niets van dit werk weet".

## Voordeel t.o.v. compaction
- Staat op schijf → je kan het lezen en corrigeren.
- Herbruikbaar → dezelfde spec kan vijf parallelle sessies briefen.

## In de tasks
In [[Task 3.2 - Handoff-plugin in OpenCode]] laat je de agent na het plannen een technische documentatie (.md) maken via /handoff, en check je nadien of de gebouwde API ermee overeenkomt.

## Gerelateerd
[[Handoff]] · [[Spec]] · [[Ticket]] · [[Secondary source]] · [[Compaction]]

## Bron
- AI Coding Dictionary – term 48/71: [Handoff artifact](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Handoff%20artifact.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
