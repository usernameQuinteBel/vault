---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [3, 4, 5]
groep: MVVM
aliases: [DI]
---
# Dependency Injection

> In plaats van dat een klasse zelf haar afhankelijkheden aanmaakt (`new`), **registreer** je ze centraal en laat je ze **automatisch meegeven** via de constructor. Houdt klassen **loosely coupled** en **testbaar**.

## Het probleem
```csharp
public ListPage()
{
    BindingContext = new ListViewModel(new FriendDataService(new HttpClient()));
}
```
De pagina weet nu hoe een ViewModel, een DataService én een HttpClient gebouwd worden. Wijzig je er één, dan moet je overal zoeken.

## De oplossing in MAUI
**1. Registreren** in `MauiProgram.cs`:
```csharp
builder.Services.AddSingleton<IFriendDataService, FriendDataService>();
builder.Services.AddSingleton<INavigationService, NavigationService>();
builder.Services.AddTransient<IListViewModel, ListViewModel>();
builder.Services.AddTransient<ListPage>();
```
**2. Injecteren** via de constructor:
```csharp
public ListPage(IListViewModel vm)
{
    InitializeComponent();
    BindingContext = vm;
}
public ListViewModel(IFriendDataService data, INavigationService nav) { ... }
```
De **container** bouwt de hele keten voor je op.

## Lifetimes
| Lifetime | Betekenis | Voorbeeld |
|---|---|---|
| `Singleton` | één instantie voor de hele app | DataService, NavigationService |
| `Transient` | telkens een nieuwe | pagina's, ViewModels |
| `Scoped` | per scope (in MAUI weinig gebruikt) | — |

## Waar komt het terug?
EduTrack (les 3), FriendSportConnect (les 4–5), SafariSnap (Azure 1) en in de [[NavigationService]] die pagina's opvraagt bij de **serviceprovider**.

## Gerelateerd
[[Interface als contract]] · [[NavigationService]] · [[DataService]] · [[MAUI projectstructuur]]

## Meer leren
- [Dependency injection in .NET MAUI](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/dependency-injection)

---
Hoort bij: [[MVVM met collections]]
