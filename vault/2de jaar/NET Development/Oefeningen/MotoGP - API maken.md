---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 4
groep: Oefeningen
---
# MotoGP - API maken 📝

> Deel 1 van [[MotoGP - Overzicht|MotoGP]]: een **ASP.NET Core Web API** `MotoGP.API` met twee DTO's, een **singleton**-DataStore met hardgecodeerde teams en twee controllers.

## Opzet
| Onderdeel | Eis |
|---|---|
| Project | ASP.NET Core Web API **`MotoGP.API`**, solution **`MotoGP`**, target **.NET 10.0** |
| Instellingen | **nullable warnings uitzetten**, [[Swagger]] configureren |
| Opkuisen | het `WeatherForecast`-voorbeeld en bijhorende bestanden verwijderen; **routing middleware** inschakelen |
| `Models` | `TeamDto`: `int Id`, `string Name`, `string Logo`, `List<RiderDto> Riders` — `RiderDto`: `int Id`, `string LastName`, `string FirstName`, `int Number` (alles verplicht) |
| `DataStores` | `MotoGPDataStore` volgens het **singleton pattern**; vult de lijst teams via de code uit de resources, aangeroepen in de constructor |

## Endpoints
| Controller | Methode | Geeft terug |
|---|---|---|
| `TeamsController` | `GetTeams()` | alle teams, **teamnamen in hoofdletters** |
| `TeamsController` | `GetTeam(int id)` | één team op `Id` |
| `RidersController` | `GetRiders()` | alle rijders |
| `RidersController` | `GetRiders(int teamId)` | alle rijders van één team |
| `RidersController` | `GetRider(int teamId, int riderId)` | één rijder van één team |

## Aanpak
1. Maak het project aan, zet nullable warnings uit en controleer dat Swagger werkt ([[Program.cs]], [[launchSettings.json]]).
2. Verwijder de template-code en schakel de routing in ([[Middleware]], [[Routing]]).
3. Maak de twee [[DTO|DTO's]] in de map `Models`.
4. Maak de singleton-DataStore en vul de teams in de constructor.
5. Maak de [[Controller|controllers]] met een **standaard route-prefix op basis van de controllernaam**.
6. Laat elke methode de juiste [[HTTP-statuscodes|statuscode]] teruggeven (bv. `NotFound` als een team of rijder niet bestaat) via [[ActionResult]].
7. Test alles in Swagger.

## Valkuilen
- Twee methodes `GetRiders` met andere parameters hebben elk een **eigen route** nodig.

## Begrippen
[[API]] · [[ASP.NET Core]] · [[Controller]] · [[Routing]] · [[DTO]] · [[ActionResult]] · [[HTTP-statuscodes]] · [[Swagger]]

---
Hoort bij: [[Een API maken en resources teruggeven]]
