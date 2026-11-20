---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10]
groep: Testing, DI en architectuur
aliases: [AAA, Arrange Act Assert]
---
# Arrange-Act-Assert

> Het vaste patroon van een unit test in drie fasen.

| Fase | Doet |
|---|---|
| **Arrange** | objecten initialiseren en testdata klaarzetten |
| **Act** | de te testen methode aanroepen |
| **Assert** | controleren dat het resultaat zoals verwacht is |

```csharp
[TestMethod]
public void Constructor_Balance0_Returns0()
{
    // ARRANGE
    Account account = new Account();
    // ACT
    double balance = account.Balance;
    // ASSERT
    Assert.AreEqual(0, balance);
}
```
Bij exception-tests combineer je Act en Assert: `Assert.Throws<ArgumentOutOfRangeException>(() => account.Credit(-200));`. Bij [[Parameterized test|parameterized tests]] is AAA minder zichtbaar maar nog aanwezig.

## Gerelateerd
[[Unit test]] · [[Assert]] · [[Test naming]]

---
Hoort bij: [[Unit testing en TDD]]
