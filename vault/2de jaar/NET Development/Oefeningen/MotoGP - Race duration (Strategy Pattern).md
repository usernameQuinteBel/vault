---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 11
groep: Oefeningen
---
# MotoGP - Race duration (Strategy Pattern) 📝

> Deel 8 van [[MotoGP - Overzicht|MotoGP]]: de **totale raceduur** op twee manieren berekenen met het [[Strategy pattern]], en de gekozen strategie via **Dependency Injection** inpluggen.

## Waarom het Strategy Pattern?
- **clean**: elke berekening in een eigen klasse, makkelijk te onderhouden en te testen;
- **flexibel**: makkelijk wisselen tussen berekeningen;
- **schaalbaar**: nieuwe methodes (bv. AI-voorspellingen) toevoegen zonder bestaande code te wijzigen.

## 1. Database
Drie extra velden in `Race`:
| Veld | Type | Betekenis |
|---|---|---|
| `LapCount` | `int` | aantal ronden |
| `AvgSpeed` | `double` | geschatte gemiddelde snelheid (km/u) |
| `LapTime` | `double` | geschatte tijd van één ronde (seconden) |

Migration **`AddRaceFields`**, daarna een extra migration **`UpdateRaceData`** waarvan je `Up`/`Down` vervangt door de code uit de resources; database updaten en data controleren ([[Migrations]]).

## 2. Strategieën
- Map **`Strategies`** met interface **`IRaceDurationCalculator`** met één methode `CalculateDuration(Race race)` die een **`TimeSpan`** teruggeeft ([[Interface als contract]]).
- Twee implementaties:

| Klasse | Formule (uit de opgave) |
|---|---|
| `LapsBasedCalculator` | `TimeSpan.FromSeconds(LapCount × LapTime)` |
| `DistanceBasedCalculator` | `TimeSpan.FromHours(((LapCount × Length) / 1000) / AvgSpeed)` |

- Gooi een **`InvalidOperationException`** als een parameter in de formule **nul of negatief** is.

## 3. Dependency Injection
1. Registreer de service, eerst met **`LapsBasedCalculator`** ([[Service lifetimes]]).
2. Voeg een `Duration` (`TimeSpan`) toe aan `RaceDetailsDto`.
3. Injecteer `IRaceDurationCalculator` in de **`RacesController`** en vul de duur in bij `/api/races/{id}`.
4. Registreer daarna **`DistanceBasedCalculator`** en test opnieuw: alleen de registratie verandert.

## 4. Front-end
Toon de geschatte totale raceduur in de racedetails.

## Valkuil
AutoMapper ondersteunt **geen Dependency Injection in profiles**, want die verwachten een parameterloze constructor. Daarom injecteer je de calculator in de **controller** en niet in het mapping profile.

## Begrippen
[[Strategy pattern]] · [[Dependency Injection]] · [[Inversion of Control]] · [[Service lifetimes]] · [[Interface als contract]] · [[Constructor injection]]

---
Hoort bij: [[Dependency Injection (les)]]
