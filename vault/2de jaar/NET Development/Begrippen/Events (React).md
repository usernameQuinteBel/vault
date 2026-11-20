---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [17]
groep: React front end
aliases: [onClick, onChange, Event handler (React), Event object]
---
# Events (React)

> Je koppelt een handler aan een element via attributen als `onClick` en `onChange`; de handler krijgt het **React event object**.

```jsx
function handleClick(event) {
  if (event.shiftKey) setCount(count + 10);
  else setCount(count + 1);
}
```
Het event heeft o.a. `screenX/Y`, `shiftKey` en `target` (het DOM-element dat de gebeurtenis veroorzaakte).

## Handler doorgeven
| Situatie | Schrijfwijze |
|---|---|
| geen extra argumenten | `onClick={onClick}` |
| extra argument(en) | `onClick={() => onClick('+')}` |
| ook het event-object | `onClick={(event) => onClick(event, '+')}` |

- **Valkuil:** `onClick={handleClick()}` roept de functie **meteen** aan; schrijf `onClick={handleClick}`.
- Je kan niet rechtstreeks luisteren op een **eigen component**: geef de handler als **prop** door aan het component dat de knop rendert (`<PlusButton onClick={handleClick} />`).

## In C#
Zie [[Events (CSharp)|Events (C#)]].

## Gerelateerd
[[State (useState)]] · [[Controlled component]] · [[Props]]

---
Hoort bij: [[React - State]]
