---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [15]
groep: Authenticatie, logging en configuratie
aliases: [ILogger, ILogger<T>, Logging]
---
# Logging (ILogger)

> ASP.NET Core heeft **ingebouwde logging**: je injecteert een `ILogger<T>` en logt op een bepaald [[Log levels|level]]; wat zichtbaar is regel je in `appsettings`.

```csharp
private readonly ILogger<CategoriesController> _logger;

public CategoriesController(ILogger<CategoriesController> logger, IMapper mapper, ICategoryRepository repo)
{
    _logger = logger;
    …
}

if (category == null)
{
    _logger.LogInformation($"Category with id {id} wasn't found when accessing categories.");
    return NotFound();
}
```
Console: `info: CityInfo.API.Controllers.CategoriesController[0] Category with id 15 wasn't found when accessing categories.`

## Onverwerkte exception
`throw new Exception("…")` in een action: de exception verschijnt in de console, Swagger toont **500** en de browser de volledige exception ([[Exceptions (CSharp)|Exceptions (C#)]]).

## Loggen naar een bestand
Niet standaard: gebruik een third-party provider zoals [[Serilog]].

## Gerelateerd
[[Constructor injection]] · [[IConfiguration]] · [[appsettings.json]]

---
Hoort bij: [[Logging en configuratie]]
