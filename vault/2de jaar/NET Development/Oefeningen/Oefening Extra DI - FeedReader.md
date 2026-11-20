---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 11
groep: Oefeningen
---
# Oefening Extra DI - FeedReader 📝

> Extra oefening: de console-app **`ExerciseDI_FeedReader`** refactoren zodat ze werkt volgens het **Dependency Injection**-patroon, en de `FeedService` testen.

## Uitgangssituatie
| Klasse | Rol |
|---|---|
| `BlogFeedReader`, `PodCastFeedReader`, `YouTubeFeedReader` | drie entiteitsklassen die een feed teruggeven |
| `FeedService` | geeft een specifieke feed terug aan `Main()` |

Bij het starten verschijnt **"Audio:item 1"**: `FeedService` is **strak gekoppeld** (*tight coupling*) aan `PodCastFeedReader`.

## Opdracht
- Los deze afhankelijkheid op.
- `FeedService` moet bruikbaar zijn voor **podcasts, YouTube-video's én blogposts**.
- Test de methode **`GetFeed()`** van `FeedService`.

## Aanpak
1. Zoek waar `FeedService` zelf een `PodCastFeedReader` aanmaakt: dat is de koppeling.
2. Laat de drie readers een gemeenschappelijk **contract** (interface) implementeren ([[Interface als contract]]).
3. Laat `FeedService` die interface **via de constructor** ontvangen in plaats van zelf een reader te maken ([[Constructor injection]], [[Inversion of Control]]).
4. Kies in `Main()` welke reader je doorgeeft.
5. Schrijf unit tests voor `GetFeed()`; geef in de test een reader (of een [[Mocking (Moq)|mock]]) mee ([[Unit test]]).

## Begrippen
[[Dependency Injection]] · [[Inversion of Control]] · [[Constructor injection]] · [[Interface als contract]] · [[Unit test]] · [[Mocking (Moq)]]

---
Hoort bij: [[Dependency Injection (les)]]
