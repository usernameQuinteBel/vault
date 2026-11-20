---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [15]
groep: Authenticatie, logging en configuratie
aliases: [Serilog sinks, Loggen naar bestand]
---
# Serilog

> Een third-party logging provider om o.a. **naar een bestand** te loggen (niet standaard in ASP.NET Core): je voegt NuGet-pakketten toe en roept `UseSerilog()` aan.

```csharp
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .WriteTo.File("logs/cityinfo.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

builder.Host.UseSerilog();
var app = builder.Build();
```
- Een **sink** per bestemming (console, bestand…); je installeert het Serilog-pakket en een sink-pakket per bestemming ([[NuGet]]).
- `RollingInterval.Day` = een nieuw logbestand per dag.
- Met level **Debug** verschijnt elke actie in console én bestand.
- Logregel in het bestand: `2026-04-27 11:07:05.875 +02:00 [DBG] …`; in de console korter: `[19:42:37 INF] Now listening on: …`.

## Gerelateerd
[[Logging (ILogger)]] · [[Log levels]] · [[Program.cs]]

---
Hoort bij: [[Logging en configuratie]]
