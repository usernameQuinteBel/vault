---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 1
groep: MAUI-basis
---
# XAML

> **eXtensible Application Markup Language**: een XML-taal om de **UI declaratief** te beschrijven. Elk XAML-element is een C#-object, elk attribuut een property.

## Hoe ziet het eruit?
```xml
<ContentPage xmlns="http://schemas.microsoft.com/dotnet/2021/maui"
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="SimpleTaxCalculator.Views.CalculateTaxPage"
             Title="Calculate Tax">
    <ScrollView>
        <StackLayout Padding="30">
            <Label Text="Name" FontSize="Medium" />
            <Entry Placeholder="Enter your name" />
            <Button Text="Calculate Tax" Margin="0,20,0,0" />
        </StackLayout>
    </ScrollView>
</ContentPage>
```
`x:Class` koppelt de XAML aan zijn code-behind-klasse.

## Veelgebruikte elementen
| Soort | Elementen | Waarvoor |
|---|---|---|
| Pagina | `ContentPage` | één scherm |
| Layout | `StackLayout`/`VerticalStackLayout`, `Grid`, `ScrollView` | schikken, raster, scrollen |
| Tekst | `Label` | tekst tonen |
| Invoer | `Entry`, `Editor`, `Picker` | tekst/keuze invoeren |
| Actie | `Button`, `ImageButton` | knoppen |
| Lijsten | `CollectionView` | een lijst items tonen (met `ItemTemplate`) |
| Media | `Image` | afbeeldingen |

## Twee manieren om UI en code te koppelen
| Code-behind (les 1) | MVVM (vanaf les 2) |
|---|---|
| `x:Name="NameEntry"` en in C# `NameEntry.Text` lezen | `Text="{Binding Name}"` |
| knop met `Clicked="OnClick"` | knop met `Command="{Binding SaveCommand}"` |
| UI en logica zitten aan elkaar vast | UI en logica zijn gescheiden |

Zie [[Data binding]] en [[Command (MVVM)]]. Met `x:DataType` maak je bindings **compiled** (sneller en gecontroleerd tijdens het bouwen): zie [[Compiled bindings]].

## Gerelateerd
[[.NET MAUI]] · [[View (MVVM)]] · [[Data binding]]

## Meer leren
- [XAML in .NET MAUI](https://learn.microsoft.com/en-us/dotnet/maui/xaml/)

---
Hoort bij: [[Introductie .NET MAUI]]
