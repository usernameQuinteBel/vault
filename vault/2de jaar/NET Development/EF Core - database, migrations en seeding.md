---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 5
groep: Deel B: ASP.NET Core API
aliases: [EF Core part 1, Getting started with EF Core, les 3 EF Core, EFCore_Part1]
---
# EF Core - database, migrations en seeding

> **[[Entity Framework Core]]** is een **ORM**: je werkt met C#-objecten in plaats van SQL. Je definieert **entity classes** + een **[[DbContext]]**, laat **[[Migrations]]** de SQL Server-database aanmaken, vult ze met **seeding** en bewaart je connectionstring veilig in `appsettings.Development.json`.

_Slides: "3.EFCore_Part1" — voorbeeld CityInfo._

## 1. Wat is EF Core?
**ORM = Object-Relational Mapper**: gegevens opvragen en wijzigen met .NET-objecten (OOP), **zonder SQL te schrijven**.

| Relationele database (SQL Server) | Object-georiënteerd (C#) |
|---|---|
| SQL-queries | C#-methodes op objecten |
| Tabellen | klassen → `DbSet`s (collecties) |
| Rijen | getypeerde objecten |
| Kolommen | getypeerde properties |
| Joins | **navigation properties** (`Include`-methode) |
Zie [[ORM]].

### Database engine = database provider
EF Core praat met verschillende engines via een **provider** (SQL Server, Azure SQL, SQLite, Cosmos DB, MySQL, PostgreSQL…). In de cursus: **SQL Server 2025** via NuGet `Microsoft.EntityFrameworkCore.SqlServer`. Zie [[Database provider]].

### Code-first of database-first?
- **Database-first**: er is al een database → daaruit genereer je de context en entities.
- **Code-first**: je start zonder database; je schrijft context + entities en **laat de database genereren**. *Dit doen we.*
Zie [[Code-first vs database-first]].

## 2. Entity classes
Elke **tabel** wordt aangemaakt op basis van een **entity class**: lijkt op een DTO maar met extra **annotations** zodat de tabel juist wordt aangemaakt.

| Annotation | Effect |
|---|---|
| `[Key]` | primary key |
| `[DatabaseGenerated(DatabaseGeneratedOption.Identity)]` | PK-waarde automatisch genereren |
| `[Required]` | kolom is **not nullable** |
| `[MaxLength(50)]` | `NVARCHAR(50)` |
| `[ForeignKey("CityId")]` | foreign key (+ navigation property) |
Zie [[Data annotations]] en [[Entity class]].

### Het datamodel van CityInfo
`City` (1) —— (n) `PointOfInterest` (n) —— (n) `Category`, gekoppeld via de join-entity `PointOfInterestCategory`.

```csharp
public class City
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required] [MaxLength(50)]
    public string Name { get; set; }

    [MaxLength(200)]
    public string? Description { get; set; }

    public ICollection<PointOfInterest> PointsOfInterest { get; } = new List<PointOfInterest>();

    // City always has a name
    public City(string name) { Name = name; }
}
```
```csharp
public class PointOfInterest
{
    [Key] [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    [Required] [MaxLength(50)] public string Name { get; set; }
    [MaxLength(200)] public string? Description { get; set; }

    // not needed if convention is followed, but recommended
    [ForeignKey("CityId")]
    public int CityId { get; set; }
    // navigation property, relation will be created
    public City? City { get; }

    // many-to-many
    public ICollection<Category> Categories { get; } = new List<Category>();
    public ICollection<PointOfInterestCategory> PointOfInterestCategories { get; } = new List<PointOfInterestCategory>();

    public PointOfInterest(string name) { Name = name; }
}
```
`Category` is gelijkaardig (`Name` `[Required][MaxLength(50)]`, `Description` `[Required][MaxLength(200)]`) met `PointsOfInterest` en `PointOfInterestCategories`.

**Oefening uit de slides — `PointOfInterestCategory`**: primary key `Id` (autonummer), foreign key `CategoryId` met `[ForeignKey("CategoryId")]` + navigation property `Category?`, foreign key `PointOfInterestId` met `[ForeignKey("PointOfInterestId")]` + navigation property `PointOfInterest?`.

### Entity vs DTO
| | Entity class | DTO |
|---|---|---|
| PK-annotatie `[Key]` | ja (`Id`/`CityId` worden ook automatisch herkend) | nee |
| PK-generatie (`DatabaseGenerated`: None/Identity/Computed) | ja | nee |
| Validatieattributen (`[Required]`, `[MaxLength]`…) | ja | ja bij DTO's voor insert/update; nee bij read-only DTO's |
| Berekende properties | nee | ja (bv. `NumberOfPointsOfInterest`) |
| Navigation properties | ja (naar andere **entities**) | ja (naar andere **DTO's**) |
| FK + `[ForeignKey]` | ja | nee |
In `Models` komt nog `CategoryDto`. Zie [[DTO]].

## 3. DbContext en DbSet
- **DbContext** = de **gateway naar de database**: coördineert queries, inserts, updates en deletes. Zit in NuGet `Microsoft.EntityFrameworkCore`.
- **DbSet<T>** = om entities op te vragen of te wijzigen; **LINQ-queries** op een DbSet worden vertaald naar databasequeries. Elke entity krijgt een DbSet.

```
API (controller) ⇄ CityInfoContext (DbSets: Cities, Categories…) ⇄ tabellen
        SELECT … FROM Cities / INSERT / UPDATE / DELETE
```
Map **DbContexts** → `CityInfoContext` die erft van `DbContext`:
```csharp
public class CityInfoContext(DbContextOptions<CityInfoContext> options) : DbContext(options)
{
    public DbSet<City> Cities { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<PointOfInterest> PointsOfInterest { get; set; }
    public DbSet<PointOfInterestCategory> PointOfInterestCategories { get; set; }
}
```
Je kan meerdere contexts op dezelfde database hebben; wij hebben er één nodig. Het constructor-overload met `DbContextOptions` geeft de opties door aan de basisklasse.

### Registreren in de DI-container (Program.cs)
Zo kan je de context in elke controller/service **injecteren** ([[Dependency Injection]]):
```csharp
builder.Services.AddDbContext<CityInfoContext>(dbContextOptions =>
    dbContextOptions.UseSqlServer("ConnectionString"));
```

## 4. Verbinden met SQL Server
- Een **lokale SQL Server** (`(localdb)\MSSQLLocalDB`) wordt mee geïnstalleerd met Visual Studio Community; controleer in **SQL Server Object Explorer** (View-menu). `sqllocaldb versions` toont de versie (SQL Server 2025).
- NuGet: `Microsoft.EntityFrameworkCore.SqlServer` (de provider).
- Kopieer de **connectionstring** uit het properties-venster en voeg **`Initial Catalog=CityInfo;`** toe, anders wijst ze naar de server en niet naar een database daarin. Zie [[Connection string]].

## 5. Relaties
- **One-to-many** wordt **automatisch** geconfigureerd op basis van de enkelvoudige property/FK en de `List` (`City` ↔ `PointOfInterest`).
- **Many-to-many** heeft **extra configuratie** nodig. Override `OnModelCreating` en gebruik de `modelBuilder`:
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
Lees: een POI heeft **veel** Categories; die Categories hebben **veel** POI's; ze zijn verbonden via de join-entity `PointOfInterestCategory`. Zie [[Relaties in EF Core]].

## 6. Migrations
In echte projecten **verandert het datamodel** (entities/properties erbij of eraf). **[[Migrations]]** passen het databaseschema **incrementeel** aan en **behouden bestaande data**.

1. NuGet `Microsoft.EntityFrameworkCore.Tools` (geeft commando's als `Add-Migration`, `Update-Database`, `Remove-Migration`, `Script-Migration`, `Scaffold-DbContext`…).
2. **Package Manager Console**: `add-migration InitialMigration` → maakt de klasse `InitialMigration` met alle code om de tabellen te maken (nieuwe map **Migrations**).
   - Elke DbSet → een tabel; properties → kolommen; annotations (`Required`, `MaxLength`, `Key`, `ForeignKey`) worden toegepast.
3. `update-database` → voert uit; controleer in SQL Server Object Explorer of de database `CityInfo` bestaat.
4. Wijzigingen? Nieuwe migration: **oefening** — voeg `OfficialWebsite` (nullable string, max 200) toe aan `City`, `add-migration City_OfficialWebsite`, `update-database`.
5. De tabel **`__EFMigrationsHistory`** houdt elke uitgevoerde migration bij, zodat migrations **niet dubbel** worden uitgevoerd.

## 7. Seeding
In `OnModelCreating` voeg je **testdata** toe met `HasData`; EF controleert of de data al bestaat en voegt ze maar één keer toe. Daarna maak/voer je een nieuwe migration uit (`SeedDatabase`).
```csharp
modelBuilder.Entity<City>().HasData(
    new City("New York City") { Id = 1, Description = "The one with that big park." },
    new City("Antwerp")       { Id = 2, Description = "The one with the cathedral that was never really finished." },
    new City("Paris")         { Id = 3, Description = "The one with that big tower." });

modelBuilder.Entity<PointOfInterest>().HasData(
    new PointOfInterest("Central Park") { Id = 1, CityId = 1, Description = "The most visited urban park in the United States." },
    new PointOfInterest("Empire State Building") { Id = 2, CityId = 1, Description = "A 102-story skyscraper located in Midtown Manhattan." },
    /* … Id 3–6 voor Antwerp en Paris … */);

modelBuilder.Entity<Category>().HasData(
    new Category("Historical Site", "…landmarks, monuments, museums, forts…") { Id = 1 },
    new Category("Natural Attractions", "…parks, gardens, beaches, mountains…") { Id = 2 },
    /* Cultural Centers, Restaurants and Cafés, Outdoor Activities */);

modelBuilder.Entity<PointOfInterestCategory>().HasData(
    new PointOfInterestCategory() { Id = 1, PointOfInterestId = 1, CategoryId = 2 },
    new PointOfInterestCategory() { Id = 2, PointOfInterestId = 1, CategoryId = 5 }
    /* … */);
```
Let op dat je **zelf de Id's** meegeeft (ook voor de FK's). Zie [[Seeding]].

## 8. Veilig: de connectionstring
Een connectionstring bevat gevoelige info en hoort niet hardcoded in `Program.cs`.
- Verplaats ze naar **`appsettings.Development.json`**:
```json
"ConnectionStrings": { "CityInfoDBConnectionString": "Data Source=(localdb)\\MSSQLLocalDB;Database=CityInfo;Integrated Security=True;…" }
```
- Lees ze in `Program.cs` uit de configuratie: `builder.Configuration["ConnectionStrings:CityInfoDBConnectionString"]` en geef ze door aan `UseSqlServer(...)`.
- Controleren zonder te queryen? Zet een **breakpoint** na de configuratie van de DbContext en voer in het **Immediate Window** (Debug → Windows → Immediate) uit, beginnend met een vraagteken: `?builder.Configuration["ConnectionStrings:CityInfoDBConnectionString"]`.
- Let op: in JSON moet de backslash geëscaped worden (`\\`); in de slide wordt de gelezen waarde daarom met `.Replace(@"\\", @"\")` omgezet.
Zie [[appsettings.json]] en [[Connection string]].

## 9. SQL injection (OWASP Top 10)
**SQL injection** = schadelijke code in SQL-statements plaatsen via invoer op een webpagina; een van de meest voorkomende aanvalstechnieken. **EF Core is er veilig tegen** (het maakt command-parameters), **maar** let op bij **`.FromSqlRaw`**: daar kunnen gebruikers strings invoeren die je query wijzigen → input zelf **saneren**. Zie [[SQL Injection]] en [[Parameterized query]] (Application Security, 3de jaar).

## Tips en valkuilen
- Zonder `Initial Catalog`/`Database=` in de connectionstring praat je met de server, niet met je database.
- Many-to-many werkt niet vanzelf: `OnModelCreating` + join-entity.
- Migrations altijd **eerst aanmaken, dan `update-database`**.
- Een nieuwe kolom die verplicht is, past niet bij bestaande rijen — maak ze nullable of geef een default (vandaar `OfficialWebsite` als `string?`).

## Begrippen
[[Entity Framework Core]] · [[ORM]] · [[Code-first vs database-first]] · [[Entity class]] · [[Data annotations]] · [[DbContext]] · [[DbSet]] · [[Navigation property]] · [[Relaties in EF Core]] · [[Migrations]] · [[Seeding]] · [[Connection string]] · [[Database provider]] · [[SQL Injection]]

## Oefening
[[MotoGP - Database]]

---
Hoort bij: [[NET Development|.NET Development]]
