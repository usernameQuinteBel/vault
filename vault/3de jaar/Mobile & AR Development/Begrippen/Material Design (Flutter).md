---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [2, 4]
groep: Flutter
aliases: [Material 3, ThemeData, seedColor]
---
# Material Design (Flutter)

> Het **standaard designsysteem** van Flutter, gebaseerd op Google's Material Design. Moderne apps gebruiken **Material 3**: richtlijnen voor kleur, typografie, spacing, componenten, vormen, dark mode en beweging.

## Een thema met seedColor (Travel Notes)
```dart
MaterialApp(
  theme: ThemeData(
    colorScheme: ColorScheme.fromSeed(seedColor: Colors.teal),
    useMaterial3: true,
  ),
  darkTheme: ThemeData(
    colorScheme: ColorScheme.fromSeed(
        seedColor: Colors.teal, brightness: Brightness.dark),
  ),
);
```
`seedColor` is de **basiskleur**: Flutter genereert er een volledig, harmonieus kleurschema uit (primary, secondary, surface, error…), voor licht én donker. Teal past bij het rustige reis/dagboek-gevoel.

## Themakleuren gebruiken i.p.v. hardcoded
```dart
final colors = Theme.of(context).colorScheme;
Container(color: colors.primaryContainer);
Text('Trip', style: Theme.of(context).textTheme.titleLarge);
```
Voordeel: dark mode en kleurwissels werken **automatisch** overal. (Dit is dezelfde gedachte als [[Design tokens]] in UI UX.)

## Material 3-componenten
`NavigationBar`, `Card`, `FilledButton`, `ListTile`, `SearchBar`, `SegmentedButton`…

## Gerelateerd
[[Scaffold]] · [[Responsive en adaptieve UI]] · [[Flutter accessibility]]

## Meer leren
- [Material 3 in Flutter](https://docs.flutter.dev/ui/design/material)

---
Hoort bij: [[Flutter UI-kwaliteit]]
