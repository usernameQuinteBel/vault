---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [6, 9]
groep: EF Core
aliases: [Language Integrated Query, Where OrderBy]
---
# LINQ

> **Language Integrated Query**: je bevraagt data met C#-methodes op een collectie of [[DbSet]]; EF Core vertaalt de query naar SQL. LINQ gebruikt intensief [[Lambda expression|lambda-expressies]].

| Methode | SQL-equivalent | Voorbeeld |
|---|---|---|
| `Where` | `WHERE` | `.Where(c => c.Name.Contains("a"))` → `LIKE N'%a%'` |
| `OrderBy` / `OrderByDescending` | `ORDER BY` | `.OrderBy(c => c.Name)` |
| `Skip` / `Take` | `OFFSET` / `LIMIT` | server-side paging ([[Paging]]) |
| `Select` | kolommen kiezen | projectie naar een DTO: minder data, geheugen en tracking |
| `Include` | join | [[Include en loading]] |

Combineren: `&&` (AND), `||` (OR), `==`.
```csharp
_context.Cities.Where(c => c.Name.Contains("a") && c.Description.Length < 50).OrderBy(c => c.Name).ToList();
```
`ToList()`, `First()`, `Count()`… voeren de query uit ([[IQueryable en deferred execution]], [[Aggregate methods (First, Single, Count…)]]).

## Valkuilen
- Een **eigen methode** in `Where(s => CustomValidation(s.Name))` is niet vertaalbaar; modern EF gooit dan een exception i.p.v. stilzwijgend in het geheugen te filteren.
- `Where` op `Description.Contains(...)` kan een `NullReferenceException` geven als `Description` `null` is.

## Gerelateerd
[[Filtering]] · [[Searching]] · [[EF Core - bevragen met LINQ]]

---
Hoort bij: [[EF Core - bevragen met LINQ]]
