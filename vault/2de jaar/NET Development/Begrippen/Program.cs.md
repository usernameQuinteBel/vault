---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [3, 7, 11, 14]
groep: ASP.NET Core API
aliases: [Program.cs, Startpunt, Request pipeline opbouwen]
---
# Program.cs

> Het **startpunt** van de API met twee delen: **services registreren** (`builder.Services`) en **de middleware-pipeline opbouwen** (`app.Use…`).

```csharp
var builder = WebApplication.CreateBuilder(args);

// 1. services registreren (ingebouwde DI-container)
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();   // nodig voor Swagger
builder.Services.AddSwaggerGen();

var app = builder.Build();

// 2. pipeline opbouwen
if (app.Environment.IsDevelopment())          // Swagger enkel in development
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();                    // http → https
app.UseAuthorization();                       // autorisatie controleren
app.MapControllers();                         // attribute routing van controllers toelaten
app.Run();                                    // applicatie starten
```

| Regel | Betekenis |
|---|---|
| `builder.Services` | ingebouwde **DI-container**: hier registreer je alle services ([[Dependency Injection]]) |
| `MapControllers()` | koppelt controllers aan route templates ([[Routing]]) |
| `app.Environment.IsDevelopment()` | reageren op de omgeving ([[Omgevingen (Development en Production)]]) |

## Later toegevoegd in het vak
Registraties voor AutoMapper, DbContext, repositories/services, CORS, authenticatie en logging; de **volgorde** van de `app.Use…`-regels telt ([[Middleware]]).

## Gerelateerd
[[ASP.NET Core]] · [[Swagger]] · [[Service lifetimes]]

---
Hoort bij: [[Introductie ASP.NET Core]]
