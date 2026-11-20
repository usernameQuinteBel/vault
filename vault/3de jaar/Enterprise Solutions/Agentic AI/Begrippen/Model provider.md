---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
aliases: [Provider]
dictionary_nr: 10
---
# Model provider

> Wat een [[Model]] beschikbaar stelt voor [[Inference]]. Meestal een online dienst (Anthropic, OpenAI, Google), maar kan ook **lokaal** zijn: [[Ollama]], LM Studio, llama.cpp op je eigen machine. De [[Harness]] draait het model niet zelf; ze vraagt het aan een provider.

## Wat regelt de provider?
- **De machinerie**: de [[Parameters]] staan op zijn hardware. Elke [[Model provider request]] = de harness stuurt tokens over het netwerk en krijgt voorspellingen terug.
- **Problemen die vaak verkeerd toegeschreven worden** aan het model of de harness: rate limits, beperkte capaciteit, storingen. Hangt je [[Agent]] of faalt elke beurt? Check eerst de statuspagina van de provider.
- **Commerciële voorwaarden**: prijs per [[Input tokens|input-]] en [[Output tokens|output-token]], korting via [[Prefix cache]], welke modellen beschikbaar zijn – zie [[LLM-prijsmodel]].

## Provider ≠ maker
De provider en de maker van het model kunnen verschillende bedrijven zijn: AWS Bedrock, Google Vertex en OpenRouter serveren modellen van anderen.

## Lokale providers
Ruilen capaciteit in voor controle: modellen die op je eigen hardware passen zijn veel kleiner dan de topmodellen, maar **niets verlaat je machine** en er is **geen factuur per token**. Zie [[Local AI]].

Voorbeeld: een klant zonder internettoegang ("air-gapped") → wissel naar een lokale provider; de harness spreekt gewoon een ander endpoint aan.

## Overzicht van modellen
Video bij Task 1: *Every AI Model Explained In 20 Minutes* – overzicht van de huidige modellen per provider (zie `links.txt` in bronnen).

## Gerelateerd
[[Model provider request]] · [[Harness]] · [[Ollama]] · [[Local AI]] · [[LLM-prijsmodel]]

## Bron
- AI Coding Dictionary – term 10/71: [Model provider](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Model%20provider.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
