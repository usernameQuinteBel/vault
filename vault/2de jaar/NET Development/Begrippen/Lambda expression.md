---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [6]
groep: EF Core
aliases: [Lambda, Lambda-expressie, goes to]
---
# Lambda expression

> Een compacte anonieme functie `input => expressie` (lees *"goes to"*), veel gebruikt in [[LINQ]].

```csharp
c => c.Name == "Antwerp"          // c = één stad; levert true/false
c => c.Name                        // sleutel om op te sorteren
(src, dest, srcMember) => srcMember != null   // meerdere parameters (AutoMapper)
```
De naam links is vrij te kiezen (`c`, `city`…).

## In het vak
`Where`, `OrderBy`, `First(c => …)`, `MapFrom(src => …)` ([[AutoMapper]]), Fluent API (`HasMany(p => p.Categories)`).

## Gerelateerd
[[LINQ]] · [[Aggregate methods (First, Single, Count…)]]

---
Hoort bij: [[EF Core - bevragen met LINQ]]
