---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 4
groep: Deel B: ASP.NET Core API
aliases: [Creating an API, Returning resources, les 2 API, CitiesController]
---
# Een API maken en resources teruggeven

> Een **controller** (afgeleid van `ControllerBase`, met `[ApiController]`) bevat **actions** die via **attribute routing** aan een URL + HTTP-methode gekoppeld worden; ze geven **DTO's** terug verpakt in een `ActionResult` met de juiste **HTTP-statuscode**.

_Slides: "2.CreatingAPI_ReturningResources" — voorbeeld CityInfo: `CitiesController` en `PointsOfInterestController`._

## 1. MVC
**Model – View – Controller**: architecturaal patroon voor user interfaces. Het verbetert **separation of concerns**, **testbaarheid** en **herbruikbaarheid**.
| Onderdeel | In onze API |
|---|---|
| **Model** | applicatiedata en/of businesslogica en -regels; data opslaan/ophalen |
| **View** | weergave van de modeldata — bij een API de **JSON-representatie** van de resource |
| **Controller** | neemt input van de gebruiker aan en vertaalt die naar modeldata die de view kan gebruiken |
De controller kiest welke view/data de consument krijgt. Zie [[MVC]] en [[Controller]].

## 2. Een CitiesController vanaf nul
1. Nieuwe klasse `CitiesController` in de map **Controllers**.
2. Erf van **`ControllerBase`** (namespace `Microsoft.AspNetCore.Mvc`): bevat de basisfunctionaliteit — `ModelState`, de huidige gebruiker, hulpmethodes om responses terug te geven.
3. Zet `[ApiController]` op de klasse.
4. Maak een action `GetCities` die een `JsonResult` teruggeeft met een lijst van twee anonieme objecten (`Id`, `Name`) — er is nog geen `City`-modelklasse.
```csharp
[ApiController]
public class CitiesController : ControllerBase
{
    [HttpGet("api/cities")]
    public JsonResult GetCities()
    {
        var cities = new List<object>
        {
            new { Id = 1, Name = "New York City" },
            new { Id = 2, Name = "Antwerp" },
        };
        return new JsonResult(cities);
    }
}
```
**Zonder route** crasht de app: *"Action … does not have an attribute route. Action methods on controllers annotated with ApiControllerAttribute must be attribute routed."*

## 3. Routing
**Routing** koppelt een request-URI (*Uniform Resource Identifier*) aan een action op een controller. Elke HTTP-request wordt door het MVC-framework geparsed en dan naar een action gemapt. Er zijn twee stijlen:

| | Convention-based | **Attribute-based (aanbevolen voor API's)** |
|---|---|---|
| Waar | patronen in `Program.cs`, bv. `app.MapControllerRoute(name: "default", pattern: "{controller}/{action}/{id:int?}", …)` | direct op controller/action met `[Route]`, `[HttpGet]`, `[HttpPost]`… |
| Nadeel/voordeel | maakt sommige URL-patronen erg moeilijk | routes zijn makkelijk af te lezen |
Bij attribute routing scant `MapControllers()` de controllers op route-attributen en registreert ze in het interne routingsysteem.

| HTTP-methode | Attribuut | Voorbeeld-URL |
|---|---|---|
| GET | `[HttpGet]` | `/api/cities` |
| POST | `[HttpPost]` | `/api/cities` |
| PUT | `[HttpPut]` | `/api/cities/1` |
| PATCH | `[HttpPatch]` | `/api/cities/1` |
| DELETE | `[HttpDelete]` | `/api/cities/1` |

`[Route]` is **niet** gekoppeld aan een HTTP-methode: zet het op **controllerniveau** als **prefix** voor de templates op actionniveau:
```csharp
[ApiController]
[Route("api/[controller]")]            // [controller] = naam van de klasse zonder "Controller" → api/cities
public class CitiesController : ControllerBase
{
    [HttpGet]                          // GET api/cities
    public ActionResult<IEnumerable<CityDto>> GetCities() { … }

    [HttpGet("{id}")]                  // GET api/cities/{id}
    public ActionResult<CityDto> GetCity(int id) { … }
}
```
Zie [[Routing]].

## 4. DTO's en een in-memory datastore
We willen geen anonieme objecten teruggeven. Per object dat we ontvangen of terugsturen maken we een **modelklasse = DTO (Data Transfer Object)** (map **Models**). Een DTO is **niet** hetzelfde als een *entity* (zie [[EF Core - database, migrations en seeding]]).
```csharp
public class CityDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public ICollection<PointOfInterestDto> PointsOfInterest { get; set; } = new List<PointOfInterestDto>();
    public int NumberOfPointsOfInterest { get { return PointsOfInterest.Count; } }   // berekende property
}
```
- `string?` = mag `null` zijn. Zonder nullable-configuratie geeft de compiler *nullable warnings*; in de cursus zet je `<Nullable>annotations</Nullable>` om het simpel te houden.
- Start met **hardcoded data**: map **DataStores**, klasse `CitiesDataStore` als **singleton** (`public static CitiesDataStore Current { get; } = new CitiesDataStore();` + private constructor die de lijst vult).

## 5. HTTP-statuscodes
Een correcte statuscode is cruciaal: consumenten weten hieraan of de request lukte en zo niet **waarom** niet. Zie [[HTTP-statuscodes]].

| Reeks | Betekenis |
|---|---|
| 1xx | informational (niet belangrijk in de cursus) |
| 2xx | succes |
| 3xx | redirection (niet gebruikt door API's) |
| 4xx | fout van de **client** |
| 5xx | fout van de **server** |

| Code | Wanneer |
|---|---|
| **200 OK** | succesvolle GET |
| **201 Created** | succesvolle POST |
| **204 No Content** | geslaagd, niets terug te geven (update, delete…) |
| **400 Bad Request** | verkeerde request (foute JSON-body…) |
| **401 Unauthorized** | geen of ongeldige authenticatie |
| **403 Forbidden** | geauthenticeerd maar geen toegang |
| **404 Not Found** | resource bestaat niet |
| **409 Conflict** | bv. edit-conflict bij gelijktijdige update |
| **500 Internal Server Error** | fout bij de server |

**Pitfalls:** geen 200 OK als er iets mis is; geen 500 als de client de fout maakte; geen 404 als de resource bestaat maar je geen toegang hebt (dat is 403).

Quick check uit de slides: `/api/cities` → 200, `/api/people` → 404 (bestaat niet), `/api/cities/1` → 200, `/api/cities/5` → **ook 200** zolang je niet controleert of de stad bestaat — fout! Daarom `ActionResult`.

## 6. ActionResult en hulpmethodes
Geef geen `JsonResult` maar een **`ActionResult<T>`**; zo kan je **hulpmethodes** gebruiken die resultaat + statuscode combineren: `Ok()`, `NotFound()`… Vergeet het type tussen `<>` niet (generieke klasse). Het resultaat wordt automatisch naar JSON gemapt. Zie [[ActionResult]].
```csharp
[HttpGet]
public ActionResult<IEnumerable<CityDto>> GetCities()
{
    return Ok(CitiesDataStore.Current.Cities);
}

[HttpGet("{id}")]
public ActionResult<CityDto> GetCity(int id)
{
    var cityToReturn = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.Id == id);
    if (cityToReturn == null) return NotFound();     // 404 als de stad niet bestaat
    return Ok(cityToReturn);                         // 200 + de stad
}
```

## 7. Child resources: points of interest
Een POI hoort altijd bij een stad. Dus een **tweede controller** met een route die via de stad gaat:
```csharp
[Route("api/cities/{cityId}/[controller]")]        // → api/cities/1/pointsofinterest
[ApiController]
public class PointsOfInterestController : ControllerBase { … }
```
- `GetPointsOfInterest(int cityId)` → alle POI's van één stad; `NotFound()` als de stad niet bestaat, anders 200 + de POI's.
- `GetPointOfInterest(int cityId, int pointOfInterestId)` met `[HttpGet("{pointOfInterestId}")]` → `/api/cities/1/pointsofinterest/1`:
```csharp
var city = CitiesDataStore.Current.Cities.FirstOrDefault(c => c.Id == cityId);
if (city == null) return NotFound();
// daarna de POI zoeken in city.PointsOfInterest, eventueel NotFound()
```
- Refactor `CitiesController` met `[Route("api/cities")]` **op controllerniveau** zodat `[HttpGet]`-attributen korter worden.

## 8. Interactie met een API
Test met Swagger (**Try it out**) of de browser. In de oefening [[MotoGP - API maken]] bouw je hetzelfde voor teams en renners.

## Tips en valkuilen
- Vergeet `[ApiController]` niet: het activeert API-gedrag (o.a. attribute routing verplicht, automatische 400 bij invalid model).
- `FirstOrDefault` geeft `null` als er niets gevonden wordt → altijd daarop controleren en `NotFound()` teruggeven.
- Gebruik één default URL-schema op controllerniveau i.p.v. op elke action te herhalen.

## Begrippen
[[MVC]] · [[Controller]] · [[Routing]] · [[DTO]] · [[HTTP-statuscodes]] · [[HTTP-methodes]] · [[ActionResult]] · [[REST API]]

## Oefening
[[MotoGP - API maken]]

---
Hoort bij: [[NET Development|.NET Development]]
