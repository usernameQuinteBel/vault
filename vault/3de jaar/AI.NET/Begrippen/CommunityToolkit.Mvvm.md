---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [2, 3, 4, 5]
groep: MVVM
aliases: [MVVM Toolkit]
---
# CommunityToolkit.Mvvm

> Een NuGet-pakket van Microsoft dat [[MVVM]] veel **korter** maakt door code te **genereren** (source generators).

## Wat zit erin?
| Onderdeel | Wat het doet |
|---|---|
| `ObservableObject` | basisklasse die [[INotifyPropertyChanged]] implementeert + `SetProperty` |
| `[ObservableProperty]` | genereert van een privéveld een publieke property met change-notificatie |
| `[RelayCommand]` | genereert van een methode een [[Command (MVVM)|command]] |
| `WeakReferenceMessenger` | berichten tussen ViewModels (zie [[MessengerService]]) |

## Voor en na
Zonder toolkit:
```csharp
private string name;
public string Name { get => name; set => SetProperty(ref name, value); }
public ICommand GreetCommand { get; }
public MyViewModel() { GreetCommand = new RelayCommand(Greet); }
private void Greet() { }
```
Met toolkit:
```csharp
public partial class MyViewModel : ObservableObject
{
    [ObservableProperty] private string name;   // → Name
    [RelayCommand] private void Greet() { }      // → GreetCommand
}
```
De klasse moet **`partial`** zijn, omdat de toolkit het andere deel bijschrijft.

## Installatie
`dotnet add package CommunityToolkit.Mvvm` en de `using`s `CommunityToolkit.Mvvm.ComponentModel` en `CommunityToolkit.Mvvm.Input`.

## Gerelateerd
[[MVVM]] · [[ViewModel]] · [[Command (MVVM)]]

## Meer leren
- [MVVM Toolkit](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/mvvm/)

---
Hoort bij: [[MVVM met één object]]
