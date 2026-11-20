---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5, 6, 9]
groep: EF Core
aliases: [Context, CityInfoContext, Unit of Work]
---
# DbContext

> De **gateway naar de database**: een sessie die queries, inserts, updates en deletes coördineert (het *Unit of Work*-idee), met change tracking.

```csharp
public class CityInfoContext(DbContextOptions<CityInfoContext> options) : DbContext(options)
{
    public DbSet<City> Cities { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<PointOfInterest> PointsOfInterest { get; set; }
    public DbSet<PointOfInterestCategory> PointOfInterestCategories { get; set; }
}
```
Registreren in [[Program.cs]]:
```csharp
builder.Services.AddDbContext<CityInfoContext>(o => o.UseSqlServer(connectionString));
```
Daarna **injecteer** je de context via de constructor ([[Constructor injection]]).

## Verantwoordelijkheden
| | |
|---|---|
| **Model access** | metadata over entities, relaties, keys |
| **Query execution** | LINQ via `DbSet<T>` |
| **Change tracking** | entity-instanties en hun state volgen ([[Change tracking]]) |
| **Persistence** | SQL genereren/uitvoeren bij `SaveChanges()`/`SaveChangesAsync()` |

Een DbContext is **niet "de database"**. Meerdere contexts op dezelfde database kan; wij hebben er één. Een langlevende context stapelt getrackte objecten op.

## OnModelCreating
Override voor [[Fluent API]]-configuratie (many-to-many) en [[Seeding]].

## Gerelateerd
[[DbSet]] · [[Entity Framework Core]] · [[Migrations]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
