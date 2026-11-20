---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [4, 12]
groep: Testing, DI en architectuur
aliases: [SoC, Verantwoordelijkheden scheiden]
---
# Separation of concerns

> Elk onderdeel van de code heeft **één duidelijke verantwoordelijkheid**; zo blijft code testbaar, herbruikbaar en onderhoudbaar.

- In [[MVC]]: model, view en controller zijn gescheiden.
- In de [[Layered architecture]]: elke laag is een black box voor de lagen erboven.
- Controllers bevatten **geen business- of databaselogica**, enkel orkestratie ([[Controller]]).
- De repository verbergt data-access voor de controller ([[Repository pattern]]).

## Gerelateerd
[[Lagen - Contracts, Domain en Infrastructure|Lagen: Contracts, Domain en Infrastructure]] · [[Dependency Injection]]

---
Hoort bij: [[Layered architecture en Repository pattern]]
