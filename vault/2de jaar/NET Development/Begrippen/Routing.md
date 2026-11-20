---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [3, 4]
groep: ASP.NET Core API
aliases: [Attribute routing, Route, URI-routing]
---
# Routing

> **Routing** koppelt een request-URI aan een **action** op een controller. Voor API's gebruik je **attribute routing**: `[Route]`, `[HttpGet]`, `[HttpPost]`… rechtstreeks op de controller/action.

## Twee stijlen
| | Convention-based | **Attribute-based (aanbevolen voor API's)** |
|---|---|---|
| Waar | patronen in `Program.cs`, bv. `{controller}/{action}/{id:int?}` | op controller/action |
| Opmerking | maakt sommige URL-patronen erg moeilijk | routes zijn makkelijk af te lezen |

`app.MapControllers()` scant de controllers op route-attributen en registreert ze in het routingsysteem.

## Voorbeeld
```csharp
[ApiController]
[Route("api/[controller]")]          // [controller] = klassenaam zonder "Controller" → api/cities
public class CitiesController : ControllerBase
{
    [HttpGet]            public ActionResult<IEnumerable<CityDto>> GetCities() { ... }   // GET api/cities
    [HttpGet("{id}")]    public ActionResult<CityDto> GetCity(int id) { ... }            // GET api/cities/{id}
}
```
`[Route]` is **niet** gekoppeld aan een HTTP-methode: op controllerniveau is het een **prefix** voor de templates op actionniveau.

## Child resource
`[Route("api/cities/{cityId}/[controller]")]` → `api/cities/1/pointsofinterest`.

## Gerelateerd
[[HTTP-methodes]] · [[Controller]] · [[Program.cs]]

---
Hoort bij: [[Een API maken en resources teruggeven]]
