---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10]
groep: Testing, DI en architectuur
aliases: [Naamgeving tests, TestedMethod_InitialState_ExpectedState]
---
# Test naming

> De naam van een test beschrijft in **drie delen**: `TestedMethod_InitialState_ExpectedState()`.

| Deel | Voorbeeld |
|---|---|
| methode | `Credit` |
| beginsituatie | `999OnBalance0` |
| verwachte uitkomst | `Returns999` |

Voorbeelden uit de cursus: `Credit_999OnBalance0_Returns999()`, `Debit_500FromBalance500_Returns0()`, `Credit_NegativeAmount_ReturnsOutOfRangeException()`. xUnit-stijl: `Withdraw_ShouldThrow_WhenBalanceIsTooLow`.

Goede namen maken tests leesbaar als documentatie.

## Gerelateerd
[[Unit test]] · [[Arrange-Act-Assert]]

---
Hoort bij: [[Unit testing en TDD]]
