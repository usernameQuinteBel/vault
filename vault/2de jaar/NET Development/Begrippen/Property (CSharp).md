---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1, 4]
groep: C# en .NET
aliases: [Property (C#), Property, Auto-property, getter en setter]
---
# Property (C#)

> De C#-manier om een **veld (field)** gecontroleerd bloot te stellen met een `get` en/of `set`, in één blok (in Java: `getX()`/`setX()`).

## Volledig (met field)
```csharp
private string color;                // field (privé opslag)
public string Color                  // property
{
    get { return color; }            // getter
    set { color = value; }           // setter
}
```
## Auto-property (korte notatie)
```csharp
public string Color { get; set; }
public decimal Balance { get; private set; }    // enkel de klasse mag zetten
```
`value` is het sleutelwoord in een setter voor de toegekende waarde. In een setter kan je regels afdwingen ([[Encapsulatie]]).

## In dit vak
Entities en DTO's bestaan uit properties; EF Core mapt properties naar kolommen ([[Entity class]]).

## Gerelateerd
[[Access modifiers]] · [[Object initializer]] · [[OOP]]

---
Hoort bij: [[CSharp basis en OOP]]
