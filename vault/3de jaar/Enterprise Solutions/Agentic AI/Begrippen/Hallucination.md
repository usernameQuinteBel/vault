---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Failure modes
aliases: [Hallucinatie, Hallucinaties]
dictionary_nr: 36
---
# Hallucination

> Zelfzeker **foute** output van het [[Model]]. Er zijn twee soorten, met verschillende oorzaken en oplossingen.

| Soort | Wat loopt fout | Oorzaak | Oplossing |
|---|---|---|---|
| **Factualiteit** | Verzonnen of foute feiten: een functie die niet bestaat, een foute API-signatuur, een valse bron | Gaten in de [[Parametric knowledge]], vaak na de [[Knowledge cutoff]] | De juiste [[Contextual knowledge]] laden (docs, code) |
| **Trouw (faithfulness)** | Output wijkt af van de geladen context, je instructies of de eigen eerdere redenering | [[Attention degradation]]; erger in de "dumb zone" ([[Smart zone]]) | [[Clearing]] of [[Compaction]] |

## Waarom klinkt het zo zeker?
[[Next-token prediction]] maakt vloeiende tekst, of het feit nu bestaat of niet. Het model heeft **geen intern signaal** dat het iets niet weet; een verzonnen methode komt in dezelfde zekere toon als een correcte. Gehallucineerde code is plausibel per definitie: het is hoe de API eruit *zou* zien – daarom glipt het door een snelle review en faalt het pas bij uitvoeren.

## Verdediging
- Werk vanuit **context** (docs, code) i.p.v. geheugen van het model.
- **Test en voer uit** – laat de agent tests draaien.
- Vraag bronnen/citaten (bv. [[Gemini NotebookLM]]).
- Hou sessies kort genoeg om in de smart zone te blijven.

## Gerelateerd
[[Parametric knowledge]] · [[Contextual knowledge]] · [[Attention degradation]] · [[Smart zone]] · [[Sycophancy]]

## Bron
- AI Coding Dictionary – term 36/71: [Hallucination](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Hallucination.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
