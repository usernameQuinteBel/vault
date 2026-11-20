---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10]
groep: Testing, DI en architectuur
aliases: [MSTest, xUnit, NUnit, TestClass, TestMethod, Fact]
---
# MSTest en xUnit

> Testframeworks voor .NET: **MSTest** (de slides), **xUnit** (meest gebruikt, de PDF) en **NUnit**.

| | MSTest | xUnit |
|---|---|---|
| Testklasse | `[TestClass]` (verplicht) | geen attribuut nodig |
| Testmethode | `[TestMethod]` | `[Fact]` |
| Parameterized | `[DataTestMethod]` + `[DataRow]` | zie [[Parameterized test]] |
| Assert | `Assert.AreEqual(…)` | `Assert.Equal(…)`, `Assert.Throws<…>` |

## Opzet in Visual Studio
1. Class Library (bv. `Bank`).
2. Nieuw project **MSTest Test Project** (`BankTest`).
3. **Project reference** naar het te testen project + `using Bank;`.
4. Uitvoeren: **Test → Run All Tests** / Test Explorer (groen/rood met foutmelding, bron en duur).

## Gerelateerd
[[Unit test]] · [[Assert]] · [[Mocking (Moq)]]

---
Hoort bij: [[Unit testing en TDD]]
