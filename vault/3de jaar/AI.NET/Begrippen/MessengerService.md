---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 5
groep: MVVM
aliases: [Messenger, WeakReferenceMessenger]
---
# MessengerService

> Een **berichtendienst** waarmee [[ViewModel]]s met elkaar **communiceren zonder elkaar te kennen**. Het ene ViewModel **stuurt** een bericht; het andere heeft zich **geregistreerd** en reageert.

## Waarom nodig? (de slides)
- **Separation of Concerns**: een ViewModel houdt geen referentie naar een ander.
- **Testability**: ViewModels blijven afzonderlijk testbaar.
- **Centralisatie**: alle berichtafhandeling via één mechanisme.

## Het scenario in FriendSportConnect
| Richting | Wat moet er mee? |
|---|---|
| `ListViewModel` → `DetailsViewModel` | de **geselecteerde vriend** |
| `DetailsViewModel` → `ListViewModel` | "er is iets gewijzigd" → lijst **verversen** |

## Met WeakReferenceMessenger (CommunityToolkit)
```csharp
// bericht
public class SelectedFriendMessage(Friend value) : ValueChangedMessage<Friend>(value);

// zender (ListViewModel)
WeakReferenceMessenger.Default.Send(new SelectedFriendMessage(SelectedFriend));

// ontvanger (DetailsViewModel)
WeakReferenceMessenger.Default.Register<SelectedFriendMessage>(this, (r, m) =>
{
    Friend = m.Value;
});
```
"Weak" betekent dat de messenger de ontvanger niet in leven houdt → geen geheugenlek.

## Gerelateerd
[[NavigationService]] · [[CommunityToolkit.Mvvm]] · [[MVVM Navigation en Messages]]

## Meer leren
- [Messenger (MVVM Toolkit)](https://learn.microsoft.com/en-us/dotnet/communitytoolkit/mvvm/messenger)

---
Hoort bij: [[MVVM Navigation en Messages]]
