---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [6, 11]
groep: EF Core
aliases: [Injectie via constructor, Dependency injection in controller]
---
# Constructor injection

> Een service (bv. de [[DbContext]]) vraag je aan via een **constructorparameter**; de DI-container maakt de instantie en geeft ze mee.

```csharp
public class CitiesController : ControllerBase
{
    private readonly CityInfoContext _context;   // private field met underscore

    public CitiesController(CityInfoContext context)
    {
        _context = context;
    }
}
```
Dat kan enkel als de service in [[Program.cs]] geregistreerd is. Programmeer je tegen een interface, dan kan je de implementatie wisselen ([[Dependency Injection (les)]]).

## Gerelateerd
[[Dependency Injection]] · [[Constructor (CSharp)|Constructor (C#)]] · [[Service lifetimes]]

---
Hoort bij: [[EF Core - bevragen met LINQ]]
