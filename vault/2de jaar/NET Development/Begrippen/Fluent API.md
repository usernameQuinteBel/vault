---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [9, 12]
groep: EF Core
aliases: [OnModelCreating, ModelBuilder, EntityTypeConfiguration]
---
# Fluent API

> Relaties, requiredness, keys en **delete behavior** configureren in code (`OnModelCreating`) in plaats van met attributen; **aanbevolen in echte systemen**: expressief, centraal, expliciet, reviewbaar.

```csharp
modelBuilder.Entity<Order>()
    .HasOne(o => o.Customer).WithMany(c => c.Orders)
    .HasForeignKey(o => o.CustomerId)
    .OnDelete(DeleteBehavior.Restrict);        // geen cascade: Customer niet verwijderbaar met Orders

modelBuilder.Entity<Order>()
    .HasOne(o => o.DiscountCode).WithMany(d => d.Orders)
    .HasForeignKey(o => o.DiscountCodeId)
    .OnDelete(DeleteBehavior.SetNull);         // optioneel: bestellingen blijven bestaan

modelBuilder.Entity<User>()
    .HasOne(u => u.Profile).WithOne(p => p.User)
    .HasForeignKey<UserProfile>(p => p.UserId)
    .OnDelete(DeleteBehavior.Cascade);

modelBuilder.Entity<Enrollment>().HasKey(e => new { e.StudentId, e.CourseId });   // composite PK
```
| Aanpak | Opmerking |
|---|---|
| Conventions | EF kiest defaults voor cascade/requiredness die niet bij je business hoeven te passen |
| Data annotations | prima voor kleine projecten; mengt persistentie in domein-entities |
| **Fluent API** | expliciet en centraal |

In de gelaagde architectuur plaats je configuraties in aparte klassen en laad je ze met `ApplyConfigurationsFromAssembly(...)` ([[Layered architecture en Repository pattern]]).

## Gerelateerd
[[Relaties in EF Core]] · [[Data annotations]] · [[DbContext]]

---
Hoort bij: [[EF Core verdieping]]
