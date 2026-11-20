---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Local AI
aliases: [Lokale AI, Lokale modellen, Small language model]
---
# Local AI

> Een AI-[[Model]] op je **eigen machine** laten draaien i.p.v. bij een cloudprovider. Je wint privacy en hebt geen tokenfactuur, maar je betaalt met minder capaciteit, beperkt geheugen en tragere snelheid.

## Wat win je?
- **Privacy**: niets verlaat je machine – belangrijk voor gevoelige data (bv. klantgegevens van Els in Task 4.2).
- **Geen kost per token** – enkel stroom en hardware.
- **Offline / air-gapped** werken.
- **Onafhankelijkheid** van een provider (geen rate limits, outages, prijswijzigingen).

## Wat kost het je?
- **Kleinere modellen**: wat op een laptop past is veel kleiner dan de topmodellen → minder slim, meer fouten bij complexe taken en tool calls.
- **Klein [[Context window]] en zwak [[Attention budget]]** → strenge [[Context engineering]] nodig.
- **Geheugen**: het model moet in (V)RAM passen. Vuistregel: geheugen ≈ aantal [[Parameters]] × bits per parameter / 8, plus ruimte voor de [[KV cache]].
- **Snelheid**: tokens per seconde hangt af van je GPU/CPU.

## Concepten om de kost te verlagen
| Concept | Wat |
|---|---|
| [[Quantization]] | Parameters met minder bits opslaan → kleiner en sneller |
| [[GGUF]] | Bestandsformaat voor (gequantiseerde) lokale modellen |
| [[KV cache]] | Tussenresultaten van eerdere tokens bewaren → sneller, maar kost geheugen |
| [[Perplexity]] | Maat om te meten hoeveel kwaliteit je verliest door quantization |

## Afweging uit de praktijk
Bij het bedrijfsbezoek aan Ometa werd dit afgewogen: grote cloudmodellen vs. veel kleine lokale modellen die elk een **heel kleine taak** krijgen maar 24/7 en in parallel draaien.

## Tools
[[Ollama]] (in dit vak), LM Studio, llama.cpp – allemaal lokale [[Model provider]]s.

## Gerelateerd
[[Ollama]] · [[Quantization]] · [[GGUF]] · [[KV cache]] · [[Perplexity]] · [[Model provider]] · [[Context engineering]]

---
Hoort bij: [[Module 4 - Local AI]]
