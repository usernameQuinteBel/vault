---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [1, 2]
groep: MVVM
aliases: [Model]
---
# Model (MVVM)

> De laag met de **data en business-regels**: gewone C#-klassen die niets van de UI weten.

## Wat zit erin?
- **Properties** met de data (`Name`, `Amount`, `Country`).
- **Business-logica** die bij die data hoort (`CalculateTax()`).
- Eventueel validatie.

## Les 1: een gewone klasse
```csharp
public class Customer
{
    public string Name { get; set; }
    public int Amount { get; set; }
    public string Country { get; set; }
    public int Tax { get; private set; }

    public void CalculateTax()
    {
        if (Amount > 2000) Tax = 20;
        else if (Amount > 1000) Tax = 10;
        else Tax = 5;
    }
}
```

## Les 2: observable maken
Moet de UI reageren als een property van het model verandert, dan laat je het model erven van **`ObservableObject`** en gebruik je `SetProperty`:
```csharp
public class Customer : ObservableObject
{
    private int amount;
    public int Amount
    {
        get => amount;
        set => SetProperty(ref amount, value); // meldt PropertyChanged
    }
}
```
Zie [[INotifyPropertyChanged]].

## Wat hoort er níét in?
Geen `Label`, geen `Entry`, geen navigatie, geen `HttpClient`-calls: UI hoort in de View, toestand in het ViewModel, data ophalen in een [[DataService]].

## Gerelateerd
[[MVVM]] · [[ViewModel]] · [[INotifyPropertyChanged]]

---
Hoort bij: [[MVVM met één object]]
