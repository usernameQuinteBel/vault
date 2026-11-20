---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1]
groep: C# en .NET
aliases: [Encapsulation, Inkapseling]
---
# Encapsulatie

> Een object is **verantwoordelijk voor het beschermen van zijn eigen toestand**: velden zijn `private`, toegang loopt via properties/methodes die de regels afdwingen.

## Slecht voorbeeld
```csharp
public class BankAccount { public decimal Balance { get; set; } }
// elke code kan: account.Balance = -5000;   (zonder validatie)
```

## Encapsulatie als oplossing
```csharp
public class BankAccount
{
    public decimal Balance { get; private set; }   // enkel de klasse zelf kan wijzigen

    public void Withdraw(decimal amount)
    {
        if (amount <= 0)       throw new ArgumentException("Amount must be positive");
        if (amount > Balance)  throw new InvalidOperationException("Insufficient funds");
        Balance -= amount;
    }
}
```
Gevolgen: **ongeldige toestanden zijn onmogelijk**, regels leven **waar ze thuishoren** en correctheid wordt **automatisch afgedwongen**.

## Regel in een setter
```csharp
private string color;
public string Color
{
    get { return color; }
    set { if (value != "red") color = value; }   // business logic: geen rode auto's
}
```
Daarom: velden **private**, properties **public** ([[Property (CSharp)|Property (C#)]], [[Access modifiers]]).

## Gerelateerd
[[OOP]] · [[Abstractie]] · [[Exceptions (CSharp)|Exceptions (C#)]]

---
Hoort bij: [[CSharp basis en OOP]]
