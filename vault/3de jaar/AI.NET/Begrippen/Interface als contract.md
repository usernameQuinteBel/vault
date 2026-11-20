---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [2, 3, 4]
groep: MVVM
aliases: [Contract, Set up the contract]
---
# Interface als contract

> In de lessen definieer je eerst een **interface** (bv. `ICalculateTaxViewModel`, `IFriendDataService`) — het "contract" — en pas daarna een klasse die het implementeert.

## Waarom eerst een contract?
- **Losse koppeling**: de View kent enkel de interface, niet de concrete klasse. Je kan de implementatie vervangen zonder de View te wijzigen.
- **Testbaarheid**: in een test injecteer je een *mock* die dezelfde interface implementeert.
- **Duidelijkheid**: de interface toont in één oogopslag wat een ViewModel of service aanbiedt.
- **[[Dependency Injection]]** werkt per interface: `AddTransient<IListViewModel, ListViewModel>()`.

## Voorbeeld
```csharp
public interface ICalculateTaxViewModel
{
    Customer Customer { get; }
    IRelayCommand CalculateTaxCommand { get; }
}
```
In de View: `x:DataType="viewModels:ICalculateTaxViewModel"`.

## Wat gebeurt er zonder interface?
```csharp
public ListPage(ListViewModel vm)   // concrete klasse
```
De View hangt dan vast aan één implementatie: een mock-ViewModel voor tests of een andere DataService (mock-API → echte API) vraagt aanpassingen in de View.

## In de lessen
| Interface | Implementatie |
|---|---|
| `ICalculateTaxViewModel` | `CalculateTaxViewModel` |
| `IListViewModel`, `IDetailsViewModel` | `ListViewModel`, `DetailsViewModel` |
| `IApiService<T>` | `ApiService<T>` → `FriendDataService` |
| `INavigationService` | `NavigationService` |
Patroon: **registreer de interface → implementatie in `MauiProgram.cs`**, vraag in constructors altijd de **interface**.

## Gerelateerd
[[ViewModel]] · [[Dependency Injection]] · [[DataService]]

---
Hoort bij: [[MVVM met één object]]
