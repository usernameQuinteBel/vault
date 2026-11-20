---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 12
groep: Deel B: ASP.NET Core API
aliases: [Layered Architecture, N-Tier, Clean Architecture, Repository Pattern les, les 9, async repository]
---
# Layered architecture en Repository pattern

> Je splitst de monolithische API op in **lagen** (API/Presentation, Contracts, Domain, Infrastructure) en verbergt de data-access achter een **repository** (interface + implementatie in Infrastructure, scoped geregistreerd) met **asynchrone** methoden, zodat controllers ontkoppeld, herbruikbaar en testbaar worden.

_Slides: "9a. Layered Architecture" en "9b. Repository Pattern", PDF "From monolithic to layered architecture", voorbeeld CityInfo._

## 1. Van monolithisch naar gelaagd
**Monolithische API:** controllers, DTO's, entities en data access zitten in **één project** (CityInfo.API: Controllers, MappingProfiles, appsettings.json, Program.cs, DTO Models, Entities, `CityInfoDbContext`, Migrations → database).
**N-Tier / Clean Architecture:** die onderdelen gaan naar aparte **class library**-projecten; elk project is een **laag**. Zie [[Layered architecture]].

> Kern: **Separation of Concerns** — elke laag is een *black box* voor de lagen erboven. Zie [[Separation of concerns]].

- **Strict layering:** laag A mag enkel laag B aanroepen. **Relaxed layering:** laag A mag elke onderliggende laag aanroepen. Strict is "properder": wil je de database vervangen, dan wijzigt enkel de laag die ze raakt. Dit sluit aan bij de **Law of Demeter** (principle of least knowledge: een module praat enkel met zijn directe "vrienden").

### De lagen in CityInfo
| Laag (project) | Verantwoordelijkheid | Inhoud |
|---|---|---|
| **CityInfo.API** (Presentation Layer) | ingang van de applicatie (Web API/CLI/GUI): input aanvaarden, vertalen, repository/service aanroepen, response teruggeven. **Geen business logic** — enkel orkestratie (`200 OK`, `404 Not Found`). Mapt naar DTO's voor responses | Controllers, MappingProfiles, `appsettings.json`, `Program.cs` (dependency injection en configuratie) |
| **CityInfo.Contracts** (Communication) | gedeelde bibliotheek van **DTO-modellen** (+ interfaces): het *wat*, niet het *hoe*. Voorkomt dat interne databasewijzigingen "lekken" naar clients | `CityDto`, `CategoryDto`, `PointOfInterestDto` |
| **CityInfo.Domain** (Core Business) | de meest **stabiele** laag: businessregels en **Entities**. **Nul afhankelijkheden** naar andere lagen (kent geen database, API of bestandssysteem) | Entities (`City`, `PointOfInterest`, `Category`…), constanten, domeinexceptions |
| **CityInfo.Infrastructure** (Data) | **persistentie**: `DbContext`, migrations, **repository-implementaties**, logging services, API-clients; de technische details (databases, mailservers, 3rd-party API's) | `CityInfoDbContext`, Migrations, Services (repositories) |

**Flow of control vs. dependency direction** (veelvoorkomend misverstand):
1. *Flow of control* (uitvoering): gebruiker klikt (Presentation) → regel verwerkt (Domain) → data bewaard (Infrastructure).
2. *Dependency direction* (afhankelijkheden): **Presentation hangt af van Infrastructure; Infrastructure hangt af van Domain; Domain hangt van niets af.** Zo hangt Infrastructure van het Domain af (**dependency inversion**): de Infrastructure implementeert interfaces uit Contracts/Domain, bv. "ik heb een manier nodig om een user te bewaren" → Infrastructure levert de code voor SQL Server of MongoDB.

**Waarom?** Testbaarheid (Domain los te testen zonder database/webserver), framework-onafhankelijkheid (is EF over 5 jaar achterhaald, herschrijf je enkel Infrastructure), onderhoud (UI-ontwikkelaars breken de databaselogica niet).

## 2. Refactoren van CityInfo naar lagen (stappenplan)
1. **Nieuwe class library** in de CityInfo-solution voor **Contracts**, **Domain** en **Infrastructure** (`<Nullable>annotations</Nullable>` in de csproj).
2. **Folders verplaatsen** naar de nieuwe laag (DTO's → Contracts, Entities → Domain, DbContext/Migrations → Infrastructure) en in het API-project **verwijderen**.
3. **Namespaces** in alle klassen aanpassen.
4. **NuGet-pakketten in Infrastructure** zodat die EF Core kent (het API-project hoeft die niet meer voor data-access):
   - `Microsoft.EntityFrameworkCore` (10.0.2)
   - `Microsoft.EntityFrameworkCore.Design`
   - `Microsoft.EntityFrameworkCore.SqlServer`
   - `Microsoft.EntityFrameworkCore.Tools`
5. **Project references** toevoegen ("rode pijlen" in het schema): API → Contracts, Infrastructure (en Domain); Infrastructure → Domain (en Contracts waar nodig).
6. **Build en fouten oplossen**, ongebruikte namespace-referenties verwijderen en namespace-verwijzingen van API naar de lagen corrigeren.
   Resultaat bij een geslaagde build: *Rebuild All: 4 succeeded, 0 failed*.
7. Zijn er geen buildfouten meer, dan **werkt je API zoals voordien**.

### Migrations in de Infrastructure-laag
Migrations maak en voer je uit **vanuit de Infrastructure-laag** (waar `CityInfoDbContext` staat). Nodig:
- In de DbContext:
```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);
    modelBuilder.ApplyConfigurationsFromAssembly(typeof(CityInfoContext).Assembly);
}
```
- In `Program.cs` van de API (slide "API – Program.cs") registreer je de context zoals voorheen; de details staan als screenshot in de slides.
- **Altijd**: *Default project* (Package Manager Console) = **Infrastructure-laag**, *Startup project* = **API**. Verder werken migrations "zoals we ze kennen". Zie [[Migrations]] en [[Lagen - Contracts, Domain en Infrastructure|Lagen: Contracts, Domain en Infrastructure]].

## 3. Waarom een repository?
Bijna elke API-request spreekt een database aan. ORM's (EF Core, Dapper) zijn niet genoeg voor *state-of-the-art* code: die moet **herbruikbaar, onderhoudbaar, leesbaar en vooral testbaar** zijn. Het **repository pattern** lost de gangbare problemen van databasetoegang op.

**Zonder repository:** de controller (application layer) is **strak gekoppeld** aan de **DAL (Data Access Layer)**; testen is moeilijker en hangt af van de gebruikte ORM; entities zijn moeilijk uit te breiden.
**Met repository:** een repository-klasse zit **tussen** controller en DAL en beslist welke ORM; entities kunnen aangepast worden voor ze de controller bereiken; de controller is **ontkoppeld**.

| Zonder repository pattern | Met repository pattern |
|---|---|
| code-duplicatie | **geen** duplicatie |
| foutgevoeliger | minder foutgevoelige code |
| consumerende klasse moeilijker te testen | **betere testbaarheid** (repository mockbaar) |
| — | **persistence ignorant** |
**Definitie:** een repository **encapsuleert data-access**: klassen die de data-accesslogica implementeren en een data-accessservice leveren aan de applicatielaag. De controller hoeft niet te weten of ADO.NET, EF of Dapper gebruikt wordt, noch hoe de data gestructureerd is. De repositories staan in de **Infrastructure-laag**. Zie [[Repository pattern]].

**Generieke interface (PDF):** een `IRepository<T>` met `GetAll()`, `GetByID()`, `Insert()`, `Update()`, `Delete()`, `Save()`; vaak een **hybride**: generiek voor standaard-CRUD plus specifieke interfaces (`IUserRepository : IRepository<User>`) voor unieke methoden.

## 4. Asynchrone code: Task – async – await
> Doel: **threads vrijmaken** zodat ze voor andere taken gebruikt kunnen worden → betere **schaalbaarheid**.

| | Synchroon | Asynchroon |
|---|---|---|
| Threads | 1 thread wacht op I/O (**geblokkeerd**) | de thread wordt vrijgegeven tijdens de I/O (DB-request) en een thread rondt het werk daarna af (**await**) |
| Tijdslijn | start → DB request → *waiting for I/O* → request complete → view bouwen → end | start → DB request (async) → *(thread vrij)* → request complete → view bouwen |
**I/O-operatie** = o.a. lezen uit de database. Zie [[Async en await]].

| Keyword | Betekenis |
|---|---|
| **`Task`** | vertegenwoordigt een asynchrone operatie; een **belofte** dat het resultaat geleverd wordt als de operatie klaar is. Het resultaattype staat tussen `< >` (`Task<Category?>`) |
| **`async`** | markeert de methode als asynchroon |
| **`await`** | de compiler splitst de methode in **twee delen**: deel 1 = I/O-operatie starten, deel 2 = *callback* als de I/O klaar is |
**Enkel I/O-gebonden operaties zijn async:** `SaveChangesAsync`, `ToListAsync`, `FirstOrDefaultAsync` (netwerk/disk). **`Add()` op de DbSet is géén I/O** (in-memory) → niet async.

## 5. Implementatie in de Infrastructure-laag (CityInfo-categorieën)
**Interface** in de nieuwe map `Services`: `ICategoryRepository` is het **contract** voor `CategoryRepository`. Welke methoden? Alle interacties die we al met de database hebben: alle categorieën ophalen, één op id, toevoegen, wijzigen, gedeeltelijk wijzigen en verwijderen.
```csharp
public interface ICategoryRepository
{
    // Asynchronous
    Task<IEnumerable<Category>> GetCategoriesAsync();
    Task<Category?> GetCategoryAsync(int categoryId);   // null als niet gevonden!
    void AddCategory(Category category);
    void DeleteCategory(Category category);
    Task<bool> SaveChangesAsync();
}
```
(Eerst stond er ook een synchrone `IEnumerable<Category> GetCategories();` — de slides kozen voor de asynchrone variant.)

**Implementatie** — de `CityInfoContext` komt via **constructor injection**:
```csharp
using CityInfo.Domain.Entities;
using CityInfo.Infrastructure.DbContexts;
using Microsoft.EntityFrameworkCore;

namespace CityInfo.Infrastructure.Services
{
    public class CategoryRepository : ICategoryRepository
    {
        private CityInfoContext _context;

        public CategoryRepository(CityInfoContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Category>> GetCategoriesAsync()
        {
            return await _context.Categories.OrderBy(c => c.Name).ToListAsync();
        }

        public async Task<Category?> GetCategoryAsync(int categoryId)
        {
            return await _context.Categories.FirstOrDefaultAsync(c => c.Id == categoryId);
        }

        public void AddCategory(Category category)
        {
            _context.Categories.Add(category);   // geen I/O → niet async
        }

        public void DeleteCategory(Category category)
        {
            _context.Categories.Remove(category);
        }

        public async Task<bool> SaveChangesAsync()
        {
            // Return true when 0 or more entities are saved successfully
            return (await _context.SaveChangesAsync() >= 0);
        }
    }
}
```
`SaveChangesAsync` maakt **alle getrackte wijzigingen persistent** in de database en geeft het aantal weggeschreven state entries terug ([[Change tracking]]). De categorie wordt eerst enkel aan de DbSet `Categories` toegevoegd.

**(Gedeeltelijk) wijzigen:** *Wat moet er in de repository bijkomen?* **Niets** — de entity is al getrackt; je wijzigt ze (via AutoMapper) en roept `SaveChangesAsync()` aan. **Verwijderen** heeft wel `DeleteCategory` nodig.

## 6. De repository gebruiken in de controller
- Injecteer **de interface/het contract** (niet de concrete klasse): `ICategoryRepository`.
```csharp
public class CategoriesController : ControllerBase
{
    private readonly IMapper _mapper;
    private readonly ICategoryRepository _categoryRepository;

    public CategoriesController(IMapper mapper, ICategoryRepository categoryRepository)
    {
        _mapper = mapper;
        _categoryRepository = categoryRepository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<CategoryDto>>> GetCategories()
    {
        var categories = await _categoryRepository.GetCategoriesAsync();
        return Ok(_mapper.Map<IEnumerable<CategoryDto>>(categories));
    }
}
```
- Actions worden `async Task<ActionResult<…>>`; `_context.Categories.ToList()` wordt `await _categoryRepository.GetCategoriesAsync()`.
- **Finishing touch:** de `CityInfoContext` helemaal uit de `CategoriesController` verwijderen — de repository is nu verantwoordelijk voor de communicatie met de database (**Get all categories → Category objects → Category entities → All category records**).

### Registreren voor DI
Test je het endpoint zonder registratie, dan krijg je **500**: *`InvalidOperationException: Unable to resolve service for type 'ICategoryRepository' while attempting to activate 'CategoriesController'`*. Registreer de interface in `Program.cs`:
```csharp
builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
```
**Scoped** is de beste lifetime voor repositories: de repository wordt **één keer per request** gemaakt. Elke controller die `ICategoryRepository` vraagt krijgt dankzij de service container een `CategoryRepository`. Zie [[Dependency Injection (les)]] en [[Service lifetimes]].

### Overzicht van de refactoring per actie
| Actie | Repository | Controller |
|---|---|---|
| GET lijst | `GetCategoriesAsync()` | `await` + map |
| GET één | `GetCategoryAsync(id)` | `await`, `NotFound()` als `null` |
| POST | `AddCategory` + `SaveChangesAsync` | map DTO → entity, `AddCategory`, `await SaveChangesAsync()`, map terug, `CreatedAtAction` |
| PUT/PATCH | niets extra | `GetCategoryAsync`, `_mapper.Map(dto, entity)`, `await SaveChangesAsync()`, `NoContent()` |
| DELETE | `DeleteCategory` | `GetCategoryAsync`, `DeleteCategory`, `await SaveChangesAsync()`, `NoContent()` |
De bedoeling is dezelfde als in [[EF Core - POST, PUT, PATCH en DELETE]], maar zonder rechtstreeks gebruik van de DbContext.

## 7. Testbaarheid
Zonder repository zijn controllers aan een ORM/database gebonden. Nu kan je `ICategoryRepository` (of `IRepository<User>`) **mocken** zodat een lijst "nepdata" terugkomt zonder echte database ([[Mocking (Moq)]], [[Unit testing en TDD]]).

## Tips en valkuilen
- Controllers bevatten **geen business- of databaselogica** (alleen orkestratie).
- Injecteer altijd **de interface**; vergeet de **registratie** niet (anders 500).
- Maak enkel **I/O-operaties** async; `Add`/`Remove` op de DbSet niet.
- Migrations: Default project = Infrastructure, Startup project = API.
- In een repository kan je ook expliciet gerelateerde data laden (bv. `LoadRaceForTicketAsync`) — zie [[MotoGP - Repository pattern]].

## Begrippen
[[Layered architecture]] · [[Lagen - Contracts, Domain en Infrastructure|Lagen: Contracts, Domain en Infrastructure]] · [[Separation of concerns]] · [[Repository pattern]] · [[Async en await]] · [[Service lifetimes]] · [[Dependency Injection]] · [[Migrations]]

## Oefening
[[MotoGP - Repository pattern]]

---
Hoort bij: [[NET Development|.NET Development]]
