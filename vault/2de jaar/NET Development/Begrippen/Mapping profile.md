---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [7, 8]
groep: EF Core
aliases: [Profile, CreateMap, ForMember, MapFrom, ForAllMembers]
---
# Mapping profile

> Een klasse die erft van `Profile` en met `CreateMap<Bron, Doel>()` vastlegt hoe [[AutoMapper]] types omzet; in de map **MappingProfiles**.

```csharp
public class CityProfile : Profile
{
    public CityProfile()
    {
        CreateMap<City, CityDto>();
        CreateMap<PointOfInterest, PointOfInterestDto>();                       // ook voor geneste types!

        CreateMap<City, CityDto>()                                              // andere propertynaam
            .ForMember(dest => dest.Explanation, opt => opt.MapFrom(src => src.Description));

        CreateMap<CategoryForCreationDto, Category>();
        CreateMap<CategoryForPatchDto, Category>()                              // enkel niet-null waarden
            .ForAllMembers(opt => opt.Condition((src, dest, srcMember) => srcMember != null));
    }
}
```
| Wens | Oplossing |
|---|---|
| Andere propertynaam | `ForMember(... MapFrom(...))` |
| Properties niet overschrijven met `null` (PATCH) | `ForAllMembers` + `Condition` |
| Lijst- vs detail-DTO | dezelfde entity naar **beide** DTO's mappen; per action de juiste kiezen |

> **Good practice:** een lijst-DTO met enkel de minimale velden (kleine payload) en een details-DTO met alle properties (zie [[MotoGP - Mapping]]).

## Gerelateerd
[[Creation-, update- en patch-DTO]] · [[DTO]]

---
Hoort bij: [[Mapping met AutoMapper]]
