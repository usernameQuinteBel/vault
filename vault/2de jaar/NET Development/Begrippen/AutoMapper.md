---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [7, 8]
groep: EF Core
aliases: [IMapper, Object-to-object mapper]
---
# AutoMapper

> Een **object-to-object mapper** die een object van het ene type omzet naar een ander (entity ↔ DTO). Properties met **dezelfde naam en hetzelfde type** worden automatisch gemapt; de rest configureer je in een [[Mapping profile]].

## Installatie en registratie
1. NuGet-pakket **AutoMapper** ([[NuGet]]).
2. Licentiesleutel uit `appsettings.Development.json` (sleutel `AutoMapperKey`).
3. In [[Program.cs]], met **alle assemblies** zodat alle profiles gevonden worden ([[Assembly]]):
```csharp
builder.Services.AddAutoMapper(cfg => cfg.LicenseKey = builder.Configuration["AutoMapperKey"],
    AppDomain.CurrentDomain.GetAssemblies());
```
## Gebruik
```csharp
public CitiesController(CityInfoContext context, IMapper mapper) { _context = context; _mapper = mapper; }

return Ok(_mapper.Map<IEnumerable<CityDto>>(cities));     // entity → DTO
_mapper.Map(categoryDto, categoryEntity);                  // DTO overschrijft bestaande entity
```
## Typische fout
`AutoMapperMappingException: Missing type map configuration or unsupported mapping` = voor een (geneste) type ontbreekt een `CreateMap`.

## Tips
- Een map is **gericht**: de omgekeerde richting vraagt een eigen `CreateMap`.
- Profiles kunnen geen services via DI krijgen (parameterloze constructor) → inject zulke services in de controller.

## Gerelateerd
[[DTO]] · [[Constructor injection]] · [[Mapping met AutoMapper]]

---
Hoort bij: [[Mapping met AutoMapper]]
