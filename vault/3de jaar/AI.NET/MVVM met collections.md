---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 3
groep: Deel A: .NET MAUI
---
# MVVM met collections

> App **EduTrack**: van één object naar een **lijst** objecten (studenten), met toevoegen, selecteren en verwijderen. Introduceert **[[ObservableCollection]]**, de **[[CollectionView (MAUI)|CollectionView]]** en [[Dependency Injection]] als vaste werkwijze.

## Van één object naar een collectie
| | Eén object | Collectie |
|---|---|---|
| Property in ViewModel | `Customer Customer` | `ObservableCollection<Student> Students` |
| Control in View | `Entry`, `Label` | `CollectionView` met een `DataTemplate` |
| Wijziging melden | `SetProperty` | de collectie meldt zelf **toevoegen/verwijderen** |
| Selectie | — | `SelectedStudent` (two-way binding) |

## Stappen
1. **`MainPage` weg**, mappen `Models`, `Views`, `ViewModels` toevoegen.
2. **Model `Student`**: `Name`, `Number` (r-nummer), `Group` + constructor (later `ObservableObject` als velden in de UI moeten wijzigen).
3. **View `ListPage`**: een `Grid` met twee rijen:
   - rij 1: een `CollectionView` (`SelectionMode="Single"`, verticale `LinearItemsLayout` met `ItemSpacing`), met een `ItemTemplate` die per student de **naam** groot toont en **nummer – groep** klein in grijs;
   - rij 2: knoppen **Add** en **Delete**.
   De View in `AppShell` aanroepen.
4. **Contract** `IListViewModel`: `Students`, `SelectedStudent`, `AddStudentCommand`, `DeleteStudentCommand`.
5. **ViewModel `ListViewModel`**:
   - `LoadStudents()` vult de collectie met ±10 studenten;
   - `BindCommands()` koppelt de commands:
```csharp
AddStudentCommand = new RelayCommand(() =>
    Students.Add(new Student($"Student {++count}", "r00" + random.Next(10000, 100000), "2 APP " + random.Next(1, 3))));
DeleteStudentCommand = new RelayCommand(() => {
    if (SelectedStudent != null) Students.Remove(SelectedStudent);
});
```
6. **Bindings** (separation of concerns):
```xml
<CollectionView ItemsSource="{Binding Students}"
                SelectedItem="{Binding SelectedStudent}" SelectionMode="Single">
  <CollectionView.ItemTemplate>
    <DataTemplate x:DataType="models:Student">
      <Label Text="{Binding Name}" FontSize="18" />
    </DataTemplate>
  </CollectionView.ItemTemplate>
</CollectionView>
```
7. **Dependency Injection**: in `MauiProgram.cs`
```csharp
builder.Services.AddTransient<ListPage>();
builder.Services.AddTransient<IListViewModel, ListViewModel>();
```
   en in de View: `public ListPage(IListViewModel vm) { InitializeComponent(); BindingContext = vm; }`.

## Waarom ObservableCollection en geen List?
Een gewone `List<T>` meldt **niet** dat er iets bijkomt of verdwijnt → de `CollectionView` blijft de oude lijst tonen. `ObservableCollection<T>` vuurt `CollectionChanged`, waardoor de UI meteen bijwerkt.

## Typische fouten
| Symptoom | Oorzaak |
|---|---|
| lijst blijft leeg | `ItemsSource` niet gebonden, of `BindingContext` niet gezet |
| nieuwe student verschijnt niet | `List<T>` i.p.v. `ObservableCollection<T>` |
| Delete doet niets | `SelectedItem` niet two-way gebonden of `SelectedStudent` is null |
| bindingfout in `DataTemplate` | `x:DataType` van de template moet het **item**-type zijn (`Student`), niet het ViewModel |

## Oefening
Breid EduTrack uit (bv. student bewerken, groep kiezen) volgens dezelfde structuur.

## Begrippen
[[ObservableCollection]] · [[CollectionView (MAUI)]] · [[Command (MVVM)]] · [[Data binding]] · [[Dependency Injection]] · [[MVVM]]

---
Hoort bij: [[AI.NET]]
