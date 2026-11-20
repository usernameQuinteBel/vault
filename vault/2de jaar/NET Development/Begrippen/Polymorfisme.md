---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1]
groep: C# en .NET
aliases: [Polymorphism, Veelvormigheid]
---
# Polymorfisme

> **Verwante objecten op dezelfde manier behandelen**: een variabele van het basistype kan objecten van afgeleide types bevatten, en de **juiste override** wordt uitgevoerd.

## Voorbeeld
```csharp
public class Shape     { public virtual void Draw() { /* teken de vorm */ } }
public class Circle    : Shape { public override void Draw() { /* teken een cirkel */ } }
public class Rectangle : Shape { public override void Draw() { /* teken een rechthoek */ } }

Shape shape = new Rectangle(10, 5);   // variabele-type Shape, object-type Rectangle
shape.Draw();                          // voert Rectangle.Draw() uit
```

## Waarom?
Zonder polymorfisme zou één `ShapeCalculator` met `if (shapeType == "Rectangle") … else if …` alle vormen moeten kennen:
| Probleem | Uitleg |
|---|---|
| **Open/Closed** geschonden | elke nieuwe vorm (Hexagon) = bestaande code aanpassen |
| strings als type | typfouten, *primitive obsession* |
| te veel parameters | |
| één **God Object** | |
| moeilijk testbaar | |

## Polymorfisme in dit vak
Dezelfde gedachte zit in [[Interface als contract]], [[Dependency Injection (les)]] en het [[Strategy pattern]] (verschillende implementaties achter één interface).

## Gerelateerd
[[Overerving]] · [[Abstract en virtual]] · [[OOP]]

---
Hoort bij: [[CSharp basis en OOP]]
