---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [2]
groep: C# en .NET
aliases: [Value type, Reference type, Stack en heap]
---
# Value type vs reference type

> **Value types** bewaren de waarde zelf (kopie bij toewijzing); **reference types** bewaren een **verwijzing** naar een object op de heap (kopie van de referentie = hetzelfde object).

| | **Value types** | **Reference types** |
|---|---|---|
| Voorbeelden | `int`, `double`, `bool`, `struct`, `enum` | `class`, `string`, array, `object` |
| Bewaren | de waarde zelf | een geheugenadres naar het object op de **heap** |
| Kopiëren | kopie van de waarde | kopie van de referentie |
| Geheugen | stack | object op de heap, referentie op de stack |

```csharp
int a = 10; int b = a; b = 20;      // a blijft 10

Car car1 = new Car();
Car car2 = car1;                    // zelfde object!
car2.Color = "Red";                 // car1.Color is nu ook "Red"
```
**Stack**: methodeaanroepen, lokale variabelen, referenties (snel, automatisch opgeruimd). **Heap**: objecten, beheerd door de [[Garbage collection]].

> **Valkuil:** twee referentievariabelen kunnen naar hetzelfde object wijzen; wijzig je het via de ene, dan ziet de andere dat ook.

## Gerelateerd
[[Casting]] · [[Strong typing]]

---
Hoort bij: [[Het .NET-platform]]
