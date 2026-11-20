---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [2, 3, 4, 5]
groep: MVVM
aliases: [Model-View-ViewModel]
---
# MVVM

> **Model-View-ViewModel**: een ontwerppatroon dat de **UI** (View) scheidt van de **logica** (ViewModel) en de **data** (Model). De View praat enkel via [[Data binding]] en [[Command (MVVM)|commands]] met het ViewModel.

## Het probleem dat MVVM oplost
In les 1 (SimpleTaxCalculator) zit alles in de **code-behind**: je leest `NameEntry.Text`, rekent, en zet het resultaat in `TaxLabel.Text`. Twee nadelen uit de slides:
1. Je moet **voortdurend waarden kopiëren** tussen UI en code.
2. De UI-controls (XAML) en de business-logica zijn **tight coupled** → moeilijk te onderhouden en te testen.

## De drie lagen
| Laag | Verantwoordelijkheid | Kent… | Voorbeeld |
|---|---|---|---|
| **[[Model (MVVM)|Model]]** | data + business-regels | niets van de UI | `Customer` met `CalculateTax()` |
| **[[View (MVVM)|View]]** | tonen en invoer ontvangen | enkel het ViewModel (via bindings) | `CalculateTaxPage.xaml` |
| **[[ViewModel]]** | toestand en acties voor de View | het Model, **niet** de View | `CalculateTaxViewModel` |

## Hoe de communicatie loopt
```
View  ──binding──▶  ViewModel  ──gebruikt──▶  Model / Services
View  ◀─PropertyChanged─  ViewModel
```
1. De View bindt aan een property (`{Binding Amount}`).
2. De gebruiker typt → de waarde komt via **two-way binding** in het ViewModel.
3. De gebruiker drukt op een knop → het gebonden **Command** voert logica uit.
4. Het ViewModel wijzigt een property → [[INotifyPropertyChanged]] meldt dat → de View werkt **automatisch** bij.

## De vier voordelen (slides)
- **Separation of Concerns** — elke laag één taak.
- **Testability** — het ViewModel test je zonder UI.
- **Maintainability** — UI aanpassen zonder logica te breken.
- **Reusability** — hetzelfde ViewModel achter verschillende Views.

## Het patroon in de lessen
| Les | App | Wat komt erbij? |
|---|---|---|
| 2 | SimpleTaxCalculator | één object, bindings, commands |
| 3 | EduTrack | lijsten ([[ObservableCollection]]), [[Dependency Injection]] |
| 4 | FriendSportConnect | [[DataService]] met een API |
| 5 | FriendSportConnect | [[NavigationService]] en [[MessengerService]] |

## Gerelateerd
[[Model (MVVM)]] · [[View (MVVM)]] · [[ViewModel]] · [[Data binding]] · [[CommunityToolkit.Mvvm]]

## Meer leren
- [Model-View-ViewModel (Microsoft)](https://learn.microsoft.com/en-us/dotnet/architecture/maui/mvvm)

---
Hoort bij: [[MVVM met één object]]
