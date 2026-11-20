---
type: oefening
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Tasks
---
# Task 4.1 - Lokaal model met Ollama

> Installeer Ollama, draai een lokaal model, bekijk de prestaties en vergelijk het antwoord op de prompt van Module 1 Task 1 met de cloud-LLM's.

**Deadline:** 22 nov 2026

## Stappen
1. Installeer [Ollama](https://ollama.com/).
2. Kies een model dat bij je systeem past en `ollama pull` het.
3. Gebruik:
   - `ollama run <model> --verbose` → tokens per seconde;
   - `ollama ps` → geheugengebruik en CPU/GPU-verdeling;
   - `ollama ls` → je modellen.
4. Geef het model **dezelfde prompt als in Module 1 Task 1** en vergelijk met de cloud-LLM's.
5. Indienen: screenshot + korte reflectie (max. 200 woorden).

⚠️ Geen `:cloud`-modellen – die draaien niet lokaal.

## Reflectie-ideeën
- Kwaliteit: vindt het kleine model alle actoren/gateways? Meer verzonnen stappen?
- Snelheid (tokens/s) en geheugengebruik; CPU vs. GPU.
- Privacy en kost vs. capaciteit – zie [[Local AI]].
- Rol van [[Quantization]] en context-lengte.

## Begrippen
[[Ollama]] · [[Local AI]] · [[Quantization]] · [[Model provider]] · [[Inference]]

---
Hoort bij: [[Module 4 - Local AI]]
