---
type: chapter
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Onderdeel 1: Flutter
---
# Travel Notes met Firebase

> Eén grotere app, stap voor stap uitgebouwd: **Travel Notes**. Gebruikers houden **persoonlijke reisplannen** bij: trips met titel, bestemming, notities, tags, checklist en budget. Je leert er alles wat je project nodig heeft: [[Firebase]], login, Firestore, formulieren, beveiliging en een nette architectuur.

## Waarom is dit een goede Firebase-case?
- De data hoort bij **één gebruiker** → authenticatie nodig.
- De app leest/schrijft **kleine documenten**.
- Trips hebben **flexibele velden** (tags, checklist) → [[NoSQL]].
- De UI moet **realtime** meebewegen → [[StreamBuilder]].

## Het eindresultaat in één schema
```
main.dart ── Firebase.initializeApp() ── MaterialApp(home: AuthGate)
AuthGate ── niet ingelogd → LoginPage (Form + AuthService)
         └─ ingelogd     → TripListPage
TripListPage ── StreamBuilder(repo.watchTrips()) → ListView(TripCard…)
             └─ FAB → TripFormPage (Form + validatie) → repo.addTrip()
Firestore: users/{uid}/trips/{tripId}   ← beschermd door security rules
```

## De stappen
| # | Stap | Wat je doet | Begrip |
|---|---|---|---|
| 1 | **Firebase & Firestore** | project maken in de console, Firestore aanzetten, `flutterfire configure` → `firebase_options.dart`, `Firebase.initializeApp()` vóór `runApp()` | [[Firebase]] · [[Cloud Firestore]] · [[NoSQL]] |
| 2 | **Authenticatie** | e-mail/wachtwoord aanzetten; een **AuthService** (register/login/logout) en een **[[AuthGate]]** die luistert naar `authStateChanges()` | [[Firebase Authentication]] |
| 3 | **Firestore in een ListView** | trips opslaan onder `users/{uid}/trips`; tonen met een realtime `StreamBuilder`; create, update, delete | [[StreamBuilder]] · [[Model (Flutter)]] |
| 4 | **Forms en validatie** | `Form` + `TextFormField` + `GlobalKey<FormState>`; valideren vóór de Firebase-call; dubbele submits blokkeren; duidelijke foutmeldingen | [[Form en validatie]] |
| 5 | **Security rules** | test mode vervangen: enkel de eigenaar mag zijn trips lezen/schrijven; velden valideren | [[Firestore security rules]] |
| 6 | **Architectuur** | Firebase-calls naar een **TripRepository**, UI opsplitsen (`TripCard`), optioneel een view-model; eindoefening **waypoints** | [[Repository pattern]] · [[Architectuur en state management]] |

## Waarom deze padstructuur?
`users/{uid}/trips` zet de **user-id in het pad**. Daardoor:
- hoef je niet te filteren op een `ownerId`-veld;
- kan een security rule simpelweg `request.auth.uid == uid` controleren.
Je ontwerpt de data dus al vanaf stap 3 **met de beveiliging van stap 5 in gedachten**.

## Typische fouten in deze app
| Fout | Oplossing |
|---|---|
| `No Firebase App '[DEFAULT]'` | `await Firebase.initializeApp(...)` vóór `runApp` |
| `permission-denied` | rules of pad klopt niet met de ingelogde `uid` |
| lijst ververst niet | gebruik `snapshots()` + `StreamBuilder` i.p.v. één keer `get()` |
| dubbele trips | knop niet uitgeschakeld tijdens het opslaan |
Meer in [[Debuggen (Flutter)]].

## Wat neem je mee naar je project?
Je project **moet** Firebase Auth + Firestore gebruiken ([[AR-project]]). Travel Notes is daar het sjabloon voor: dezelfde AuthGate, repository en rules, maar met data die bij je **AR-ervaring** hoort (scores, gevonden objecten, ratings…).

## Begrippen
[[Firebase]] · [[Cloud Firestore]] · [[NoSQL]] · [[Firebase Authentication]] · [[AuthGate]] · [[StreamBuilder]] · [[Model (Flutter)]] · [[Form en validatie]] · [[Firestore security rules]] · [[Repository pattern]] · [[Architectuur en state management]]

## Bron
https://itf-mobiledevelopment.netlify.app/flutter/firestore

---
Hoort bij: [[Mobile & AR Development]]
