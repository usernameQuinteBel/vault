---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1, 12]
groep: C# en .NET
aliases: [Namespace (C#), Namespace, using]
---
# Namespace (C#)

> Een **scope** voor verwante types (≈ *package* in Java). Met **`using`** haal je een namespace binnen (≈ `import`).

```csharp
namespace Introduction
{
    public class Car { }
}

// in een andere namespace:
using Introduction;
```

## In het vak
Bij het opsplitsen in lagen pas je **de namespace aan in alle verplaatste klassen** en corrigeer je namespace-verwijzingen van de API naar de lagen ([[Layered architecture en Repository pattern]]); bv. `CityInfo.Infrastructure.Services`. Ook in tests: `using Bank;` om het project onder test te kunnen aanroepen ([[Unit testing en TDD]]).

## Gerelateerd
[[Assembly]] · [[Access modifiers]] (`internal` = per assembly)

---
Hoort bij: [[CSharp basis en OOP]]
