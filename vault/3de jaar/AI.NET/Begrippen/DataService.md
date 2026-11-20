---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 4
groep: MVVM
---
# DataService

> Een klasse die het [[ViewModel]] **data levert** (uit een API, database of bestand), zodat het ViewModel niet zelf met `HttpClient`, JSON of SQL hoeft te werken.

## Generiek opgebouwd (FriendSportConnect, les 4)
1. **Generieke interface** met alle [[CRUD]]-methodes:
```csharp
public interface IApiService<T>
{
    Task<List<T>> GetAllAsync();
    Task<T> GetAsync(string id);
    Task<T> CreateAsync(T item);
    Task UpdateAsync(T item);
    Task DeleteAsync(string id);
}
```
2. **Generieke abstracte klasse** die de interface implementeert met [[HttpClient]] (JSON (de)serialiseren):
```csharp
public abstract class ApiService<T> : IApiService<T>
{
    protected abstract string Endpoint { get; }
    public async Task<List<T>> GetAllAsync() =>
        await httpClient.GetFromJsonAsync<List<T>>(Endpoint);
    // ...
}
```
3. **Concrete service** die erft en enkel de endpoint invult:
```csharp
public class FriendDataService : ApiService<Friend>, IFriendDataService
{
    protected override string Endpoint => "https://xxxx.mockapi.io/api/friend";
}
```

## Waarom zo?
- De CRUD-logica schrijf je **één keer** en hergebruik je voor elk modeltype.
- Het ViewModel kent enkel `IFriendDataService` → makkelijk te vervangen of te mocken.
- Wordt via [[Dependency Injection]] (als singleton) geïnjecteerd.

## Gerelateerd
[[REST API]] · [[CRUD]] · [[MockAPI]] · [[HttpClient]]

---
Hoort bij: [[MVVM met DataServices]]
