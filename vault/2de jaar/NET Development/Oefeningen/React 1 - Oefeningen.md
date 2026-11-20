---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 16
groep: Oefeningen
---
# React 1 - Oefeningen 📝

> Drie component-oefeningen in de `components`-map van de lesson1-voorbeelden: een **vermenigvuldigingstabel**, een **sterrenbeoordeling** en een **voortgangsbalk**, telkens opgesplitst in subcomponenten met [[Props]].

## Overzicht
| Oefening | Component | Props | Subcomponenten |
|---|---|---|---|
| 1 Multiplication Table | `MultiplicationTable` (`multiplication_table.jsx`) | `number` | `Header` (`number`), `Row` (`factor1`, `factor2`), **10** `Row`s |
| 2 Rater | `Rater` (`rater.jsx`) | `rating`, `max` | `Label` (`score`), `Star` (`mode`: On/Off) |
| 3 Progress Bar | `ProgressBar` (`progress_bar.jsx`) | `percentage`, `color` | `Label`, `Bar` (zelfde props) |

## 1. Multiplication Table
- Aanroep: `<MultiplicationTable number="9" />` en `<MultiplicationTable number="3" />`.
- Rijen als "6 x 9 = 54" met een **for-loop**.
- De opgave geeft drie stijlobjecten (`headerStyle`, `cellStyle`, `tableStyle`) met inline CSS in camelCase, bv. `fontSize`, `backgroundColor` ([[Styling in React]]).

## 2. Rater
- Kopieer `StarOff.png` en `StarOn.png` naar `public/images`.
- Aanroep: `<Rater rating="7" max="8" />`; de sterren toon je met een **for-loop**.
- `score` = rating / max (1 op 5 = 0,2; 3 op 3 = 1); tekst via een **switch**:

| Score | Tekst |
|---|---|
| < 0,1 | disaster |
| ≤ 0,3 | insufficient |
| ≤ 0,5 | sufficient |
| ≤ 0,6 | average |
| ≤ 0,8 | good |
| ≤ 0,9 | very good |
| > 0,9 | excellent |

## 3. Progress Bar
- Bekijk de HTML in `progress_bar.html` en zet die om naar een React-component.
- Aanroep vanuit `App.jsx`, bv. `<ProgressBar percentage="75" color="#ce4b99" />`.

## Valkuilen
- In [[JSX]] schrijf je CSS-properties in **camelCase** (`fontSize`, niet `font-size`).

## Begrippen
[[React]] · [[Component]] · [[Props]] · [[JSX]] · [[Styling in React]]

---
Hoort bij: [[React - Components]]
