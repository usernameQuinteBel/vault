---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [2, 3, 4]
groep: MVVM
aliases: [Binding, Bindings]
---
# Data binding

> Het mechanisme dat een **property van het ViewModel** koppelt aan een **eigenschap van een control**, zodat beide automatisch synchroon blijven. Het hart van [[MVVM]].

## Syntax
```xml
<Entry  Text="{Binding Amount}" />
<Label  Text="{Binding Tax}" />
<Button Command="{Binding CalculateTaxCommand}" />
<CollectionView ItemsSource="{Binding Students}" />
```
De **bron** is de `BindingContext` van de pagina (het ViewModel).

## Binding modes
| Mode | Richting | Typisch voor |
|---|---|---|
| `OneWay` | ViewModel → UI | `Label` dat een waarde toont |
| `TwoWay` | ViewModel ⇄ UI | `Entry`, `Switch` (standaard voor invoer) |
| `OneTime` | één keer bij laden | statische tekst |
| `OneWayToSource` | UI → ViewModel | zelden |

## Wat is er nodig?
1. Een `BindingContext` (het ViewModel), meestal geïnjecteerd.
2. Properties die [[INotifyPropertyChanged|wijzigingen melden]].
3. Voor lijsten een [[ObservableCollection]].
4. Bij voorkeur `x:DataType` voor [[Compiled bindings]].

## Veelgemaakte fouten
- Een binding naar een **veld** i.p.v. een property → werkt niet.
- Property meldt geen wijziging → UI blijft oude data tonen.
- Typfout in de propertynaam → zonder compiled bindings enkel een stille fout in de Output.

## Gerelateerd
[[MVVM]] · [[Command (MVVM)]] · [[Compiled bindings]]

## Meer leren
- [Data binding in .NET MAUI](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/data-binding/)

---
Hoort bij: [[MVVM met één object]]
