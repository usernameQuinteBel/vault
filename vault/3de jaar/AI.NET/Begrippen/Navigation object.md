---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 5
groep: MVVM
---
# Navigation object

> In MAUI beheert het **Navigation-object** de **navigatiestack**: een stapel pagina's. Je zet een pagina erbovenop (**push**) of haalt de bovenste eraf (**pop**).

```csharp
await Navigation.PushAsync(new DetailsPage());  // naar details
await Navigation.PopAsync();                     // terug
```

## Waar zou je navigeren in FriendSportConnect?
| ViewModel | Command | Navigatie |
|---|---|---|
| `ListViewModel` | `AddFriendCommand`, `UpdateFriendCommand` | `PushAsync(new DetailsPage())` |
| `DetailsViewModel` | `SaveCommand`, `CancelCommand`, `DeleteCommand` | `PopAsync()` |

## Waarom is dit "niet ok"? (vraag uit de slides)
1. `new DetailsPage()` in een ViewModel **koppelt** het ViewModel aan een concrete View → strijdig met [[MVVM]].
2. Het `Navigation`-object hoort bij een **pagina**, dus het ViewModel zou de pagina moeten kennen.
3. Het ViewModel is niet meer **testbaar** zonder UI.

**Oplossing**: verpak dit in een [[NavigationService]] achter een interface.

## Gerelateerd
[[NavigationService]] · [[Shell en TabBar]] · [[MVVM Navigation en Messages]]

---
Hoort bij: [[MVVM Navigation en Messages]]
