---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: 7
groep: Accessibility
aliases: [Contrast, Contrastratio, Color contrast]
---
# Kleurcontrast

> De verhouding in helderheid tussen voorgrond (tekst, icoon) en achtergrond, uitgedrukt als ratio van **1:1** (geen verschil) tot **21:1** (zwart op wit). [[WCAG]] AA vraagt **4,5:1** voor tekst en **3:1** voor grote tekst en UI-elementen.

## Meten in Figma
1. Selecteer een tekstlaag of icoon.
2. Klik in het rechterpaneel op het kleurstaal bij **Fill**.
3. Klik in de color picker op **Check color contrast**: je ziet de ratio met de laag erachter.
4. Waarschuwing bij AA = haalt de norm niet.
5. Via het instellingen-icoon kies je **Normal text**, **Large text** of **Graphics** (iconen, randen).

Andere tools: **Stark**-plugin (contrast, klikzones, kleurenblindheid), **Color Blind**-plugin, **WebAIM Contrast Checker**; als het gebouwd is: **WAVE** en **Google Lighthouse**.

## Voorbeeld-audit (productkaart uit de les)
| Element | Gemeten | Probleem | Oplossing |
|---|---|---|---|
| Winkelmandknop (wit icoon op oranje) | **2,2 : 1** | Iconen moeten ≥ 3:1 | Donker icoon (7,0:1) of donkerder oranje |
| "Morgen geleverd" (groen op wit) | **3,1 : 1** | Tekst moet ≥ 4,5:1 | green/700 (#007A0F) → 5,5:1 |
| Sterren (geel op wit) | **1,4 : 1** | Te licht én vol/leeg verschilt enkel in kleur | Score ook als tekst ("4,0"), donkerder geel |
| Titel, header, "Onze keuze" | 5,6–18,6 : 1 | ✓ | — |

## Fouten noteren
Druk op **C** (comment), klik op het element en schrijf: wat, gemeten ratio, norm. Bv. *"Prijs: 3,1 : 1 (min. 4,5)"*. Werk per twee: één meet, één noteert.

## Oplossen via tokens
Los een contrastfout op door een **semantische token** naar een donkerdere tint te laten verwijzen, niet door de primitive zelf aan te passen. Zie [[Design tokens]].

---
Hoort bij: [[Design Systems & Accessibility]]
