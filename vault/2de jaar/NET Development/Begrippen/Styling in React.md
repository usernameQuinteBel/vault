---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [16]
groep: React front end
aliases: [className, style-object, CSS modules]
---
# Styling in React

> Twee manieren: CSS-klassen met **`className`**, of een **style-object** ("the React way").

**a) CSS + `className`**
```jsx
<div className="letter">{props.children}</div>
```
`class` is een gereserveerd woord in JavaScript, dus `className`.

**b) Style-object**
```jsx
const letterStyle = { padding: 10, margin: 10, backgroundColor: "#ffde00", fontFamily: "monospace", fontSize: 32 };
return <div style={letterStyle}>{props.children}</div>;
```
| CSS | React-object |
|---|---|
| één woord (`padding`, `color`) | ongewijzigd |
| met streepje (`background-color`) | **camelCase**: `backgroundColor` |
| numerieke waarde (`padding: 10`) | React voegt **`px`** toe |

In MotoGP staan ook `.module.css`-bestanden per scherm en Bootstrap in `index.html` ([[React - Single Page Applications]]).

## Gerelateerd
[[JSX]] · [[Component]]

---
Hoort bij: [[React - Components]]
