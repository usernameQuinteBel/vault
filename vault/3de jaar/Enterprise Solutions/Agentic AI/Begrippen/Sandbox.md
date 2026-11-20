---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Tools & environment
aliases: [Sandboxing]
dictionary_nr: 34
---
# Sandbox

> Een afgeschermde [[Environment (agent)|environment]] waarin de [[Agent]] draait – container, VM, tijdelijke map of beperkte shell. Beperkt de schade als de agent iets destructiefs doet of iets kwaadaardigs ophaalt. De veiligheidsbasis die autonoom ([[AFK]]) werken mogelijk maakt.

## Sandbox vs. permissies
| [[Permission mode|Permissies]] | Sandbox |
|---|---|
| Vragen **vóór** een actie | Beperken wat een actie **kan bereiken** |
| Kosten aandacht (onderbrekingen) | Kosten infrastructuur |
Hoe sterker de isolatie, hoe minder er gevraagd moet worden.

## Gradaties
| Niveau | Wat | Houdt tegen |
|---|---|---|
| Beperkte shell | Afscherming per commando op OS-niveau | Schrijven buiten het project, netwerk |
| Container | Vers filesystem, geen credentials, nadien weg | Alles wat de agent aan zijn eigen machine doet |
| VM / cloud | Een volledig aparte machine | Alles, ook kernel-uitbraken |

## Wat geen sandbox tegenhoudt
Acties die er **legitiem** uit vertrekken: een agent met je git-credentials kan pushen; één met netwerk kan productie-API's aanroepen. Beslis eerst wat de grens mag oversteken.

## Gerelateerd
[[Permission mode]] · [[Permission request]] · [[Environment (agent)]] · [[AFK]]

## Bron
- AI Coding Dictionary – term 34/71: [Sandbox](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Sandbox.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
