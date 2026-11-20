---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 13
groep: Deel B: ASP.NET Core API
aliases: [Filtering searching paging, les 10, Pagination, X-Pagination, PaginationMetadata]
---
# Filtering, searching en paging

> Een collectie-endpoint maak je bruikbaar en performant met **filtering** (exact, `?name=Antwerp`), **searching** (ruimer, `?searchQuery=Tower`) en **paging** (`pageNumber` + `pageSize`), waarbij de query via **deferred execution** pas één keer uitgevoerd wordt en de **pagination metadata** in de **`X-Pagination`-header** meegaat.

_Slides: "10. Filtering, searching & paging" (CityInfo) en oefening MotoGP (tickets)._

## 1. Eerst: CitiesController refactoren (repository + async)
Hetzelfde stramien als bij de categorieën ([[Layered architecture en Repository pattern]]). Nieuw: een **boolean-parameter** `includePOIs` op beide repository-methoden om te bepalen of de gerelateerde POI's meekomen. Standaardwaarde **`false`** → vergeet je ze, dan worden ze niet geladen.
```csharp
public interface ICityRepository
{
    Task<IEnumerable<City>> GetCitiesAsync(bool includePOIs = false);
    Task<City?> GetCityAsync(int cityId, bool includePOIs = false);
}
```
```csharp
public async Task<IEnumerable<City>> GetCitiesAsync(bool includePOIs = false)
{
    // Start with the full collection
    var collection = _context.Cities.AsQueryable();
    if (includePOIs)
    {
        collection = collection.Include(c => c.PointsOfInterest);
    }
    return await collection.OrderBy(c => c.Name).ToListAsync();
}
```
| Onderdeel | Doet |
|---|---|
| **`AsQueryable()`** | maakt een query die **niet uitgevoerd** wordt tot je de data aanspreekt |
| **`Include()`** | voegt een include-clause aan de query toe |
| **`ToListAsync()`** | **voert de query uit** = DB-operatie |

### Deferred execution
> De uitvoering van de query gebeurt **na** het opbouwen ervan: pas wanneer het resultaat doorlopen wordt.

Uitvoering wordt getriggerd door een `foreach`-loop, `ToListAsync()`, `ToArray()`, `ToDictionary()` en **singleton queries** (`Avg`, `Max`, `Count`, `FirstOrDefaultAsync()`, `Single`, …). Zeer goed voor **API-performance** omdat het (1) het aantal database-operaties en (2) het aantal opgehaalde resultaten minimaliseert. Zie [[IQueryable en deferred execution]].

**Oefening:** `CitiesController` refactoren naar de `CityRepository`: **async** werken, de **context verwijderen**, de repository **registreren** en controleren of de mappings in beide endpoints gebruikt worden.

## 2. Filtering vs searching
| | **Filtering** | **Searching** |
|---|---|---|
| Idee | **precies** zijn: selecties toevoegen tot je exact het resultaat hebt | **breder** zoeken wanneer je niet exact weet welke items in de collectie zitten |
| Query string | veldnaam + waarde: `/api/cities?name=Antwerp` | één zoekwaarde: `/api/cities?searchQuery=Tower` |
| Implementatie | exacte `Where` op een veld | **de API beslist** hoe de zoekfunctie werkt |
| Combineren | ja: `/api/cities?name=Antwerp&searchQuery=Tower` | |
Zie [[Filtering]] en [[Searching]].

### Filteren op naam
Property als **parameter** (uit de query string) op de endpoint en doorgeven aan de repository.
```csharp
[HttpGet]
public async Task<ActionResult<IEnumerable<CityDto>>> GetCities([FromQuery] string? name)
{
    var cities = await _cityRepository.GetCitiesAsync(name, true);
    return Ok(_mapper.Map<IEnumerable<CityDto>>(cities));
}
```
```csharp
public async Task<IEnumerable<City>> GetCitiesAsync(string? name, bool includePOIs = false)
{
    // Avoid Trimming Null
    name = name?.Trim();
    // Start with the full collection
    var collection = _context.Cities.AsQueryable();
    if (!string.IsNullOrEmpty(name))
    {
        collection = collection.Where(c => c.Name == name);
    }
    if (includePOIs)
    {
        collection = collection.Include(c => c.PointsOfInterest);
    }
    return await collection.OrderBy(c => c.Name).ToListAsync();
}
```
`Where()` voegt een **where-clause** toe. De gegenereerde SQL: `… LEFT JOIN [PointOfInterests] … WHERE [c].[Name] = @__name_0 ORDER BY [c].[Name], [c].[Id]` ([[Parameterized query]] → veilig tegen [[SQL Injection]]).

### Zoeken met `searchQuery`
We beslissen: zoek in cities waar de **Name** de `searchQuery` bevat **of** de **Description** hem bevat.
```csharp
if (!string.IsNullOrEmpty(searchQuery))
{
    collection = collection.Where(c => c.Name.Contains(searchQuery)
        || (c.Description != null && c.Description.Contains(searchQuery)));
}
```
**Let op:** zoek in `Description` **enkel als die niet `null` is**, anders volgt een `NullReferenceException`. SQL: `WHERE [c].[Name] LIKE @__searchQuery… OR ([c].[Description] IS NOT NULL AND [c].[Description] LIKE …)`.

Elke extra filter/zoekactie is gewoon **een extra `Where()`** op dezelfde `IQueryable`; ze worden samen **één** SQL-query.

## 3. Paging
**Collection resources groeien vaak groot.** Best practice: **paging op alle collecties** (vermijdt performanceproblemen).
- Parameters via query string: **`pageNumber`** (standaard **eerste pagina**) en **`pageSize`** (aantal elementen per pagina; **moet beperkt worden!**):
  `/api/cities?pageNumber=1&pageSize=5`
```csharp
[HttpGet]
public async Task<ActionResult<IEnumerable<CityDto>>> GetCities(
    [FromQuery] string? name,
    [FromQuery] string? searchQuery,
    [FromQuery] int pageNumber = 1,
    [FromQuery] int pageSize = 10)
{
    if (pageSize > maxPageSize) pageSize = maxPageSize;   // beperk de maximale page size
    …
}
```
### Skip en Take (rekenvoorbeeld)
Neem **pageNumber = 2, pageSize = 10**:
1. We willen de eerste 10 **overslaan** (we zijn op pagina 2): `Skip(pageSize * (pageNumber - 1))` = `Skip(10 * (2 - 1))` = **`Skip(10)`**.
2. We willen er 10 **nemen**: `Take(pageSize)` = **`Take(10)`**.
```csharp
return await collection
    .OrderBy(c => c.Name)
    .Skip(pageSize * (pageNumber - 1))
    .Take(pageSize)
    .ToListAsync();
```
(Paging vereist een **vaste volgorde** → eerst `OrderBy`.) EF vertaalt `Skip`/`Take` naar `OFFSET`/`LIMIT` (zoals in de EF-theorie), zie [[EF Core verdieping]]. Zie [[Paging]].

## 4. Pagination metadata terug naar de consument
Een consument wil weten: **totaal aantal items, totaal aantal pagina's, huidige pagina, page size, endpoint naar vorige/volgende pagina**… = **pagination metadata**. Die zet je best in de **header** van de response met een custom header **`X-Pagination`**. Zie [[Pagination metadata]].

### Gedeelde bibliotheek `CityInfo.Shared`
`PaginationMetadata` is nodig in **Infrastructure én API** → een aparte class library **`CityInfo.Shared`** die beide lagen refereren.
```csharp
public class PaginationMetadata
{
    public int TotalItemCount { get; set; }
    public int TotalPageCount { get; set; }
    public int PageSize { get; set; }
    public int CurrentPage { get; set; }

    public PaginationMetadata(int totalItemCount, int pageSize, int currentPage)
    {
        TotalItemCount = totalItemCount;
        PageSize = pageSize;
        CurrentPage = currentPage;
        TotalPageCount = (int)Math.Ceiling(totalItemCount / (double)pageSize);
    }
}
```
**Rekenvoorbeeld:** 3 steden en `pageSize` 2 → `TotalPageCount = Math.Ceiling(3 / 2.0) = 2` pagina's.

### Repository: een Tuple teruggeven
We willen **steden én metadata** teruggeven. Een **Tuple** is een taalconstructie om **meerdere waarden** terug te geven: groepeer ze tussen haakjes, gescheiden door een komma. Zie [[Tuple]].
```csharp
public async Task<(IEnumerable<City>, PaginationMetadata)> GetCitiesAsync(
    string? name, string? searchQuery, int pageNumber, int pageSize, bool includePOIs = false)
{
    …
    // DB call to get total amount of items
    var totalItemCount = await collection.CountAsync();

    // Construct pagination metadata
    var paginationMetadata = new PaginationMetadata(totalItemCount, pageSize, pageNumber);

    // Async call to DB
    var collectionToReturn = await collection
        .OrderBy(c => c.Name)
        .Skip(pageSize * (pageNumber - 1))
        .Take(pageSize)
        .ToListAsync();

    // Return with paginationMetadata
    return (collectionToReturn, paginationMetadata);
}
```
- **`CountAsync()`** haalt het **totaal aantal items** op → dit is een **databasequery** (uitgevoerd vóór het paging-deel, op de gefilterde collectie).

### Controller: de header toevoegen
```csharp
using System.Text.Json;

var (cities, paginationMetadata) = await _cityRepository.GetCitiesAsync(
    name, searchQuery, pageNumber, pageSize, true);

Response.Headers.Add("X-Pagination", JsonSerializer.Serialize(paginationMetadata));

return Ok(_mapper.Map<IEnumerable<CityDto>>(cities));
```
`IHeaderDictionary` (`Response.Headers`) voegt een key/value-paar aan de response-header toe. De tuple die je terugkrijgt, **deconstrueer** je meteen in twee variabelen.

**Test:** `https://localhost:7003/api/Cities?pageNumber=1&pageSize=2` → response header:
`x-pagination: {"TotalItemCount":3,"TotalPageCount":2,"PageSize":2,"CurrentPage":1}`; de body bevat enkel de eerste pagina (de output op het scherm).

## 5. Oefening MotoGP: tickets filteren en pagineren
Zie [[MotoGP - Filtering en paging]]. Samengevat uit de opgave:
1. **Testdata met Bogus:** installeer **Bogus** (genereert nep- maar gestructureerde data); een `TicketSeeder` in map `Seeders` en een `SeedController` (uit de resources) voeren `POST /api/seed/tickets` uit → **1000 ticketreservaties** (zie [[Bogus]]).
2. **`GetCountries()`** met optionele `bool onlyWithTickets` (default `false`) → enkel landen met minstens één verkocht ticket.
3. **`GetTickets()`** met filters `searchQuery` (koper naam/e-mail), `countryId`, `raceId`, `open` (`true` = enkel onbetaalde) en paging `pageNumber` (default 1) / `pageSize` (default 10) + `paginationMetadata`.
4. **Front end:** `getAll(params)` → `apiClient.get('/tickets', { params })` — **Axios serialiseert** het `params`-object automatisch naar query parameters; in `TicketsScreen` een `filters`-state en `useEffect(() => getTickets(filters), [filters])`.
5. **`TicketsFilter`** (presentational) krijgt `filters`, `onFilterChange={setFilters}`, `countries`, `races`; de lijsten `races` en `countries` laad je **één keer** (niet na elke render).
6. **`Pagination`**-component (presentational): `currentPage`, `totalPages={pageCount}`, `onPageChange={handlePageChange}`; `pageCount` komt uit de header: `JSON.parse(result.headers["x-pagination"]).TotalPageCount`; `handlePageChange(newPage)` → `setFilters({ ...filters, pageNumber: newPage })`.
7. **CORS:** zonder aanpassing wordt `x-pagination` **niet** blootgesteld aan de React-front end:
```csharp
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
        builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod()
               .WithExposedHeaders("X-Pagination"));
});
```
Zie [[CORS]], [[React - Axios]] en [[React - State]].

## Tips en valkuilen
- **Trim** string-parameters en controleer op `null`/leeg voor je filtert (`name?.Trim()`).
- **Beperk `pageSize`** met een maximum (`maxPageSize`).
- Filter **vóór** je telt en pagineert: `CountAsync()` telt de gefilterde collectie.
- Zonder `WithExposedHeaders("X-Pagination")` ziet de browser-client de header niet.
- Combineer filters door meerdere `Where()`-calls op dezelfde query te chainen; pas `ToListAsync()` pas op het einde toe.

## Begrippen
[[Filtering]] · [[Searching]] · [[Paging]] · [[Pagination metadata]] · [[Tuple]] · [[Bogus]] · [[CORS]] · [[IQueryable en deferred execution]] · [[Aggregate methods (First, Single, Count…)]]

## Oefening
[[MotoGP - Filtering en paging]]

---
Hoort bij: [[NET Development|.NET Development]]
