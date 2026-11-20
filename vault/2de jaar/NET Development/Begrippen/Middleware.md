---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [3, 14]
groep: ASP.NET Core API
aliases: [Request pipeline, Pipeline]
---
# Middleware

> Softwarecomponenten die bepalen **hoe HTTP-requests worden afgehandeld**; samen vormen ze de **request pipeline**.

Voorbeelden: autorisatie, diagnostiek/logging, Swagger, HTTPS-redirect, CORS, authenticatie.

> **Belangrijk:** elke middleware beslist of hij de request **doorgeeft** aan de volgende. De **volgorde** telt dus: de authentication-middleware stuurt bij een niet-geautoriseerde request meteen een *unauthorized*-antwoord en geeft niets meer door.

```csharp
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
```

## Gerelateerd
[[Program.cs]] · [[Authorize]] · [[CORS]]

---
Hoort bij: [[Introductie ASP.NET Core]]
