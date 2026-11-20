---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 5
groep: MVVM
aliases: [INavigationService]
---
# NavigationService

> Een service achter een interface (`INavigationService`) die **navigatie afhandelt**, zodat [[ViewModel]]s kunnen navigeren **zonder de Views te kennen**.

## Opbouw
**1. Contract**
```csharp
public interface INavigationService
{
    Task NavigateToDetailsAsync();
    Task NavigateBackAsync();
}
```
**2. Implementatie** — vraagt de pagina op bij de **serviceprovider** (geen `new`, geen harde afhankelijkheid):
```csharp
public class NavigationService : INavigationService
{
    private readonly IServiceProvider services;
    public NavigationService(IServiceProvider services) => this.services = services;

    private INavigation Navigation => Application.Current.MainPage.Navigation;

    public Task NavigateToDetailsAsync() =>
        Navigation.PushAsync(services.GetRequiredService<DetailsPage>());

    public Task NavigateBackAsync() => Navigation.PopAsync();
}
```
**3. Registreren** (`AddSingleton<INavigationService, NavigationService>()`) en **injecteren** in de ViewModels.

## Gebruik
```csharp
[RelayCommand]
private async Task AddFriend() => await navigationService.NavigateToDetailsAsync();
```
→ *"We kunnen navigatie coderen zonder de Views te gebruiken!"*

## Wat ontbreekt nog?
Navigeren alleen is niet genoeg: je moet ook de **geselecteerde vriend doorgeven** en bij terugkeer de lijst **verversen**. Dat doet de [[MessengerService]].

## Gerelateerd
[[Navigation object]] · [[Dependency Injection]] · [[MessengerService]]

---
Hoort bij: [[MVVM Navigation en Messages]]
