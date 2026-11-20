---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10]
groep: Testing, DI en architectuur
aliases: [Test-Driven Development, Red-Green-Refactor, Test Driven Development]
---
# TDD

> **Test-Driven Development**: schrijf **eerst de tests, daarna de code**. Dat geeft betrouwbaardere software en een ontwerp dat door de tests gestuurd wordt.

## Red – Green – Refactor
1. **Red**: schrijf een falende test.
2. **Green**: schrijf de **minimale code** zodat ze slaagt.
3. **Refactor**: ruim veilig op, de tests bewaken de correctheid.
4. Herhaal tot je geen tests meer kan bedenken.

## Minimal implementation principle (BankAccount)
```csharp
[Fact]
public void Withdraw_ShouldThrow_WhenBalanceIsTooLow()
{
    var account = new BankAccount(100);
    Assert.Throws<InvalidOperationException>(() => account.Withdraw(200));
}
```
Eerst enkel klasse, constructor en methodesignatuur (compileert, test faalt). Dan de minimale code:
```csharp
public void Withdraw(decimal amount)
{
    if (amount > _balance) throw new InvalidOperationException("Insufficient funds.");
}
```
Nog géén geslaagde opname, geen validatie, geen deposit: **enkel wat de tests nu eisen**. De volgende test (`Withdraw_ShouldDecreaseBalance_WhenAmountIsValid`: 100 − 40 = 60) dwingt het volgende ontwerpbesluit af.

## Waarom TDD?
Fragiele systemen bij refactoring, onduidelijk of over-engineered design, late bugontdekking, angst om code te wijzigen.

## Applicatiespecifieke exceptions
Bij een bankapp: `BalanceInsufficientException : ApplicationException`; test `Debit_AmountBiggerThanBalance_ThrowsBalanceInsufficientException()`.

## Gerelateerd
[[Code kata]] · [[Unit test]] · [[Exceptions (CSharp)|Exceptions (C#)]]

---
Hoort bij: [[Unit testing en TDD]]
