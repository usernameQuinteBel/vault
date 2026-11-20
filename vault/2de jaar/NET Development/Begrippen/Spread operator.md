---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [17]
groep: React front end
aliases: [Spread, ...]
---
# Spread operator

> `...` kopieert bestaande properties/elementen in een **nieuw** object of array; zo wijzig je state zonder te muteren.

```jsx
const [person, setPerson] = useState({ firstName: 'Jeff', lastName: 'Jones', email: 'jjones@thomasmore.be' });
```
| Aanpak | Resultaat |
|---|---|
| `person.firstName = e.target.value` | **muteren**, geen re-render |
| `setPerson({ firstName: e.target.value })` | object **vervangen**, rest gaat verloren (`undefined`) |
| `setPerson({ ...person, firstName: e.target.value })` | **juist**: kopie + één property overschreven |

```javascript
[...numbers1, ...numbers2]                 // arrays combineren
{ ...settings, theme: 'dark' }              // nieuw object met één gewijzigde property
```

## Gerelateerd
[[State (useState)]] · [[Controlled component]]

---
Hoort bij: [[React - State]]
