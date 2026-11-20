---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 2
groep: Deel A: .NET MAUI
---
# MVVM met één object

> De SimpleTaxCalculator **herbouwen volgens [[MVVM]]**: geen logica meer in de code-behind, maar een **ViewModel** waaraan de View zich **bindt**. Eén object (`Customer`).

## Waarom MVVM?
Met UI in XAML + code-behind moet je **voortdurend waarden kopiëren** tussen UI en code, en zijn de controls en de business-logica **tight coupled** → lastig onderhoud.
| Voordeel van MVVM | Betekent |
|---|---|
| **Separation of concerns** | View = tonen, ViewModel = gedrag/state, Model = data |
| **Testability** | ViewModel testen zonder UI |
| **Maintainability** | UI wijzigen zonder logica te breken |
| **Reusability** | hetzelfde ViewModel/Model in meerdere views |

## De drie lagen + de lijm
```
View (XAML)  ⇄  data binding / commands  ⇄  ViewModel  →  Model
```
- [[View (MVVM)]]: enkel XAML, bindings.
- [[ViewModel]]: properties en [[Command (MVVM)|commands]] voor de View.
- [[Model (MVVM)]]: de data (`Customer`) en domeinlogica (`CalculateTax`).
- **Lijm**: [[Data binding]] + **commands**, aangedreven door [[INotifyPropertyChanged]].

## Stappen
1. **Kopie** van de SimpleTaxCalculator maken.
2. **Model refactoren**: `Customer : ObservableObject`; setters via `SetProperty(ref amount, value)` zodat elke wijziging **gemeld** wordt (anders ziet de UI ze niet). Voor afgeleide properties (`Tax`) roep je zelf `OnPropertyChanged(nameof(Tax))` aan.
3. **View opruimen**: alle code uit de code-behind behalve de constructor.
4. **Contract** opzetten: interface `ICalculateTaxViewModel` met wat de View nodig heeft (`Customer`, `CalculateTaxCommand`). Zie [[Interface als contract]].
5. **Bindings** in de View:
```xml
<ContentPage ...
    xmlns:viewModels="clr-namespace:SimpleTaxCalculator.ViewModels"
    x:DataType="viewModels:ICalculateTaxViewModel">
  <Entry Text="{Binding Customer.Name}" />
  <Entry Text="{Binding Customer.Amount}" Keyboard="Numeric" />
  <Button Text="Calculate Tax" Command="{Binding CalculateTaxCommand}" />
  <Label Text="{Binding Customer.Tax}" />
```
`x:DataType` zorgt voor [[Compiled bindings]] (sneller, fouten bij het compileren).
6. **ViewModel implementeren** met [[CommunityToolkit.Mvvm]]:
```csharp
public class CalculateTaxViewModel : ObservableObject, ICalculateTaxViewModel
{
    private Customer customer;
    public Customer Customer { get => customer; set => SetProperty(ref customer, value); }
    public ICommand CalculateTaxCommand { get; set; }

    public CalculateTaxViewModel()
    {
        Customer = new Customer("Sophia Mortimer", 2000, "United Kingdom");
        CalculateTaxCommand = new RelayCommand(() => Customer.CalculateTax());
    }
}
```
7. **View en ViewModel samenbrengen** met [[Dependency Injection]]: ViewModel registreren in `MauiProgram.cs` en via de constructor van de View injecteren → `BindingContext = viewModel;`.

## Finishing touch (vragen uit de les)
- **"Waarom wordt de tax niet getoond?"** → `Tax` heeft geen setter, dus geen `SetProperty`; na `CalculateTax()` moet het Model `OnPropertyChanged(nameof(Tax))` aanroepen.
- **"Hoe toon je de volledige tekst?"** → met `StringFormat` in de binding (bv. `{Binding Customer.Tax, StringFormat='Tax: {0}%'}`) of een extra property.

## Begrippen
[[MVVM]] · [[Model (MVVM)]] · [[View (MVVM)]] · [[ViewModel]] · [[INotifyPropertyChanged]] · [[Data binding]] · [[Compiled bindings]] · [[Command (MVVM)]] · [[CommunityToolkit.Mvvm]] · [[Interface als contract]] · [[Dependency Injection]]

---
Hoort bij: [[AI.NET]]
