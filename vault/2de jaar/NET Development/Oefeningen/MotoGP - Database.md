---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 5
groep: Oefeningen
---
# MotoGP - Database 📝

> Deel 2 van [[MotoGP - Overzicht|MotoGP]]: de **entiteiten**, de `MotoGPContext` en de database via **code-first migrations** maken en daarna **seeden**.

## Datamodel
| Entiteit | Velden | Verplicht (constructor) |
|---|---|---|
| `Country` | `Id`, `Name` | `Name` |
| `Rider` | `Id`, `LastName`, `FirstName`, `Number`, `CountryId`, `TeamId` | `LastName`, `FirstName` |
| `Team` | `Id`, `Name`, `Logo` | `Name` |
| `Sponsor` | `Id`, `Name`, `Logo` (later `OfficialWebsite`) | `Name` |
| `TeamSponsor` | `Id`, `TeamId`, `SponsorId` | — (koppeltabel veel-op-veel) |

## Specificaties
- Alle **primary keys** en **foreign keys** met annotaties ([[Data annotations]]); primary keys **auto-generated**.
- Per foreign key **navigation properties in beide richtingen**: `ICollection` aan de één-kant, een objectreferentie aan de veel-kant ([[Navigation property]]).
- Navigation properties voor de **veel-op-veel**-relatie `Team` ↔ `Sponsor` niet vergeten ([[Relaties in EF Core]]).
- Alle `Id`'s en `Number` zijn `int`, de rest `string`; alle `Name`-velden **max. 100 tekens**.

## Aanpak
1. Map `Entities` met alle [[Entity class|entity classes]] volgens het datamodel.
2. Installeer de nodige [[NuGet]]-pakketten (**juiste versie**).
3. Map `DbContexts` met **`MotoGPContext`**: een [[DbSet]] per entiteit; registreer de context in de service container ([[DbContext]]).
4. [[Connection string]] **`MotoGPDBConnectionString`** in `appsettings.Development.json`, database **`MotoGP`** ([[appsettings.json]]).
5. Migration **`InitialMigration`** maken en toepassen ([[Migrations]]).
6. Een nieuw veld **`OfficialWebsite`** aan `Sponsor` toevoegen via een nieuwe migration.
7. Controleer de tabellen in de database.
8. **Seed** de database met de code uit de resources, maak een nieuwe migration en pas ze toe ([[Seeding]]). Controleer de testdata.

## Valkuilen
- Een wijziging aan een entiteit komt pas in de database na een **nieuwe migration + update**.
- Vergeet de navigation properties aan **beide** kanten niet.

## Begrippen
[[Entity Framework Core]] · [[Code-first vs database-first]] · [[Entity class]] · [[Data annotations]] · [[Navigation property]] · [[Relaties in EF Core]] · [[DbContext]] · [[DbSet]] · [[Connection string]] · [[Migrations]] · [[Seeding]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
