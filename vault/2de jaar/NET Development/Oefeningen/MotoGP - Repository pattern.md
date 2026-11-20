---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 12
groep: Oefeningen
---
# MotoGP - Repository pattern 📝

> Deel 9 van [[MotoGP - Overzicht|MotoGP]]: de API opsplitsen in een **layered architecture** (Infrastructure / Domain / Contracts) en per entiteit een **async repository** gebruiken in plaats van de context.

## 1. Lagen
1. Maak Class Library-projecten voor **Infrastructure**, **Domain** en **Contracts** ([[Lagen - Contracts, Domain en Infrastructure]]).
2. Verplaats de mappen, pas de namespaces aan, voeg de nodige NuGet-pakketten en **project references** toe.
3. Geen build errors meer? Controleer of de API nog werkt zoals vroeger.
4. Maak in Infrastructure een map **`Services`** met per entiteit een repository-interface + klasse.

## 2. Repositories
| Repository | Methodes | Opmerking |
|---|---|---|
| `IRiderRepository` | `GetRidersAsync()` | kijk in `RidersController` welke navigation property je moet includen en hoe je sorteert |
| `ITeamRepository` | `GetTeamsAsync()`, `GetTeamAsync(int teamId, TeamInclude include = TeamInclude.None)` | `GetTeamAsync` includet niets, de rijders of de sponsors |
| `ICountryRepository` | `GetCountriesAsync()`, `CountryExistsAsync(int countryId)` | landen gesorteerd op `Name` |
| `IRaceRepository` | `GetRacesAsync()`, `GetRaceAsync()`, `RaceExistsAsync()` | races gesorteerd op `Date` |
| `ITicketRepository` | `GetTicketsAsync()`, `GetTicketAsync()`, `AddTicket()`, `SaveChangesAsync()`, `LoadRaceForTicketAsync(Ticket ticket)` | laadt de race van een ticket **expliciet** |

De enumeratie uit de opgave:
```csharp
public enum TeamInclude
{
    None,
    Riders,
    Sponsors
}
```

## Aanpak per repository
1. Interface + implementatie; injecteer `MotoGPContext` in de repository.
2. Bekijk eerst de huidige controller: welke `Include`, welke sortering.
3. Schrijf de methodes **async** ([[Async en await]]).
4. Registreer de service en injecteer de repository in de controller ([[Constructor injection]]); vervang alle context-aanroepen.
5. Controleer de output van de endpoints.
6. `TicketsController` heeft ook `RaceRepository` en `CountryRepository` nodig (bestaanscontrole bij POST).

## Controle
Werkt de front-end nog? Boek een ticket en registreer een betaling.

## Begrippen
[[Layered architecture]] · [[Lagen - Contracts, Domain en Infrastructure]] · [[Repository pattern]] · [[Separation of concerns]] · [[Async en await]] · [[Include en loading]] · [[Constructor injection]]

---
Hoort bij: [[Layered architecture en Repository pattern]]
