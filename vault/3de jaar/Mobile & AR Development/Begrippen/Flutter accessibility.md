---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 4
groep: Flutter
aliases: [Semantics, TalkBack]
---
# Flutter accessibility

> Je app bruikbaar maken voor **iedereen**: mensen met een visuele, motorische, cognitieve of tijdelijke beperking. Toegankelijkheid hoort bij **elke** UI-beslissing, niet in een laatste fase.

## Checklist (cursus)
- [ ] Tekst heeft genoeg **contrast** met de achtergrond.
- [ ] Knoppen en tikbare elementen zijn minstens **48 × 48** logische pixels.
- [ ] De app werkt met **grote systeemletters** (tekstschaal).
- [ ] Controls hebben **duidelijke labels**.
- [ ] Fouten zeggen **wat** er misliep en **hoe** je het oplost.
- [ ] Belangrijke acties kunnen **bevestigd of ongedaan** gemaakt worden.
- [ ] Getest met **TalkBack** (Android) en **VoiceOver** (iOS).

## In de praktijk
- **Standaardwidgets** (`ElevatedButton`, `IconButton`, `TextField`, `Checkbox`, `Switch`, `NavigationBar`, `ListTile`) dragen al semantische info → verkies ze boven eigen `GestureDetector`-zones.
- **Icon-buttons** krijgen een `tooltip` — dat wordt ook voorgelezen:
```dart
IconButton(icon: const Icon(Icons.delete), tooltip: 'Trip verwijderen', onPressed: _delete);
```
- Een eigen tikbare widget krijgt een **`Semantics`**-label.
- **Kleur is niet genoeg**: een fout ook met icoon + tekst tonen.

## Verband met UI UX
Dezelfde principes als [[Accessibility (A11y)]] en [[WCAG]] uit het vak UI UX.

## Gerelateerd
[[Material Design (Flutter)]] · [[Responsive en adaptieve UI]]

## Meer leren
- [Accessibility in Flutter](https://docs.flutter.dev/ui/accessibility-and-internationalization/accessibility)

---
Hoort bij: [[Flutter UI-kwaliteit]]
