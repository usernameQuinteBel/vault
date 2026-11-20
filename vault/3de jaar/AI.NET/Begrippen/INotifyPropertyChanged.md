---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [2, 3]
groep: MVVM
aliases: [ObservableObject, PropertyChanged, SetProperty]
---
# INotifyPropertyChanged

> De .NET-interface die [[Data binding]] laat werken: een object **meldt** via het event `PropertyChanged` dat een property veranderd is, en de gebonden UI werkt zich **automatisch** bij.

## Zonder dit…
…zou de View nooit weten dat `Tax` een nieuwe waarde heeft, en blijft het label oude data tonen. Bindings "luisteren" naar dit event.

## Handmatig (om het te begrijpen)
```csharp
public class Customer : INotifyPropertyChanged
{
    private string name;
    public string Name
    {
        get => name;
        set { name = value; OnPropertyChanged(nameof(Name)); }
    }
    public event PropertyChangedEventHandler PropertyChanged;
    protected void OnPropertyChanged(string prop) =>
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(prop));
}
```

## Met ObservableObject (zoals in de les)
```csharp
public class Customer : ObservableObject
{
    private string name;
    public string Name { get => name; set => SetProperty(ref name, value); }
}
```
`SetProperty` doet drie dingen: controleren of de waarde echt veranderde, het veld aanpassen, en `PropertyChanged` afvuren. Nog korter met `[ObservableProperty]` uit [[CommunityToolkit.Mvvm]].

## Let op bij lijsten
`INotifyPropertyChanged` meldt wijzigingen **van properties**. Items toevoegen/verwijderen aan een lijst meld je met een [[ObservableCollection]].

## Gerelateerd
[[Data binding]] · [[Model (MVVM)]] · [[ViewModel]]

---
Hoort bij: [[MVVM met één object]]
