---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [3, 14]
groep: ASP.NET Core API
aliases: [Swashbuckle, Swagger UI, OpenAPI]
---
# Swagger

> Een **UI om de endpoints van je API te testen** zonder aparte client; geleverd door het NuGet-pakket `Swashbuckle.AspNetCore`.

## Opzetten
1. NuGet installeren: `Swashbuckle.AspNetCore` ([[NuGet]]).
2. In [[Program.cs]]: `AddEndpointsApiExplorer()`, `AddSwaggerGen()`, `UseSwagger()`, `UseSwaggerUI()` (standaard enkel in Development).
3. In `launchSettings.json`: `"launchBrowser": true` en een `launchUrl` ([[launchSettings.json]]).

## Gebruik
Endpoint openklappen → **Try it out** → **Execute**. Dezelfde GET kan ook gewoon in de browser.

## Tips
- Swagger enkel in Development tonen is een bewuste keuze; in de oefening zet je het later ook aan in Production.
- Bij een beveiligde API geef je in Swagger een token mee ([[Authentication met Auth0]]).

## Gerelateerd
[[API]] · [[ASP.NET Core]]

---
Hoort bij: [[Introductie ASP.NET Core]]
