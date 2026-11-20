---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: 7
groep: Design system
aliases: [Component set, Varianten, States, Componenten, Instances]
---
# Component set en varianten

> Een **component set** is één component in [[Figma]] met al zijn **varianten**: bv. een knop in alle types en alle states. Je gebruikt overal **instances**: pas je de hoofdcomponent aan, dan verandert elk scherm mee.

## Properties
| Soort | Voorbeeld |
|---|---|
| Variant-property | `Type` = Primary / Secondary, `State` = Default / Hover / Focus / Disabled |
| Text property | De tekst op de knop |
| Boolean | Icoon aan/uit |
| Instance swap | Icoon wisselen |

Naam van een variant: `Type=Primary, State=Hover`.

## States ontwerpen
| State | Hoe |
|---|---|
| **Default** | Eerst volledig afwerken met [[Auto Layout]] en [[Design tokens]] |
| **Hover** | Bv. een donkerdere tint van dezelfde kleur |
| **Focus** | Bv. een extra rand van 2–3 px (Stroke › Outside) die **3:1** haalt — moet zichtbaar zijn **zonder hover** (toetsenbordgebruikers!) |
| **Disabled** | Grijs en duidelijk niet klikbaar; lager contrast mag hier |
| **Error** (invoerveld) | Rode rand **+ icoon + foutboodschap**, niet enkel rood |

## Zo maak je het
1. Maak de knop af → component: `Ctrl/⌘ + Alt + K`.
2. Dupliceer per state (`Ctrl/⌘ + D`) en pas kleuren aan (enkel tokens).
3. Selecteer alle varianten › rechterpaneel › **Combine as variants**.
4. Hernoem "Property 1" naar **State** en geef elke variant een waarde.
5. Vervang losse knoppen in je schermen door **instances** (geen losgekoppelde kopieën).

## Accessibility inbouwen
- **Knoppen**: contrast, zichtbare focus state, klikzone ≥ 44 px.
- **Invoervelden**: altijd een **zichtbaar label**, rand haalt 3:1, foutmelding met icoon en tekst.
- **Tekst**: text styles met leesbare grootte en regelhoogte.
- **Kleuren**: tokens zo gekozen dat combinaties de normen halen.

Zie ook Apple Human Interface Guidelines: Accessibility.

---
Hoort bij: [[Design Systems & Accessibility]]
