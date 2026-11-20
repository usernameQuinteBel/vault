---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10]
groep: Testing, DI en architectuur
aliases: [DataRow, DataTestMethod, Parameterized tests]
---
# Parameterized test

> Eén testmethode die **voor elke combinatie** invoer/verwachting uitgevoerd wordt, met `[DataTestMethod]` + `[DataRow]` (MSTest).

```csharp
[DataTestMethod]
[DataRow("1,2,3", 6)]
[DataRow("1,2,3,4", 10)]
[DataRow("1,2,3,4,5", 15)]
public void Add_MoreThanThreeNumbersSeparatedByComma_ReturnsTheirSum(string numbers, int result)
{
    Assert.AreEqual(result, StringCalculator.Add(numbers));
}
```
Voordeel: geen gekopieerde tests; elk `DataRow` verschijnt apart in Test Explorer.

## Gerelateerd
[[Arrange-Act-Assert]] · [[Code kata]] · [[MSTest en xUnit]]

---
Hoort bij: [[Unit testing en TDD]]
