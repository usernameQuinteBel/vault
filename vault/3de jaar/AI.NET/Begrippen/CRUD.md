---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 4
groep: MVVM
---
# CRUD

> De vier basisbewerkingen op data: **Create, Read, Update, Delete**. Bijna elke app die data beheert, biedt deze vier aan.

| Letter | Bewerking | HTTP ([[REST API]]) | SQL | Voorbeeld FriendSportConnect |
|---|---|---|---|---|
| **C** | Create | `POST` | `INSERT` | nieuwe vriend toevoegen |
| **R** | Read | `GET` | `SELECT` | lijst van vrienden tonen |
| **U** | Update | `PUT`/`PATCH` | `UPDATE` | sport van een vriend wijzigen |
| **D** | Delete | `DELETE` | `DELETE` | vriend verwijderen |

In MVVM zitten de CRUD-calls in een [[DataService]]; het [[ViewModel]] roept ze aan vanuit [[Command (MVVM)|commands]] (`AddFriendCommand`, `SaveCommand`, `DeleteCommand`).

## Idempotent of niet?
| Bewerking | Twee keer uitvoeren = |
|---|---|
| `GET` | hetzelfde resultaat (veilig) |
| `PUT` | hetzelfde eindresultaat (idempotent) |
| `DELETE` | het item is weg (idempotent; tweede keer vaak `404`) |
| `POST` | **twee** items! → daarom knoppen uitschakelen tijdens het opslaan |

## CRUD in de generieke DataService
```csharp
Task<List<T>> GetAllAsync();             // R
Task<T?> GetAsync(string id);            // R
Task<T?> CreateAsync(T item);            // C
Task<T?> UpdateAsync(string id, T item); // U
Task<bool> DeleteAsync(string id);       // D
```

## Na elke wijziging
De UI moet de nieuwe toestand tonen: item toevoegen aan/verwijderen uit de `ObservableCollection`, of de lijst opnieuw laden (via een `RefreshFriendsMessage`, zie [[MessengerService]]).

---
Hoort bij: [[MVVM met DataServices]]
