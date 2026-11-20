---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 1
groep: Deel A: .NET MAUI
---
# Introductie .NET MAUI

> Eerste kennismaking met [[.NET MAUI]]: wat het is, de **projectstructuur**, een scherm in **[[XAML]]** en een eerste **[[Model (MVVM)|model]]**, aan de hand van de app **SimpleTaxCalculator**.

## Situering: het vak AI.NET
*Building Intelligent Applications* — twee blokken van ±6 weken:
| Blok | Wat bouw je? | Technologie | Evaluatie |
|---|---|---|---|
| A | een **cross-platform app met AI** (beeldherkenning, objectdetectie, OCR, document intelligence…) | .NET MAUI + [[Azure AI Services]] | [[Challenge 1 - AI-app]] (50 %) |
| B | een **chatbot met AI-agent** | [[Microsoft Agent Framework]] + [[OpenAI API]] | [[Challenge 2 - Chatbot]] (50 %) |
Dit hoofdstuk legt de basis voor blok A.

## Wat is .NET MAUI?
Een **cross-platform framework** om **native** mobiele en desktop-apps te bouwen met **C# en XAML**, voor **Android, iOS, macOS en Windows** uit **één gedeelde codebase**. Installatie via de **.NET MAUI-workload** in Visual Studio (of VS Code + MAUI-extensie).

## De projectstructuur
| Bestand | Rol |
|---|---|
| `MauiProgram.cs` | **startpunt**: configureert en start de app (hier registreer je later services en ViewModels → [[Dependency Injection]]) |
| `App.xaml` | app-brede **resources**: kleuren, stijlen, templates |
| `App.xaml.cs` | maakt de **Shell**-applicatie aan (verwijst naar `AppShell`) |
| `AppShell.xaml` | de **visuele hiërarchie**/navigatie; bepaalt de startpagina ([[Shell en TabBar]]) |
| `MainPage.xaml` | de UI van een pagina |
| `MainPage.xaml.cs` | de **code-behind** van die pagina |
| `Platforms/` | platformspecifieke code (bv. Android-permissies) |
| `Resources/` | afbeeldingen, fonts, iconen |
Meer: [[MAUI projectstructuur]].

## SimpleTaxCalculator stap voor stap
1. **`MainPage` verwijderen** en in `AppShell.xaml` naar de nieuwe pagina verwijzen.
2. **`Views/CalculateTaxPage.xaml`** maken: een `ScrollView` met een `StackLayout` (padding 30), daarin per veld een `Label` + `Entry` (naam, bedrag, land), een **Button** "Calculate Tax" en een `Label` voor de tax.
3. **`Models/Customer.cs`**: velden + properties `Name`, `Amount`, `Country`, een **read-only** `Tax`, een constructor, en `CalculateTax()`:

| Bedrag | Tax |
|---|---|
| > 2000 | 20 % |
| > 1000 | 10 % |
| anders | 5 % |

4. In de code-behind een klant maken (bv. "Sophia Mortimer", 2000, "United Kingdom"), de data **in beide richtingen** tonen (model → velden, velden → model) en bij een klik de tax berekenen en in het label zetten.

## Wat is hier het probleem?
Alles zit in de **code-behind**: je kopieert telkens waarden heen en weer (`NameEntry.Text = customer.Name`, `customer.Amount = int.Parse(AmountEntry.Text)`…) en de UI is **strak gekoppeld** aan de logica. Dat is precies wat [[MVVM]] in het volgende hoofdstuk oplost → [[MVVM met één object]].

## Belangrijke XAML-elementen
`ContentPage` (een pagina) · `ScrollView` · `StackLayout`/`VerticalStackLayout`/`HorizontalStackLayout`/`Grid` (layouts) · `Label` · `Entry` (tekstinvoer) · `Button` · `Image`. `x:Name` geeft een control een naam voor de code-behind. Zie [[XAML]].

## Oefening
[[Oefening Dice Roller]].

## Begrippen
[[.NET MAUI]] · [[MAUI projectstructuur]] · [[XAML]] · [[Model (MVVM)]] · [[Shell en TabBar]]

---
Hoort bij: [[AI.NET]]
