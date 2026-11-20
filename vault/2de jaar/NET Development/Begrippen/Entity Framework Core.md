---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5, 6, 9]
groep: EF Core
aliases: [EF Core, EFCore, Entity Framework]
---
# Entity Framework Core

> Een **ORM** van .NET: je werkt met C#-objecten ([[Entity class]]) en LINQ in plaats van SQL; EF Core **genereert** de SQL, maar **vervangt SQL-kennis niet**.

## Wat EF Core doet
- LINQ/objectcode **vertalen naar databasequeries** en rijen **mappen naar objecten**;
- wijzigingen **tracken** ([[Change tracking]]);
- SQL genereren, connecties en transacties beheren;
- het schema laten meegroeien via [[Migrations]].

## Ingrediënten
| Onderdeel | Rol |
|---|---|
| [[Entity class]] | wordt een tabel |
| [[DbContext]] | gateway/sessie naar de database |
| [[DbSet]] | ingang voor queries per entity |
| [[Database provider]] | praat met een specifieke engine (SQL Server…) |

In het vak: **code-first** met **SQL Server** ([[Code-first vs database-first]]).

## ORM vs micro-ORM vs raw SQL
| | ORM (EF Core) | Micro-ORM (Dapper) | Raw SQL |
|---|---|---|---|
| Abstractie | hoog | dun: jij schrijft SQL | geen |
| Voordeel | productiviteit | controle, voorspelbare performance | maximale flexibiliteit |
| Nadeel | je moet de interne werking begrijpen | meer onderhoud | sterk gekoppeld aan schema, SQL-injection-risico |

EF Core hoort conceptueel bij de [[BCL en FCL|FCL]] en wordt als pakket via [[NuGet]] geleverd.

## Gerelateerd
[[ORM]] · [[SQL Injection]] · [[Parameterized query]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
