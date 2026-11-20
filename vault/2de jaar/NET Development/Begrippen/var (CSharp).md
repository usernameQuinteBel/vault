---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1, 4]
groep: C# en .NET
aliases: [var (C#), var, Impliciet getypeerde variabele]
---
# var (C#)

> De compiler **leidt het type af** uit de toegekende waarde. Het blijft **sterk getypeerd** (bepaald bij compilatie) — `var` is **niet** dynamisch typen.

```csharp
var count = 5;                                   // int
var cities = await _cityRepository.GetCitiesAsync();   // type komt uit de methode
foreach (var roll in diceRolls) Console.WriteLine(roll);
var (cities, paginationMetadata) = await repo.GetCitiesAsync(...);   // tuple deconstructie
```
Handig bij **lange typenamen** en bij het deconstrueren van tuples ([[Tuple]]).

## Valkuil
`var x;` zonder waarde kan niet: de compiler heeft een waarde nodig om het type af te leiden.

## Gerelateerd
[[Strong typing]] · [[CSharp|C#]]

---
Hoort bij: [[CSharp basis en OOP]]
