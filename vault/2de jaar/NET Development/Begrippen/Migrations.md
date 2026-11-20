---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5, 9]
groep: EF Core
aliases: [Migration, add-migration, update-database]
---
# Migrations

> Een migration is een **versiebeschrijving van een schemawijziging**: het verschil tussen het vorige en het huidige EF-model. Ze passen de database **incrementeel** aan en **behouden bestaande data**.

## Stappenplan
1. NuGet `Microsoft.EntityFrameworkCore.Tools` ([[NuGet]]).
2. Package Manager Console: `add-migration InitialMigration` → klasse met alle code, in map **Migrations**.
3. `update-database` → uitvoeren; controleer in SQL Server Object Explorer.
4. Model gewijzigd? Nieuwe migration (bv. `add-migration City_OfficialWebsite`, `update-database`).

Andere commando's: `Remove-Migration`, `Script-Migration`, `Scaffold-DbContext`.

## Hoe het werkt
- Een migration is gecompileerde C# met tijdstempel, een **`Up()`** (toepassen) en **`Down()`** (terugdraaien).
- Tabel **`__EFMigrationsHistory`** houdt toegepaste migrations bij, zodat ze **exact één keer en in volgorde** lopen.

## Database drift
Echt schema ≠ model + migrations (manuele SQL, hotfixes, inconsistent toegepaste migrations) → falende migrations.

## Regels
- Eerst `add-migration`, dan `update-database`.
- **Verwijder nooit migration-bestanden** om te "resetten".
- `Remove-Migration` enkel voor de **laatste**, **nog niet toegepaste/gedeelde** migration; anders corrigeer je met een **nieuwe** migration.
- Een nieuwe verplichte kolom past niet bij bestaande rijen: maak ze nullable of geef een default.

## Gerelateerd
[[Seeding]] · [[DbContext]] · [[Code-first vs database-first]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
