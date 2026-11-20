---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [2, 3, 4, 5]
groep: MVVM
---
# ViewModel

> De **brug** tussen [[View (MVVM)|View]] en [[Model (MVVM)|Model]]: houdt de **toestand** van een scherm bij en biedt de **acties** (commands) aan. Kent de View **niet**.

## Wat zit erin?
| Onderdeel | Voorbeeld | Waarom |
|---|---|---|
| **Properties** | `Amount`, `Tax`, `Students`, `SelectedFriend` | de View bindt eraan |
| **Commands** | `CalculateTaxCommand`, `SaveCommand`, `DeleteCommand` | de knoppen roepen ze aan |
| **Services** (geïnjecteerd) | `IFriendDataService`, `INavigationService` | data ophalen, navigeren |

## Opbouw in de lessen
1. **Contract** maken: een interface (`ICalculateTaxViewModel`) met de properties en commands die de View nodig heeft. Zie [[Interface als contract]].
2. **Implementatie** die van `ObservableObject` erft:
```csharp
public partial class CalculateTaxViewModel : ObservableObject, ICalculateTaxViewModel
{
    [ObservableProperty] private Customer customer;

    [RelayCommand]
    private void CalculateTax() => Customer.CalculateTax();
}
```
3. **Registreren** in `MauiProgram.cs` en **injecteren** in de View (zie [[Dependency Injection]]).

## Belangrijke regels
- **Geen** verwijzing naar `Label`, `Entry` of een pagina: dan is het geen ViewModel meer.
- **Geen** `new DetailsPage()` voor navigatie → gebruik een [[NavigationService]].
- **Niet** rechtstreeks een ander ViewModel aanspreken → gebruik de [[MessengerService]].

## Gerelateerd
[[MVVM]] · [[CommunityToolkit.Mvvm]] · [[Command (MVVM)]] · [[INotifyPropertyChanged]]

---
Hoort bij: [[MVVM met één object]]
