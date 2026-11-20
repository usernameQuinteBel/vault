---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [8, 9]
groep: EF Core
aliases: [Change tracker, Tracking, SaveChanges]
---
# Change tracking

> De [[DbContext]] bewaart getrackte entities met **primary key, originele waarden, huidige waarden en state**; bij `SaveChanges()` genereert EF enkel de nodige SQL. Tracking gebeurt **volledig in het geheugen**.

**Getrackt** wordt een entity bij laden via een tracking query, `Add()`/`AddAsync()` of `Attach()`.
```csharp
var student = context.Students.First();
student.Name = "Updated";
await context.SaveChangesAsync();    // EF weet welke rij, welke property en welke UPDATE
```
Daarom volstaat bij PUT/PATCH: entity zoeken, mappen, `SaveChanges()` ([[EF Core - POST, PUT, PATCH en DELETE]]).

## SaveChanges intern
Wijzigingen detecteren → concurrency tokens valideren → volgorde bepalen → SQL per operatie → in één transactie uitvoeren → keys en states bijwerken.

## Let op
- Getrackte entities blijven in het geheugen tot de context disposed wordt: langlevende contexts stapelen objecten op.
- **Untracked** entities worden genegeerd: `SaveChanges()` doet niets ([[AsNoTracking]]).

## Gerelateerd
[[Entity states]] · [[DbSet]]

---
Hoort bij: [[EF Core verdieping]]
