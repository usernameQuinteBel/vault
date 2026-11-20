---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [11, 15]
groep: Testing, DI en architectuur
aliases: [IoC, Dependency Inversion]
---
# Inversion of Control

> **IoC** is het **design principle** dat strak gekoppelde afhankelijkheden wegneemt, zodat code losgekoppeld, onderhoudbaar en testbaar wordt. **Dependency Injection** is het **design pattern** dat IoC implementeert.

| | Wat | Doel |
|---|---|---|
| **IoC** | principe: richtlijnen om hard dependencies weg te nemen | losgekoppeld, onderhoudbaar, testbaar |
| **DI** | pattern: objecten **maken** hun dependencies niet zelf maar krijgen ze **van buitenaf** | |

## Het probleem (hard dependency)
```csharp
EmailSender emailSender = new EmailSender();   // Order is tightly coupled aan EmailSender
```
Moet je telefonisch of per sms contacteren, dan moet je `Order` aanpassen; testen zou écht mailen. Met een interface en constructor injection draait dat om.

## Gerelateerd
[[Dependency Injection]] · [[Dependency Injection (les)]] · [[Constructor injection]]

---
Hoort bij: [[Dependency Injection (les)]]
