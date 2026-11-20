---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1]
groep: C# en .NET
aliases: [Object-Oriented Programming, Objectgeoriënteerd programmeren, Klasse en object]
---
# OOP

> **Object-Oriented Programming**: software modelleren als **samenwerkende objecten** die elk hun eigen toestand en gedrag beheren, i.p.v. functies die op gedeelde data werken. Het gaat niet over syntax maar over **complexiteit beheersen door grenzen**.

## Bouwstenen
| Bouwsteen | Idee |
|---|---|
| **Object** | instantie met een eigen identiteit |
| **Klasse** | blauwdruk: welke data een object bezit, welk gedrag het blootstelt en welke **invarianten** het afdwingt |
| [[Encapsulatie]] | beschermde interne toestand |
| [[Abstractie]] | de intentie tonen, niet de implementatie |
| [[Overerving]] en [[Polymorfisme]] | uitbreidbaarheid zonder bestaande code te wijzigen |

> Een **invariant** is een bewering die tijdens het hele leven van een object waar moet blijven (bv. `end_date >= start_date`).

## Klasse vs object
Een klasse `Car` met attributen merk/kleur en methodes `start()`/`stop()` is de blauwdruk; een grijze Ford Fiësta is een **object** (instantie).
```csharp
public class Car { public string Color { get; set; } public int MaxSpeed { get; set; } }
Car carObject = new Car();
```

## Zwakke vs sterke klasse
Een `BankAccount` met enkel `Deposit` is technisch OOP maar **architecturaal zwak**: geen validatie, geen invarianten, geen domeinregels. Sterke objecten verhinderen foute toestanden zelf.
> *"Good object-oriented design is about preventing incorrect usage, not enabling correct usage."*

## Gerelateerd
[[Constructor (CSharp)|Constructor (C#)]] · [[Property (CSharp)|Property (C#)]] · [[Object initializer]] · [[Access modifiers]] · [[Interface als contract]]

---
Hoort bij: [[CSharp basis en OOP]]
