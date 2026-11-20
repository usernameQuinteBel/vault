---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [16]
groep: React front end
aliases: [Components, Function component, Componenten]
---
# Component

> Een **JavaScript-functie die JSX teruggeeft** en als tag gebruikt wordt (`<Hello />`); de bouwsteen van een React-app. Een component moet **één ding** doen.

```jsx
function Hello(props) {
  return (<h1>Hello {props.target}!</h1>)
}
export default Hello;          // één default export per bestand
```
```jsx
import Hello from './components/hello';
<Hello target="Batman" />
```
## Regels
- Naam begint met een **hoofdletter**.
- Één root-tag (of fragment).
- Bestanden in `src/components/`.
- Doet een component te veel, **splits het op** (bv. `Card` = `Square` + `Label`).

## Waarom?
Zonder componenten herhaal je code en moet je overal dezelfde wijziging doorvoeren (zoals een functie hergebruik je een component).

## Gerelateerd
[[Props]] · [[JSX]] · [[Container vs presentational components]] · [[React]]

---
Hoort bij: [[React - Components]]
