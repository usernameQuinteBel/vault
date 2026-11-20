---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [13]
groep: API uitbreiden
aliases: [Pagination, Skip en Take, pageNumber en pageSize]
---
# Paging

> Een grote collectie in **pagina's** opdelen met `pageNumber` en `pageSize` in de query string, zodat je geen performanceproblemen krijgt. **Best practice: paging op alle collecties.**

`/api/cities?pageNumber=1&pageSize=5`

| Parameter | Regel |
|---|---|
| `pageNumber` | standaard de **eerste pagina** |
| `pageSize` | aantal items per pagina; **moet beperkt worden** (`maxPageSize`) |

```csharp
[HttpGet]
public async Task<ActionResult<IEnumerable<CityDto>>> GetCities(
    [FromQuery] string? name, [FromQuery] string? searchQuery,
    [FromQuery] int pageNumber = 1, [FromQuery] int pageSize = 10)
{
    if (pageSize > maxPageSize) pageSize = maxPageSize;
    …
}
```
## Skip en Take
Voorbeeld `pageNumber = 2`, `pageSize = 10`: `Skip(pageSize * (pageNumber - 1))` = `Skip(10)` en `Take(pageSize)` = `Take(10)`.
```csharp
return await collection
    .OrderBy(c => c.Name)                    // paging vereist een vaste volgorde
    .Skip(pageSize * (pageNumber - 1))
    .Take(pageSize)
    .ToListAsync();
```
EF vertaalt `Skip`/`Take` naar `OFFSET`/`LIMIT` ([[EF Core verdieping]]).

## Tips
- Filter **vóór** je telt en pagineert; `CountAsync()` telt de gefilterde collectie.
- De consument wil ook metadata: [[Pagination metadata]].

## Gerelateerd
[[Filtering]] · [[Searching]] · [[LINQ]]

---
Hoort bij: [[Filtering, searching en paging]]
