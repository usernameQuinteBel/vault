---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 3
groep: Deel B: ASP.NET Core API
aliases: [Introduction ASP.NET Core, les 1 ASP.NET Core, ASP.NET Core big picture]
---
# Introductie ASP.NET Core

> Een **API** is een verzameling endpoints waarmee clients (React, mobiele apps…) via HTTP acties op data uitvoeren; **[[ASP.NET Core]]** is het .NET-framework om zo'n API te bouwen. Het startpunt is `Program.cs`, waar je services registreert en de **middleware-pipeline** opbouwt.

_Slides: "1.IntroductionToASPNETCore". Het lopende voorbeeld in de theorie is **CityInfo** (steden en hun *points of interest*)._

## 1. ASP.NET Core
- Bouw **webapps, services, IoT-apps en mobiele back ends**.
- Draait op het .NET-platform; ontwikkelen op **Windows, Linux, macOS en Docker**; deployen naar de cloud of on-premise (ideaal voor Docker-containers).
- Open-source versie van ASP.NET (eerste release **2016**), een herontwerp van de Windows-only voorgangers.
- In de cursus: **.NET 10.0 (LTS)**.

## 2. Wat is een API?
**API = Application Programming Interface**: een verzameling **endpoints** die acties op een database kunnen uitvoeren. Clients sturen er **HTTP(S)-requests** naar:
- Single Page Applications (React, Angular, Vue…)
- Mobiele apps (React Native, Flutter…)

```
Client  ──GET / POST / PUT / DELETE──►  REST API  ──►  Database
        ◄──────────── JSON / XML ───────────────┘
```
Waarom? Een API laat je toepassing met andere services communiceren **zonder te weten hoe die geïmplementeerd zijn**, vergemakkelijkt het integreren van nieuwe componenten en werkt als een **contract**: requests/responses hebben een vast formaat, ongeacht de client. API's gaan over **integratie** van data, applicaties en toestellen.

**Publieke API's** laten je je data delen met klanten en externe ontwikkelaars (Google Maps, Spotify, X, IMDB…). In de cursus bouw je de **backend voor je eigen applicatie**: **REST – HTTP – JSON** (zie [[REST API]]).

## 3. Hoe bouw je een API?
| Aanpak | Kenmerk |
|---|---|
| **ASP.NET Core MVC** (controllers) | Model – View – Controller, volledig; **dit gebruiken we** ([[MVC]], [[Controller]]) |
| **Minimal API** | sneller/lichter, minder features |

## 4. Een project maken en starten
1. Visual Studio → nieuw project **ASP.NET Core Web API**, framework **.NET 10.0**, *Use controllers* aanvinken, *Enable OpenAPI support* (zie slide-screenshot).
2. Solution/project: bv. solution `CityInfo`, project `CityInfo.API`.
3. Het `.csproj`-bestand:
```xml
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net10.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="10.0.2" />
  </ItemGroup>
</Project>
```
(In de volgende hoofdstukken wordt `Nullable` op `annotations` gezet om de nullable-waarschuwingen te beperken, en komt het NuGet-pakket `Swashbuckle.AspNetCore` erbij — zie [[NuGet]].)

### launchSettings.json (map *Properties*)
Bevat de **launch profiles** voor lokale ontwikkeling: `http`, `https` (cross-platform) en `IIS Express` (Windows).
```json
"https": {
  "commandName": "Project",
  "dotnetRunMessages": true,
  "launchBrowser": false,
  "applicationUrl": "https://localhost:7166;http://localhost:5215",
  "environmentVariables": { "ASPNETCORE_ENVIRONMENT": "Development" }
}
```
Zie [[launchSettings.json]]. Kies in Visual Studio het profiel (**https** heeft onze voorkeur) en start **met debugging** (**F5**/groene knop) of **zonder** (**Ctrl+F5**).

### Starten via de CLI
Ontwikkelen, bouwen, uitvoeren en publiceren kan ook zonder Visual Studio: `dotnet run --launch-profile https`. De console toont op welke URL's de API luistert en dat de *hosting environment* **Development** is.

## 5. Swagger: een UI om endpoints te testen
Een draaiende API zonder UI is lastig te testen. **[[Swagger]]**: installeer NuGet `Swashbuckle.AspNetCore` en pas `Program.cs` aan (zie §7). Pas daarna het `https`-profiel aan: `"launchBrowser": true` en `"launchUrl": "swagger"`.
- In Swagger: endpoint openklappen → **Try it out** → **Execute**.
- Dezelfde GET werkt ook in de browser: `https://localhost:7275/WeatherForecast`.

## 6. De projectstructuur
| Onderdeel | Doel |
|---|---|
| **`appsettings.json`** | applicatie-instellingen: logging, connectionstring naar de database, service-endpoints… ([[appsettings.json]]) |
| **`Controllers/WeatherForecastController.cs`** (+ `WeatherForecast.cs`) | voorbeeld-controller met een endpoint dat voorspellingen geeft. Dummy-code → **veilig te verwijderen** |
| **`Program.cs`** | startpunt: de applicatie configureren en uitvoeren |
| **`Properties/launchSettings.json`** | launch profiles en omgevingsvariabelen |

Standaard `appsettings.json`:
```json
{
  "Logging": { "LogLevel": { "Default": "Information", "Microsoft.AspNetCore": "Warning" } },
  "AllowedHosts": "*"
}
```

## 7. Program.cs
Twee delen: **services registreren** en **de pipeline opbouwen**.
```csharp
var builder = WebApplication.CreateBuilder(args);       // builder om de webapp te bouwen en te hosten

// Add services to the container.                       // builder.Services = ingebouwde DI-container
builder.Services.AddControllers();                      // alles om een API met controllers te bouwen
builder.Services.AddEndpointsApiExplorer();             // nodig voor Swagger
builder.Services.AddSwaggerGen();

var app = builder.Build();                              // de applicatie bouwen

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())                    // Swagger enkel in development
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();                              // http → https
app.UseAuthorization();                                 // autorisatie controleren
app.MapControllers();                                   // attribute routing van controllers toelaten
app.Run();                                              // de applicatie starten
```
- `builder.Services` is een **ingebouwde dependency injection container** waar je alle benodigde services registreert ([[Dependency Injection]]).
- `app.MapControllers()` schakelt **endpoint routing** voor controllers in: koppelt controllers aan route templates zodat ze inkomende HTTP-requests afhandelen ([[Routing]]).
Zie [[Program.cs]].

## 8. Middleware
**Middleware** = softwarecomponenten die bepalen hoe HTTP-requests worden afgehandeld; samen vormen ze de **request pipeline**. Voorbeelden: autorisatie, diagnostiek/logging, Swagger, HTTPS-redirect.

> **Belangrijk:** elke middleware beslist of hij de request **doorgeeft** aan de volgende. De **volgorde** telt dus. Voorbeeld: de authentication-middleware stuurt bij een niet-geautoriseerde request meteen een *unauthorized*-antwoord terug; ze moet daarom vóór de componenten staan die dan niet mogen draaien.

Zie [[Middleware]].

## 9. Omgevingen
Je kan omgevingsvariabelen in de launch profiles zetten: **Development – Staging – Production** (`ASPNETCORE_ENVIRONMENT`). Hierop reageer je in code met `app.Environment.IsDevelopment()`. Meer in [[Logging en configuratie]].

## Tips en valkuilen
- Swagger enkel in Development tonen is een bewuste keuze (later in de oefening ook in Production aanzetten).
- `Ctrl+F5` start zonder debugger — handig om snel te testen.
- Verwijder het WeatherForecast-voorbeeld vroeg: het is dummycode.

## Begrippen
[[ASP.NET Core]] · [[API]] · [[REST API]] · [[MVC]] · [[Controller]] · [[Program.cs]] · [[launchSettings.json]] · [[appsettings.json]] · [[Swagger]] · [[Middleware]] · [[NuGet]] · [[Omgevingen (Development en Production)]]

---
Hoort bij: [[NET Development|.NET Development]]
