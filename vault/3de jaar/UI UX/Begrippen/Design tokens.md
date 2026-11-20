---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: 7
groep: Design system
aliases: [Tokens, Semantische tokens, Primitives, Variables (Figma)]
---
# Design tokens

> Benoemde ontwerpwaarden (kleur, spacing, typografie) die design en code **delen**. In dit vak vooral voor kleur: twee lagen, **primitives** en **semantische tokens**.

## Twee lagen
| Laag | Wat | Voorbeeld |
|---|---|---|
| **Primitive** | De ruwe kleurschaal (heb je al) | `blue/900` = #003399 |
| **Semantische token** | Zegt **waarvoor** je een kleur gebruikt, verwijst via een **alias** naar een primitive | `color/bg/brand` → `blue/900` |

## Voorbeeld uit de les
| Primitive | → Token | Gebruikt in |
|---|---|---|
| blue/900 (#003399) | color/bg/brand | Header, filterknop |
| orange/500 (#FF9500) | color/action/primary | Winkelmandknop |
| green/500 (#00AB14) | color/text/success | "Morgen geleverd" |
| neutral/0 (#FFFFFF) | color/bg/surface | Achtergrond van kaarten |

In code: `--color-text-success: var(--green-500);`

## Eén token aanpassen, overal opgelost
"Morgen geleverd" haalt maar 3,1:1. Laat `color/text/success` verwijzen naar **green/700** in plaats van green/500 → 5,5:1 op **alle** kaarten tegelijk.

**Waarom niet gewoon green/500 donkerder maken?** Dan klopt je schaal niet meer, en verandert elke plek die green/500 gebruikt mee, ook waar het goed was. Met een token wijzig je enkel waar die **rol** naar verwijst.

## In Figma
1. Linkerpaneel › **Variables**. Hernoem je bestaande collection naar **Primitives**.
2. Klik **+** bij collections → maak **Tokens**.
3. In Tokens: **+ Create variable › Color**, naam met slash (`text/default`) — de slash maakt een groep.
4. Klik op de kleurwaarde › tab **Libraries** › kies de primitive: je ziet nu de naam i.p.v. een hex-code (= alias).
5. Toepassen: selecteer je frame › rechterpaneel **Selection colors** › klik een kleur › kies de token. Alle lagen met die kleur wisselen mee.
6. Optioneel: primitives verbergen (variable settings › **Scope** › alles uitvinken), zodat niemand ze rechtstreeks gebruikt.

## Minimale set tokens (opdracht)
`text/default`, `text/muted`, `text/on-action`, `bg/surface`, `bg/brand`, `action/primary`, `border/default`, `feedback/success`, `feedback/error`.

Regel: een token verwijst **altijd via een alias** naar een tint, nooit naar een hex-code. Schermen gebruiken **enkel tokens**.

---
Hoort bij: [[Design Systems & Accessibility]]
