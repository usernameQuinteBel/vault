---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 7
groep: Oefeningen
---
# MotoGP - Mapping 📝

> Deel 4 van [[MotoGP - Overzicht|MotoGP]]: met **AutoMapper** entiteiten omzetten naar DTO's, zodat enkel de bedoelde data naar de client gaat.

## Voorbereiding
NuGet-pakket **AutoMapper** installeren, AutoMapper als service registreren en een map **`MappingProfiles`** maken ([[AutoMapper]], [[Mapping profile]]).

## 1. Races — `RaceProfile`
| Eis | Uitwerking |
|---|---|
| Niet versturen | `Date` en `Length` |
| `ShortDate` | formaat `"dd/MM"` |
| `Month` | het **maandnummer** |
| `TrackLength` | lengte van het circuit in **km** (in plaats van `Length`) |

Daarna: `RaceDto` hernoemen naar **`RaceDetailsDto`** en een **`RaceListDto`** maken met dezelfde velden **zonder `Description` en `TrackLength`**. Map `Race` naar beide en gebruik in `RacesController` de juiste DTO per methode (lijst vs. details).

## 2. Riders — `RiderProfile`
`RiderDto` hernoemen naar **`RiderListDto`**. `FlagNumber` = de `CountryId`.

## 3. Teams — `TeamProfile`
`TeamDto` hernoemen naar **`TeamListDto`** (eventueel een extra DTO en mapping nodig). Extra endpoint **`GetSponsorsForTeam`**: details van één team plus zijn sponsors (extra mappings en DTO's).

## Aanpak
1. Per resource één profile-klasse met `CreateMap<Bron, Doel>()`.
2. Velden die niet dezelfde naam of hetzelfde type hebben, configureer je expliciet per bestemming (`ForMember`).
3. In de controllers `_mapper.Map<…>(…)` gebruiken in plaats van de entiteiten terug te geven.
4. Controleer de output van elk endpoint met de screenshots uit de opgave.

## Valkuil
Bestaat de **`MotoGPDataStore`** nog, dan kan je hier in de problemen komen: verwijder die en al haar verwijzingen.

## Begrippen
[[AutoMapper]] · [[Mapping profile]] · [[DTO]] · [[Include en loading]]

---
Hoort bij: [[Mapping met AutoMapper]]
