---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5]
groep: EF Core
aliases: [Code-first, Database-first]
---
# Code-first vs database-first

> **Database-first**: de database bestaat al en je genereert context en entities. **Code-first**: je schrijft eerst context en entities en **laat de database genereren**. *Wij doen code-first.*

| | Database-first | **Code-first** |
|---|---|---|
| Startpunt | bestaande database | C#-klassen |
| Genereert | context + entities uit de database | database/schema via [[Migrations]] |
| `Scaffold-DbContext` | ja (commando uit de EF-tools) | — |

## In de cursus
[[Entity class]] + [[DbContext]] → `add-migration` → `update-database`.

## Gerelateerd
[[Entity Framework Core]] · [[Seeding]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
