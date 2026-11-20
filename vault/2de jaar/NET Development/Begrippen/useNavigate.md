---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [18, 19]
groep: React front end
aliases: [useNavigate hook, navigate]
---
# useNavigate

> Hook die een functie geeft om **programmatisch te navigeren**.

```jsx
const navigate = useNavigate();
navigate('/stuff');   // naar een pad (zoals <Link to="...">)
navigate(-1);         // een stap terug in de history = Back-knop van de browser
```
Gebruikt voor een Back-knop of na een klik op een icoon (`navigate('/' + id)`).

## Gerelateerd
[[React Router]] · [[useParams]] · [[NavLink]]

---
Hoort bij: [[React - Single Page Applications]]
