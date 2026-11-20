---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [16]
groep: React front end
aliases: [JSX-syntax, React.createElement]
---
# JSX

> HTML-achtige syntax binnen JavaScript; een bouwtool zet ze om naar gewone JavaScript-calls (`React.createElement`).

Zonder JSX: `React.createElement("div", null, React.createElement("h1", null, "Batman"), …)` — onleesbaar.
```jsx
root.render(
  <div>
    <h1>Batman</h1>
    <h1>Iron Man</h1>
  </div>
);
```
## Regels
- Eén **root-tag** teruggeven, of een fragment `<> … </>`.
- JavaScript-waarden tussen **`{ }`**: `<h1>Hello {props.target}!</h1>`.
- `className` i.p.v. `class` (gereserveerd woord) — zie [[Styling in React]].
- Het eindresultaat in de browser is altijd HTML/JavaScript.

## Gerelateerd
[[Component]] · [[Props]] · [[Vite]]

---
Hoort bij: [[React - Components]]
