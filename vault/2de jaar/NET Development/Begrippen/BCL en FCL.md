---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [2, 9]
groep: C# en .NET
aliases: [BCL, FCL, Base Class Library, Framework Class Library]
---
# BCL en FCL

> De **kant-en-klare klassenbibliotheken** van .NET: de **BCL** (Base Class Library) is de gedeelde kern; de **FCL** (Framework Class Library) is de BCL plus bibliotheken van hoger niveau.

| | **BCL** | **FCL** |
|---|---|---|
| Scope | kern, gedeeld door alle .NET-apps | BCL + hogere niveaus |
| Bevat | `System`, `System.IO`, `System.Collections`… | BCL + ASP.NET, WinForms, WPF… |
| Gebruik | alle .NET-toepassingen | platformspecifieke functies |
De BCL is een **deelverzameling** van de FCL. WPF (Windows-only: `System.Windows`, XAML) hoort bij de FCL.

## EF Core
**EF Core hoort conceptueel bij de FCL** (op de BCL: collecties, reflection, async, expression trees); NuGet is enkel het distributiemechanisme ([[EF Core verdieping]], [[NuGet]]).

## Gerelateerd
[[CLR]] · [[CSharp|C#]]

---
Hoort bij: [[Het .NET-platform]]
