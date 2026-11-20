---
type: chapter
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 2
groep: Onderdeel 1: Flutter
---
# Flutter aan de slag

> De basis van [[Flutter]]: de SDK installeren, een eerste project maken en draaien, een UI opbouwen met **[[Widget]]s**, en een app met **[[State (Flutter)|state]]**.

## 1. Installatie
| Stap | Details | Valkuil |
|---|---|---|
| Flutter SDK | uitpakken in bv. `C:\src\flutter` en de `bin`-map in de **PATH** zetten | **niet** in `Program Files` (admin-rechten) |
| Versie | getest met **Flutter 3.44.0** | een andere versie kan de AR-integratie breken |
| Editor | **VS Code** + extensies **Flutter** en **Dart** | |
| Android | Android Studio (SDK + emulator) of een echt toestel met USB-debugging | |
| Controle | `flutter doctor` toont wat nog ontbreekt | lees elke ✗ en los ze op |

## 2. Eerste app
- `flutter create hello_flutter` of in VS Code *Flutter: New Project*.
- Projectnaam: **enkel kleine letters en underscores**; mappad zonder spaties of speciale tekens.
- Startpunt: `lib/main.dart` → `main()` roept `runApp(const MyApp())` aan.
- Draaien in **Chrome** (snelst om te testen), een **emulator** of een **toestel**. Kies het doel rechtsonder in VS Code, dan F5.
- Wijzigingen zie je direct met [[Hot reload en hot restart|hot reload]].
- Packages, afbeeldingen en fonts declareer je in [[pubspec.yaml]].

## 3. De UI opbouwen met widgets
Alles is een [[Widget]], genest tot een **widget tree**:
```dart
MaterialApp(
  home: Scaffold(
    appBar: AppBar(title: const Text('Profiel')),
    body: Column(children: [
      const CircleAvatar(radius: 50, backgroundImage: AssetImage('assets/me.jpg')),
      const Text('Sam Peeters'),
      Row(children: const [Icon(Icons.email), Text('sam@mail.be')]),
      ElevatedButton(onPressed: () {}, child: const Text('Contact')),
    ]),
  ),
);
```
- **Paginaframe**: [[Scaffold]] + `AppBar`.
- **Layout**: `Container`, `Row`/`Column`, `Expanded`, `Padding`, `SizedBox`.
- **Inhoud**: `Text`, `Image`, `Icon`, `CircleAvatar`.
- **Interactie/feedback**: `ElevatedButton`, `AlertDialog`.
- **Stijl**: margin, padding, kleuren, fonts; herhaalde stukken → **eigen widget**.

## 4. Een stateful app: currency converter
| Onderdeel | Hoe |
|---|---|
| Bedrag invoeren | `TextField` met een [[TextEditingController]] en `keyboardType: number` |
| Munt kiezen | `DropdownButton` met een lijst `Currency`-objecten ([[Model (Flutter)|model]]) |
| Resultaat tonen | een veld in de `State`-klasse, aangepast met `setState` |
| Herberekenen | bij elke wijziging → `setState(() => result = amount * rate)` |
Het verschil tussen een widget die **niet** en een widget die **wel** verandert: [[Stateless en stateful widget]].

## 5. Oefeningen (cursussite)
| Oefening | Wat oefen je? |
|---|---|
| **One two three** (deel 1 en 2) | basiswidgets, layout, assets, eigen widgets |
| **Flags** | een quiz met willekeurige vlaggen: state, model (`Country`), random, feedback |

## Checklist "ken ik dit?"
- [ ] Ik kan uitleggen waarom alles een widget is en een widget tree tekenen.
- [ ] Ik weet wanneer ik `Row`, `Column` en `Expanded` gebruik.
- [ ] Ik kan het verschil stateless/stateful uitleggen en `setState` correct gebruiken.
- [ ] Ik kan een asset/font toevoegen via `pubspec.yaml`.
- [ ] Ik weet wanneer hot reload volstaat en wanneer niet.

## Begrippen
[[Flutter]] · [[Dart]] · [[pubspec.yaml]] · [[Hot reload en hot restart]] · [[Widget]] · [[Scaffold]] · [[Stateless en stateful widget]] · [[State (Flutter)]] · [[TextEditingController]] · [[Model (Flutter)]] · [[Material Design (Flutter)]]

## Bron
https://itf-mobiledevelopment.netlify.app/flutter/

---
Hoort bij: [[Mobile & AR Development]]
