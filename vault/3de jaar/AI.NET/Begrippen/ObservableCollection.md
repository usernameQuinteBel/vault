---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 3
groep: MVVM
---
# ObservableCollection

> Een lijsttype (`ObservableCollection<T>`) dat de UI **automatisch verwittigt** wanneer er items **toegevoegd, verwijderd of vervangen** worden.

## Waarom geen gewone List?
Een `List<T>` meldt niets. Voeg je een student toe, dan blijft de `CollectionView` de oude lijst tonen. `ObservableCollection` vuurt het event `CollectionChanged` af, waarop de UI reageert.

## Gebruik (EduTrack, les 3)
```csharp
public ObservableCollection<Student> Students { get; } = new();

[RelayCommand]
private void AddStudent()
{
    Students.Add(new Student($"Student {count}", "r00" + random.Next(10000, 100000), "2 APP"));
}
```
```xml
<CollectionView ItemsSource="{Binding Students}" />
```

## Twee soorten wijzigingen
| Wijziging | Wie meldt het? |
|---|---|
| item **toevoegen/verwijderen** | `ObservableCollection` |
| **property van een item** (naam aanpassen) | het item zelf via [[INotifyPropertyChanged]] (`ObservableObject`) |
Je hebt dus vaak beide nodig.

## Tip
Vervang je de hele lijst (`Students = new(...)`), dan moet de **property** zelf ook observable zijn. Of beter: `Students.Clear()` en daarna items toevoegen.

## Gerelateerd
[[MVVM met collections]] · [[Data binding]] · [[INotifyPropertyChanged]]

---
Hoort bij: [[MVVM met collections]]
