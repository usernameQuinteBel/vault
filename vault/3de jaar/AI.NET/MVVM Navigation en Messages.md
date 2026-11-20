---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 5
groep: Deel A: .NET MAUI
---
# MVVM Navigation en Messages

> FriendSportConnect uitbreiden met **meerdere pagina's**: een **TabBar**, navigeren van lijst naar detail en terug, en **gegevens doorgeven tussen ViewModels** — telkens **zonder** dat ViewModels Views of elkaar kennen.

## 1. TabBar
Pagina's en ViewModels registreren:
```csharp
builder.Services.AddTransient<ListPage>();    builder.Services.AddTransient<IListViewModel, ListViewModel>();
builder.Services.AddTransient<DetailsPage>(); builder.Services.AddTransient<IDetailsViewModel, DetailsViewModel>();
builder.Services.AddTransient<AboutPage>();   builder.Services.AddTransient<IAboutViewModel, AboutViewModel>();
```
In `AppShell.xaml` een `<TabBar>` met twee `ShellContent`-tabs (**Friends** → `ListPage`, **About** → `AboutPage`), elk met `ContentTemplate="{DataTemplate views:…}"` en een icoon per platform (`OnPlatform`). Zie [[Shell en TabBar]].

## 2. Navigeren: waar en hoe?
| Waar | Actie |
|---|---|
| `ListViewModel` → `AddFriendCommand`, `UpdateFriendCommand` | naar **DetailsPage** |
| `DetailsViewModel` → `SaveCommand`, `CancelCommand`, `DeleteCommand` | **terug** naar de lijst |

Het MAUI **[[Navigation object]]** beheert een **stack**: `PushAsync(page)` legt een pagina bovenop, `PopAsync()` haalt ze eraf.

### Waarom is `Navigation.PushAsync(new DetailsPage())` in een ViewModel niet ok?
- Het ViewModel **kent dan de View** (`new DetailsPage()`) → tight coupling, precies wat MVVM wil vermijden.
- Het ViewModel is niet meer **testbaar** zonder UI.
- `new` omzeilt DI: de DetailsPage krijgt haar ViewModel niet geïnjecteerd.

### Oplossing: een NavigationService
```csharp
public interface INavigationService
{
    Task NavigateToDetailsPageAsync();
    Task NavigateBackAsync();
}

public class NavigationService : INavigationService
{
    private readonly INavigation _navigation;
    private readonly IServiceProvider _serviceProvider;
    public NavigationService(IServiceProvider sp) { _serviceProvider = sp; _navigation = Shell.Current?.Navigation; }

    public Task NavigateToDetailsPageAsync() =>
        _navigation.PushAsync(_serviceProvider.GetRequiredService<DetailsPage>());   // via DI, niet new

    public async Task NavigateBackAsync()
    {
        if (_navigation.NavigationStack.Count > 1) await _navigation.PopAsync();
        else throw new InvalidOperationException("No pages to navigate back to!");
    }
}
```
ViewModels krijgen `INavigationService` via de constructor en roepen enkel `NavigateToDetailsPageAsync()` / `NavigateBackAsync()` aan → **navigeren zonder Views te kennen**. Zie [[NavigationService]].

## 3. Wat ontbreekt nog? Data tussen ViewModels
- Lijst → detail: de **geselecteerde vriend** meegeven.
- Detail → lijst: na opslaan/verwijderen de lijst **verversen**.
…zonder dat `ListViewModel` en `DetailsViewModel` naar elkaar verwijzen. Oplossing: een **[[MessengerService]]** (publish/subscribe).

| Waarom een messenger? | |
|---|---|
| Separation of concerns | geen ViewModel houdt een referentie naar een ander |
| Testbaarheid | elk ViewModel apart testbaar |
| Gecentraliseerd | berichtafhandeling op één plek |

## 4. Berichten maken, registreren, versturen
**Berichten** (klassen):
```csharp
public class FriendSelectedMessage(Friend friend) : ValueChangedMessage<Friend>(friend) { }
public class RefreshFriendsMessage() : RequestMessage<Friend> { }
```
**Registreren** — ViewModels erven van **`ObservableRecipient`** (een `ObservableObject` dat ook berichten kan ontvangen):
```csharp
// DetailsViewModel
Messenger.Register<DetailsViewModel, FriendSelectedMessage>(this, (r, m) => r.Receive(m));
public void Receive(FriendSelectedMessage m) { Friend = m.Value; SaveText = "Update"; }

// ListViewModel
Messenger.Register<ListViewModel, RefreshFriendsMessage>(this, (r, m) => r.Receive(m));
public void Receive(RefreshFriendsMessage m) => LoadFriends();
```
**Versturen**:
```csharp
WeakReferenceMessenger.Default.Send(new FriendSelectedMessage(SelectedFriend));  // vóór navigeren
WeakReferenceMessenger.Default.Send(new RefreshFriendsMessage());               // na opslaan
```
`WeakReferenceMessenger` houdt **zwakke referenties** bij → geen geheugenlekken als een ViewModel verdwijnt.

## Volledige flow
```
Lijst: tik "Update" → Send(FriendSelected) → NavigateToDetails
Detail: Receive → velden ingevuld, knop "Update"
Detail: Save → API Update → Send(RefreshFriends) → NavigateBack
Lijst: Receive → LoadFriends()
```

## Oefening
- **Niet opslaan** als **Name, Phone of Sport** ontbreekt.
- **Foutmeldingen tonen** (bv. een `Label` gebonden aan een `ErrorMessage`-property, of `DisplayAlert`).

## Begrippen
[[Shell en TabBar]] · [[Navigation object]] · [[NavigationService]] · [[MessengerService]] · [[Dependency Injection]] · [[CommunityToolkit.Mvvm]]

---
Hoort bij: [[AI.NET]]
