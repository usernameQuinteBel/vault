---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [13]
groep: API uitbreiden
aliases: [Filteren, Filter op naam, Query string filter]
---
# Filtering

> **Precies** zijn: een veldnaam + waarde in de query string beperkt de collectie tot exact wat je wil, bv. `/api/cities?name=Antwerp`.

```csharp
[HttpGet]
public async Task<ActionResult<IEnumerable<CityDto>>> GetCities([FromQuery] string? name) { … }

public async Task<IEnumerable<City>> GetCitiesAsync(string? name, bool includePOIs = false)
{
    name = name?.Trim();                                  // voorkom Trim op null
    var collection = _context.Cities.AsQueryable();
    if (!string.IsNullOrEmpty(name))
        collection = collection.Where(c => c.Name == name);
    if (includePOIs)
        collection = collection.Include(c => c.PointsOfInterest);
    return await collection.OrderBy(c => c.Name).ToListAsync();
}
```
SQL: `… WHERE [c].[Name] = @__name_0 ORDER BY …` (een parameter, zie [[Parameterized query]]).

## Tips
- **Trim** de parameter en controleer op `null`/leeg voor je filtert.
- Elke extra filter is een extra `Where()` op dezelfde `IQueryable` → één SQL-query ([[IQueryable en deferred execution]]).
- Filters én [[Searching]] kunnen gecombineerd: `/api/cities?name=Antwerp&searchQuery=Tower`.

## Gerelateerd
[[LINQ]] · [[Paging]] · [[MotoGP - Filtering en paging]]

---
Hoort bij: [[Filtering, searching en paging]]
