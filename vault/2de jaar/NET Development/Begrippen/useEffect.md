---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [17, 19]
groep: React front end
aliases: [useEffect hook, Dependencies array]
---
# useEffect

> Hook om een [[Side effects|side effect]] uit te voeren **nadat het component gerenderd (gemount) is**.

```javascript
useEffect(callback[, dependencies]);
```
| Variant | Wanneer loopt de callback? |
|---|---|
| `useEffect(() => { … }, [])` | **één keer** na de eerste render |
| `useEffect(() => { … }, [prop, state])` | na de eerste render **én** enkel als `prop` of `state` verandert |
| `useEffect(() => { … })` | na **elke** render |

```jsx
useEffect(() => { getForecasts(); }, []);          // data ophalen bij het openen
useEffect(() => { getForecast(id); }, [id]);        // opnieuw als id verandert
```
Eerste voorbeeld in de les: `LightningCounter` met `setTimeout(add100Strikes, 1000)`.

## Valkuil
Zonder dependencies loopt het effect na elke render; een state-update daarin start dan opnieuw een render (mogelijk een oneindige lus).

## Gerelateerd
[[State (useState)]] · [[Axios]]

---
Hoort bij: [[React - Axios]]
