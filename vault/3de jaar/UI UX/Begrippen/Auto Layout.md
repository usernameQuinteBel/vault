---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: [6, 7]
groep: UI-principes
aliases: [Autolayout]
---

# Auto Layout

> Een Figma-functie die elementen in een frame **automatisch schikt** in een rij, kolom of raster, met vaste **padding** en **gap**. Het frame groeit en krimpt mee met de inhoud — net zoals **flexbox** in CSS.

## Instellen
Selecteer elementen → **Shift + A**.
| Eigenschap | Betekenis | CSS-equivalent |
|---|---|---|
| **richting** | horizontaal, verticaal, wrap (raster) | `flex-direction`, `flex-wrap` |
| **gap** | ruimte tussen items | `gap` |
| **padding** | ruimte binnen de rand | `padding` |
| **alignment** | uitlijning van de items | `justify-content`, `align-items` |
| **resizing** per item | **Hug** (zo groot als de inhoud) · **Fill** (vul de ruimte) · **Fixed** | `width: auto` · `flex: 1` · vaste breedte |
| **spacing mode** | Packed of **Space between** | `justify-content: space-between` |
| **absolute position** | één item vrij plaatsen (bv. badge) | `position: absolute` |

## Voorbeelden
- **Knop**: horizontaal, padding 12/24, gap 8 (icoon + tekst), Hug → de knop groeit mee met langere tekst.
- **Kaart**: verticaal, padding 16, gap 8 tussen titel/prijs/levering.
- **Lijst kaarten**: verticaal, gap 16; een kaart toevoegen schuift alles automatisch op.

## Waarom gebruiken?
- **Consistente afstanden** uit je [[Spacing system]] (geen handmatig schuiven).
- Ontwerp **reageert** op inhoud en schermbreedte.
- Componenten met Auto Layout zijn makkelijk om te zetten naar code (flex, Flutter `Row`/`Column`, MAUI `StackLayout`).

## Tips
- Nest Auto Layouts (kaart in lijst in pagina).
- Gebruik waarden uit je schaal of **number variables**.
- Komt iets niet juist? Kijk naar Hug/Fill van het **kind** én van de ouder.

## Gerelateerd
[[Spacing system]] · [[Component set en varianten]] · [[Figma]]

---
Hoort bij: [[Wireframing & Prototyping]]
