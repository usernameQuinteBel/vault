---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Local AI
---
# GGUF

> Een **bestandsformaat** voor (meestal gequantiseerde) lokale modellen, gemaakt voor llama.cpp en gebruikt door o.a. [[Ollama]] en LM Studio. Eén bestand bevat de gewichten én alle metadata om het model te laden.

## Wat zit erin?
- De [[Parameters]] (vaak gequantiseerd, bv. Q4_K_M).
- Metadata: architectuur, tokenizer, context-lengte, chat-sjabloon, ...
→ Eén `.gguf`-bestand is genoeg om het model te draaien.

## Waarom handig?
- Snel laden (geschikt om direct in het geheugen te "mappen").
- Werkt op CPU én GPU, ook gemengd.
- Op Hugging Face vind je modellen als GGUF in verschillende quantization-niveaus; je kiest wat in je geheugen past.

## Gerelateerd
[[Quantization]] · [[Ollama]] · [[Local AI]]

---
Hoort bij: [[Module 4 - Local AI]]
