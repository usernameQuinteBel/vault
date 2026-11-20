---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 6
groep: Oefeningen
---
# MotoGP - Bevragen 📝

> Deel 3 van [[MotoGP - Overzicht|MotoGP]]: een **`Race`**-entiteit toevoegen en GET-endpoints maken die de database bevragen via de `MotoGPContext` met [[LINQ]].

## Race-entiteit
| Veld | Type |
|---|---|
| `Id` | primary key, auto number |
| `Name`, `Place`, `Description` | `string` |
| `Length`, `X`, `Y` | `int` |
| `Date` | `DateTime` |

Alle velden verplicht; constructor met `name` als parameter.

## Database bijwerken
1. `DbSet` voor `Races` in `MotoGPContext`.
2. Testdata voor races (resources) in de context.
3. Migration **`AddRaces`** maken en toepassen.

## Endpoints
| Methode | Endpoint | Controller | Teruggeven |
|---|---|---|---|
| GET | `/api/races` | `RacesController.GetRaces()` | alle races, **gesorteerd op `Date`**, met veld **`ShortDate`** (`"dd/MM"`) |
| GET | `/api/races/{id}` | `RacesController.GetRace()` | één race, met `ShortDate` |
| GET | `/api/riders` | `RidersController.GetRiders()` | alle rijders **gesorteerd op `Number`**, met de **teamnaam** |
| GET | `/api/teams` | `TeamsController.GetTeams()` | alle teams **gesorteerd op `Name`**, met alle rijders |
| GET | `/api/teams/{teamId}/riders` | `TeamsController.GetRidersForTeam()` | alle rijders van één team |

## Aanpak
1. Verwijder de oude `RidersController`, `TeamsController`, hun DTO's én de **DataStore**: alles komt nu uit de database.
2. Injecteer de context in de controllers ([[Constructor injection]]).
3. Gebruik LINQ (`OrderBy`, `Where`, [[Include en loading|`Include`]]) en geef de juiste statuscodes terug (200, 404).
4. Maak DTO's met enkel de velden die de client nodig heeft.
5. **Negeer loop references** ([[Self-referencing loop]]).

## Valkuil
In Swagger zie je mogelijk nog de structuur van je **entiteiten** in plaats van je DTO's. Dat is in dit deel verwacht: het volgende deel lost dit op met [[MotoGP - Mapping|AutoMapper]].

## Begrippen
[[LINQ]] · [[Lambda expression]] · [[Include en loading]] · [[Self-referencing loop]] · [[Constructor injection]] · [[DTO]] · [[Migrations]]

---
Hoort bij: [[EF Core - bevragen met LINQ]]
