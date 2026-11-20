---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Firebase
aliases: [flutterfire configure, firebase_options.dart]
---
# Firebase

> Google's **backend-as-a-service**: kant-en-klare diensten (authenticatie, databases, opslag, hosting…) die je app via SDK's aanspreekt, **zonder zelf een server** te schrijven of te beheren.

## Diensten in dit vak
| Dienst | Waarvoor |
|---|---|
| [[Firebase Authentication]] | registreren en inloggen |
| [[Cloud Firestore]] | NoSQL-database met realtime updates |

## Firebase koppelen aan Flutter (stappen)
1. **Firebase-project** maken in de Firebase-console (Google-account).
2. **Firestore** aanzetten (en **Authentication**).
3. Command-line tools installeren: Firebase CLI en `dart pub global activate flutterfire_cli`.
4. In je project: **`flutterfire configure`** → kiest je project en platformen, en genereert **`firebase_options.dart`**.
5. Packages toevoegen: `firebase_core`, `firebase_auth`, `cloud_firestore`.
6. Firebase **initialiseren vóór `runApp()`**:
```dart
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  runApp(const MyApp());
}
```

## Welke configuratie en keys? (workshop 2)
`firebase_options.dart` bevat de **project-ID, app-ID's en API-key** van je project. Die API-key is geen wachtwoord (de beveiliging zit in de [[Firestore security rules]]), maar commit hem niet nodeloos naar een publieke repo.

## In het project
Firebase Auth + Firestore zijn **verplicht** in het [[AR-project]], en ook [[Unity]] schrijft naar Firestore (zie [[Firestore REST API (Unity)]]).

## Gerelateerd
[[Firebase Authentication]] · [[Cloud Firestore]] · [[Firestore security rules]]

## Meer leren
- [Firebase voor Flutter](https://firebase.google.com/docs/flutter/setup)

---
Hoort bij: [[Travel Notes met Firebase]]
