---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [18, 19]
groep: React front end
aliases: [useParams hook, Route parameters]
---
# useParams

> Hook die een **object met de dynamische URL-parameters** teruggeeft die door het `<Route path>` gematcht werden.

```jsx
const { id } = useParams();
const student = getStudentById(Number(id));   // parameters uit de URL zijn strings!
if (!student) return <div>Student does not exist</div>;
```
## Valkuilen
- URL-parameters zijn **strings**: zet om met `Number(id)` als de data getallen bevat (`===`).
- Controleer op **niet-bestaande ids**.

## Gerelateerd
[[Nested routes (Outlet)]] · [[useNavigate]] · [[useEffect]]

---
Hoort bij: [[React - Single Page Applications]]
