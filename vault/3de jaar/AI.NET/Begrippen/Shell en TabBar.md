---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [1, 5]
groep: MAUI-basis
aliases: [Shell, AppShell, TabBar]
---
# Shell en TabBar

> **Shell** is de navigatiestructuur van een MAUI-app, gedefinieerd in `AppShell.xaml`. Met een **TabBar** toon je onderaan tabbladen die elk naar een pagina leiden.

## Wat doet Shell?
- Legt vast **welke pagina eerst** getoond wordt.
- Biedt **tabs** en/of een **flyout-menu**.
- Ondersteunt **route-gebaseerde navigatie** (`Shell.Current.GoToAsync("details")`).

## TabBar (FriendSportConnect, les 5)
```xml
<TabBar>
    <ShellContent Title="Friends" ContentTemplate="{DataTemplate views:ListPage}" />
    <ShellContent Title="About"   ContentTemplate="{DataTemplate views:AboutPage}" />
</TabBar>
```
Gebruik `ContentTemplate` met `DataTemplate`: de pagina wordt pas aangemaakt wanneer je het tabblad opent, en kan dan via [[Dependency Injection]] haar ViewModel krijgen.

## Shell-navigatie vs. Navigation-object
| [[Navigation object]] (`PushAsync`) | Shell (`GoToAsync`) |
|---|---|
| stack van pagina's (push/pop) | routes (zoals URL's) |
| je maakt de pagina zelf aan | Shell maakt ze aan |
In de les gebruik je de navigatiestack, verpakt in een [[NavigationService]].

## Gerelateerd
[[MAUI projectstructuur]] · [[NavigationService]] · [[MVVM Navigation en Messages]]

## Meer leren
- [.NET MAUI Shell](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/shell/)

---
Hoort bij: [[MVVM Navigation en Messages]]
