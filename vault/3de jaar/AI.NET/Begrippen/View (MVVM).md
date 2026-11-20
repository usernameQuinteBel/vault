---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 2
groep: MVVM
aliases: [View]
---
# View (MVVM)

> De **UI-laag** in [[XAML]]: wat de gebruiker ziet en waarmee hij interageert. Bevat **geen logica**, enkel layout en [[Data binding|bindings]] naar het [[ViewModel]].

## Wat doet de View?
- Elementen **tonen** (labels, lijsten, afbeeldingen).
- Invoer **doorgeven** aan het ViewModel via two-way bindings.
- Knoppen koppelen aan **[[Command (MVVM)|commands]]**.

## Het "contract": x:DataType
```xml
<ContentPage ...
    xmlns:viewModels="clr-namespace:SimpleTaxCalculator.ViewModels"
    x:DataType="viewModels:ICalculateTaxViewModel">
    <Entry Text="{Binding Amount}" />
    <Button Command="{Binding CalculateTaxCommand}" />
</ContentPage>
```
`x:DataType` vertelt de compiler aan welk type de pagina bindt (hier een **interface**). Dat maakt de bindings **gecontroleerd en sneller** ([[Compiled bindings]]).

## De code-behind blijft (bijna) leeg
```csharp
public CalculateTaxPage(ICalculateTaxViewModel vm)
{
    InitializeComponent();
    BindingContext = vm; // het ViewModel wordt geïnjecteerd
}
```
Het enige wat er staat: het ViewModel als **`BindingContext`** instellen (meestal via [[Dependency Injection]]).

## Gerelateerd
[[MVVM]] · [[XAML]] · [[ViewModel]] · [[Data binding]]

---
Hoort bij: [[MVVM met één object]]
