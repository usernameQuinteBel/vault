---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [3]
groep: ASP.NET Core API
aliases: [launchSettings, Launch profiles, Properties/launchSettings.json]
---
# launchSettings.json

> Bestand in de map **Properties** met de **launch profiles** voor lokale ontwikkeling: URL's, omgevingsvariabelen en of de browser opent.

Profielen: `http`, `https` (cross-platform) en `IIS Express` (Windows).
```json
"https": {
  "commandName": "Project",
  "dotnetRunMessages": true,
  "launchBrowser": false,
  "applicationUrl": "https://localhost:7166;http://localhost:5215",
  "environmentVariables": { "ASPNETCORE_ENVIRONMENT": "Development" }
}
```
- Voor Swagger zet je `"launchBrowser": true` en een `launchUrl` in het `https`-profiel.
- Kies in Visual Studio het profiel (**https** heeft de voorkeur); start **met debugging** (F5) of **zonder** (Ctrl+F5).
- Via de CLI: `dotnet run --launch-profile https`.

## Gerelateerd
[[Omgevingen (Development en Production)]] · [[Swagger]]

---
Hoort bij: [[Introductie ASP.NET Core]]
