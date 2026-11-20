---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [6]
groep: EF Core
aliases: [First, FirstOrDefault, Single, Count, Max, Min, Sum, Average, Executiemethodes]
---
# Aggregate methods (First, Single, Count…)

> Methodes die **één waarde** uit een collectie berekenen of teruggeven; ze voeren de query meteen uit.

| Methode | Resultaat |
|---|---|
| `First()` | eerste element; **exception** als er geen is |
| `FirstOrDefault()` | eerste element; **`null`** als er geen is |
| `Single()` | het enige dat voldoet; exception bij geen of meer dan één |
| `SingleOrDefault()` | zoals `Single()`, maar `null` als er geen is |
| `Last()` / `LastOrDefault()` | laatste (exception / null) |
| `Count()` | aantal (optioneel met lambda) |
| `Max()`, `Min()`, `Sum()`, `Average()` | max, min, som, gemiddelde |

```csharp
City first  = _context.Cities.First();
int highestId   = _context.Cities.Max(c => c.Id);
int total   = _context.Cities.Count();
```
> **Valkuil:** `First(c => c.Name == "Berlin")` zonder resultaat gooit een `InvalidOperationException` ("Sequence contains no elements"). Gebruik `FirstOrDefault` en controleer op `null` → `NotFound()` ([[ActionResult]]).

## Gerelateerd
[[LINQ]] · [[Lambda expression]]

---
Hoort bij: [[EF Core - bevragen met LINQ]]
