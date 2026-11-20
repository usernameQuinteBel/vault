---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Local AI
aliases: [Key-value cache, KV-cache]
---
# KV cache

> Een geheugen tijdens [[Inference]] dat de **keys en values** (tussenresultaten van het attention-mechanisme) van alle vorige tokens bewaart, zodat ze bij elk nieuw token niet opnieuw berekend moeten worden.

## Waarom?
Bij [[Next-token prediction]] kijkt elk nieuw token naar alle vorige ([[Attention relationship]]). Zonder cache zou het model voor elk nieuw token de hele context opnieuw doorrekenen. Met de KV cache hergebruikt het het werk van eerder → veel sneller.

## De prijs: geheugen
- De KV cache groeit **lineair met de context-lengte**.
- Bij lokale modellen kan hij een flink deel van je (V)RAM opeten → daarom zetten tools als [[Ollama]] de context-lengte standaard laag.
- Langere context = meer geheugen nodig, bovenop het model zelf.
- Oplossing: de KV cache zelf [[Quantization|quantiseren]] (bv. 8-bit) of een kortere context gebruiken.

## Niet verwarren met
De [[Prefix cache]] van een cloudprovider (bewaart verwerkte prefixen **tussen requests** om kosten te besparen). Het principe is verwant – werk van vorige tokens niet herhalen – maar de KV cache werkt binnen het rekenwerk van één generatie.

## Gerelateerd
[[Local AI]] · [[Quantization]] · [[Context window]] · [[Prefix cache]]

---
Hoort bij: [[Module 4 - Local AI]]
