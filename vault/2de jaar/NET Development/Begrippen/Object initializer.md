---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1]
groep: C# en .NET
aliases: [Object initializers]
---
# Object initializer

> Een object aanmaken en **meteen properties instellen** met accolades, zonder constructor met parameters.

```csharp
Car newCar1 = new Car { Color = "Blue",  MaxSpeed = 220 };
Car newCar2 = new Car { Color = "Green", MaxSpeed = 240 };
```
Gelijkwaardig aan eerst `new Car()` en daarna elke property apart zetten, maar compacter.

## Let op
- De **default constructor** wordt gebruikt, geen parameter-constructor.
- De properties moeten publiek te zetten zijn (`set`).

## Gerelateerd
[[Constructor (CSharp)|Constructor (C#)]] · [[Property (CSharp)|Property (C#)]] · [[Entity class]]

---
Hoort bij: [[CSharp basis en OOP]]
