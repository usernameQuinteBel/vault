---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 9
groep: Deel B: ASP.NET Core API
aliases: [Entity Framework Theory, EF Core theorie, EF Core internals, Entity_Framework_Theory]
---
# EF Core verdieping

> EF Core **genereert** SQL (het vervangt SQL-kennis niet): de **[[DbContext]]** is een *unit of work* met een **[[Change tracking|change tracker]]** en een **[[Entity states|state machine]]** (Added/Modified/Deleted/Unchanged/Detached); relaties, loading-strategieën en **[[Fluent API]]** bepalen je model; **[[Migrations]]** zijn versiebeheer voor je schema; en performance haal je uit **no-tracking, projectie en het vermijden van N+1**.

_Bron: PDF "Entity Framework Core" (Additional theoretical overviews). Vult hoofdstukken [[EF Core - database, migrations en seeding]] en [[EF Core - bevragen met LINQ]] aan._

## 1. Wat EF Core doet
- LINQ/objectcode **vertalen naar databasequeries**, rijen **mappen naar C#-objecten**, wijzigingen **tracken**, SQL **genereren**, connecties en transacties **beheren**.
- `context.Students.Where(s => s.IsActive).ToList()` → EF vertaalt naar SQL, voert uit en maakt er objecten van.
- **EF Core elimineert SQL niet, het genereert SQL.** Wie SQL, indexen, joins en relationeel modelleren niet begrijpt, loopt vroeg of laat tegen performance- of correctheidsproblemen. Het is een **productiviteitstool**, geen vervanging voor databasekennis.

### ORM vs micro-ORM vs raw SQL
| | **ORM** (EF Core) | **Micro-ORM** (Dapper) | **Raw SQL** |
|---|---|---|---|
| Abstractie | hoog: getypeerde objecten, LINQ → SQL | dun: jij schrijft SQL, de tool mapt resultaten naar objecten | geen |
| Features | relaties, navigation properties, change tracking, migrations | geen tracking/relaties | alles manueel |
| Voordeel | productiviteit | controle, voorspelbare performance | maximale controle en flexibiliteit |
| Nadeel | je moet begrijpen wat er intern gebeurt | meer onderhoud, dubbele logica | sterk gekoppeld aan schema, risico op SQL injection |
| Gebruik | hoofdstrategie voor data-access | performance-kritische/gespecialiseerde queries | complexe rapporten, bulk, performance-kritische paden |

### Waar zit EF Core in .NET?
EF Core hoort conceptueel bij de **FCL** (op de BCL: collecties, reflection, async, expression trees), wordt zoals alle .NET-code gecompileerd naar **CIL** en uitgevoerd door de **CLR**. NuGet is enkel het distributiemechanisme. Zie [[BCL en FCL]] en [[Het .NET-platform]].

## 2. DbContext intern
**DbContext** = een **sessie met de database** en het centrale coördinatieobject: niet "de database" en niet louter een repository. Het implementeert het **Unit of Work**-idee: entities laden, wijzigen en dan **als één geheel committen**. Metafoor: DbContext is de *control tower*, de interne services zijn de *vliegtuigen*.

| Verantwoordelijkheid | Betekenis |
|---|---|
| **Model access** | metadata over entities, relaties, keys, mappings |
| **Query execution** | ingang voor LINQ via `DbSet<T>` |
| **Change tracking** | entity-instanties en hun state volgen |
| **Persistence** | SQL genereren/uitvoeren bij `SaveChanges()`/`SaveChangesAsync()` |

**`DbSet<T>` is geen tabel en geen lijst** maar een poort voor (1) **query-opbouw** (expression tree die naar SQL vertaald wordt) en (2) **entities onder tracking brengen**. Een LINQ-query blijft *"gewoon een query"* tot je uitvoering forceert (`ToListAsync()`, `FirstAsync()`, `CountAsync()`).

### SaveChanges intern
1. wijzigingen detecteren (indien nodig), 2. concurrency tokens valideren (indien geconfigureerd), 3. volgorde van insert/update/delete bepalen op basis van relaties, 4. SQL per operatie genereren, 5. uitvoeren, 6. getrackte entities bijwerken met door de database gegenereerde waarden (bv. identity-keys), 7. states resetten naar **Unchanged** na succesvolle commit. Hier is ook transactie- en foutafhandeling van belang.

### Query pipeline: van LINQ naar SQL
Expression tree bouwen → model-metadata toepassen → vertalen naar een database-specifieke representatie → SQL genereren voor de provider → uitvoeren → resultaten **materialiseren** naar objecten. Kan een deel niet vertaald worden, dan volgt een exception.

## 3. Change tracking
> Tracking gebeurt volledig **in het geheugen**; de database komt pas in beeld bij `SaveChanges()`.

Een getrackte entity wordt in de context bewaard met: **primary key, originele waarden, huidige waarden en huidige state**. EF detecteert wijzigingen (snapshots of notificaties) en weet dan welke `UPDATE` nodig is.

**Een entity wordt getrackt wanneer** ze geladen wordt via een **tracking query**, via `Add()`/`AddAsync()` of via `Attach()`.
```csharp
var student = context.Students.First();
student.Name = "Updated";
await context.SaveChangesAsync();   // EF weet welke rij, welke property en welke UPDATE
```
Getrackte entities blijven in het geheugen tot de context wordt **disposed** of ze expliciet **detached** worden → een langlevende context stapelt veel objecten op (meer geheugen, tragere change detection).

**Untracked entities** worden niet gemonitord: wijzigingen worden genegeerd en `SaveChanges()` doet niets — ze zijn feitelijk read-only dataobjecten.

### AsNoTracking()
```csharp
var students = await context.Students.AsNoTracking().ToListAsync();
```
Geen state, geen originele waarden, geen identity resolution → **minder geheugen, snellere query**. Ideaal voor read-only endpoints, lijsten, dashboards, rapporten. **Vuistregel: als je de data niet wil wijzigen, track ze dan niet.** Zie [[AsNoTracking]] en [[Change tracking]].

## 4. Entity states
Elke getrackte entity heeft op elk ogenblik **precies één** state; die beschrijft de relatie tussen het geheugenobject en de database (niet de businessbetekenis).

| State | Betekent | Komt voor bij | Bij `SaveChanges()` |
|---|---|---|---|
| **Detached** | EF kent de entity niet | `new` zonder toevoegen; no-tracking query; context disposed | niets |
| **Added** | moet ingevoegd worden | `Add()`/`AddAsync()`, nieuwe entity in een getrackte graph | `INSERT`; keys worden ingevuld → daarna Unchanged |
| **Unchanged** | komt overeen met de database | geladen via tracking query; net opgeslagen | geen SQL tenzij er een wijziging is |
| **Modified** | minstens één property wijzigde | tracked property aangepast; expliciet gemarkeerd; detached entity attached + markeren | `UPDATE` (standaard **enkel gewijzigde kolommen**) → daarna Unchanged |
| **Deleted** | moet verwijderd worden | `Remove()`, cascade delete, expliciet | `DELETE` → daarna niet meer getrackt (≈ Detached) |

Typische levenscyclus: **Detached → Added → Unchanged → Modified → Unchanged → Deleted → Detached**. *Unchanged ≠ immutable*, enkel "nog geen wijziging gedetecteerd". Zie [[Entity states]].

## 5. Migrations (verdieping)
Een migration is **niet** de database en geen backup, maar een **versiebeschrijving van een schemawijziging**: het verschil tussen het vorige en het huidige EF-model. Migrations zijn **source control voor je databaseschema**; de **C#-code is de bron van waarheid** (code-first), de database is een afgeleid artefact.
- Een migration is gecompileerde C# met een tijdstempel in de klassenaam, een **`Up()`** (toepassen) en een **`Down()`** (terugdraaien). EF vertaalt dat naar provider-specifieke SQL → leesbaar, reviewbaar, versiebeheerd.
- **`__EFMigrationsHistory`** bevat de migration-id's en de gebruikte EF-versie, zodat migrations **exact één keer** worden toegepast, **in volgorde**.
- Toepassen kan manueel (CLI), automatisch bij het opstarten of in een deployment pipeline.

### Database drift
Wanneer het echte schema niet meer overeenkomt met model + migrations (manuele SQL, hotfixes direct op de database, inconsistent toegepaste migrations). Gevolg: falende migrations, foute schema-updates, runtime-fouten.
- **Verwijder nooit migration-bestanden** om "te resetten": je verbreekt de link tussen model en geschiedenis.
- `Remove-Migration` mag **enkel** voor de **laatste** migration die **nog niet** op een database is toegepast of gedeeld.
- Eenmaal toegepast/gedeeld → **nooit verwijderen**; corrigeer met een **nieuwe migration**.
> **Principe:** schema's evolueren **vooruit** via nieuwe migrations, niet achteruit door geschiedenis te wissen.

## 6. Relaties en navigation properties
Een database drukt relaties uit met **primary keys, foreign keys en join tables**; C#-code met **objectreferenties en collecties**. EF Core is de vertaallaag.
- **Navigation property** (`Customer` in `Order`) bestaat enkel in het objectmodel; de database bewaart alleen de **foreign key** (`CustomerId`). EF houdt beide **gesynchroniseerd**.
- **One-to-many**: `Customer.Orders` (lijst) ↔ `Order.CustomerId` + `Order.Customer`; de `Order` is afhankelijk (*dependent*).
- **One-to-one**: één kant is de **dependent** en bevat de FK (bv. `UserProfile.UserId`). Verkeerd modelleren geeft foute schema's of verwarrende migrations.
- **Many-to-many**: via **join table**. Modern EF genereert een verborgen join table bij collection navigations aan beide kanten. Is er **extra data op de relatie** (inschrijvingsdatum, score), dan is een **expliciete join entity** nodig (`Enrollment` met composite key `StudentId + CourseId`). In de CityInfo-demo is de join-entity expliciet geprogrammeerd.
- **Required vs optional**: required = FK mag niet null zijn; optional = nullable FK (`int? DiscountCodeId` + `DiscountCode?`). Beïnvloedt constraints, **delete behavior** en validatie.
Zie [[Relaties in EF Core]] en [[Navigation property]].

### Loading-strategieën
| Strategie | Werking | Opmerking |
|---|---|---|
| **Eager loading** | meteen laden met `Include()` | grotere query, maar geen extra round trips |
| **Lazy loading** | automatisch laden bij toegang | vereist proxies; vaak afgeraden in API's door onvoorspelbare performance |
| **Explicit loading** | manueel laden via de context | volledige controle, extra code (zoals `LoadRaceForTicketAsync` in [[MotoGP - Repository pattern]]) |
Zie [[Include en loading]].

## 7. Relaties configureren
1. **Conventions** — EF leidt de relatie af uit FK + navigation property (`CustomerId` + `Customer`). Handig, maar EF kiest defaults voor cascade en requiredness die niet bij je business hoeven te passen.
2. **Data annotations** — attributen in de entity (`[Required]`, `[ForeignKey(nameof(CustomerId))]`). Prima voor kleine projecten, maar mengt persistentie in domein-entities en kan niet alles uitdrukken.
3. **Fluent API** — **aanbevolen in echte systemen**: expressief, centraal, expliciet, reviewbaar.

### Fluent API in `OnModelCreating`
Belangrijk voor: **delete behavior**, **requiredness**, **key relationships** en **join tables**.
```csharp
// Delete behavior: geen cascade — je kan geen Customer verwijderen als er nog Orders zijn
modelBuilder.Entity<Order>()
    .HasOne(o => o.Customer).WithMany(c => c.Orders)
    .HasForeignKey(o => o.CustomerId)
    .OnDelete(DeleteBehavior.Restrict);

// Optionele relatie: kortingscode verwijderen verwijdert de bestellingen niet
modelBuilder.Entity<Order>()
    .HasOne(o => o.DiscountCode).WithMany(d => d.Orders)
    .HasForeignKey(o => o.DiscountCodeId)
    .OnDelete(DeleteBehavior.SetNull);

// One-to-one met expliciete FK
modelBuilder.Entity<User>()
    .HasOne(u => u.Profile).WithOne(p => p.User)
    .HasForeignKey<UserProfile>(p => p.UserId)
    .OnDelete(DeleteBehavior.Cascade);

// Eenvoudige many-to-many met eigen tabelnaam
modelBuilder.Entity<Student>()
    .HasMany(s => s.Courses).WithMany(c => c.Students)
    .UsingEntity(j => j.ToTable("Enrollments"));

// Expliciete join entity met composite primary key
modelBuilder.Entity<Enrollment>().HasKey(e => new { e.StudentId, e.CourseId });
modelBuilder.Entity<Enrollment>().HasOne(e => e.Student).WithMany(s => s.Enrollments).HasForeignKey(e => e.StudentId);
modelBuilder.Entity<Enrollment>().HasOne(e => e.Course).WithMany(c => c.Enrollments).HasForeignKey(e => e.CourseId);
modelBuilder.Entity<Enrollment>().ToTable("Enrollments");
```
Zie [[Fluent API]].

## 8. Query-vertaling en LINQ
- **Deferred execution:** `var query = context.Students.Where(s => s.IsActive);` raakt de database **nog niet**; EF bouwt een **expression tree** (methode-aanroepen, vergelijkingen, property-toegang, logische operatoren). Pas bij **materialisatie** (`ToListAsync`, `FirstAsync`, `SingleAsync`, `CountAsync`) wordt SQL uitgevoerd. Zie [[IQueryable en deferred execution]].
- Daarom kan EF enkel **structureel analyseerbare** expressies vertalen. Zeven stappen: expression tree vastleggen → controleren wat vertaalbaar is → model-metadata → provider-specifieke SQL-tree → SQL → uitvoeren → materialiseren.
- **Server-side vs client-side evaluation:** een eigen methode in `Where(s => CustomValidation(s.Name))` is niet vertaalbaar → modern EF **gooit een exception** i.p.v. stilzwijgend alles in het geheugen te laden (hele tabellen laden, filteren in de applicatie = rampzalige performance). Wil je toch in het geheugen werken, maak de grens **expliciet** met `AsEnumerable()`: wat ervoor komt draait in SQL, wat erna komt in het geheugen.
- **Projectie (`Select`)** — enkel nodig laden i.p.v. volledige entities: `Select(s => new StudentDto { Id = s.Id, Name = s.Name })` → minder data, geheugen en tracking, vooral nuttig in API's.
- **Operators → SQL:** `Where` → `WHERE`, `OrderBy` → `ORDER BY`, `Skip`/`Take` → `OFFSET`/`LIMIT` (bv. `.OrderBy(s => s.Name).Skip(20).Take(10)` = server-side paging, [[Filtering, searching en paging]]).
- **`Include()`** laadt gerelateerde data maar maakt queries complexer (grote joins): gebruik bewust.

## 9. Database providers
Een **provider** vertaalt EF-bewerkingen naar het SQL-dialect van een specifieke engine: LINQ → SQL, schema genereren bij migrations, datatypes/conversies, connecties, provider-specifieke features. EF zelf genereert **geen** SQL maar een abstracte queryrepresentatie die de provider omzet. Voorbeelden: SQL Server, PostgreSQL (Npgsql), SQLite, MySQL/MariaDB.
Verschillen in de praktijk: SQL-syntax (`TOP` vs `LIMIT`), JSON-kolommen, indexering, hoofdlettergevoeligheid, transactiesemantiek, concurrency, datatypes → **échte portabiliteit is beperkt**. Zie [[Database provider]].

## 10. Logging en diagnostiek
EF verbergt complexiteit niet, ze abstraheert ze. Vragen als *"waarom is deze query traag? waarom zoveel SQL-statements? waarom update EF kolommen die ik niet aanraakte? waarom geeft Include enorme joins?"* beantwoord je met logging.
- EF kan loggen: SQL, uitvoeringstijd, parameterwaarden, connectie open/close, transacties, migrations, change tracking, waarschuwingen over inefficiënte queries. Levels: **Information** (SQL en basisoperaties), **Warning** (mogelijke performance-/designproblemen), **Error**.
```csharp
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(connectionString)
           .LogTo(Console.WriteLine, LogLevel.Information);
});
```
- **`ToQueryString()`**: toon de SQL **zonder uitvoeren**: `var sql = context.Students.Where(s => s.IsActive).ToQueryString();`
- Is de SQL inefficiënt, dan ligt de oorzaak bijna altijd in de LINQ-query.

## 11. Performance-patronen
Performance is een **ontwerpkeuze**, geen micro-optimalisatie. Meeste problemen: **te veel data laden, onnodig tracken, te veel queries, inefficiënte query shapes, langlevende DbContext**.
1. **No-tracking voor reads** (`AsNoTracking()`): standaard voor API-read endpoints, dashboards, rapporten, lookup-data; tracking enkel voor wijzigingen.
2. **Projectie** i.p.v. volledige entities → minder transfer, geheugen, tracking en serialisatiekost.
3. **N+1-probleem vermijden:** één query laadt N entities en elke entity triggert een extra query voor gerelateerde data → N+1 queries. Detecteer via **logging**; oplossingen: eager loading, queries herstructureren, projecteren naar DTO's.
4. **Meet voor je optimaliseert:** SQL inspecteren, query execution plans, logging/diagnostiek.

## Tips en valkuilen
- `Remove-Migration` alleen voor een nog niet toegepaste, nog niet gedeelde migration.
- Gebruik `AsNoTracking()` voor GET-endpoints; gebruik **geen** `AsNoTracking()` als je daarna wil wijzigen en `SaveChanges()` verwacht — het is dan untracked en `SaveChanges()` doet niets.
- Fluent API schrijft **delete-gedrag** expliciet uit; vertrouw niet blind op conventies.

## Begrippen
[[Entity Framework Core]] · [[ORM]] · [[DbContext]] · [[DbSet]] · [[Change tracking]] · [[Entity states]] · [[AsNoTracking]] · [[Migrations]] · [[Relaties in EF Core]] · [[Navigation property]] · [[Include en loading]] · [[Fluent API]] · [[IQueryable en deferred execution]] · [[Database provider]]

---
Hoort bij: [[NET Development|.NET Development]]
