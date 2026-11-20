---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1, 3]
groep: C# en .NET
aliases: [Constructor (C#), Constructor, Constructors]
---
# Constructor (C#)

> Een speciale methode (zonder returntype, met de klassenaam) die **wordt uitgevoerd bij `new`** om een object een geldige beginstaat te geven.

```csharp
public Car()                                   // default constructor: geen parameters
{ color = "black"; maxSpeed = 210; }

public Car(string color, int maxSpeed)         // custom constructor: waarden meteen zetten
{ Color = color; MaxSpeed = maxSpeed; }

Car firstCar  = new Car();                     // → "black", 210
Car secondCar = new Car("Blue", 190);
```
C# kiest de constructor op basis van het **aantal en type argumenten** bij `new`.

## Constructor injection
In ASP.NET Core vraag je services via de constructor: zie [[Constructor injection]] en [[Dependency Injection (les)]].

## Valkuil
Bij een **object initializer** (`new Car { Color = "Blue" }`) wordt géén parameter-constructor gebruikt ([[Object initializer]]).

## Gerelateerd
[[OOP]] · [[Property (CSharp)|Property (C#)]]

---
Hoort bij: [[CSharp basis en OOP]]
