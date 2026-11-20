---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5, 9]
groep: EF Core
aliases: [One-to-many, Many-to-many, One-to-one, Join entity]
---
# Relaties in EF Core

> Een database drukt relaties uit met **primary keys, foreign keys en join tables**; EF Core vertaalt dat naar objectreferenties en collecties.

| Type | Hoe |
|---|---|
| **One-to-many** | automatisch via FK + navigation property + lijst (`City` ↔ `PointOfInterest`); de *many*-kant is dependent |
| **One-to-one** | één kant is **dependent** en bevat de FK (bv. `UserProfile.UserId`) |
| **Many-to-many** | via join table; extra configuratie nodig |
| **Required vs optional** | required = FK niet null; optional = nullable FK (`int? DiscountCodeId` + `DiscountCode?`) |

## Many-to-many met join-entity
```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);
    modelBuilder.Entity<PointOfInterest>()
        .HasMany(p => p.Categories)
        .WithMany(c => c.PointsOfInterest)
        .UsingEntity<PointOfInterestCategory>();
}
```
Is er **extra data op de relatie** (inschrijvingsdatum, score…), dan gebruik je een expliciete join-entity.

## Hoe configureren?
1. **Conventions**: EF leidt af uit FK + navigation property.
2. **Data annotations** (`[ForeignKey]`).
3. **Fluent API** (aanbevolen) → [[Fluent API]].

## Gerelateerd
[[Navigation property]] · [[Include en loading]] · [[DbContext]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
