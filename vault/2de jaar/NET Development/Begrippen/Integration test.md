---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10]
groep: Testing, DI en architectuur
aliases: [Integration testing, Integratietest]
---
# Integration test

> Een test met **echte infrastructuur** (bv. een database) die de **correctheid van bedrading en configuratie** controleert; trager dan een [[Unit test]].

| Unit tests | Integration tests |
|---|---|
| snel, geïsoleerd | trager |
| geen database/bestanden/netwerk | echte database |
| duizenden in seconden | meestal minder |
| testen **gedrag** (business rules) | testen **configuratie en bedrading** |

Voorbeelden: slaat EF Core correct op en op, werken relaties, rolt een transactie terug? EF Core is een typische **integratiegrens**: DbContext-configuratie, entity mappings, relaties, migrations, cascade delete, constraints.

```csharp
var options = new DbContextOptionsBuilder<AppDbContext>().UseSqlite("DataSource=:memory:").Options;
using var context = new AppDbContext(options);
context.Database.OpenConnection();
context.Database.EnsureCreated();

context.Students.Add(new Student { Name = "Alice" });
await context.SaveChangesAsync();
Assert.Single(await context.Students.ToListAsync());
```
Unit tests beschermen **gedrag**, integration tests de **infrastructuur**.

## Gerelateerd
[[Entity Framework Core]] · [[DbContext]] · [[Async en await]]

---
Hoort bij: [[Unit testing en TDD]]
