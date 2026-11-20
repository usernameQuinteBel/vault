---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 17
groep: Deel C: React front end
aliases: [React les 2, React Lesson 2 State, useState, useEffect, controlled component, lifting state up]
---
# React - State

> Props zijn **alleen-lezen**; veranderende data bewaar je in **state** met de **`useState`-hook**: de setter-functie triggert een **re-render**, **events** koppel je via handlers, formulieren maak je **controlled** en gedeelde state verplaats je naar het dichtstbijzijnde gemeenschappelijke parent (**lifting state up**).

_Slides: "React Lesson 2: State" (project `lesson2`), plus oefeningen Calculator en BMI Calculator._

**Inhoud:** props via namen · lijsten en `key` · state en hooks (`useState`, `useEffect`) · events · state zet een re-render in gang · controlled component · objecten in state wijzigen · lifting state up.

## 1. Opzet
```bash
npm create vite@latest lesson2 -- --template react
```
Open in VS Code, run `npm run dev`. Kopieer `App.jsx` en `data.js` uit de resources naar `src`, en `components` naar `src`.

## 2. Omgaan met data
**`data.js`** exporteert een array:
```javascript
export const students = [
  { "id": 1, "name": "Jeff", "grade": "A" },
  { "id": 2, "name": "Bill", "grade": "F" },
  { "id": 3, "name": "Jane", "grade": "B-" }
];
```
**`App.jsx`:** gebruik **`{ }` bij het importeren** van functies/waarden die **niet default geëxporteerd** zijn:
```jsx
import { students } from './data';
import { ListArray } from './components/lists';

function App() {
  return (<div><ListArray students={students} /></div>)
}
export default App;
```
### Props via namen (destructuring)
In plaats van `props.students` gebruik je **de namen** van de props: `function ListArray({ students })`. Vergeet de **`{ }`** niet; bij meer dan één property: `{ name, address, … }`.
```jsx
export function ListArray({ students }) {
  let listItems = [];
  for (var i = 0; i < students.length; i++) {
    listItems.push(<li>{students[i].name} {students[i].grade}</li>);
  }
  return (<ul>{listItems}</ul>)
}
```

### De `key`-property (waarschuwing oplossen)
De console geeft: *"Warning: Each child in a list should have a unique "key" prop."* Geef elk gegenereerd element een **unieke `key`** (bv. de index of een id); React gebruikt die om toekomstige UI-updates te **optimaliseren**. Zie [[key (React lijsten)]].

### Map-iterator
Eleganter dan een for-lus: **`map`** op de array:
```jsx
export function ListMap({ students }) {
  return (
    <ol>
      {students.map((student) =>
        <li key={student.id}>{student.name} {student.grade}</li>
      )}
    </ol>
  )
}
```
Zie [[Lijsten renderen met map]].

## 3. State
### Probleem met gewone variabelen (Counter)
```jsx
function Counter() {
  let count = 0;
  function handleClick() {
    console.log(count);
    count = count + 1;
  }
  return (
    <div style={backgroundStyle}>
      <Number display={count}/>
      <button onClick={handleClick}>+</button>
    </div>
  )
}
```
**Properties zijn read-only.** Kunnen we dan **lokale variabelen** gebruiken? **Nee:**
- wijzigingen aan lokale variabelen **triggeren geen render**;
- lokale variabelen **blijven niet bestaan** tussen renders (bij elke render begint `count` weer op 0; de console toont wel oplopende waarden maar de UI blijft op 0).

### Je eerste hook: `useState`
```jsx
import { useState } from 'react';
const [count, setCount] = useState(0);
```
`useState` geeft **een paar** terug:
1. een **state-variabele** (`count`) die de data **bewaart tussen renders**;
2. een **state-setter** (`setCount`) die React laat **opnieuw renderen** met de nieuwe state.
Het enige argument van `useState` is de **beginwaarde**. **Muteer state nooit** (`count = count + 1`): behandel state als **immutable**. Zie [[State (useState)]].

**Oefening Counter:** een werkende counter met `useState`, de state-variabele en de setter (vergeet de import).

### Hooks
**Hooks** zijn functies waarmee je vanuit **function components** in React-**state en lifecycle** features kan "haken". `useState` voegt state toe; **`useEffect`** laat je **side effects** uitvoeren (je zegt React dat je component iets moet doen **na het renderen**).

### useEffect (LightningCounter)
Voorbeeld: bliksem treft de aarde ~100 keer per seconde; een teller verhoogt een getal met dat aantal (de component toont `Label` met een getal, "LIGHTNING STRIKES WORLDWIDE").
```jsx
useEffect(() => {
  setTimeout(add100Strikes, 1000);
});
```
Met `useEffect` voer je code uit **nadat het component gerenderd (gemount) is**. `setTimeout` voert `add100Strikes` **één keer** uit na 1000 ms. *"Don't we need a loop?"* — nee: elke state-wijziging veroorzaakt een nieuwe render, en dus opnieuw de effect, waardoor de timer zich herhaalt. (Later meer over `useEffect` in [[React - Axios]].) Zie [[useEffect]] en [[Side effects]].

## 4. Events
**Shift-klik:** hoe tel je 10 op als je tegelijk shift indrukt? Gebruik het **React event object** (screenX/Y, **`shiftKey`**, `target` = het DOM-element dat de gebeurtenis veroorzaakte):
```jsx
function handleClick(event) {
  if (event.shiftKey) {
    setCount(count + 10);
  } else {
    setCount(count + 1);
  }
}
```
### Luisteren naar events op components
Je kan niet rechtstreeks op een **eigen component** naar events luisteren, hoe simpel de HTML ook is. Geef de handler als **prop** door aan een component dat de knop bevat:
```jsx
<PlusButton onClick={handleClick} />

function PlusButton({ onClick }) {
  return (<button onClick={onClick}>+</button>)
}
```
### Events met parameters
```jsx
function Button({ operation, onClick }) {
  return (<button onClick={onClick}>{operation}</button>)
}
<Button operation="+" onClick={handleClick} />
<Button operation="-" onClick={handleClick} />
```
### Een functie als event handler doorgeven
| Situatie | Schrijfwijze |
|---|---|
| geen extra argumenten | `<button onClick={onClick}>+</button>` |
| extra argument(en) | `<button onClick={() => onClick('+')}>+</button>` |
| ook het event-object nodig | `<button onClick={(event) => onClick(event, '+')}>+</button>` |
De laatste vorm heb je nodig om te reageren op de **shiftKey** én de **bewerking** (+/-) als argument. **Oefening "Fix the counter!"**: laat `+` en `-` elk correct werken. Zie [[Events (React)]].

## 5. Quiz: setState triggert een re-render
```jsx
export default function Plus3Counter() {
  const [number, setNumber] = useState(0);
  function handleClick() {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  }
  return (<>{number}<button onClick={handleClick}>+3</button></>)
}
```
**Resultaat: het getal wordt 1, niet 3.** Uitleg: in **die render** is `number` altijd **0**. Alle drie de oproepen zijn dus `setNumber(0 + 1)`; React bereidt voor `number` = 1 op de volgende render. **Batching:** bij meerdere `setState`-calls in dezelfde event handler her-rendert React **niet drie keer** maar **bundelt** ze tot één update; tussenstaten worden niet bewaard.

## 6. Controlled component
In HTML bewaren `<input>`, `<textarea>`, `<select>` hun **eigen state**. In React bewaar je veranderlijke state in het component en wijzig je ze enkel met de setter. Combineer je ze door **React-state de "single source of truth"** te maken, dan **bepaalt het component ook wat er in het formulier gebeurt**; zo'n input noemen we een **controlled component**. Zie [[Controlled component]].

`event.target` geeft het DOM-element dat de gebeurtenis veroorzaakte:
```jsx
function handleChange(event) {
  console.log(event.target);   // de <input>
}
<input style={inputStyle} onChange={handleChange} />
```
**Oefening "Make React the single source of truth":**
1. state-variabele `firstName` maken;
2. state initialiseren met `useState` (de waarde van de input);
3. de `value`-prop van `<input>` aan die state koppelen;
4. een **`onChange`-handler** die de state bijwerkt bij elke toets (`setFirstName(event.target.value)`);
5. de waarde tonen na "Hello".

## 7. Objecten in state wijzigen (spread operator)
```jsx
const [person, setPerson] = useState({
  firstName: 'Jeff', lastName: 'Jones', email: 'jjones@thomasmore.be'
});
```
- **Fout 1:** `person.firstName = e.target.value;` → **muteren**, geen re-render.
- **Fout 2:** `setPerson({ firstName: e.target.value })` → het object wordt **vervangen** door één property, de rest gaat verloren (`Jeffrey undefined (undefined)`).
- **Juist:** met de **spread operator (`...`)** kopieer je de bestaande properties en overschrijf je er één:
```jsx
function handleFirstNameChange(e) {
  setPerson({ ...person, firstName: e.target.value });
}
function handleLastNameChange(e) {
  setPerson({ ...person, lastName: e.target.value });
}
function handleEmailChange(e) {
  setPerson({ ...person, email: e.target.value });
}
```
Spread-voorbeelden: `[...numbers1, ...numbers2]` combineert arrays; `{ ...settings, theme: 'dark' }` maakt een **nieuw** object met één gewijzigde property. **Oefening:** maak alle velden van het formulier controlled met het `person`-object en spread in `setPerson`. Zie [[Spread operator]].

## 8. Lifting state up
`Accordion` bevat meerdere `Panel`-componenten; elk heeft eigen state `isActive` en toont een knop "Show":
```jsx
function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (<p>{children}</p>) : (<button onClick={() => setIsActive(true)}>Show</button>)}
    </section>
  );
}
```
**Oefening:** **slechts één paneel tegelijk** open. Aanpak:
1. verwijder de state uit beide panels;
2. verplaats ze naar hun **dichtstbijzijnde gemeenschappelijke parent** (`Accordion`; gebruik een **int** (index van het actieve paneel), geen boolean);
3. geef ze door via **props** (en een handler om te wijzigen).
Dit heet **lifting state up** en is *een van de meest voorkomende dingen* die je in React doet. Hulp en oplossing: react.dev (*sharing state between components*). Zie [[Lifting state up]].

## 9. Oefeningen
Zie [[React 2 - Oefeningen]]: **Lifting state up**, **Calculator** en optioneel **BMI Calculator**.
- **Calculator:** `calculator.jsx` uit de resources; maak `Label` (prop `text`) en `Button` (prop `value`); definieer `const numbers = ["7","8","9","4","5","6","1","2","3","C","0","Del"];` en render 12 `Button`s; cijfers verschijnen op de display, **Del** verwijdert het laatste cijfer, **C** wist alles; rekenen met **`eval()`** (normaal af te raden om veiligheidsredenen, maar hier toegelaten).
- **BMI Calculator:** drie sliders (lengte, gewicht en bmi); bmi = **gewicht gedeeld door lengte in het kwadraat**; `BmiSlider` maken en `BmiCalculator` afwerken (`bmi_calculator.jsx` en `range.css` uit de resources, `import '../range.css'`).

## Tips en valkuilen
- **Nooit state muteren** — altijd via de setter; bij objecten/arrays een **nieuwe kopie** maken (spread).
- Een gewone variabele bewaart niets tussen renders; gebruik **`useState`**.
- `onClick={handleClick}` (zonder haakjes) → de functie wordt doorgegeven; `onClick={handleClick()}` roept ze **meteen** aan.
- Lijsten: altijd een **unieke `key`** (bij voorkeur een id).
- Meerdere `setX(x + 1)` na elkaar tellen niet op (batching, zelfde `x` in één render).

## Begrippen
[[State (useState)]] · [[useEffect]] · [[Side effects]] · [[Events (React)]] · [[Controlled component]] · [[Spread operator]] · [[Lifting state up]] · [[key (React lijsten)]] · [[Lijsten renderen met map]] · [[Props]]

## Oefeningen
[[React 2 - Oefeningen]]

---
Hoort bij: [[NET Development|.NET Development]]
