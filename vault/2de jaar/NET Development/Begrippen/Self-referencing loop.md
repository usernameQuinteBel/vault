---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [6, 7]
groep: EF Core
aliases: [Circulaire verwijzing, Reference loop, ReferenceHandler.IgnoreCycles]
---
# Self-referencing loop

> Geef je **entities** rechtstreeks terug, dan geeft de JSON-serializer een **500-fout**: *"Self referencing loop detected for property 'city'…"*, want `City` → `PointOfInterest` → `City` → … is circulair.

## Oplossingen
- **Correct (hoofdstuk 7):** geef **DTO's** terug i.p.v. entities → [[AutoMapper]].
- **Voorlopig:** negeer de lussen in [[Program.cs]]:
```csharp
builder.Services.AddControllers()
    .AddJsonOptions(options => options.JsonSerializerOptions.ReferenceHandler =
        System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);
```

## Gerelateerd
[[Navigation property]] · [[DTO]] · [[Include en loading]]

---
Hoort bij: [[EF Core - bevragen met LINQ]]
