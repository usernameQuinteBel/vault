---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 6
groep: Deel B: ASP.NET Core API
aliases: [EF Core part 2, Working with EF Core, les 4 EF Core, EFCore_Part2, LINQ queries]
---
# EF Core - bevragen met LINQ

> Je **injecteert de [[DbContext]]** in je controller en bevraagt de database met **[[LINQ]]** en **lambda-expressies** op de DbSet (`Where`, `OrderBy`, `First`, `Include`…). EF Core vertaalt dat naar SQL, **uitgevoerd pas bij `ToList()`** (deferred execution).

_Slides: "4.EFCore_Part2"._

## 1. De DbContext in een controller injecteren
Dankzij de ingebouwde **dependency injection** (de context staat in de service collection, [[EF Core - database, migrations en seeding]]) vraag je ze op via de **constructor**:
```csharp
[ApiController]
[Route("api/cities")]
public class CitiesController : ControllerBase
{
    private readonly CityInfoContext _context;                    // private class variable (met underscore)

    public CitiesController(CityInfoContext context)              // constructor parameter
    {
        _context = context;                                       // waarde toekennen aan de private variabele
    }
}
```
Achter de schermen maakt DI een instantie voor je (denk: `DbContext context = new DbContext();`). Dat kan enkel omdat je de context in `Program.cs` registreerde. Zie [[Constructor injection]].

## 2. Van data store naar database
```csharp
[HttpGet]
public ActionResult<IEnumerable<CityDto>> GetCities()
{
    return Ok(_context.Cities.ToList());        // SELECT * FROM Cities → List<City>
}
```
Bevragen gaat **altijd via de DbContext en de bijhorende DbSet**. `ToList()` voert een SQL-query uit. Maar alles wat je in SQL kan, kan in EF Core: **filteren, ordenen, groeperen, gerelateerde data meenemen (join)** — via **LINQ**.

## 3. LINQ en lambda-expressies
**LINQ = Language Integrated Query**: je bevraagt de database met C#-methodes/syntax op de DbSet. LINQ gebruikt intensief **[[Lambda expression]]s**: `input => expressie` (lees *"goes to"*).

### Filteren — `Where`
```csharp
_context.Cities.Where(c => c.Name.Contains("a")).ToList();
// SQL: … WHERE [c].[Name] LIKE N'%a%'
```
Combineren met `&&` (AND) en `||` (OR); gelijkheid met `==`:
```csharp
.Where(c => c.Name.Contains("a") && c.Description.Length < 50)
.Where(c => c.Name == "Antwerp")
```

### Sorteren — `OrderBy` / `OrderByDescending`
```csharp
_context.Cities.Where(c => c.Name.Contains("a")).OrderBy(c => c.Name).ToList();            // A → Z
_context.Cities.Where(c => c.Name.Contains("a")).OrderByDescending(c => c.Name).ToList();  // Z → A  (… ORDER BY [c].[Name] DESC)
```

### Queries zijn samen te stellen (composable)
`AsQueryable()` geeft een **query in code** (`IQueryable<T>`); `.ToList()` voert de samengestelde query uit → **één databasecall**:
```csharp
IQueryable<City> cities = _context.Cities.AsQueryable();
cities = cities.Where(c => c.Name.Length < 50);
cities = cities.Where(c => c.Description.Contains("park"));
cities = cities.OrderBy(c => c.Name);
return Ok(cities.ToList());
// SQL: … WHERE LEN(Name) < 50 AND Description LIKE '%park%' ORDER BY Name
```
Zie [[IQueryable en deferred execution]].

## 4. Aggregate- en executiemethodes
Functies die **één waarde** uit een collectie berekenen/teruggeven. Zie [[Aggregate methods (First, Single, Count…)]].

| Methode | Resultaat |
|---|---|
| `First()` | eerste element; **exception** als er geen is |
| `FirstOrDefault()` | eerste element; **`null`** als er geen is |
| `Single()` | het enige element dat voldoet; exception bij **geen of meer dan één** |
| `SingleOrDefault()` | zoals `Single()` maar `null` als er geen is |
| `Last()` / `LastOrDefault()` | laatste element (exception / null) |
| `Count()` | aantal elementen (optioneel met lambda-criterium) |
| `Max()`, `Min()`, `Sum()`, `Average()` | maximum, minimum, som, gemiddelde |

```csharp
City first   = _context.Cities.First();
City berlin  = _context.Cities.First(c => c.Name == "Berlin");   // throws "Sequence contains no elements"
int highestId    = _context.Cities.Max(c => c.Id);
int total    = _context.Cities.Count();
```
> **Valkuil:** `First(c => c.Name == "Berlin")` zonder resultaat gooit een `InvalidOperationException` ("Sequence contains no elements"). Gebruik `FirstOrDefault` en controleer op `null`.

**Oefening:** refactor **alle methodes** van de `CitiesController` zodat ze uit de database lezen en de steden **op naam** sorteren.

## 5. Beveiliging: SQL injection
EF Core maakt automatisch **command parameters**, waardoor SQL injection onmogelijk wordt:
```csharp
string injectionQuery = "'; drop table Cities--";
var cities = _context.Cities.Where(c => c.Name == injectionQuery).ToList();
// uitgevoerd als: … WHERE [c].[Name] = @__injectionQuery_0   (de waarde is een parameter, geen SQL)
```
Zie [[Parameterized query]] en [[SQL Injection]].

## 6. Gerelateerde data — `Include`
Een stad heeft meerdere POI's; een POI hoort bij één stad. **Standaard worden gerelateerde entities NIET meegeladen**: `ToList()` geeft `pointsOfInterest: []`.

**Eager loading** met `Include`:
```csharp
_context.Cities.Include(c => c.PointsOfInterest).ToList();
// SQL: SELECT … FROM Cities LEFT JOIN PointsOfInterest ON Cities.Id = PointsOfInterest.CityId
```
Zie [[Include en loading]].

### Probleem: self referencing loop
Geef je entities rechtstreeks terug, dan krijg je een **500-fout**: *"Self referencing loop detected for property 'city'…"* — `City` → `PointOfInterest` → `City` → … (circulaire verwijzing, JSON-serialisatie loopt oneindig).
Oplossingen:
- **Later (hoofdstuk 7)**: geef **DTO's** terug i.p.v. entities → [[Mapping met AutoMapper]].
- **Voorlopig**: negeer de lussen in `Program.cs`:
```csharp
builder.Services.AddControllers()
    .AddJsonOptions(options => options.JsonSerializerOptions.ReferenceHandler =
        System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);
```
Zie [[Self-referencing loop]].

**Oefening:** refactor alle methodes in de `PointsOfInterestController` zodat ze uit de database lezen.

## 7. Wat volgt
Het gebruik van de context rechtstreeks in controllers koppelt je controller aan de data-laag; dat los je later op met het [[Repository pattern]] ([[Layered architecture en Repository pattern]]).

## Tips en valkuilen
- Query's worden pas uitgevoerd bij `ToList()`, `First…()`, `Count()`… — niet bij `Where`/`OrderBy`.
- Een `Where` op `Description.Contains(...)` kan een `NullReferenceException` geven als `Description` null is — controleer dat eerst (zie [[Filtering, searching en paging]]).
- Vergeet `Include` niet als je de gerelateerde data wél nodig hebt.

## Begrippen
[[LINQ]] · [[Lambda expression]] · [[IQueryable en deferred execution]] · [[Aggregate methods (First, Single, Count…)]] · [[Include en loading]] · [[Self-referencing loop]] · [[Constructor injection]] · [[DbContext]] · [[DbSet]] · [[Parameterized query]]

## Oefening
[[MotoGP - Bevragen]]

---
Hoort bij: [[NET Development|.NET Development]]
