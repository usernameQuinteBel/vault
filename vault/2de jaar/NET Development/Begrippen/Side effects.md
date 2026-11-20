---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [17, 19]
groep: React front end
aliases: [Side-effects, Bijwerkingen]
---
# Side effects

> Een component **rendert output** (op basis van props en state); instructies die daar **niet** op mikken zijn side effects: een timer zetten, **data ophalen**, het DOM rechtstreeks wijzigen.

Je voert ze uit met [[useEffect]], los van het renderen. Voorbeeld: data uit de API ophalen met [[Axios]] zodra het scherm verschijnt.

## Gerelateerd
[[State (useState)]] · [[Component]]

---
Hoort bij: [[React - Axios]]
