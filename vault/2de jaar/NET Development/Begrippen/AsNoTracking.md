---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [9]
groep: EF Core
aliases: [No-tracking query, AsNoTracking()]
---
# AsNoTracking

> Een query zonder change tracking: geen state, geen originele waarden, geen identity resolution → **minder geheugen en een snellere query**.

```csharp
var students = await context.Students.AsNoTracking().ToListAsync();
```
- Standaard voor **read-only endpoints**, lijsten, dashboards, rapporten, lookup-data.
- Gebruik het **niet** als je daarna wil wijzigen en `SaveChanges()` verwacht: de entity is untracked en `SaveChanges()` doet niets.

## Performance-patronen
No-tracking voor reads · projectie i.p.v. volledige entities · [[Include en loading|N+1]] vermijden · meten voor optimaliseren.

## Gerelateerd
[[Change tracking]] · [[Entity states]]

---
Hoort bij: [[EF Core verdieping]]
