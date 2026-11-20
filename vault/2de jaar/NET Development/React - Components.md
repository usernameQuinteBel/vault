---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 16
groep: Deel C: React front end
aliases: [React les 1, React Lesson 1 Components, JSX, Vite, props, Components React]
---
# React - Components

> **React** bouwt een UI uit **herbruikbare componenten** (JavaScript-functies die **JSX** teruggeven); gegevens stroomen erin via **props**, je stijlt met `className` of een **style-object**, en grotere onderdelen splits je op in kleine componenten die elk één ding doen.

_Slides: "React Lesson 1: Components" (project `lesson1` met Vite), plus oefeningen Multiplication Table, Rater en Progress Bar._

## 1. Multi-page vs single-page
| | **Multi-page** | **Single-Page App (SPA)** |
|---|---|---|
| Werking | bijna elke actie die de weergave wijzigt navigeert naar een **volledig andere pagina**; pagina's worden afgebroken en opnieuw getekend | de pagina wordt **één keer** geladen; bij gebruikersinteractie **vervang je de inhoud** van een deel van de pagina door de data/HTML die bij de actie past |
| Gevolg | veel minder app-state te onthouden (cookies, server-side) | veel **vloeiendere** ervaring; je kan zelfs overgangsanimaties gebruiken |
JavaScript-frameworks: **Vue.js, Angular, React** (React gebruikt door o.a. Netflix, Airbnb, Dropbox, Atlassian, The New York Times). Zie [[SPA]] en [[React]].

## 2. Meet React: vier ideeën
1. **Razendsnelle DOM-manipulatie** — React houdt een **virtual DOM** bij; manipuleren daarvan is extreem snel. React vergelijkt je virtual DOM met de echte DOM, bepaalt welke wijzigingen er toe doen en voert het **minimum** aan DOM-wijzigingen uit (**reconciliation**).
2. **Moedigt echt samenstelbare UI aan** — modulair, compact en zelfstandig (**componenten**).
3. **Visuals volledig in JavaScript** gedefinieerd.
4. **Enkel de V in MVC** — React werkt in de **View-laag**; voor Model en Controller ben je vrij (bij ons: de **.NET API**).

### JSX
Zonder JSX schrijf je `React.createElement("div", null, React.createElement("h1", null, "Batman"), …)` — onleesbaar. Met **JSX** (HTML-achtige syntax naast je JavaScript) schrijf je markup:
```jsx
root.render(
  <div>
    <h1>Batman</h1>
    <h1>Iron Man</h1>
  </div>
);
```
Een bouwtool zet **JSX → JavaScript** om (**esbuild**; vroeger Babel; je kan het uitproberen op esbuild.github.io/try). Het eindresultaat in de browser is altijd **HTML, CSS en JavaScript**. Je kan JSX op twee manieren omzetten: een **ontwikkelomgeving rond Node en build-tools** (elke build converteert JSX naar JS) of de browser het runtime laten doen. Zie [[JSX]].

## 3. Node en Vite
- **Node.js** installeren (nodejs.org); controleer met `node -v` (en `npm -v`). Maak een map (bv. `SourceCode`) voor je React-apps. Zie [[Node en npm]].
- **Vite** = *next generation frontend tooling*; voor leren en kleine/middelgrote projecten hou je het bij Vite ([[Vite]]):
```bash
npm create vite@latest lesson1 -- --template react
# bevestig create-vite installeren; "Vite beta" => No
```
- Open de map `lesson1` in **VS Code**, nieuwe terminal, **`npm run dev`** → app op `http://localhost:5173/` (Ctrl-C om te stoppen).

### Projectstructuur
| Bestand | Rol |
|---|---|
| `index.html` | bevat `<div id="root"></div>` en `<script type="module" src="/src/main.jsx">` |
| `src/main.jsx` | start de app: `createRoot(document.getElementById('root')).render(...)` |
| `src/index.css` | globale stijlen |
| `src/App.jsx` | het hoofdcomponent |
| `src/components/` | **best practice**: je componenten hier plaatsen |
`root.render` neemt **één argument**: de HTML-achtige elementen (JSX) die je in de root-div wil tonen (`render(<h1>Hello world!</h1>)` = `render(React.createElement("h1", null, "Hello World!"))`).
**Oorspronkelijke `main.jsx`:**
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
**`StrictMode`** markeert mogelijke problemen in je app, toont zelf geen UI maar activeert extra controles/waarschuwingen; enkel in **development**, niet in de productiebuild.

## 4. Components
Waarom? Zonder componenten herhaal je code (`<h1>Batman</h1>`…) en moet je overal dezelfde wijziging doorvoeren (zoals een functie `getDistance(speed, time)` die je hergebruikt i.p.v. dezelfde berekening te kopiëren). Components zijn *een van de belangrijkste manieren om visuals en interacties te definiëren*. Zie [[Component]].

**Je eerste component:**
```jsx
function Hello() {
  return (
    <h1>Hello</h1>
  );
}

createRoot(document.getElementById('root')).render(
  <Hello />,
);
```
**Regels:** de naam begint met een **hoofdletter**; je gebruikt het als tag `<Hello />`; je geeft **één root-tag** terug (of gebruikt een fragment `<> … </>`). **Oefening:** toon `Hello` 4 keer (in één `<div>`).

### Props (properties)
Een **parameter** van de functie `Hello(props)` is een **property** van het component. Waarden geef je mee als attributen; je leest ze via **`props.<naam>`**, tussen **accolades** (in JSX wordt wat tussen `{ }` staat als **expressie** geëvalueerd, anders zie je de ruwe tekst `target`):
```jsx
function Hello(props) {
  return (
    <h1>Hello {props.target}!</h1>
  )
}

root.render(
  <div>
    <Hello target="Bono" />
    <Hello target="Batman" />
    <Hello target="Iron Man" />
  </div>
)
```
Zie [[Props]].

### Componenten in eigen bestanden
Zet `Hello` in `src/components/hello.jsx` en **exporteer** één default:
```jsx
function Hello(props) {
  return (<h1>Hello {props.target}!</h1>)
}
// You don't need to make all functions in the component available, only 1 default
export default Hello;
```
In `App.jsx`:
```jsx
import './App.css';
import Hello from './components/hello';

function App() {
  return (
    <div>
      <Hello target="Batman"/>
      <Hello target="Bono"/>
    </div>
  )
}
export default App;
```

### `props.children`
`props.children` geeft de **inhoud tussen de tags** terug (`<Letter>A</Letter>` → `A`).
```jsx
function Letter(props) {
  // props.children returns the content of <Letter>...</Letter>
  return (<div>{props.children}</div>)
}
export default Letter;
```
**Oefening:** toon alle klinkers (A E I O U) met `Letter`.

## 5. Styling in React
**a) CSS in `index.css` + `className`:**
```css
.letter {
  padding: 10px; margin: 10px;
  background-color: #ffde00; color: #333;
  display: inline-block;
  font-family: monospace; font-size: 32px; text-align: center;
}
```
```jsx
<div className="letter">{props.children}</div>
```
Gebruik **`className`** i.p.v. `class`: `class` is een **gereserveerd woord** in JavaScript.

**b) Styling "the React way" (style-object):** 1) CSS-properties in een **JavaScript-object** zetten, 2) de CSS-syntax omzetten naar React-syntax, 3) het **`style`-attribuut** gebruiken.
```jsx
function Letter(props) {
  const letterStyle = {
    padding: 10, margin: 10,
    backgroundColor: "#ffde00", color: "#333",
    display: "inline-block",
    fontFamily: "monospace", fontSize: 32, textAlign: "center"
  };
  return (<div style={letterStyle}>{props.children}</div>)
}
```
| CSS | React-object |
|---|---|
| één woord (`padding`, `margin`, `color`) | **ongewijzigd** |
| met streepje (`background-color`, `font-family`, `border-radius`) | **camelCase** zonder streepje: `backgroundColor`, `fontFamily`, `borderRadius` |
| numerieke waarden (`padding: 10`) | React voegt **`px`** automatisch toe |
Zie [[Styling in React]].

**Oefening:** maak de achtergrondkleur aanpasbaar via een property: `<Letter bgcolor="#58B3FF">A</Letter>` (met `#FF605F`, `#FFD52E`, `#49DD8E`, `#AE99FF` voor E, I, O, U) → `backgroundColor: props.bgcolor`.

## 6. Complexe componenten
> **Algemene regel:** een component moet **één ding** doen. Doet het te veel, splits het dan op in meerdere componenten (*too many!!*). Een React-app zonder componenten bouwen is zoals een JavaScript-app zonder functies.

**Voorbeeld: Color Card** = `Card` bestaande uit `Square` + `Label`:
```jsx
function Square() {
  const squareStyle = { height: 150, backgroundColor: "#FF6663" };
  return (<div style={squareStyle} />);
}

function Label() {
  const labelStyle = { fontFamily: "sans-serif", fontWeight: "bold", padding: 13, margin: 0 };
  return (<p style={labelStyle}>#FF6663</p>);
}

function Card() {
  const cardStyle = {
    height: 200, width: 150, padding: 0, backgroundColor: "#FFF",
    filter: "drop-shadow(0px 0px 5px #666)"
  };
  return (
    <div style={cardStyle}>
      <Square />
      <Label />
    </div>
  );
}
export default Card;
```
**Oefening "Passing properties, again":** de kleur doorgeven als property, zodat `Card` die aan `Square` én `Label` kan doorgeven.

### Arrays en lussen (voorproefje)
Een lijst genereer je met een gewone lus die elementen in een array pusht; elk element krijgt een **`key`**:
```jsx
function Numbers() {
  let output = [];
  for (var i = 1; i <= 5; i++) {
    output.push(<div key={i}>{i}</div>)
  }
  return (<div>{output}</div>);
}
```
(Meer over lijsten volgt later, zie [[React - State]].)

## 7. Oefeningen
Opgave in de oefeningsdoc "Exercises React – lesson 1", te maken in de map `components` van `lesson1`: zie [[React 1 - Oefeningen]].
1. **MultiplicationTable** — property `number`; subcomponenten `Header` (property `number`) en `Row` (`factor1`, `factor2`, bv. "6 x 9 = 54"); **10 Row's** met een **for-lus**; aanroep `<MultiplicationTable number="9" />`.
2. **Rater** — properties `rating` en `max`; subcomponenten `Label` (property `score`, bv. 1/5 = 0,2; 3/3 = 1; tekst via een **`switch`**: < 0,1 disaster · ≤ 0,3 insufficient · ≤ 0,5 sufficient · ≤ 0,6 average · ≤ 0,8 good · ≤ 0,9 very good · > 0,9 excellent) en `Star` (property `mode`: On of Off, afbeeldingen `StarOn.png`/`StarOff.png` in `public/images`); sterren met een for-lus; `<Rater rating="7" max="8" />`.
3. **ProgressBar** — properties `percentage` en `color`; subcomponenten `Label` en `Bar` met dezelfde properties; bv. `<ProgressBar percentage="75" color="#ce4b99" />`.

## Tips en valkuilen
- Componentnamen **met hoofdletter** (`Hello`, niet `hello`); anders denkt React dat het een HTML-tag is.
- Eén **root-tag** per component (of `<> … </>`).
- Waarden in JSX staan tussen **`{ }`**; strings als attribuut tussen aanhalingstekens.
- `className` i.p.v. `class`; stijl-properties in **camelCase**.
- Props zijn **alleen-lezen**: een component wijzigt zijn eigen props niet.
- Houd componenten **klein**: één verantwoordelijkheid.

## Begrippen
[[React]] · [[SPA]] · [[JSX]] · [[Vite]] · [[Node en npm]] · [[Component]] · [[Props]] · [[Styling in React]] · [[key (React lijsten)]]

## Oefeningen
[[React 1 - Oefeningen]]

---
Hoort bij: [[NET Development|.NET Development]]
