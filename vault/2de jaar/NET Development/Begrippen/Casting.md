---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1, 2]
groep: C# en .NET
aliases: [Type casting, Implicit en explicit casting]
---
# Casting

> Een waarde **omzetten naar een ander type**. C# verbiedt onveilige conversies: *fail early, fail safely, fail at compile time.*

| Soort | Wanneer | Voorbeeld |
|---|---|---|
| **Implicit** | veilig, geen dataverlies, automatisch | `int x = 10; double y = x;` |
| **Explicit** | mogelijk dataverlies, jij schrijft de cast | `double z = 9.7; int a = (int)z;` → `9` |

Bij double → int wordt het deel na de komma **afgekapt** (niet afgerond).

## Gerelateerd
[[Strong typing]] · [[Value type vs reference type]] · [[var (CSharp)|var (C#)]]

---
Hoort bij: [[Het .NET-platform]]
