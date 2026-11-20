---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Local AI
---
# Perplexity

> Een maat voor hoe "verrast" een taalmodel is door een stuk tekst: hoe goed het de volgende [[Token]]s voorspelt. **Lager is beter.** Wordt vaak gebruikt om te meten hoeveel kwaliteit een [[Quantization]] kost.

## Intuïtie
Perplexity ≈ "uit hoeveel opties twijfelt het model gemiddeld per token". Een perplexity van 5 betekent ruwweg dat het model zo onzeker is alsof het steeds uit 5 even waarschijnlijke tokens moest kiezen.

## Gebruik bij lokale AI
- Je vergelijkt de perplexity van het originele model met de gequantiseerde versie op dezelfde testtekst.
- Kleine stijging (bv. van 6,0 naar 6,1) → nauwelijks kwaliteitsverlies.
- Grote stijging → de quantization is te agressief.
(Je hoeft de wiskunde niet te kennen.)

## Let op
Perplexity meet voorspelkwaliteit van tekst, niet alles: een model met goede perplexity kan nog steeds slecht zijn in tool calls of redeneren. Test dus ook in de praktijk.

## Niet verwarren
Met *Perplexity AI* (een zoekmachine-chatbot).

## Gerelateerd
[[Quantization]] · [[Local AI]] · [[Next-token prediction]]

---
Hoort bij: [[Module 4 - Local AI]]
