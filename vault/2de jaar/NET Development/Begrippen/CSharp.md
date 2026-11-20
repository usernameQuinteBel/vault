---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1, 2]
groep: C# en .NET
aliases: [C#, C-sharp, C sharp]
---
# C# (CSharp)

> De **sterk getypeerde, objectgeoriënteerde, open-source programmeertaal** van Microsoft voor .NET; de syntax lijkt sterk op Java. De bestandsnaam heet *CSharp* omdat Obsidian geen `#` in notitienamen toelaat.

## Kenmerken
| Kenmerk | Betekenis |
|---|---|
| **Strongly typed** | het type van elke variabele ligt bij compilatie vast ([[Strong typing]]) |
| **Objectgeoriënteerd** | klassen en objecten, [[Encapsulatie]], [[Overerving]], [[Polymorfisme]] ([[OOP]]) |
| **Open source, modern, flexibel** | eenvoudig te leren, ≈ Java |
| **Veelzijdig** | web (ASP.NET Core, Blazor), Web API, desktop (WinForms/WPF), mobiel (MAUI), cloud (Azure), games (Unity), IoT, AI/ML, services |

## Wat C# *niet* is
C# is enkel **de taal** (syntax, types, methodes, namespaces, klassen): het **voert zelf niets uit**. De uitvoering gebeurt door de [[CLR]], de bibliotheken zitten in de [[BCL en FCL]]. De compiler zet C# om naar [[CIL]] in een [[Assembly]].

## Syntaxbasis
```csharp
int age = 30;                         // type + naam + waarde
Console.WriteLine($"Leeftijd: {age}"); // string interpolation
```
- `{ }` blok, `;` einde van instructie, `//` en `/* */` commentaar.
- **camelCase** voor variabelen, **PascalCase** voor klassen, properties en publieke methodes.

## Gerelateerd
[[var (CSharp)|var (C#)]] · [[Casting]] · [[Namespace (CSharp)|Namespace (C#)]] · [[Het .NET-platform]]

---
Hoort bij: [[CSharp basis en OOP]]
