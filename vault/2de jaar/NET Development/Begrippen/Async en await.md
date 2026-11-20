---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10, 12]
groep: Testing, DI en architectuur
aliases: [async, await, Task, Asynchrone code]
---
# Async en await

> Asynchrone code **geeft threads vrij** tijdens I/O (bv. een databasecall) zodat ze andere requests kunnen afhandelen → betere **schaalbaarheid**.

| | Synchroon | Asynchroon |
|---|---|---|
| Thread | wacht **geblokkeerd** op I/O | wordt vrijgegeven; een thread rondt het werk daarna af |

| Keyword | Betekenis |
|---|---|
| **`Task`** | een asynchrone operatie / belofte van een resultaat; `Task<T>` met resultaattype |
| **`async`** | markeert de methode als asynchroon |
| **`await`** | de compiler splitst de methode: deel 1 start de I/O, deel 2 is de callback na afloop |

```csharp
public async Task<IEnumerable<Category>> GetCategoriesAsync()
{
    return await _context.Categories.OrderBy(c => c.Name).ToListAsync();
}
[HttpGet]
public async Task<ActionResult<IEnumerable<CategoryDto>>> GetCategories() { … }
```

## Regels
- Enkel **I/O-gebonden** operaties zijn async: `SaveChangesAsync`, `ToListAsync`, `FirstOrDefaultAsync`.
- `Add()`/`Remove()` op de DbSet zijn **geen I/O** (in-memory) → niet async.
- In tests: testmethode geeft `Task` terug en `await`; **nooit** `.Result`/`.Wait()` blokkeren.
- Naamconventie: methodes eindigen op `Async`.

## Gerelateerd
[[Repository pattern]] · [[Unit test]] · [[Change tracking]]

---
Hoort bij: [[Layered architecture en Repository pattern]]
