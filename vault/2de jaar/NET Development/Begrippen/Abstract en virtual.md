---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1]
groep: C# en .NET
aliases: [virtual, abstract, override]
---
# Abstract en virtual

> **`virtual`**: de basisklasse geeft een standaardimplementatie die afgeleide klassen **mogen** overschrijven. **`abstract`**: geen implementatie, enkel een signatuur; afgeleide klassen **moeten** implementeren.

| | `virtual` | `abstract` |
|---|---|---|
| Implementatie in de basisklasse | ja (standaard) | **nee** |
| Afgeleide klasse | mag `override`n | **moet** `override`n |
| Klasse zelf | gewone klasse | `abstract class` — niet rechtstreeks te instantiëren |

**`virtual`** (voorbeeld uit de les):
```csharp
public class Shape
{
    public virtual void Draw()
    {
        //Code to draw the shape
    }
}
public class Circle : Shape
{
    public override void Draw() { /* eigen tekencode */ }
}
```

**`abstract`** (voorbeeld uit de OOP-theorie):
```csharp
public abstract class Shape
{
    public abstract double Area();
}

public class Rectangle : Shape
{
    public double Width { get; }
    public double Height { get; }

    public Rectangle(double width, double height)
    {
        Width = width;
        Height = height;
    }

    public override double Area() => Width * Height;
}
```

## Valkuilen
- Zonder `virtual`/`abstract` in de basisklasse kan je niet `override`n.
- Een interface is vergelijkbaar met een klasse met enkel abstracte members ([[Interface als contract]]).

## Gerelateerd
[[Polymorfisme]] · [[Overerving]] · [[Abstractie]]

---
Hoort bij: [[CSharp basis en OOP]]
