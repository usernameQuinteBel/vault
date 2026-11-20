---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [18]
groep: React front end
aliases: [react-router-dom, BrowserRouter, Routes, Route, Link]
---
# React Router

> De standaardbibliotheek voor **routing in React**: navigeren tussen "pagina's", de browser-URL aanpassen en de UI in sync houden, zonder de pagina te herladen ([[SPA]]).

```bash
npm install react-router-dom
```
```jsx
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

<BrowserRouter>
  <Link to="/stuff">Stuff</Link>
  <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/stuff'} element={<Stuff/>}/>
  </Routes>
</BrowserRouter>
```
| Element | Rol |
|---|---|
| `BrowserRouter` | omringt de app (root); zonder niet bruikbaar |
| `Link` | vervangt `<a href>` |
| `Routes` | container; toont de **eerste** die matcht |
| `Route path element` | pad → component |

## Gerelateerd
[[Nested routes (Outlet)]] · [[useParams]] · [[useNavigate]] · [[NavLink]]

---
Hoort bij: [[React - Single Page Applications]]
