---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [4]
groep: ASP.NET Core API
aliases: [ControllerBase, ApiController, Action]
---
# Controller

> Een klasse die erft van **`ControllerBase`**, het attribuut **`[ApiController]`** draagt en **actions** (publieke methodes) bevat die HTTP-requests afhandelen.

```csharp
[ApiController]
[Route("api/cities")]
public class CitiesController : ControllerBase
{
    [HttpGet]
    public ActionResult<IEnumerable<CityDto>> GetCities() { /* ... */ }
}
```

## Stappen
1. Klasse in de map **Controllers**.
2. Erf van `ControllerBase` (namespace `Microsoft.AspNetCore.Mvc`): `ModelState`, de huidige gebruiker en hulpmethodes voor responses.
3. Zet `[ApiController]` op de klasse.
4. Geef elke action een route-attribuut ([[Routing]]).

## Tips
- `[ApiController]` activeert API-gedrag: o.a. verplichte attribute routing en automatische **400** bij ongeldig model ([[Model validation]]).
- Zonder route crasht de app met *"Action … does not have an attribute route"*.
- Child resources krijgen een eigen controller, bv. `api/cities/{cityId}/pointsofinterest`.

## Gerelateerd
[[ActionResult]] · [[DTO]] · [[MVC]] · [[Dependency Injection]]

---
Hoort bij: [[Een API maken en resources teruggeven]]
