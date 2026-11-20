---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [17]
groep: React front end
aliases: [useState, State, Hooks, Hook, State-setter]
---
# State (useState)

> **State** is data die een component **onthoudt tussen renders**; met de **`useState`-hook** krijg je een state-variabele en een setter die een **re-render** triggert.

```jsx
import { useState } from 'react';
const [count, setCount] = useState(0);     // beginwaarde = 0
<button onClick={() => setCount(count + 1)}>+</button>
```
## Waarom geen gewone variabele?
- wijzigingen aan lokale variabelen **triggeren geen render**;
- ze **blijven niet bestaan** tussen renders (`count` begint elke keer weer op 0).

## Regels
- **Muteer state nooit** (`count = count + 1`): behandel ze als **immutable**.
- Objecten/arrays: maak een **kopie** met de [[Spread operator]].
- **Quiz:** `setNumber(number + 1)` drie keer na elkaar geeft **1**, niet 3: in die render is `number` altijd 0, dus drie keer `setNumber(0 + 1)`.
- Hooks zijn functies waarmee een function component in state en lifecycle-features "haakt"; `useState` voor state, [[useEffect]] voor side effects.

## Gerelateerd
[[Props]] · [[Events (React)]] · [[Controlled component]] · [[Lifting state up]]

---
Hoort bij: [[React - State]]
