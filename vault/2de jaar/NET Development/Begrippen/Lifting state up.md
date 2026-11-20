---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [17]
groep: React front end
aliases: [State omhoog tillen, Accordion]
---
# Lifting state up

> State die door **meerdere componenten** gedeeld moet worden, verplaats je naar hun **dichtstbijzijnde gemeenschappelijke parent** en geef je via **props** (en handlers) terug door.

Voorbeeld Accordion met `Panel`s: elk paneel had eigen `isActive` (boolean). Wil je **slechts één paneel tegelijk open**:
1. verwijder de state uit de panels;
2. zet ze in `Accordion`, als een **int** (index van het actieve paneel), geen boolean;
3. geef `isActive` en een handler door via props.

*Een van de meest voorkomende dingen in React* (react.dev: sharing state between components).

## Gerelateerd
[[State (useState)]] · [[Props]] · [[Container vs presentational components]]

---
Hoort bij: [[React - State]]
