---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [1, 2]
groep: Flutter
---
# Flutter

> **Google's UI-toolkit** om met **één codebase** in [[Dart]] apps te bouwen voor **Android, iOS, web en desktop**, die **native gecompileerd** worden.

## Wat is het?
Flutter tekent zijn UI **zelf** met een eigen rendering-engine (Skia/Impeller), in plaats van de native controls van het platform te gebruiken. Daardoor ziet je app er op elk toestel **identiek** uit en heb je pixel-controle. Je beschrijft de UI **declaratief** als een boom van [[Widget]]s.

## Kernideeën
- **Alles is een widget** — layout, tekst, padding, zelfs de app zelf.
- **Declaratief**: je beschrijft hoe de UI eruitziet voor een bepaalde [[State (Flutter)|state]]; verandert de state, dan bouwt Flutter de UI opnieuw op.
- **Hot reload**: wijzigingen verschijnen binnen een seconde zonder de app te herstarten (zie [[Hot reload en hot restart]]).
- **Packages** via `pub.dev` en [[pubspec.yaml]].

## Flutter vs. .NET MAUI (vergelijking met AI.NET)
| | Flutter | .NET MAUI |
|---|---|---|
| Taal | Dart | C# + XAML |
| UI | eigen rendering (overal gelijk) | native controls per platform |
| Ontwikkelaar | Google | Microsoft |
| State | `setState`, Provider, Riverpod… | MVVM met bindings |

## In dit vak
- Cross-platform apps volgens de **Flutter design principles** ([[Material Design (Flutter)|Material 3]]).
- Backend met **[[Firebase]]** (auth + [[Cloud Firestore]]).
- Een **[[Unity]]/[[Vuforia]]** AR-scène inbedden ([[Flutter-Unity-Vuforia integratie]]).
- Getest met **Flutter 3.44.0** — andere versies kunnen de AR-integratie breken.

## Gerelateerd
[[Dart]] · [[Widget]] · [[Flutter aan de slag]] · [[pubspec.yaml]]

## Meer leren
- [flutter.dev — documentation](https://docs.flutter.dev/)

---
Hoort bij: [[Flutter aan de slag]]
