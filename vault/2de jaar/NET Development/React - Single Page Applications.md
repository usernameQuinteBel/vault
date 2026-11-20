---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 18
groep: Deel C: React front end
aliases: [React les 3, React Lesson 3 SPA, React Router, routing React, Single Page Applications React]
---
# React - Single Page Applications

> Met **React Router** (`BrowserRouter`, `Routes`, `Route`, `Link`) navigeer je tussen "pagina's" van een **SPA** zonder de pagina te herladen: de URL en de UI blijven gesynchroniseerd, routes kunnen **parameters** (`:id`) en **geneste routes** (`Outlet`) hebben, en je navigeert programmatisch met **`useNavigate`**.

_Slides: "React Lesson 3: Single Page Applications" (project `lesson3`) en oefening MotoGP (front end opzetten)._

**Inhoud:** React Router · `BrowserRouter` · `Routes` · `Link` · route parameters · nested routes · `useNavigate` · `useParams` · `NavLink`. (De agenda vermeldt ook "updating arrays in state" en "manipulating the DOM with refs", maar die worden in de slides van deze les niet uitgewerkt.)

## 1. Opzet
```bash
npm create vite@latest lesson3 -- --template react
```
Kopieer uit de resources (`Resources/lesson3`): `App.jsx`, `index.css`, `components` en `data` naar `src`. Doel: een **Simple Single Page Application** met een menu (Home, Stuff, Class, Contact) en inhoud eronder. `App.jsx` bevat een `Header` (titel + lijst `ul.header`) en een `Main` (`div.content`).

## 2. React Router
> **React Router** is de standaardbibliotheek voor routing in React: navigatie tussen verschillende "pagina's", de **browser-URL aanpassen** en de **UI in sync houden met de URL — allemaal zonder de pagina te herladen**. Routing gebeurt **aan de client-kant** (SPA-aanpak), voor een naadloze ervaring.
```bash
npm install react-router-dom
```
Zie [[React Router]] en [[SPA]].

### Imports en structuur (`App.jsx`)
```jsx
import { Outlet, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
```
- **`BrowserRouter`** omringt de app (root); zonder niet bruikbaar.
- **`Link`** vervangt `<a href>` (anders herlaadt de pagina).
- **`Routes`** + **`Route`** koppelen een URL-pad aan een component.

```jsx
function Header() {
  return (
    <div>
      <h1>Simple Single Page Application</h1>
      <ul className="header">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/stuff" className="active">Stuff</Link></li>
        <li><Link to="/class" className="active">Class</Link></li>
        <li><Link to="/contact" className="active">Contact</Link></li>
      </ul>
    </div>
  )
}

function Main() {
  return (
    <div className="content">
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/stuff'} element={<Stuff/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
        <Route path={'/class'} element={<Class/>}/>
      </Routes>
    </div>
  )
}
```
| Element | Rol |
|---|---|
| `<Link to="/stuff">` | navigatielink (geen volledige page load) |
| `<Routes>` | container van alle routes; toont de **eerste die matcht** |
| `<Route path element>` | **pad → component** |
Een bezoek aan `/class` toont enkel het `Class`-component; de rest van de pagina (header) blijft staan.

## 3. Data en een lijst (Class)
`data/student_api.js` simuleert een API:
```javascript
const students = [
  { id: 565, name: "Annelies Gevers", grade: "A-" },
  { id: 11, name: "Ben Pauwels", grade: "A+" },
  { id: 91, name: "Elien Stevens", grade: "F" },
  { id: 23, name: "David Van Mol", grade: "D" },
  { id: 4002, name: "Paul Verstraeten", grade: "F" },
  { id: 8, name: "Sandra Wouters", grade: "D-" }
];
export function getAllStudents() { return students; }
export function getStudentById(id) { return students.find((s) => s.id === id); }
```
`class.jsx` toont een genummerde lijst met `map` (met `key={student.id}`):
```jsx
function Class() {
  return (
    <div>
      <h2>Class</h2>
      <ol>
        {getAllStudents().map((student) => {
          return (<li key={student.id}>{student.name}</li>);
        })}
      </ol>
    </div>
  );
}
export default Class;
```

## 4. Route parameters en nested routes
Doel: klik op een student in de lijst (`/class`) en toon zijn detail (`/class/23`) met een **Back**-link.

### Geneste routes met `Outlet`
```jsx
<Route path={'/class'} element={<Outlet />}>
  <Route index element={<Class />}/>
  <Route path={':id'} element={<Student />}/>
</Route>
```
- **`<Outlet />`** in de **parent route** rendert **één van de child route-elementen** (vergeet de import niet).
- Matcht de parent **exact**, dan rendert hij de **child index route** (`index` → `Class`).
- **`:id`** is een **route parameter** (dynamisch deel van de URL): `/class/23` → `Student`.
Zie [[Nested routes (Outlet)]].

### Links met parameter
```jsx
import { Link } from 'react-router-dom';
<li key={student.id}>
  <Link to={"/class/" + student.id}>{student.name}</Link>
</li>
```

### `useParams`
Geeft een **object met key/value-paren** van de dynamische parameters uit de huidige URL die door het `<Route path>` gematcht werden. Zie [[useParams]].
```jsx
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getStudentById } from '../data/student_api';

function Student() {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = getStudentById(Number(id));   // id uit de URL is een string!

  if (!student) {
    return <div>Student does not exist</div>
  }
  …
}
```
**Let op `Number(id)`:** parameters uit de URL zijn **strings**, de id's in de data zijn getallen (`===`).

### `useNavigate`
Geeft een functie waarmee je **programmatisch navigeert**:
```jsx
const navigate = useNavigate();
navigate('/stuff');   // naar een pad (zoals <Link to="...">)
navigate(-1);         // delta in de history stack: gelijk aan de Back-knop van de browser
```
**Oefening `student.jsx`:** toon de studentinformatie (Name, Id, Grade — eerst staat er letterlijk "student.name": je moet de waarden tussen `{ }` zetten) en maak een **Back-link/knop**. Zie [[useNavigate]].

## 5. Link vs NavLink
`NavLink` geeft **`isActive`** (boolean): `true` wanneer de huidige URL met het `to`-pad overeenkomt, anders `false`. Zo kan je de **actieve tab** stylen:
```jsx
<li>
  <NavLink to="/class"
    className={({ isActive }) => isActive ? "active" : undefined}>
    Class
  </NavLink>
</li>
```
**Oefening:** gebruik `NavLink` i.p.v. `Link` voor elke navigatietab en zorg dat de CSS-klasse **`active`** op de juiste tab staat. Zie [[NavLink]].

## 6. Oefening MotoGP: de front end opzetten
Zie [[MotoGP - React front-end opzetten]]. Samengevat:
1. `npm create vite@latest motogp -- --template react`; dependencies installeren, **React Router** installeren, app starten.
2. **Resources** (alle bestanden naar de projectroot kopiëren, bestaande overschrijven; dev-server eventueel herstarten) brengen minimale layout:
| Bestand/map | Rol |
|---|---|
| `index.html` | link naar de **Bootstrap**-stylesheet |
| `/public/assets/flags, races, riders, sponsors, teams` | afbeeldingen bij de **data uit de database**, bv. `<img src={`/assets/riders/${rider.number}.jpg`} />` |
| `vite.config.js` | mapping zodat je `/src` kan aanduiden met **`@`** |
| `/src/assets` | **design**-afbeeldingen (knoppen, menu-items…): `import logoImage from '@/assets/logo.png';` |
| `/src/App.jsx` | root component met **`BrowserRouter`** als root (nodig voor React Router); voorlopig één scherm |
| `/src/index.css` | stylesheet voor `App.jsx` (`App.css` niet meer nodig) |
| `/src/components/layout_template.jsx` | layout voor de hele app, met props **`children`** en **`title`**: `<Layout title="Races">…</Layout>` |
| `/src/components/menu/home_screen.jsx` (+ `.module.css`) | startpagina met groot MotoGP-logo |
| `/src/components/menu/menu_screen.module.css` | styling van het hoofdmenu |
> De afbeeldingen in `/public` hebben met **data** te maken, die in `/src` met het **design**.
3. **`MenuScreen`** (`/src/components/menu/menu_screen.jsx`): importeer de layout, de vier afbeeldingen en de menu-stylesheet; inhoud in `Layout` (geen titel); alle afbeeldingen in één `<div>` met `styles.containerCentered`; elke afbeelding in een `<div>` met `styles.cell`.
4. **Navigatie met React Router:** `HomeScreen` is weer het eerste scherm; klik op het logo → route **`/menu`** (**geen `<a href>`**, het is een SPA). Maak de vier afbeeldingen klikbaar naar `/list_races`, `/list_teams`, `/list_riders` en `/order/tickets` (nog niet bestaand → leeg scherm).

## Tips en valkuilen
- Gebruik **`Link`/`NavLink`/`navigate`**, nooit `<a href>` voor interne navigatie (die herlaadt de pagina en wist de state).
- Zet de app in een **`BrowserRouter`**.
- Route-parameters zijn **strings** → zet om met `Number(id)` indien nodig.
- Controleer op **niet-bestaande ids** (`if (!student)`).
- `index`-route = wat getoond wordt wanneer de parent exact matcht.

## Begrippen
[[React Router]] · [[Nested routes (Outlet)]] · [[useParams]] · [[useNavigate]] · [[NavLink]] · [[SPA]] · [[Props]]

## Oefening
[[MotoGP - React front-end opzetten]]

---
Hoort bij: [[NET Development|.NET Development]]
