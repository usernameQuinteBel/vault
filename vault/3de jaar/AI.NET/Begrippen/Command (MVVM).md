---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [2, 3, 4, 5]
groep: MVVM
aliases: [RelayCommand, Command, ICommand]
---
# Command (MVVM)

> Een object dat een **actie** voorstelt. Een knop bindt aan een command in plaats van een `Clicked`-event in de code-behind, zodat de logica in het [[ViewModel]] blijft.

## Waarom geen Clicked-event?
Een event-handler staat in de code-behind van de View, dus de logica zit opnieuw aan de UI vast — precies wat [[MVVM]] wil vermijden. Een command kan je bovendien **testen** zonder UI.

## Met CommunityToolkit.Mvvm
```csharp
[RelayCommand]
private async Task SaveAsync()
{
    await dataService.UpdateAsync(SelectedFriend);
    await navigationService.NavigateBackAsync();
}
```
De toolkit genereert automatisch een property **`SaveCommand`** (naam + "Command", "Async" valt weg).

```xml
<Button Text="Opslaan" Command="{Binding SaveCommand}" />
```

## Met een parameter
```csharp
[RelayCommand]
private void Delete(Friend friend) => Friends.Remove(friend);
```
```xml
<Button Command="{Binding DeleteCommand}" CommandParameter="{Binding .}" />
```

## Knop in/uitschakelen
Met `CanExecute`: `[RelayCommand(CanExecute = nameof(CanSave))]` → de knop wordt automatisch grijs als `CanSave()` false geeft.

## Gerelateerd
[[ViewModel]] · [[CommunityToolkit.Mvvm]] · [[Data binding]]

---
Hoort bij: [[MVVM met één object]]
