---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [3, 15]
groep: ASP.NET Core API
aliases: [Omgevingen, Environments, ASPNETCORE_ENVIRONMENT, Development, Production, Staging]
---
# Omgevingen (Development en Production)

> De **hosting environment** (**Development – Staging – Production**) bepaalt welke instellingen en gedrag de app gebruikt; ingesteld via de omgevingsvariabele `ASPNETCORE_ENVIRONMENT`.

- Lokaal zet je die in de launch profiles ([[launchSettings.json]]).
- In code reageer je met `app.Environment.IsDevelopment()` ([[Program.cs]]).
- Per omgeving kan je een eigen `appsettings.<Omgeving>.json` en eigen service-implementaties gebruiken ([[appsettings.json]], [[Mailservice (strategie)]]).
- Debug vs Release en `#if DEBUG` zijn een ander mechanisme ([[Logging en configuratie]]).

## Gerelateerd
[[IConfiguration]] · [[Swagger]]

---
Hoort bij: [[Introductie ASP.NET Core]]
