---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 7
groep: Deel B: ASP.NET Core API
aliases: [Mapping, AutoMapper les, les 5 Mapping, Entity naar DTO]
---
# Mapping met AutoMapper

> Je geeft nooit entities terug aan de client maar **DTO's**; **[[AutoMapper]]** vertaalt entity → DTO (en omgekeerd) via **mapping profiles**, zodat je niet overal dezelfde **boilerplate-code** hoeft te schrijven.

_Slides: "5.Mapping" — voorbeeld CityInfo._

## 1. Waarom DTO's?
Een **DTO (Data Transfer Object)** is de vorm waarin data over de API-grens gaat. Waarom werk je (CRUD) niet rechtstreeks met entities?
- Entities zijn **sterk gekoppeld aan de databasetabellen**. Een wijziging in je entities mag de database wél beïnvloeden maar **niet de consumenten van de API**.
- We willen niet de **hele entity + gerelateerde entities** teruggeven: geef de consument enkel wat hij nodig heeft (en wat jij wil geven).
- Voor aanmaken/wijzigen accepteer je het **minimum** dat nodig is.
Zie [[DTO]].

Probleem uit het vorige hoofdstuk: `_context.Cities.Include(c => c.PointsOfInterest).ToList()` teruggeven toont de **entity-structuur** (inclusief `officialWebsite`, `cityId`, `pointOfInterestCategories`…) en geeft de self-referencing loop. Doel: `GetCities()` geeft `IEnumerable<CityDto>` terug.

## 2. Manueel mappen
Oefening uit de slides: in de controller een nieuwe `List<CityDto>` maken, over de city-entities loopen en voor elke entity een `CityDto` (en per `PointOfInterest` een `PointOfInterestDto`) vullen; die lijst teruggeven.
Dat werkt, maar is **tijdrovend** en je herhaalt (bijna) dezelfde mapping overal waar je steden naar DTO's wil omzetten. Dat heet **boilerplate code**: *"secties code die op meerdere plaatsen herhaald worden met weinig of geen variatie"*. Is dat wat we willen? Nee.

## 3. AutoMapper
**Object-to-object mapper**: zet een invoerobject van het ene type om naar een uitvoerobject van een ander type. Properties met **dezelfde naam en hetzelfde type** worden **automatisch** gemapt (conventie); complexere mapping configureer je makkelijk. Zie [[AutoMapper]].

### Installatie en registratie
1. NuGet-pakket **AutoMapper** installeren.
2. Een **licentie** ophalen op automapper.io en in `appsettings.Development.json` zetten (sleutel `AutoMapperKey` in de slides).
3. In `Program.cs` de AutoMapper-service registreren en **alle assemblies** van de API-project doorgeven (zo worden alle mapping profiles opgepikt):
```csharp
// AutoMapper
builder.Services.AddAutoMapper(cfg => cfg.LicenseKey = builder.Configuration["AutoMapperKey"],
    AppDomain.CurrentDomain.GetAssemblies());
```
Je geeft de **licentiesleutel** (uit `appsettings.Development.json`) door én een **array van assemblies** (alle assemblies in je API-project), zodat alle mapping profiles gevonden worden.

### Mapping profile
Map **MappingProfiles** → klasse die erft van `Profile`:
```csharp
public class CityProfile : Profile
{
    public CityProfile()
    {
        // From City to CityDto
        CreateMap<City, CityDto>();
    }
}
```
Zie [[Mapping profile]].

### Gebruik in de controller
Injecteer `IMapper` naast de context:
```csharp
private readonly CityInfoContext _context;
private readonly IMapper _mapper;

public CitiesController(CityInfoContext context, IMapper mapper)
{
    _context = context;
    _mapper = mapper;
}

[HttpGet]
public ActionResult<IEnumerable<CityDto>> GetCities()
{
    var cities = _context.Cities.Include(c => c.PointsOfInterest).ToList();
    return Ok(_mapper.Map<IEnumerable<CityDto>>(cities));
}
```

## 4. Hoe AutoMapper werkt (en de typische fout)
- Basistypes (string, int, double, DateTime…) met dezelfde naam → automatisch.
- Een **complex type** (een klasse) → AutoMapper zoekt een **bijpassende map**.
- Ontbreekt die, dan krijg je: `AutoMapperMappingException: Missing type map configuration or unsupported mapping.` — `City` bevat een lijst `PointOfInterest` en daarvoor bestaat nog geen map.

Oplossing: een extra map in hetzelfde profile:
```csharp
CreateMap<City, CityDto>();
CreateMap<PointOfInterest, PointOfInterestDto>();
```
Nu zie je de **DTO-structuur** (met `numberOfPointsOfInterest`, `categories` per POI…).

## 5. Eigenschappen met verschillende namen
Hernoem `Description` in `CityDto` naar `Explanation`: AutoMapper kan die niet meer automatisch mappen → `explanation: null`. Configureer de property handmatig:
```csharp
CreateMap<City, CityDto>()
    .ForMember(dest => dest.Explanation, opt => opt.MapFrom(src => src.Description));
```
(Vergeet je `CitiesDataStore`, als die nog bestaat, niet aan te passen.) Zie [[Mapping profile]].

## 6. Oefeningen in de slides
- **`GetCity()`** ook met AutoMapper en `Include` van de POI's.
- **`PointsOfInterestController`** (`GetPointsOfInterest()` en `GetPointOfInterest()`): mappen met AutoMapper. **Tip: `ThenInclude()`** — om **geneste** relaties mee te laden (bv. POI → Categories).

## 7. Lijst-DTO's vs details-DTO's (uit de oefening)
Het is **good practice** om verschillende DTO's te gebruiken voor een **lijstweergave** (kleine payload, enkel minimale velden) en een **detailweergave** (alle properties):
- `RaceDetailsDto` (alle velden) en `RaceListDto` (zonder `Description` en `TrackLength`).
- In het profile map je dezelfde entity naar **beide** DTO's en kies je in elke controller-methode de juiste.
Zie [[Mapping profile]] en [[MotoGP - Mapping]].

## Tips en valkuilen
- Een map is **gericht**: `CreateMap<City, CityDto>()` mapt niet automatisch terug; voor omgekeerde richting (bv. `CategoryForCreationDto` → `Category`) maak je een aparte map ([[EF Core - POST, PUT, PATCH en DELETE]]).
- Fout "Missing type map configuration" = voor een van de (geneste) types ontbreekt een `CreateMap`.
- AutoMapper ondersteunt **geen DI via profiles** (die verwachten een parameterloze constructor); inject services zoals de [[Strategy pattern]]-calculator daarom in de controller ([[MotoGP - Race duration (Strategy Pattern)]]).

## Begrippen
[[DTO]] · [[AutoMapper]] · [[Mapping profile]] · [[Include en loading]] · [[Constructor injection]]

## Oefening
[[MotoGP - Mapping]]

---
Hoort bij: [[NET Development|.NET Development]]
