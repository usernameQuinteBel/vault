---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: 6
groep: UI-principes
---

# HSL

> Een kleurmodel dat kleuren beschrijft met **Hue, Saturation, Lightness**. Veel intuïtiever dan HEX of RGB om **varianten** van één kleur te maken — ideaal voor een kleurschaal 50–900.

## De drie waarden
| | Bereik | Betekenis |
|---|---|---|
| **H**ue (tint) | 0–360° op de kleurencirkel | 0 = rood, 120 = groen, 220 = blauw |
| **S**aturation (verzadiging) | 0–100 % | 0 % = grijs, 100 % = fel |
| **L**ightness (helderheid) | 0–100 % | 0 % = zwart, 100 % = wit; voor je schaal **10–90 %** |

## Een schaal opbouwen
Hou de **hue vast**, varieer vooral de **lightness** (en pas de saturation licht aan):
| Stap | HSL |
|---|---|
| Primary/50 | `hsl(220 90% 95%)` |
| Primary/200 | `hsl(220 90% 80%)` |
| Primary/500 | `hsl(220 90% 50%)` |
| Primary/700 | `hsl(220 90% 35%)` |
| Primary/900 | `hsl(220 90% 18%)` |
Tip: lichte tinten iets minder verzadigen en donkere iets meer, dan oogt de schaal natuurlijker. Zorg voor **gelijkmatige stappen** in helderheid.

## In code
`color: hsl(220 90% 50%);` — een variant maken is één getal aanpassen (bv. hover = lightness −8 %).

## Let op contrast
Lightness in HSL is **niet** gelijk aan waargenomen helderheid: geel en blauw met dezelfde L verschillen sterk in contrast. Controleer dus altijd met een contrast checker ([[Kleurcontrast]]).

## Tools
tailwind.ink, Figma Color Palette Generator, Realtime Colors.

## Gerelateerd
[[Kleursysteem]] · [[Design tokens]] · [[Kleurcontrast]]

---
Hoort bij: [[UI Principes]]
