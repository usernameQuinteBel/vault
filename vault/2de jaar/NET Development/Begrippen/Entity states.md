---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [9]
groep: EF Core
aliases: [EntityState, Detached Added Unchanged Modified Deleted]
---
# Entity states

> Elke getrackte entity heeft op elk ogenblik **precies één state**; die beschrijft de relatie tussen het geheugenobject en de database.

| State | Betekent | Bij `SaveChanges()` |
|---|---|---|
| **Detached** | EF kent de entity niet (`new` zonder toevoegen, no-tracking, disposed context) | niets |
| **Added** | moet ingevoegd worden (`Add()`) | `INSERT`, daarna Unchanged |
| **Unchanged** | komt overeen met de database | geen SQL tenzij wijziging |
| **Modified** | minstens één property wijzigde | `UPDATE` (standaard enkel gewijzigde kolommen) |
| **Deleted** | moet verwijderd worden (`Remove()`, cascade) | `DELETE`, daarna niet meer getrackt |

Levenscyclus: **Detached → Added → Unchanged → Modified → Unchanged → Deleted → Detached**. *Unchanged ≠ immutable*: enkel "nog geen wijziging gedetecteerd".

## Gerelateerd
[[Change tracking]] · [[DbSet]] · [[DbContext]]

---
Hoort bij: [[EF Core verdieping]]
