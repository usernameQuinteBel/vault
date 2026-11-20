---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [2]
groep: C# en .NET
aliases: [Common Intermediate Language, IL, MSIL]
---
# CIL

> **Common Intermediate Language**: de **platformonafhankelijke tussentaal** waarnaar de C#-compiler vertaalt; de [[CLR]] zet ze bij het opstarten via **JIT** om naar machinecode.

## Voorbeeld
```csharp
int age = 20;
if (age >= 18) Console.WriteLine("Adult"); else Console.WriteLine("Minor");
```
wordt CIL die met een **stack** en **sprongen** werkt: `ldc.i4.s 20`, `stloc.0`, `ldloc.0`, `ldc.i4.s 18`, `blt.s IL_0015` (*spring als age < 18*), `ldstr "Adult"`, `call … WriteLine`, `br.s` (spring naar het einde)…
Jij denkt "als waar doe X, anders Y"; de runtime evalueert een voorwaarde en **springt naar een adres**.

## Waarom?
Door een tussentaal werkt dezelfde assembly op meerdere platformen; ook EF Core en ASP.NET Core worden zo gecompileerd en uitgevoerd.

## Gerelateerd
[[Assembly]] · [[CLR]] · [[Het .NET-platform]]

---
Hoort bij: [[Het .NET-platform]]
