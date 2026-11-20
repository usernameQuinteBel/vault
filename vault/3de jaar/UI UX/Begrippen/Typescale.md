---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: 6
groep: UI-principes
aliases: [Type scale, Text styles]
---

# Typescale

> Een **consistente reeks lettergroottes**, berekend vanuit één **basisgrootte** en een vaste **ratio**. Zo heb je een beperkt aantal groottes die harmonieus samenwerken.

## Zo bereken je ze
1. **Basis**: 16 px voor body (14 px voor compacte apps).
2. **Ratio**: 1.2 (minor third) tot 1.25 (major third).
3. Vermenigvuldig telkens omhoog (en deel omlaag).
4. **Rond af op je 4-px grid**.

Voorbeeld basis **16 × 1.25**:
| Style | Berekend | Afgerond | Regelhoogte | Gewicht |
|---|---|---|---|---|
| H1 | 31,25 | **32** | 40 (1.25×) | Bold |
| H2 | 25 | **24** | 32 | Bold/Semi Bold |
| H3 | 20 | **20** | 28 | Semi Bold |
| Body | 16 | **16** | 24 (1.5×) | Regular |
| Small | 12,8 | **12** | 16–18 | Regular/Medium |
Compacte interface: basis **14**, ratio **1.2** → 14 · 17 → 16 · 20 · 24…

## Vastleggen
Als **text styles** in Figma (naam, grootte, regelhoogte, gewicht, letterspatiëring): `H1`, `H2`, `Body`, `Small`… Elke tekst gebruikt een style. In code worden dat CSS-variabelen of Tailwind-klassen (`text-2xl font-bold` = 24/32 bold) → [[Design tokens]].

## Waarom?
- **Hiërarchie** met weinig middelen ([[Visuele hiërarchie]]).
- **Consistentie** over alle schermen.
- Eén plek om aan te passen.

## Tools
typescale.com of de **Typescale**-plugin in Figma.

## Gerelateerd
[[Typografie in UI]] · [[Spacing system]] · [[Hi-fi checklist]]

---
Hoort bij: [[UI Principes]]
