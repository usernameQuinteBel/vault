---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
dictionary_nr: 2
---
# Model

> De verzameling [[Parameters]] die één ding doet: [[Next-token prediction]]. Bv. "Claude Opus" of "GPT-5". Een model op zich kan niets agentisch – het moet in een [[Harness]] zitten.

## Wat kan een model wel en niet?
- ✅ [[Token]]s binnenkrijgen en voorspellen welke tokens volgen – één keer per [[Model provider request]].
- ❌ Bestanden lezen, commando's uitvoeren, op het web surfen, zich gisteren herinneren.
Alles wat aanvoelt als een [[Agent]] die werkt (tools kiezen, resultaten lezen, doorgaan tot het klaar is) is de **harness** die vele voorspellingen na elkaar orkestreert.

Een model is [[Stateless]]: het onthoudt niets tussen requests.

## Tiers
[[Model provider]]s bieden modellen in niveaus aan:
| Groot model | Kleiner model |
|---|---|
| Slimst, maar trager en duurder | Sneller en goedkoper, minder capabel |
| Plannen, moeilijke bugs | Mechanische wijzigingen |
Veel harnesses laten je wisselen tijdens een [[Session]].

## Diagnose
"Het model is hier slecht in" is een specifieke claim. Hetzelfde model in een andere harness of met andere [[Context]] gedraagt zich vaak helemaal anders. **Kijk eerst wat het model kreeg** – de meeste teleurstellende output komt door context of harness, niet door de parameters.

## Gerelateerd
[[Parameters]] · [[Training]] · [[Inference]] · [[Harness]] · [[LLM]] · [[Model provider]]

## Bron
- AI Coding Dictionary – term 2/71: [Model](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Model.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
