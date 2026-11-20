---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 4
groep: Oefeningen
aliases: [MotoGP, MotoGP-oefening]
---
# MotoGP - Overzicht 🏍️

> De doorlopende oefening van het vak: stap voor stap één webapplicatie **MotoGP** bouwen met een **.NET API** als back-end en een **React**-front-end. Gebruikers kunnen teams en rijders opvragen, races bekijken en tickets boeken.

## De delen in volgorde
| # | Oefening | Hoofdstuk | Resultaat |
|---|---|---|---|
| 1 | [[MotoGP - API maken]] | [[Een API maken en resources teruggeven]] | Web API met DTO's en een in-memory DataStore |
| 2 | [[MotoGP - Database]] | [[EF Core - database, migrations en seeding]] | entiteiten, `MotoGPContext`, migrations, seed-data |
| 3 | [[MotoGP - Bevragen]] | [[EF Core - bevragen met LINQ]] | `Race`-entiteit, GET-endpoints uit de database |
| 4 | [[MotoGP - Mapping]] | [[Mapping met AutoMapper]] | entiteiten → DTO's met AutoMapper |
| 5 | [[MotoGP - React front-end opzetten]] | [[React - Single Page Applications]] | Vite-app, layout, menu, React Router |
| 6 | [[MotoGP - API integreren in React]] | [[React - Axios]] | CORS, Axios, service classes, schermen |
| 7 | [[MotoGP - Ticketreservatie]] | [[EF Core - POST, PUT, PATCH en DELETE]] | `Ticket`, POST/PATCH, bestel- en betaalschermen |
| 8 | [[MotoGP - Race duration (Strategy Pattern)]] | [[Dependency Injection (les)]] | racetijd via twee strategieën |
| 9 | [[MotoGP - Repository pattern]] | [[Layered architecture en Repository pattern]] | lagen + async repositories |
| 10 | [[MotoGP - Filtering en paging]] | [[Filtering, searching en paging]] | Bogus-seeder, filters, paging in API en front-end |
| 11 | [[MotoGP - Authentication]] | [[Authentication met Auth0]] | Auth0-login, één admin-gebruiker, beveiligde endpoints |
| 12 | [[MotoGP - Logging en configuratie]] | [[Logging en configuratie]] | Development vs Production, e-mail bij betaling |

## Datamodel (eindsituatie)
| Entiteit | Velden | Relaties |
|---|---|---|
| `Country` | `Id`, `Name` | 1 → veel `Rider`, 1 → veel `Ticket` |
| `Rider` | `Id`, `LastName`, `FirstName`, `Number`, `CountryId`, `TeamId` | veel → 1 `Country`, veel → 1 `Team` |
| `Team` | `Id`, `Name`, `Logo` | veel ↔ veel `Sponsor` via `TeamSponsor` |
| `Sponsor` | `Id`, `Name`, `Logo`, `OfficialWebsite` | via `TeamSponsor` |
| `TeamSponsor` | `Id`, `TeamId`, `SponsorId` | koppeltabel |
| `Race` | `Id`, `Name`, `Place`, `Description`, `Length`, `Date`, `X`, `Y` (later `LapCount`, `AvgSpeed`, `LapTime`) | 1 → veel `Ticket` |
| `Ticket` | `Id`, `Name`, `Email`, `Address`, `CountryId`, `RaceId`, `Number`, `OrderDate`, `Paid` | veel → 1 `Country`, veel → 1 `Race` |

## Tips
- Elk deel bouwt verder op het vorige: houd de oplossing werkend vóór je aan het volgende deel begint.
- De opgaves leveren vaak code in de **resources** (seed-data, starter-componenten, seeders, e-mailservices); lees die code even na.

---
Hoort bij: [[NET Development|.NET Development]]
