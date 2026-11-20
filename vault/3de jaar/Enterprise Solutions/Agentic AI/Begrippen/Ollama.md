---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Local AI
---
# Ollama

> Een gratis tool om open modellen **lokaal** te downloaden en te draaien, met een eenvoudige CLI en een lokale API waarmee harnesses zoals [[OpenCode]] kunnen verbinden. Een lokale [[Model provider]].

## Belangrijkste commando's
| Commando | Wat |
|---|---|
| `ollama pull <model>` | Model downloaden (bv. `qwen3.5:4b`, `llama3.2`, `gemma3`) |
| `ollama run <model> --verbose` | Chatten in de terminal + statistieken, o.a. **eval rate = tokens per seconde** |
| `ollama ps` | Welke modellen geladen zijn, hoeveel **geheugen**, en de **CPU/GPU-verdeling** |
| `ollama ls` | Gedownloade modellen tonen |
| `ollama rm <model>` | Model verwijderen |

⚠️ Modellen die eindigen op **`:cloud`** draaien op de servers van Ollama, niet op je machine – die tellen niet voor de module.

## Een model kiezen
- Kies een grootte die in je **VRAM/RAM** past (bv. 3–8B parameters voor een gewone laptop).
- De tag toont vaak de [[Quantization]] (bv. `q4_K_M`).
- Kijk met `ollama ps`: 100% GPU is snel; deels CPU is veel trager.

## Ollama + OpenCode
- Ollama biedt een (OpenAI-compatibele) API op `http://localhost:11434`.
- In OpenCode voeg je Ollama toe als provider in de config en kies je het model met `/models`.
- **Typisch probleem** (behandeld in de video *OpenCode + Ollama*): de standaard **context-lengte** van Ollama is klein. Een coding-agent heeft een grote [[System prompt]] en tooldefinities → het model "ziet" niet alles en tool calls mislukken. Oplossing: de context-lengte verhogen (bv. via de instellingen of `num_ctx`) – binnen wat je geheugen aankan.

## Gerelateerd
[[Local AI]] · [[OpenCode]] · [[Quantization]] · [[Task 4.1 - Lokaal model met Ollama]]

---
Hoort bij: [[Module 4 - Local AI]]
