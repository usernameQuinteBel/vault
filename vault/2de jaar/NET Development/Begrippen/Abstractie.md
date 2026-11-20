---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1]
groep: C# en .NET
aliases: [Abstraction]
---
# Abstractie

> **Tonen wat iets doet, niet hoe.** Je programmeert tegen een interface of abstracte klasse, zodat de aanroeper de interne werking niet kent.

## Voorbeeld: betalen
```csharp
public interface IPaymentProvider
{
    Task<PaymentResult> ChargeAsync(decimal amount);
}

public class CheckoutService
{
    private readonly IPaymentProvider _paymentProvider;
    public CheckoutService(IPaymentProvider paymentProvider) { _paymentProvider = paymentProvider; }
    public async Task Checkout(decimal total) { await _paymentProvider.ChargeAsync(total); }
}
```
De applicatie maakt niet uit of de betaling via Wero (≈ Payconiq), PayPal of een mock-provider loopt. `CheckoutService` weet enkel dat er een `ChargeAsync` bestaat.

## Wat het oplevert
- **loose coupling**
- **vervangbare infrastructuur**
- **duidelijke architectuurgrenzen** (zie [[Layered architecture]])

## Gerelateerd
[[Interface als contract]] · [[Abstract en virtual]] · [[Dependency Injection]] · [[Encapsulatie]]

---
Hoort bij: [[CSharp basis en OOP]]
