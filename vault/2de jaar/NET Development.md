---
type: vak
vak: NET Development
groep: Vak
aliases: [.NET Development, DotNET Development, .NET]
---
# .NET Development

> Vak uit het **2de jaar** (IT Factory, track 2APP/AI/ACS): je leert **C#** en bouwt daarmee een volledige webtoepassing — een **REST API met ASP.NET Core en Entity Framework Core** en een **React-front-end** die die API gebruikt.

## Wat is het vak?
Het vak loopt in drie lijnen die op elkaar aansluiten:

| Lijn | Wat je leert | Technologie |
|---|---|---|
| **A. C# en .NET** | de taal, object-georiënteerd programmeren, hoe .NET code uitvoert | [[CSharp|C#]], [[CLR]], [[OOP]] |
| **B. Back end (API)** | een API bouwen, een database aanspreken, mappen, valideren, testen, structureren, beveiligen, configureren | [[ASP.NET Core]], [[Entity Framework Core]], [[AutoMapper]], [[Unit test]], [[JWT]] |
| **C. Front end** | een single page application bouwen die de API aanroept | [[React]], [[React Router]], [[Axios]] |

Alle lessen volgen hetzelfde recept: **theorie met een kleine demo-API (CityInfo)**, daarna **een oefening die de MotoGP-applicatie stap voor stap uitbreidt**. Eind van het vak heb je een werkende MotoGP-site: renners, teams en races bekijken, tickets bestellen, betalingen registreren (alleen voor een admin) en mails sturen bij betaling.

## Evaluatie
Niet vermeld in het cursusmateriaal (slides, oefeningen, PDF's). _Zie open vragen op het einde van de import._

## Opbouw

### Deel A — C# en .NET
1. [[CSharp basis en OOP]] — syntaxis, datatypes, control flow, klassen, de drie OOP-pijlers, interfaces
2. [[Het .NET-platform]] — C# vs CLR vs BCL/FCL, CIL, value vs reference types, garbage collection, casting

### Deel B — ASP.NET Core API
3. [[Introductie ASP.NET Core]] — wat een API is, projectstructuur, `Program.cs`, middleware, Swagger
4. [[Een API maken en resources teruggeven]] — MVC, controllers, routing, DTO's, statuscodes
5. [[EF Core - database, migrations en seeding]] — entities, DbContext, relaties, migrations, connection string
6. [[EF Core - bevragen met LINQ]] — DbContext injecteren, `Where`/`OrderBy`/`First`, `Include`
7. [[Mapping met AutoMapper]] — van entity naar DTO
8. [[EF Core - POST, PUT, PATCH en DELETE]] — aanmaken, wijzigen, verwijderen, validatie
9. [[EF Core verdieping]] — change tracking, entity states, loading, Fluent API, performance
10. [[Unit testing en TDD]] — MSTest, Arrange-Act-Assert, TDD, katas
11. [[Dependency Injection (les)]] — IoC, constructor injection, service lifetimes, mocking
12. [[Layered architecture en Repository pattern]] — lagen, repositories, async/await
13. [[Filtering, searching en paging]] — query strings, `Skip`/`Take`, paginatiemetadata
14. [[Authentication met Auth0]] — JWT, Auth0, beveiligde endpoints
15. [[Logging en configuratie]] — `ILogger`, Serilog, omgevingen, configuratiebestanden

### Deel C — React
16. [[React - Components]] — JSX, components, props, styling
17. [[React - State]] — `useState`, `useEffect`, events, controlled components
18. [[React - Single Page Applications]] — React Router
19. [[React - Axios]] — de API aanroepen, CORS, service classes, container/presentational

## Kernbegrippen
[[OOP]] · [[ASP.NET Core]] · [[Entity Framework Core]] · [[DbContext]] · [[DTO]] · [[AutoMapper]] · [[Dependency Injection]] · [[Repository pattern]] · [[Async en await]] · [[JWT]] · [[React]] · [[Axios]]

## Oefeningen 📝
Start bij [[MotoGP - Overzicht]] voor de rode draad.
- [[Oefening Rentabike]] (C#/OOP)
- [[MotoGP - API maken]] · [[MotoGP - Database]] · [[MotoGP - Bevragen]] · [[MotoGP - Mapping]]
- [[MotoGP - React front-end opzetten]] · [[MotoGP - API integreren in React]]
- [[MotoGP - Ticketreservatie]]
- [[Oefening StringCalculator Kata]]
- [[MotoGP - Race duration (Strategy Pattern)]] · [[Oefening Extra DI - FeedReader]]
- [[MotoGP - Repository pattern]] · [[MotoGP - Filtering en paging]] · [[MotoGP - Authentication]] · [[MotoGP - Logging en configuratie]]
- [[React 1 - Oefeningen]] · [[React 2 - Oefeningen]]

---
Hoort bij: [[2de jaar]]
