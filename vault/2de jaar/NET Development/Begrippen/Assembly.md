---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [2, 7]
groep: C# en .NET
aliases: [.dll, assembly, Assemblies]
---
# Assembly

> De verpakking van gecompileerde code: **CIL + metadata + manifest** als **`.dll`** (class library) of **`.exe`** (applicatie).

| Onderdeel | Inhoud |
|---|---|
| **CIL-instructies** | de gecompileerde code ([[CIL]]) |
| **Metadata** | types, methodes en namespaces |
| **Manifest** | identiteit en afhankelijkheden |

De [[CLR]] laadt een assembly, leest de metadata en past JIT toe.

## In dit vak
- Elke laag in [[Layered architecture]] is een apart project = een aparte assembly (`CityInfo.Domain.dll`…).
- `internal` is zichtbaar **binnen de assembly** ([[Access modifiers]]).
- AutoMapper krijgt de **assemblies** door om mapping profiles te vinden: `AppDomain.CurrentDomain.GetAssemblies()` ([[Mapping met AutoMapper]]).
- `ApplyConfigurationsFromAssembly(typeof(CityInfoContext).Assembly)` ([[Layered architecture en Repository pattern]]).

## Gerelateerd
[[Namespace (CSharp)|Namespace (C#)]] · [[BCL en FCL]]

---
Hoort bij: [[Het .NET-platform]]
