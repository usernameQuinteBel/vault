---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5, 9]
groep: EF Core
aliases: [Provider, UseSqlServer, SQL Server provider]
---
# Database provider

> Een **provider** vertaalt EF-bewerkingen naar het SQL-dialect van een specifieke engine, zodat EF Core met verschillende databases kan praten.

- Mogelijk: SQL Server, Azure SQL, SQLite, Cosmos DB, MySQL, PostgreSQL…
- In de cursus: **SQL Server** via NuGet `Microsoft.EntityFrameworkCore.SqlServer` → `UseSqlServer(...)`.
- Een provider verzorgt: LINQ → SQL, schemagenereren bij migrations, datatypes/conversies, connecties.

## Verschillen in de praktijk
SQL-syntax (`TOP` vs `LIMIT`), JSON-kolommen, indexering, hoofdlettergevoeligheid, transactiesemantiek, concurrency → **échte portabiliteit is beperkt**.

## Gerelateerd
[[Entity Framework Core]] · [[Connection string]] · [[NuGet]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
