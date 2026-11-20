---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [18]
groep: React front end
aliases: [isActive, Link vs NavLink]
---
# NavLink

> Zoals `Link`, maar met een boolean **`isActive`**: `true` als de huidige URL met het `to`-pad overeenkomt; zo style je de **actieve tab**.

```jsx
<NavLink to="/class"
  className={({ isActive }) => isActive ? "active" : undefined}>
  Class
</NavLink>
```
Zorg dat de CSS-klasse **`active`** op de juiste tab staat.

## Gerelateerd
[[React Router]] · [[useNavigate]]

---
Hoort bij: [[React - Single Page Applications]]
