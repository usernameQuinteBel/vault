---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [2, 3]
groep: Flutter
aliases: [pub.dev, flutter pub add]
---
# pubspec.yaml

> Het **configuratiebestand** van een Flutter-project: naam, versie, **dependencies** (packages) en **assets** (afbeeldingen, fonts).

## Belangrijkste onderdelen
```yaml
name: travel_notes_app
environment:
  sdk: ^3.5.0

dependencies:
  flutter:
    sdk: flutter
  firebase_core: ^3.0.0
  firebase_auth: ^5.0.0
  cloud_firestore: ^5.0.0

flutter:
  uses-material-design: true
  assets:
    - assets/images/
  fonts:
    - family: Lato
      fonts:
        - asset: assets/fonts/Lato-Regular.ttf
```

## Packages toevoegen
`flutter pub add cloud_firestore` past het bestand aan én haalt het package op. Handmatig gewijzigd? Dan `flutter pub get`.

## Assets en fonts (uit de cursus)
In de oefeningen (Profile app, Flags) voeg je **afbeeldingen** en een **Google Font** toe: bestanden in een map `assets/` zetten **en** ze declareren onder `flutter:`. Vergeet je dat, dan krijg je "Unable to load asset".

> ⚠️ YAML is **inspringgevoelig** (spaties, geen tabs): een verkeerde inspringing geeft een fout.

## Gerelateerd
[[Flutter]] · [[Dart]]

---
Hoort bij: [[Flutter aan de slag]]
