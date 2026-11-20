---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [2]
groep: C# en .NET
aliases: [GC, Garbage Collector]
---
# Garbage collection

> De **Garbage Collector** van de [[CLR]] ruimt heap-objecten op waar **geen referenties meer naar bestaan**, op een moment dat de runtime kiest.

- Een object wordt **niet** vernietigd zodra de variabele buiten scope gaat, maar pas als niets het object nog bereikt.
```csharp
void Example() { Car car = new Car(); }   // na de methode: referentie weg → object komt in aanmerking voor GC
```
- De GC volgt welke objecten nog **bereikbaar** zijn en ruimt de rest op.
- Services die de DI-container maakt, worden door de container opgeruimd (`Dispose` op `IDisposable`) — je disposet ze zelf niet ([[Dependency Injection (les)]]).

## Gerelateerd
[[Value type vs reference type]] · [[CLR]]

---
Hoort bij: [[Het .NET-platform]]
