---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [16, 17]
groep: React front end
aliases: [Properties, props.children, children, Destructuring]
---
# Props

> **Properties** van een component: waarden die je als attributen meegeeft en in het component leest. Props zijn **alleen-lezen**.

```jsx
<Hello target="Bono" />
function Hello(props) { return <h1>Hello {props.target}!</h1> }
function Hello({ target }) { return <h1>Hello {target}!</h1> }   // via de namen
```
- Bij destructuring vergeet je de **`{ }`** niet; bij meerdere props: `{ a, b }`.
- **`props.children`** = de inhoud tussen de tags: `<Letter>A</Letter>` → `A`.
- Ook **functies** (event handlers) geef je als prop door ([[Events (React)]]).
- Veranderende data hoort in [[State (useState)]], niet in props.

## Gerelateerd
[[Component]] · [[Lifting state up]]

---
Hoort bij: [[React - Components]]
