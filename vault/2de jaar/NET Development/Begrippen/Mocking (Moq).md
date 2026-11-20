---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10, 11]
groep: Testing, DI en architectuur
aliases: [Moq, Mock, Mock objects, Mocking]
---
# Mocking (Moq)

> Een **mock** is een gesimuleerd object dat het gedrag van een echt object (bv. `EmailSender`, `TelSender`, een repository) nabootst, zodat je je unit test kan isoleren; **Moq** is de bibliotheek in .NET.

```csharp
var mediumSender = new Mock<IContact>();

// simuleert Contact() en geeft een boodschap terug
mediumSender.Setup(e => e.Contact(It.IsAny<int>(), It.IsAny<string>()))
            .Returns("A test message for this wonderful test");

Order order = new Order(mediumSender.Object);      // .Object = het nep-object
var response = new OrderHandler(order).HandleOrder();

Assert.AreEqual("A test message for this wonderful test", response.ContactMessage);
```
De echte code (mail/telefoon) wordt **niet** uitgevoerd; jij bepaalt wat `Contact` teruggeeft.

## Voorwaarden
Programmeer tegen een **interface** en injecteer die via de constructor ([[Constructor injection]]); anders kan je niets mocken. Ook een repository kan je zo mocken ([[Repository pattern]]).

## Gerelateerd
[[Dependency Injection (les)]] · [[Unit test]] · [[Interface als contract]]

---
Hoort bij: [[Dependency Injection (les)]]
