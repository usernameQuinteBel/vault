---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Flutter
aliases: [Architectuur (Flutter)]
---
# Architectuur en state management

> De **structuur** van een Flutter-app zodat elke file **één duidelijke taak** heeft. Geen groot nieuw framework, maar een nette scheiding van UI, data en logica.

## Waarom architectuur?
Kleine voorbeelden mogen alle logica in één widget hebben. Een echte app wordt dan snel **rommelig**: UI-code, Firebase-calls, validatie en state lopen door elkaar. *Architectuur gaat niet over complex maken, maar over elke file een duidelijke job geven.*

## De structuur van Travel Notes
```
lib/
 ├─ main.dart            → Firebase init + MaterialApp + AuthGate
 ├─ models/trip.dart     → data + conversie        (Model)
 ├─ services/auth_service.dart
 ├─ repositories/trip_repository.dart → Firestore   (Repository)
 ├─ pages/               → schermen (login, lijst, detail, formulier)
 └─ widgets/trip_card.dart → herbruikbare UI
```

## Waar zit welke state?
| State | Plaats |
|---|---|
| lokale UI-state (bezig met opslaan, geselecteerde tab) | `setState` in de pagina |
| ingelogde gebruiker | `authStateChanges()`-stream in de [[AuthGate]] |
| trips (remote data) | **repository** + [[StreamBuilder]] |

## Wanneer méér state management?
Kleine app: `setState` + `StreamBuilder` volstaat. Groter (veel schermen delen dezelfde data, complexe logica): overweeg **Provider**, **Riverpod** of **BLoC**, of een eenvoudige **view-model** (optionele refactor: `TripListViewModel`).

## Best practices
- Firebase-calls **nooit** rechtstreeks in widgets → via een repository.
- Grote `build()`-methodes opsplitsen in eigen widgets (`TripCard`).
- `const` gebruiken waar mogelijk.

## Eindoefening
Een **waypoints**-uitbreiding van Travel Notes.

## Gerelateerd
[[Repository pattern]] · [[State (Flutter)]] · [[StreamBuilder]]

---
Hoort bij: [[Travel Notes met Firebase]]
