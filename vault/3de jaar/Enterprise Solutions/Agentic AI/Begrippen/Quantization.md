---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Local AI
aliases: [Quants, Quantisatie, Kwantisatie]
---
# Quantization

> De [[Parameters]] van een model opslaan met **minder bits per getal** (bv. 4 of 8 bit i.p.v. 16), zodat het model veel kleiner en sneller wordt – ten koste van een beetje kwaliteit.

## Waarom?
Een model met 7 miljard parameters in 16-bit = ±14 GB. Dat past niet op de meeste laptops. In 4-bit = ±4 GB → wel.

| Precisie | Bits/parameter | 7B-model (±) | Kwaliteit |
|---|---|---|---|
| FP16 | 16 | 14 GB | Origineel |
| Q8 | 8 | 7 GB | Bijna geen verlies |
| Q4 | 4 | 4 GB | Klein verlies – populaire sweet spot |
| Q2–Q3 | 2–3 | 2–3 GB | Merkbaar slechter |
(Je hoeft de exacte berekeningen niet te kunnen.)

## Hoe werkt het (intuïtief)?
De getallen worden "afgerond" naar een kleiner aantal mogelijke waarden. Slimme methodes doen dat per blok gewichten met een eigen schaalfactor, en houden belangrijke gewichten nauwkeuriger.

## Namen die je ziet
`Q4_K_M`, `Q5_K_S`, `Q8_0`, ... – het getal is ongeveer het aantal bits; `K` = een slimmere blokmethode; `S/M/L` = kleine/middelgrote/grote variant.

## Afweging
- Kleiner + sneller + minder geheugen ↔ minder nauwkeurig.
- Meten hoeveel je verliest: [[Perplexity]].
- Een groter model in Q4 is vaak beter dan een kleiner model in Q8 met hetzelfde geheugengebruik.

## Ook de KV cache
Ook de [[KV cache]] kan gequantiseerd worden om meer context in je geheugen te krijgen.

## Gerelateerd
[[Local AI]] · [[GGUF]] · [[Perplexity]] · [[KV cache]] · [[Parameters]]

## Meer leren
Video: *How Do We Get MASSIVE Model To Run On Device? Quantization Explained* (27m, `links.txt`).

---
Hoort bij: [[Module 4 - Local AI]]
