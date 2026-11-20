---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: 6
groep: UI-principes
aliases: [Grid, Layout guides, Kolommenraster]
---
# Layout grid

> Een onderliggend **raster** dat je vaste **randen** geeft om alles op uit te lijnen. Het bestaat uit **kolommen** (waarin content valt), **marges** (de ruimte aan de zijkanten) en **gutters** (de ruimte **tussen** de kolommen). Het grid is de "onzichtbare skeletstructuur" achter een nette layout.

## Waarom een grid?
Zonder grid plaats je elementen "op het oog", wat tot ongelijke, rommelige layouts leidt (zie [[Uitlijning]]). Een grid dwingt **consistentie** af: alles begint en eindigt op dezelfde lijnen, over schermen heen. Het maakt je ontwerp ook **responsive-vriendelijk**, want developers bouwen interfaces net zo op (met kolomsystemen).

## Startwaarden per toestel
| Toestel | Kolommen | Marge | Gutter |
|---|---|---|---|
| Mobiel | 4 | 16 px | 16 px |
| Tablet | 8 | 24 px | 24 px |
| Desktop | 12 | ≥ 32 px | 24 px |

Alle waarden zijn **veelvouden van 8**, zodat ze passen in je [[Spacing system]].

## In Figma
Selecteer een frame → rechterpaneel **Layout guide** → **+** → kies *Columns* en stel count, margin en gutter in. Zet het grid **zichtbaar** tijdens het ontwerpen en verberg het voor de presentatie. Uitleg: https://help.figma.com/hc/en-us/articles/360040450513-Create-layout-guides

---
Hoort bij: [[UI Principes]]
