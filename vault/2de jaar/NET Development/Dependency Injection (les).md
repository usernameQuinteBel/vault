---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 11
groep: Deel B: ASP.NET Core API
aliases: [DI les, les 8 Dependency Injection, DI_Pattern, Inversion of Control les]
---
# Dependency Injection (les)

> Een klasse maakt de objecten waarop ze steunt **niet zelf** aan (hard dependency) maar krijgt ze **van buitenaf geïnjecteerd** via een **interface** (constructor injection); een **ServiceProvider** (IoC-container) registreert en levert de implementaties, en een configuratiebestand laat je de implementatie kiezen zonder hercompileren.

_Slides: "8. Dependency Injection" — oplossing in 5 projecten: `DI_Pattern_Wrong`, `_Good`, `_Better`, `_Best` en `_Tests`. Het algemene begrip staat in [[Dependency Injection]]; deze notitie volgt de lesopbouw._

## 1. Het probleem (DI_Pattern_Wrong)
Casus: wanneer een **order verzonden** wordt, willen we de klant **per e-mail** contacteren. Klassen: `Order` (met `ContactCustomer`) en `EmailSender` (met `Contact`).
```csharp
public class EmailSender
{
    public string Contact(int customerId, string message)
    {
        // Code to send mail
        string contactMessage = $"Mail sent to customer with id = {customerId} : {message}";
        Console.WriteLine(contactMessage);
        return contactMessage;
    }
}
```
```csharp
// Program.cs
Order order = new Order();
order.ContactCustomer(1, "Your shipment will be delivered tomorrow at 4pm.");
```
Uitvoer: *"Mail sent to customer with id = 1 : Your shipment will be delivered tomorrow at 4pm."*

### Waarom "het werkt" niet volstaat
`Order` maakt zelf een `EmailSender` aan: `EmailSender emailSender = new EmailSender(); return emailSender.Contact(...);` → **hard dependency / tightly coupled**: `Order` kan niet zonder `EmailSender`.
- Wat als we de klant voortaan **telefonisch** (`TelSender`) willen contacteren? We moeten de code **aanpassen** (object-creatie van `EmailSender` weg, die van `TelSender` erbij) en bij een gedeployde app **opnieuw compileren en deployen**.
- Twee programmeurs: de order-programmeur kan pas starten/testen als `EmailSender` klaar is. Wat bij **sms**?
- **Niet testbaar:** `HandleOrder()` in `OrderHandler` roept `ContactCustomer()` aan; dat zou écht mailen/bellen. Kan je `TelSender` **mocken** om goede unit tests te schrijven? **Nee.**
```csharp
[TestMethod]
public void Test_OrderHandler_HandleOrder()
{
    Order order = new Order();
    OrderHandler orderHandler = new OrderHandler(order);
    var response = orderHandler.HandleOrder();
    Assert.AreEqual(50.99, response.TotalPrice);
}
```
**Conclusie:** in OOP werken objecten samen (aanbieders en gebruikers); dat creëert **afhankelijkheden**, die naarmate de complexiteit stijgt moeilijk te beheren en te testen zijn.

## 2. IoC en DI
| | Wat | Doel |
|---|---|---|
| **Inversion of Control (IoC)** | **design principle**: richtlijnen om strak gekoppelde afhankelijkheden weg te nemen | meer **losgekoppeld, onderhoudbaar, testbaar** |
| **Dependency Injection (DI)** | het **design pattern** dat IoC implementeert en uitlegt hoe je losjes gekoppelde code schrijft | objecten **maken** de objecten waarop ze steunen **niet zelf**; ze krijgen ze **van buiten** geïnjecteerd |
Zie [[Inversion of Control]] en [[Dependency Injection]].

## 3. Oplossing 2 — Good: interface + constructor injection (DI_Pattern_Good)
**Stap 1 — interface `IContact`** met de `Contact`-methode; `EmailSender` én `TelSender` implementeren ze. Waarom een interface? Als **contract**: `Order` moet enkel weten dát er een `Contact`-methode is. Hernoem je `Contact` naar `Call`, dan compileert de implementerende klasse niet meer. Zie [[Interface als contract]].
```csharp
public interface IContact
{
    string Contact(int customerId, string message);
}
public class EmailSender : IContact { /* Contact(...) */ }
```
**Stap 2 — `Order` aanpassen:** geen object van `EmailSender`/`TelSender` meer, maar `IContact` via de **constructor** (= **constructor injection**). `Order` hoeft niet te weten welke klasse binnenkomt, enkel dat ze de **interface/het contract** implementeert.
```csharp
public class Order
{
    IContact _medium;
    public Order(IContact medium) { _medium = medium; }

    // Contact customer when order is shipped
    public string ContactCustomer(int customerId, string message)
    {
        return _medium.Contact(customerId, message);
    }
}
```
**Stap 3 — dependency doorgeven in `Program.cs`** (oefening): maak twee orders, mail voor de eerste en bel voor de tweede:
```
Mail sent to customer with id = 1 : Your shipment will be delivered tomorrow at 4pm.
Phone call to customer with id = 2 : Your shipment will be delivered tomorrow at 5pm.
```
Zie [[Constructor injection]].

**Stap 4 — unit test met Moq.** **Mock objects** zijn *gesimuleerde* objecten die het gedrag van echte objecten (`TelSender`, `EmailSender`) nabootsen, meestal in een testcontext — zoals een auto-ontwerper een **crash test dummy** gebruikt. Mocks zijn **test doubles**: je simuleert invoerparameters en resultaten van je methode. **Moq** = populaire mocking-library voor .NET (NuGet → *Manage NuGet Packages for solution*, laatste stabiele versie).
```csharp
[TestMethod]
public void Test_OrderHandler_HandleOrder()
{
    // Order retrieves its dependency via the constructor
    // We can mock it and change its behavior for this test
    var mediumSender = new Mock<IContact>();

    // simulates the execution of Contact() and returns a message
    mediumSender.Setup(e => e.Contact(It.IsAny<int>(), It.IsAny<string>()))
                .Returns("A test message for this wonderful test");

    Order order = new Order(mediumSender.Object);
    OrderHandler orderHandler = new OrderHandler(order);

    // HandleOrder() doesn't execute the Contact method anymore, just the simulation
    var response = orderHandler.HandleOrder();

    Assert.AreEqual(50.99, response.TotalPrice);
    Assert.AreEqual("A test message for this wonderful test", response.ContactMessage);
}
```
De echte code (mail/telefoon) wordt **niet** uitgevoerd; je laat `Contact` het resultaat teruggeven dat jij wil. Zie [[Mocking (Moq)]].

## 4. Oplossing 3 — Better: ServiceProvider (DI_Pattern_Better)
In "Good" gebruikten we een interface en injecteerden we via de constructor. In "Better" gebruiken we een **ServiceProvider** om alle dependency-objecten te **registreren**:
1. Een **`ServiceCollection`** maken.
2. **Paren van interface + implementatie** toevoegen (hier als singleton).
3. **`BuildServiceProvider()`** aanroepen.
4. **`GetService()`** gebruiken om de service op te vragen.
NuGet-pakket: **Microsoft.Extensions.DependencyInjection** (reeds geïnstalleerd).
```csharp
using Microsoft.Extensions.DependencyInjection;
IServiceProvider serviceProvider;
var services = new ServiceCollection();

// Register interfaces using factory that returns implementation
services.AddSingleton<IContact, EmailSender>();
serviceProvider = services.BuildServiceProvider(true);

Order order = new Order(serviceProvider.GetService<IContact>());
order.ContactCustomer(1, "Finally shipped");
```
Het slide-plaatje: *"Creating objects… give me those ASAP"* — de container maakt de objecten aan die jij nodig hebt.

### Service lifetimes
```csharp
services.AddTransient<IOperationTransient, Operation>();
services.AddScoped<IOperationScoped, Operation>();
services.AddSingleton<IOperationSingleton, Operation>();
```
| Lifetime | Gedrag |
|---|---|
| **Transient** | **elke** `GetService()`-aanvraag levert een **nieuwe** instantie |
| **Scoped** | **dezelfde** instantie binnen één request, een andere bij een ander request (denk aan **DbContext** in een ASP.NET Core Web API) |
| **Singleton** | **dezelfde** instantie voor elk object en elke request |
Zie [[Service lifetimes]].

### Meerdere implementaties van dezelfde interface
Registreer je zowel `EmailSender` als `TelSender` voor `IContact`:
```csharp
services.AddSingleton<IContact, EmailSender>();
services.AddSingleton<IContact, TelSender>();
```
- `serviceProvider.GetService<IContact>()` geeft altijd de **laatst geregistreerde** (**Last In, First Out**) → `TelSender`.
- `serviceProvider.GetServices<IContact>()` geeft een **enumerable van alle** geregistreerde implementaties.

**Unit test:** dezelfde `Test_OrderHandler_HandleOrder`-test als bij Good — *het is dezelfde test!* Alle 3 de test-projecten (Wrong, Good, Better) draaien: *3 Passed*.

## 5. Oplossing 4 — Best: configuratiebestand (DI_Pattern_Best)
Nog altijd moeten we code wijzigen om van `EmailSender` naar `TelSender` te gaan. Wat als je **bij de installatie bij de klant** wil kiezen? Maak een **configuratiebestand (XML of JSON)** waarin staat welke interface door welke klasse wordt geïmplementeerd. De koppeling gebeurt in code nog steeds via de `ServiceCollection`, maar de keuze staat in de config: wil je wisselen, dan pas je enkel het bestand aan.

`config/di_configuration.xml` (Build action *None*, Copy to output directory *Copy if newer*):
```xml
<?xml version="1.0" encoding="utf-8" ?>
<implementations>
  <implementation>
    <interface>DI_Pattern_Best.IContact, DI_Pattern_Best</interface>
    <instance>DI_Pattern_Best.TelSender, DI_Pattern_Best</instance>
  </implementation>
</implementations>
```
(*"This customer prefers TelSender."*)
```csharp
private static IServiceProvider _serviceProvider;

private static void RegisterServices()
{
    var services = new ServiceCollection();

    // We get the correct instances from the xml file
    XmlReaderSettings settings = new XmlReaderSettings();
    settings.IgnoreWhitespace = true;

    // Load the document and set the root element.
    XmlDocument doc = new XmlDocument();
    doc.Load("config\\di_configuration.xml");
    XmlNode root = doc.DocumentElement;
    XmlNodeList nodeList = root.SelectNodes("implementation");

    foreach (XmlNode service in nodeList)
    {
        // firstchild = interface, lastchild = instance
        services.AddSingleton(Type.GetType(service.FirstChild.InnerText),
                              Type.GetType(service.LastChild.InnerText));
    }
    _serviceProvider = services.BuildServiceProvider(true);
}

private static void Main(string[] args)
{
    RegisterServices();
    Order order = new Order(_serviceProvider.GetService<IContact>());
    order.ContactCustomer(1, "Your shipment will be delivered tomorrow at 4pm.");
    DisposeServices();
    Console.WriteLine("Press any key");
    Console.ReadKey();
}
```
**Zonder hercompileren:** open `DI_Pattern_Best\bin\Debug\net10.0\config\di_configuration.xml`, zet `TelSender` om naar `EmailSender`, start de `.exe` opnieuw → *"Mail sent to customer…"*. Ook bij gedeployde software kan de klant zo de implementatie kiezen.
> Nota (slides): **Dispose is niet nodig voor services die de container maakt** — de container ruimt zelf op en roept `Dispose` aan op `IDisposable`-instanties; services uit de container mag je **nooit zelf disposen**. Registreerde je een singleton, dan wordt die door de container automatisch gedisposed.

## 6. Overzicht van de oplossingen
| Project | Aanpak | Probleem opgelost |
|---|---|---|
| **Wrong** | `new EmailSender()` in `Order` | — (hard dependency, niet testbaar) |
| **Good** | interface `IContact` + **constructor injection** | losgekoppeld en **mockbaar** |
| **Better** | `ServiceCollection` + `ServiceProvider` | registratie van services centraal, lifetimes |
| **Best** | registraties uit **configuratiebestand** | implementatie kiezen **zonder hercompileren** |

## 7. DI in ASP.NET Core
In ASP.NET Core is de container ingebouwd: je registreert services in `Program.cs` (`builder.Services.AddScoped<…>()`) en ze worden via de **constructor** in controllers geïnjecteerd (`CityInfoContext`, `IMapper`, `ILogger<T>`, `IConfiguration`…). Zie [[Introductie ASP.NET Core]], [[Mapping met AutoMapper]] en [[Layered architecture en Repository pattern]] (repositories registreer je met `AddScoped`).

## Tips en valkuilen
- **Programmeer tegen interfaces**, niet tegen concrete klassen; dan kan je mocken en wisselen.
- `GetService<IContact>()` geeft bij meerdere registraties **de laatste**; wil je alle, gebruik `GetServices`.
- Kies de **lifetime** bewust: `DbContext` hoort **scoped** (één per request).
- Een mock zet je op met `Setup(...).Returns(...)` en geef je door via `.Object`.

## Begrippen
[[Dependency Injection]] · [[Inversion of Control]] · [[Constructor injection]] · [[Interface als contract]] · [[Service lifetimes]] · [[Mocking (Moq)]] · [[Strategy pattern]]

## Oefeningen
[[MotoGP - Race duration (Strategy Pattern)]] · [[Oefening Extra DI - FeedReader]]

---
Hoort bij: [[NET Development|.NET Development]]
