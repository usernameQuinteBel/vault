---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 4
groep: Deel A: .NET MAUI
---
# MVVM met DataServices

> App **FriendSportConnect**: vrienden en hun sport beheren met **echte CRUD** tegen een REST-API ([[MockAPI]]), via een **generieke [[DataService]]**. De ViewModels weten niet **hoe** de data opgehaald wordt — enkel dát het kan.

## 1. Een API maken met MockAPI
1. https://mockapi.io/ → *Get Started* → inloggen met Google.
2. **New project** (bv. `Maui`).
3. **New resource** `Friend` (velden zoals `name`, `phone`, `sport`, `avatar`).
→ Je krijgt meteen endpoints: `GET /Friend`, `GET /Friend/{id}`, `POST`, `PUT /Friend/{id}`, `DELETE /Friend/{id}`. Zie [[REST API]] en [[CRUD]].

## 2. De app opzetten
Start van `Start.zip` en `Images.zip` (sport-iconen). De `ListPage` toont vrienden met hun sport.

## 3. De DataService in drie lagen
```
IApiService<T>          ← generieke interface: alle CRUD-methodes
   ▲
ApiService<T>           ← generieke abstracte klasse: HttpClient + JSON
   ▲
FriendDataService       ← concreet voor Friend (endpoint "Friend")
```
```csharp
public interface IApiService<T>
{
    Task<List<T>> GetAllAsync();
    Task<T?> GetAsync(string id);
    Task<T?> CreateAsync(T item);
    Task<T?> UpdateAsync(string id, T item);
    Task<bool> DeleteAsync(string id);
}
```
De abstracte klasse doet het eigenlijke werk met [[HttpClient]] (`GetFromJsonAsync`, `PostAsJsonAsync`, `PutAsJsonAsync`, `DeleteAsync`); `FriendDataService` geeft enkel zijn **endpoint** mee. Een nieuwe resource (bv. `Sport`) kost zo enkele regels.

**Waarom generiek?** Geen gedupliceerde HTTP-code per entiteit, één plek om fouten af te handelen, en ViewModels hangen af van een **interface** → vervangbaar en testbaar ([[Interface als contract]]).

## 4. Contract en ViewModel
`ListViewModel` met:
| Property / command | Rol |
|---|---|
| `ObservableCollection<Friend> Friends` | de lijst uit de API |
| `Friend SelectedFriend` | geselecteerde vriend |
| `List<Sport> Sports` + `Sport SelectedSport` | keuzelijst (Picker) |
| `AddFriendCommand`, `UpdateFriendCommand` | acties |
| `LoadFriends()` (**async**) | `Friends = new(await dataService.GetAllAsync())` |
| `LoadSports()`, `BindCommands()` | initialisatie |

## 5. Dependency Injection en bindings
```csharp
builder.Services.AddSingleton<IApiService<Friend>, FriendDataService>();
builder.Services.AddTransient<IListViewModel, ListViewModel>();
builder.Services.AddTransient<ListPage>();
```
Het ViewModel krijgt de DataService via zijn **constructor** — het maakt hem nooit zelf met `new`.

## 6. Oefening
- **"Fix the problem with the sport"**: de gekozen sport wordt niet correct getoond/opgeslagen. Oorzaak: de `Sport` in de Picker is een **ander object** dan de sport van de vriend → koppel op een sleutel (id/naam) of zoek het juiste object uit `Sports` op.
- **Delete** implementeren (command + `DeleteAsync` + lijst verversen).

## Typische fouten
| Probleem | Oorzaak |
|---|---|
| lege lijst, geen fout | `async void` zonder `await`/exception-afhandeling; verkeerde URL |
| JSON-velden leeg | propertynamen komen niet overeen (hoofdletters) → `[JsonPropertyName]` |
| UI bevriest | `.Result` of `.Wait()` op een `Task` i.p.v. `await` |

## Begrippen
[[DataService]] · [[MockAPI]] · [[REST API]] · [[CRUD]] · [[HttpClient]] · [[Interface als contract]] · [[Dependency Injection]] · [[ObservableCollection]]

---
Hoort bij: [[AI.NET]]
