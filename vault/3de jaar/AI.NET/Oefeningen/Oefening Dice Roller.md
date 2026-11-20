---
type: oefening
vak: AI.NET
onderdeel: AI.NET
chapter: 1
groep: Oefeningen
---
# Oefening Dice Roller 📝

> MAUI-oefening (*Maui 2 – Exercise Dices*): een **dobbelspel met twee dobbelstenen**, volledig volgens [[MVVM]]. Oefent modellen, bindings en commands uit [[Introductie .NET MAUI]] en [[MVVM met één object]].

## Opbouw
| Laag | Klasse | Inhoud |
|---|---|---|
| Model | **`Dice`** | `Pips` (1–6), `Image` (bv. `dice_4.png`), `Roll()` |
| Model | **`Cup`** | `Dice1`, `Dice2`, `Total`, `Color`, `Roll()` (gooit beide dobbelstenen) |
| View | **`GamePage`** | knop **Roll** + twee `Image`s (150×150) in een `HorizontalStackLayout`, achtergrondkleur |
| Contract | **`IGameViewModel`** | `Cup`, `RollCommand` |
| ViewModel | **`GameViewModel`** | maakt de `Cup`, koppelt het command |

## Kleurregel voor de achtergrond
| Totaal | Kleur |
|---|---|
| ≥ 10 | **groen** |
| ≥ 6 | **oranje** |
| anders | **rood** |

## Stappen
1. Models `Dice` en `Cup` laten erven van `ObservableObject`; `Pips`, `Image`, `Total`, `Color` via `SetProperty` (of `OnPropertyChanged` voor afgeleide waarden).
2. `Dice.Roll()`: `Pips = random.Next(1, 7)` en `Image = $"dice_{Pips}.png"`.
3. `Cup.Roll()`: beide dobbelstenen gooien, `Total` berekenen en `Color` bepalen.
4. View: `BackgroundColor="{Binding Cup.Color}"`, `Image Source="{Binding Cup.Dice1.Image}"`, `Button Command="{Binding RollCommand}"`.
5. ViewModel via [[Dependency Injection]] in de View injecteren.

## Valkuilen
- `new Random()` in elke `Dice` kort na elkaar → dezelfde reeks; gebruik **één gedeelde** `Random` of `Random.Shared`.
- Afbeeldingen in `Resources/Images` met **kleine letters** (Android-vereiste).
- `Total` en `Color` veranderen niet in de UI → vergeten te melden met `OnPropertyChanged`.

## Debugtip
In `App.xaml.cs` een handler op `AppDomain.CurrentDomain.FirstChanceException` / `UnhandledException` zetten om fouten in de Debug-output te zien.

## Begrippen
[[Model (MVVM)]] · [[ViewModel]] · [[Data binding]] · [[Command (MVVM)]] · [[INotifyPropertyChanged]]

---
Hoort bij: [[Introductie .NET MAUI]]
