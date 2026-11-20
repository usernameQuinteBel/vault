---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5]
groep: EF Core
aliases: [HasData, Seed data, Testdata]
---
# Seeding

> **Testdata toevoegen** in `OnModelCreating` met `HasData`; EF controleert of de data al bestaat en voegt ze maar één keer toe. Daarna maak en voer je een nieuwe migration uit.

```csharp
modelBuilder.Entity<City>().HasData(
    new City("New York City") { Id = 1, Description = "The one with that big park." },
    new City("Antwerp")       { Id = 2, Description = "The one with the cathedral that was never really finished." });

modelBuilder.Entity<PointOfInterest>().HasData(
    new PointOfInterest("Central Park") { Id = 1, CityId = 1, Description = "…" });
```
## Let op
- Je geeft **zelf de Id's** mee, ook voor de foreign keys.
- Join-entities seed je ook: `new PointOfInterestCategory() { Id = 1, PointOfInterestId = 1, CategoryId = 2 }`.
- Zonder nieuwe migration (`SeedDatabase`) komt de data niet in de database ([[Migrations]]).
- Voor grote hoeveelheden nepdata: zie [[Bogus]].

## Gerelateerd
[[DbContext]] · [[Object initializer]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
