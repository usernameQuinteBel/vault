---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 17
groep: Oefeningen
---
# React 2 - Oefeningen 📝

> Twee state-oefeningen in de lesson2-map: een **rekenmachine** en een **BMI-calculator** met sliders. Oefent [[State (useState)|state]], [[Events (React)|events]], [[Lijsten renderen met map|lijsten renderen]] en [[Lifting state up]].

## 1. Calculator
1. Kopieer `calculator.jsx` naar `components` en roep hem aan in `App.jsx`.
2. Werk `Label` uit met prop **`text`** (bv. 2453 in de display).
3. Werk `Button` uit met prop **`value`**.
4. Definieer in `Calculator` de array en render er **12 buttons** mee ([[key (React lijsten)|key]] niet vergeten):
```js
const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "C", "0", "Del"];
```
5. Maak de knoppen werkend: een cijfer verschijnt in de display, **Del** verwijdert het laatste cijfer, **C** wist alles.
6. Rekenen met de JavaScript-functie **`eval()`**. Die wordt normaal **afgeraden om veiligheidsredenen**; hier mag het één keer.

## 2. BMI Calculator
- Drie sliders: **lengte**, **gewicht** en **bmi**. De bmi-slider wordt berekend uit de twee andere en beweegt automatisch mee.
- Kopieer `bmi_calculator.jsx` naar `components` en `range.css` naar `src`; importeer met `import '../range.css';`.
- `Label` en `Slider` zijn klaar; maak **`BmiSlider`** en werk **`BmiCalculator`** af.
- Formule: **gewicht gedeeld door lengte in het kwadraat**.

## Aanpak
- Houd de waarden (display, lengte, gewicht) als **state in de oudercomponent** en geef ze samen met handlers als props door aan de kindcomponenten ([[Lifting state up]]).

## Begrippen
[[State (useState)]] · [[Events (React)]] · [[Lijsten renderen met map]] · [[key (React lijsten)]] · [[Lifting state up]] · [[Controlled component]] · [[Props]]

---
Hoort bij: [[React - State]]
