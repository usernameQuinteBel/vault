---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: 6
groep: UI-principes
aliases: [8-point grid, 8pt grid]
---

# Spacing system

> Een **vaste schaal van afstanden** die je overal gebruikt (padding, gap, marges). Geen willekeurige pixels, maar **ritme**.

## De schaal
**8-point grid** als standaard: elke afstand is een veelvoud van 8; **4** voor fijne stappen.
| px | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64 |
|---|---|---|---|---|---|---|---|---|
| rem | 0.25 | 0.5 | 0.75 | 1 | 1.5 | 2 | 3 | 4 |
| Tailwind | p-1 | p-2 | p-3 | p-4 | p-6 | p-8 | p-12 | p-16 |
Geen 13 of 27 px: **alles komt uit je schaal**.

## Waarom 8?
- Deelbaar door 2 en 4 → schaalt mooi op schermen met 1×, 1.5×, 2×, 3× pixeldichtheid.
- Weinig keuzes = snellere beslissingen en een consistent ritme.
- Sluit aan op code (rem, Tailwind, Material).

## Spacing = relatie (nabijheid)
Hoe nauwer verwant, hoe kleiner de afstand:
| Relatie | Afstand | Voorbeeld |
|---|---|---|
| *myself* | 4 px | icoon en zijn label |
| *parent* | 16 px | blokken binnen één kaart |
| *family friend* | 48 px | losse secties |
Dit is de **wet van nabijheid** ([[Gestaltprincipes]]).

## In Figma
Pas de waarden toe als **padding** en **gap** in [[Auto Layout]]; leg ze eventueel vast als **number variables** (`space/4`, `space/16`) → [[Design tokens]]. Combineer met een [[Layout grid]] voor marges en kolommen.

> Witruimte = **structuur**, geen verspilling.

## Gerelateerd
[[Layout grid]] · [[Uitlijning]] · [[Auto Layout]] · [[Hi-fi checklist]]

---
Hoort bij: [[UI Principes]]
