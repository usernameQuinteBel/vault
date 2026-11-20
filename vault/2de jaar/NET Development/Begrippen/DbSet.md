---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5, 9]
groep: EF Core
aliases: [DbSet<T>]
---
# DbSet

> Een `DbSet<T>` per entity in de [[DbContext]]: de poort om **queries op te bouwen** en **entities onder tracking te brengen**; LINQ erop wordt naar SQL vertaald.

**Het is geen tabel en geen lijst.** Een LINQ-query op een DbSet bouwt een expression tree ([[IQueryable en deferred execution]]).

```csharp
_context.Cities.ToList();             // SELECT * FROM Cities
_context.Categories.Add(entity);       // Added
_context.Categories.Remove(entity);    // Deleted
_context.Categories.Find(id);          // zoeken op primary key
```

## Gerelateerd
[[LINQ]] · [[Entity states]] · [[Change tracking]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
