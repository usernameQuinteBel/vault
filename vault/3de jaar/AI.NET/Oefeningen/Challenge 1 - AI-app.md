---
type: oefening
vak: AI.NET
onderdeel: AI.NET
chapter: [6, 7, 8, 9]
groep: Oefeningen
---
# Challenge 1 - AI-app 📝

> Eerste evaluatie-challenge (**50 %** van het vak), **per twee of alleen**: een **cross-platform [[.NET MAUI]]-app met AI-functionaliteit** via [[Azure AI Services]].

## Opdracht
Bouw een app die een echt probleem oplost met AI uit deel A: [[Image classification|beeldherkenning]], [[Object detection|objectdetectie]], [[OCR]], [[Document Intelligence]], vertaling of spraak…

## Wat moet erin? (verwachtingen uit de les)
| Onderdeel | Hoe | Zie |
|---|---|---|
| MAUI-app | meerdere pagina's, verzorgde UI | [[Introductie .NET MAUI]] |
| **MVVM** | Models, Views, ViewModels met contracten | [[MVVM met één object]] |
| Lijsten | `ObservableCollection` + `CollectionView` | [[MVVM met collections]] |
| Data | een **DataService** (eigen of mock-API) met CRUD | [[MVVM met DataServices]] |
| Navigatie | NavigationService + Messenger, geen tight coupling | [[MVVM Navigation en Messages]] |
| **DI** | alles geregistreerd in `MauiProgram.cs` | [[Dependency Injection]] |
| **AI** | minstens één Azure AI-dienst zinvol geïntegreerd | [[Azure Custom Vision]] · [[Azure Object Detection]] · [[Azure Document Intelligence]] · [[Meer Azure AI Services]] |
| Toestel | camera/galerij met juiste permissies | [[Android-permissies (MAUI)]] |

## Evaluatie
- **Op tijd indienen** — te laat = **niet presenteren = geen punten**.
- **Mondelinge presentatie**: er wordt nagegaan in welke mate je app aan de vereisten voldoet; verwacht vragen over je code.
- **< 8/20** op deze challenge → maximaal **9/20** voor het hele vak.

## Voorbereiding op de presentatie
- Kunnen uitleggen **waarom** MVVM/DI (geen tight coupling, testbaar).
- De **flow van een AI-call** tonen: foto → stream → service → resultaat → binding.
- Laten zien hoe je **fouten** opvangt (geen netwerk, lage probability, "Negative").
- Weten hoe je model **getraind** is (aantal foto's, tags, precision/recall).

## Checklist
- [ ] Geen logica in code-behind.
- [ ] Keys niet in git ([[appsettings.json]]/secrets).
- [ ] Laadindicator tijdens AI-calls.
- [ ] Werkt op een Android-toestel/emulator.

---
Hoort bij: [[AI.NET]]
