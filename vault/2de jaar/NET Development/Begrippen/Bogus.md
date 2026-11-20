---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [13]
groep: API uitbreiden
aliases: [Bogus seeder, TicketSeeder, Nep-data]
---
# Bogus

> Een NuGet-bibliotheek die **nepdata met een realistische structuur** genereert, handig om grote hoeveelheden testdata te seeden.

- In de MotoGP-oefening: een `TicketSeeder` in de map `Seeders` en een `SeedController` (uit de resources) vullen de database met tickets om te filteren en pagineren ([[MotoGP - Filtering en paging]]).
- Een seed-endpoint hoort **niet** in production: `if (!_env.IsDevelopment()) return Forbid();` of omring de controller met `#if DEBUG … #endif` ([[Omgevingen (Development en Production)]]).

## Gerelateerd
[[Seeding]] · [[NuGet]]

---
Hoort bij: [[Filtering, searching en paging]]
