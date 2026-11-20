---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [11, 12]
groep: Testing, DI en architectuur
aliases: [Transient, Scoped, Singleton, AddTransient AddScoped AddSingleton, ServiceProvider]
---
# Service lifetimes

> De **lifetime** bepaalt hoe lang een door de DI-container gemaakte instantie leeft.

| Lifetime | Gedrag | Voorbeeld |
|---|---|---|
| **Transient** | **elke** aanvraag levert een **nieuwe** instantie | `AddTransient<IMailService, LocalMailService>()` |
| **Scoped** | **dezelfde** instantie binnen één request, een andere bij een ander request | **DbContext**, repositories |
| **Singleton** | **dezelfde** instantie voor elke aanvraag en elk object | `AddSingleton<IMailService, …>()` |

## Zonder ASP.NET Core
```csharp
var services = new ServiceCollection();
services.AddSingleton<IContact, EmailSender>();
IServiceProvider serviceProvider = services.BuildServiceProvider(true);
Order order = new Order(serviceProvider.GetService<IContact>());
```
NuGet: `Microsoft.Extensions.DependencyInjection`.

- Meerdere registraties voor dezelfde interface: `GetService<T>()` geeft de **laatste** (Last In, First Out); `GetServices<T>()` geeft **alle** implementaties.
- Services die de container maakt, worden door de container opgeruimd ([[Garbage collection]]).

## Tips
Kies bewust: repository en DbContext **scoped** ([[Layered architecture en Repository pattern]]).

## Gerelateerd
[[Dependency Injection]] · [[Program.cs]] · [[Constructor injection]]

---
Hoort bij: [[Dependency Injection (les)]]
