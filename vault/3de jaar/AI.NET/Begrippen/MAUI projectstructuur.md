---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 1
groep: MAUI-basis
---
# MAUI projectstructuur

> De vaste bestanden en mappen waarmee een .NET MAUI-app opstart en opgebouwd is. Wie ze kent, weet meteen waar hij iets moet zoeken of toevoegen.

## De kernbestanden
| Bestand | Rol | Wanneer pas je het aan? |
|---|---|---|
| `MauiProgram.cs` | **bootstrap** en cross-platform **entry point**: bouwt de app op met `MauiApp.CreateBuilder()` | om [[Dependency Injection|services, ViewModels en pagina's te registreren]], fonts toe te voegen |
| `App.xaml` | app-brede **resources**: kleuren, styles, templates | voor een thema of gedeelde stijlen |
| `App.xaml.cs` | maakt het hoofdvenster aan en wijst naar `AppShell` | zelden; soms voor globale foutafhandeling (zie [[Oefening Dice Roller]]) |
| `AppShell.xaml` | de **visuele hiërarchie** en navigatie: welke pagina eerst, tabbladen | om pagina's/tabs toe te voegen (zie [[Shell en TabBar]]) |
| `MainPage.xaml` | de **UI** van een pagina | in MVVM verwijder je ze meestal en maak je `Views/...Page.xaml` |
| `MainPage.xaml.cs` | de **code-behind** van die pagina | in MVVM blijft die bijna leeg |

## De mappen die je zelf toevoegt (MVVM)
```
Models/       → data-klassen (Customer, Student, Friend)
Views/        → XAML-pagina's
ViewModels/   → logica + commands per pagina
Services/     → API-calls, navigatie, AI-diensten
```

## Platform- en resourcemappen
- `Platforms/Android`, `Platforms/iOS`, … — platformspecifiek (bv. permissies in `AndroidManifest.xml`).
- `Resources/Images`, `Resources/Fonts`, `Resources/Styles` — gedeelde assets.

## Gerelateerd
[[.NET MAUI]] · [[MVVM]] · [[Dependency Injection]] · [[Shell en TabBar]]

## Meer leren
- [.NET MAUI app startup](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/app-startup)

---
Hoort bij: [[Introductie .NET MAUI]]
