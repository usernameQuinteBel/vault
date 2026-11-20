---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Tools & environment
dictionary_nr: 32
---
# Permission mode

> Het permissie-deel van een [[Agent mode]]: welke [[Tool call]]s een [[Permission request]] veroorzaken en welke automatisch mogen.

## Typische ladder
| Modus | Lezen | Schrijven & shell | Gebruik |
|---|---|---|---|
| Read-only / plan | Auto | Geblokkeerd | Onderzoek, plannen, reviewen |
| Default | Auto | Vragen | Dagelijks werk onder toezicht |
| Auto-edit | Auto | Edits auto, shell vragen | Vertrouwde repo's, mechanische wijzigingen |
| Bypass ("YOLO") | Auto | Alles auto | Enkel in een [[Sandbox]] |

## Mode = gate
Een permission mode is enkel een **poort**. Een agent die wil schrijven maar niet mag, probeert het anders. Daarom bundelen harnesses het met instructies → [[Agent mode]].

## Gerelateerd
[[Agent mode]] · [[Permission request]] · [[Sandbox]]

## Bron
- AI Coding Dictionary – term 32/71: [Permission mode](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Permission%20mode.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
