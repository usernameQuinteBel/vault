---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [17]
groep: React front end
aliases: [Controlled input, Single source of truth]
---
# Controlled component

> Een formulierelement (`<input>`, `<textarea>`, `<select>`) waarvan de waarde in **React-state** bewaard wordt: **React is de single source of truth**.

In gewone HTML bewaren die elementen hun eigen state.
```jsx
const [firstName, setFirstName] = useState('');
<input value={firstName} onChange={(event) => setFirstName(event.target.value)} />
<p>Hello {firstName}</p>
```
Stappen: 1) state-variabele, 2) initialiseren met `useState`, 3) `value`-prop koppelen, 4) `onChange`-handler die de state bijwerkt, 5) waarde tonen.

`event.target` = het DOM-element dat de gebeurtenis veroorzaakte (de `<input>`).

## Gerelateerd
[[State (useState)]] · [[Events (React)]] · [[Spread operator]]

---
Hoort bij: [[React - State]]
