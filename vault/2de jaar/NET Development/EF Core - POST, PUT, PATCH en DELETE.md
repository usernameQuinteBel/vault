---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 8
groep: Deel B: ASP.NET Core API
aliases: [EF Core part 3, EF Core CUD, Create Update Delete, les 6 EF Core, EFCore_Part3]
---
# EF Core - POST, PUT, PATCH en DELETE

> Voor **aanmaken, wijzigen en verwijderen** gebruik je aparte **DTO's met validatie** (`…ForCreationDto`, `…ForUpdateDto`, `…ForPatchDto`), map je ze met AutoMapper naar de entity, bewaar je met **`SaveChanges()`** en geef je de juiste statuscode terug: **201** (`CreatedAtAction`) of **204** (`NoContent`), **400** bij ongeldige input, **404** als iets niet bestaat.

_Slides: "6.EFCore_Part3" — voorbeeld `CategoriesController` van CityInfo._

## 1. Overzicht
| Actie | HTTP | Succes | Fout |
|---|---|---|---|
| Aanmaken | **POST** | **201 Created** + `Location`-header + nieuwe resource | 400 bij ongeldige input |
| Volledig wijzigen | **PUT** | **204 No Content** | 404, 400 |
| Gedeeltelijk wijzigen | **PATCH** | **204 No Content** | 404, 400 |
| Verwijderen | **DELETE** | **204 No Content** | 404 |
Zie [[HTTP-methodes]] en [[PUT vs PATCH]].

## 2. Aanmaken — POST
### DTO voor creation
Een **eigen DTO** voor een insert geeft consumenten een **schoon contract** met enkel relevante properties, plus **validatieregels**. De controller mapt die DTO naar de entity die in de database komt. Zie [[Creation-, update- en patch-DTO]].
```csharp
public class CategoryForCreationDto
{
    [Required(ErrorMessage = "You should provide a name for the category")]
    [MinLength(3, ErrorMessage = "Name has to got at least 3 characters")]
    [MaxLength(50, ErrorMessage = "Name can't be longer then 50 characters")]
    public string Name { get; set; }

    [Required(ErrorMessage = "You should provide a description for the category")]
    [MinLength(3, ErrorMessage = "Description has to got at least 3 characters")]
    public string Description { get; set; }
}
```
- `[Required]` → consument **moet** een waarde geven; er komt een custom foutboodschap terug.
- `[MaxLength(50)]` → max 50 tekens. `[MinLength(3)]` → min 3 tekens.
Zie [[Model validation]].

### De controller
```csharp
[ApiController]
[Route("api/categories")]
public class CategoriesController : ControllerBase
{
    private readonly CityInfoContext _context;     // DbContext
    private readonly IMapper _mapper;              // AutoMapper
    …
}
```
Nodig: `GetCategories()` (alle categorieën, GET), `GetCategory(int id)` (één categorie, GET) en `CreateCategory(...)` (POST). `GetCategories()` en `GetCategory` zijn de **recap-oefening**.

### CreateCategory
Na het aanmaken geef je **201 Created** terug via **`CreatedAtAction`**: dat bouwt de 201-respons met een **`Location`-header** naar de plek waar de nieuwe resource opvraagbaar is (`/api/categories/1`) — daarvoor gebruik je de bestaande `GetCategory`.
```csharp
[HttpPost]
public ActionResult<CategoryDto> CreateCategory(CategoryForCreationDto category)
{
    var categoryEntity = _mapper.Map<Category>(category);          // DTO → entity

    _context.Categories.Add(categoryEntity);                       // toevoegen aan de in-memory DbSet
    _context.SaveChanges();                                        // bewaren in de database

    var createdCategoryToReturn = _mapper.Map<CategoryDto>(categoryEntity);

    return CreatedAtAction(nameof(GetCategory),
        new { id = createdCategoryToReturn.Id },
        createdCategoryToReturn);                                  // 201 + Location + body
}
```
De response bevat o.a. `location: https://localhost:7003/api/Categories/6`. Zie [[CreatedAtAction]].

### Mapping
Nieuw `CategoryProfile`:
```csharp
CreateMap<Category, CategoryDto>();
CreateMap<CategoryForCreationDto, Category>();
```

### Input-validatie
Wat met `[Required]`/`[MaxLength]`? Door `[ApiController]` krijgt de client automatisch **400 Bad Request** met een lijst `errors` (bv. `"Name": ["Name can't be longer then 50 characters"]`) wanneer de DTO ongeldig is. 400 = de gebruiker deed iets verkeerd.

## 3. Volledig wijzigen — PUT
Nodig:
- een **update-DTO** (`CategoryForUpdateDto`) — identiek aan de creation-DTO, met dezelfde validatie;
- een action die het **id** van de te wijzigen categorie aanvaardt, `[HttpPut]` = **volledige update**;
- bij succes **geen** object terug maar **204 No Content**;
- een nieuwe mapping `CategoryForUpdateDto` → `Category`: `CreateMap<CategoryForUpdateDto, Category>();`

```csharp
[HttpPut("{categoryId}")]
public ActionResult UpdateCategory(int categoryId, CategoryForUpdateDto category)
{
    var categoryEntity = _context.Categories.Find(categoryId);
    if (categoryEntity == null) return NotFound();                // 404

    // AutoMapper overschrijft waarden van bron naar bestemming:
    // de waarden uit de binnenkomende DTO overschrijven de entity-waarden
    _mapper.Map(category, categoryEntity);

    // categoryEntity wordt getrackt door de DbContext: die weet dat er wijzigingen zijn
    _context.SaveChanges();

    return NoContent();                                            // 204
}
```
Validatie werkt als bij insert (400). Zie [[Change tracking]] voor waarom `SaveChanges()` volstaat.

## 4. Gedeeltelijk wijzigen — PATCH
Nodig:
- een DTO waarvan de properties **niet verplicht** zijn (optioneel via `?`), met dezelfde `[MinLength]`/`[MaxLength]`:
```csharp
public class CategoryForPatchDto
{
    [MinLength(3, ErrorMessage = "Name has to got at least 3 characters")]
    [MaxLength(50, ErrorMessage = "Name can't be longer then 50 characters")]
    public string? Name { get; set; }

    [MinLength(3, ErrorMessage = "Description has to got at least 3 characters")]
    public string? Description { get; set; }
}
```
- `[HttpPatch]` = **partiële update**, 204 bij succes;
- een mapping die **properties negeert die niet in de DTO aanwezig zijn** (anders zouden ze overschreven worden met `null`):
```csharp
CreateMap<CategoryForPatchDto, Category>()
    .ForAllMembers(opt => opt.Condition((src, dest, srcMember) => srcMember != null));
```
```csharp
[HttpPatch("{categoryId}")]
public ActionResult PatchCategory(int categoryId, CategoryForPatchDto category)
{
    var categoryEntity = _context.Categories.Find(categoryId);
    if (categoryEntity == null) return NotFound();
    _mapper.Map(category, categoryEntity);     // DTO → entity (enkel niet-null waarden)
    _context.SaveChanges();
    return NoContent();
}
```
Test in Swagger met enkel `{ "description": "New patched description" }` → 204; een te korte waarde → 400.

## 5. Verwijderen — DELETE
```csharp
[HttpDelete("{categoryId}")]
public ActionResult DeleteCategory(int categoryId)
{
    var categoryEntity = _context.Categories.Find(categoryId);
    if (categoryEntity == null) return NotFound();
    _context.Categories.Remove(categoryEntity);
    _context.SaveChanges();
    return NoContent();
}
```

## 6. Samenvatting van het stappenplan
| Stap | POST | PUT | PATCH | DELETE |
|---|---|---|---|---|
| DTO | `ForCreationDto` | `ForUpdateDto` | `ForPatchDto` (optioneel) | — |
| Entity zoeken | — | `Find(id)` | `Find(id)` | `Find(id)` |
| 404 als niet gevonden | — | ja | ja | ja |
| Mappen | DTO → nieuwe entity | DTO → bestaande entity | idem (null negeren) | — |
| Databank | `Add` + `SaveChanges` | `SaveChanges` | `SaveChanges` | `Remove` + `SaveChanges` |
| Resultaat | 201 `CreatedAtAction` | 204 | 204 | 204 |

## Tips en valkuilen
- Bij **PUT** moeten alle velden meegegeven worden; bij **PATCH** enkel wat wijzigt.
- Vergeet de `ForAllMembers`-conditie niet bij PATCH, anders overschrijft AutoMapper velden met `null`.
- `CreatedAtAction(nameof(GetCategory), new { id = … }, …)`: de **route-waarde** (`id`) moet overeenkomen met de parameter van de GET-action.
- Voorbeelden gebruiken hier nog `SaveChanges()` (synchroon); in [[Layered architecture en Repository pattern]] wordt dat `SaveChangesAsync()`.

## Begrippen
[[HTTP-methodes]] · [[HTTP-statuscodes]] · [[Creation-, update- en patch-DTO]] · [[Model validation]] · [[CreatedAtAction]] · [[PUT vs PATCH]] · [[Mapping profile]] · [[Change tracking]]

## Oefening
[[MotoGP - Ticketreservatie]]

---
Hoort bij: [[NET Development|.NET Development]]
