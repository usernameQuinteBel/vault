---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1, 10]
groep: C# en .NET
aliases: [Exceptions (C#), Exception, throw, Uitzonderingen]
---
# Exceptions (C#)

> Een **uitzondering** is een fout tijdens de uitvoering; met `throw new …Exception(…)` dwing je regels af wanneer input of toestand ongeldig is.

## Gebruikte exceptions in de lessen
| Exception | Wanneer |
|---|---|
| `ArgumentException` | ongeldige parameter (bv. leeg e-mailadres, "Amount must be positive", negatieve getallen in de StringCalculator) |
| `ArgumentOutOfRangeException` | negatief bedrag crediteren |
| `InvalidOperationException` | "Insufficient funds" (opnemen > saldo) |
| `ApplicationException` | basis voor een eigen exception, bv. `BalanceInsufficientException` |

```csharp
public EmailAddress(string value)
{
    if (string.IsNullOrWhiteSpace(value)) throw new ArgumentException("Email cannot be empty");
    if (!value.Contains("@"))             throw new ArgumentException("Invalid email");
    Value = value;
}
```

## Testen van exceptions
```csharp
Assert.Throws<ArgumentOutOfRangeException>(() => account.Credit(-200));
```
Zie [[Unit testing en TDD]] en [[Assert]].

## Onverwerkte exception in een API
Een exception in een controller geeft **500 Internal Server Error**; Swagger toont de fout en de browser de volledige exception ([[Logging en configuratie]]).

## Gerelateerd
[[Encapsulatie]] · [[Logging (ILogger)]]

---
Hoort bij: [[CSharp basis en OOP]]
