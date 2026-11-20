---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1]
groep: C# en .NET
aliases: [Inheritance, Erfelijkheid]
---
# Overerving

> Een nieuwe klasse **bouwen op een bestaande** (*is-een*-relatie): de afgeleide klasse erft alle members van de basisklasse en kan ze uitbreiden of overschrijven → **hergebruik**.

## Voorbeeld
```csharp
public class Animal { public void Run(int speed) { /* laat het dier lopen */ } }

public class Dog : Animal            // Dog erft van Animal
{
    public int Speed { get; set; }
    public Dog(int speed) { Speed = speed; Run(speed); }   // Run() zit in de basisklasse
}
```
Een rechthoek *is een* vorm, een hond *is een* dier.

## Abstracte basisklasse
```csharp
public abstract class Shape { public abstract double Area(); }
public class Rectangle : Shape
{
    public double Width { get; }  public double Height { get; }
    public Rectangle(double width, double height) { Width = width; Height = height; }
    public override double Area() => Width * Height;
}
```

## Tips
- Elke klasse erft impliciet van `object` → daarom heeft elke klasse `ToString()` (overschrijf met `override`).
- `sealed` voorkomt dat een klasse nog overgeërfd wordt (zie value object `EmailAddress` in [[CSharp basis en OOP]]).
- Zonder `virtual` in de basisklasse kan je niet `override`n ([[Abstract en virtual]]).

## Gerelateerd
[[Polymorfisme]] · [[Access modifiers]] (`protected`) · [[OOP]]

---
Hoort bij: [[CSharp basis en OOP]]
