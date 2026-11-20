---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [4, 8]
groep: ASP.NET Core API
aliases: [ActionResult<T>, IActionResult, Ok(), NotFound()]
---
# ActionResult

> Het returntype van een action dat **resultaat + statuscode** combineert; met hulpmethodes zoals `Ok()` en `NotFound()` geef je het juiste antwoord terug.

```csharp
[HttpGet("{id}")]
public ActionResult<CityDto> GetCity(int id)
{
    var city = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.Id == id);
    if (city == null) return NotFound();   // 404
    return Ok(city);                        // 200 + de stad
}
```
Gebruik `ActionResult<T>` i.p.v. `JsonResult`. Vergeet het type tussen `<>` niet (generieke klasse).

## Tip
`FirstOrDefault` geeft `null` als er niets gevonden wordt: controleer dat altijd en geef `NotFound()` terug.

## Gerelateerd
[[HTTP-statuscodes]] · [[Controller]] · [[CreatedAtAction]]

---
Hoort bij: [[Een API maken en resources teruggeven]]
