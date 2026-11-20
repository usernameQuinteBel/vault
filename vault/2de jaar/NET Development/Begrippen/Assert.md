---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10]
groep: Testing, DI en architectuur
aliases: [Assert-klasse, StringAssert, AreEqual, Assert.Throws]
---
# Assert

> De klasse met methodes die voorwaarden controleren; wordt de voorwaarde niet voldaan, dan gooit ze een **exception** en faalt de test.

| Positief | Negatief | Overig |
|---|---|---|
| `AreEqual` | `AreNotEqual` | `Fail` |
| `AreSame` | `AreNotSame` | `Inconclusive` |
| `IsTrue` | `IsFalse` | |
| `IsInstanceOfType` | `IsNotInstanceOfType` | |
| `IsNull` | `IsNotNull` | |

> Op de slide staat `IsInstanceTypeOf`; in MSTest heet de methode `IsInstanceOfType`.

- `AreEqual` voor **waarden**, `AreSame` voor **objecten** (dezelfde referentie).
- **Inconclusive**: resultaat kan niet bepaald worden (bv. externe resource niet beschikbaar), noch geslaagd noch mislukt.
- Strings: `Assert.AreEqual("Paul", "paul")` faalt; `ignoreCase: true` = case-insensitive.
- Bericht voor Test Explorer: `Assert.IsTrue(fromCall, "Value is not true");`.
- **StringAssert**: `Contains`, `StartsWith`, `EndsWith`, `Matches`, `DoesNotMatch`.
- Exceptions testen: `Assert.Throws<ArgumentOutOfRangeException>(() => account.Credit(-200));` ([[Exceptions (CSharp)|Exceptions (C#)]]).

## Valkuil
Kies `IsTrue`/`IsFalse` correct; lees bij een falende test eerst *Expected* vs *Actual*: meestal zit de bug in de code (bv. `>` i.p.v. `>=` in `Debit`).

## Gerelateerd
[[Arrange-Act-Assert]] · [[MSTest en xUnit]]

---
Hoort bij: [[Unit testing en TDD]]
