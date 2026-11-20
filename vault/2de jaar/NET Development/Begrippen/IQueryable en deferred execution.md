---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [6, 9, 13]
groep: EF Core
aliases: [IQueryable, Deferred execution, AsQueryable, Expression tree]
---
# IQueryable en deferred execution

> Een `IQueryable<T>` is een **query in code**, nog niet uitgevoerd; ze wordt pas naar de database gestuurd bij `ToList()`, `First…()`, `Count()`… Daardoor kan je queries **stap voor stap samenstellen** en blijft het **één databasecall**.

```csharp
IQueryable<City> cities = _context.Cities.AsQueryable();
cities = cities.Where(c => c.Name.Length < 50);
cities = cities.Where(c => c.Description.Contains("park"));
cities = cities.OrderBy(c => c.Name);
return Ok(cities.ToList());       // enige moment waarop SQL wordt uitgevoerd
// SQL: … WHERE LEN(Name) < 50 AND Description LIKE '%park%' ORDER BY Name
```

## Query pipeline
Expression tree opbouwen → model-metadata toepassen → vertalen naar providerspecifieke vorm → SQL genereren → uitvoeren → resultaten **materialiseren** naar objecten.

## Gebruik in het vak
Optionele filters (`if (name != null) cities = cities.Where(...)`) en paging bouw je zo op ([[Filtering, searching en paging]]).

## Valkuil
`Where`/`OrderBy` voeren **niets** uit; vergeet je `ToList()`, dan gebeurt er niets.

## Gerelateerd
[[LINQ]] · [[DbSet]] · [[Paging]]

---
Hoort bij: [[EF Core - bevragen met LINQ]]
