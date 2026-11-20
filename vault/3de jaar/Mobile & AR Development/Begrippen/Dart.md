---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 2
groep: Flutter
---
# Dart

> De **programmeertaal** van [[Flutter]], ontwikkeld door Google: object-georiënteerd, sterk getypeerd, met **null-safety** en `async`/`await`.

## Belangrijke kenmerken
| Kenmerk | Voorbeeld | Waarom |
|---|---|---|
| Sterke typering + inferentie | `var name = 'Sam';` / `String name` | fouten vroeg opsporen |
| **Null-safety** | `String?` mag null zijn, `String` niet; `name!` forceert | geen onverwachte null-crashes |
| `final` / `const` | `final uid = user.uid;` / `const Text('Hi')` | onveranderlijk; `const`-widgets worden niet heropgebouwd |
| `async` / `await` / `Future` | `await FirebaseAuth.instance.signIn...` | netwerk- en databasecalls zonder de UI te blokkeren |
| `Stream` | `collection.snapshots()` | een **reeks** waarden over tijd (realtime data, zie [[StreamBuilder]]) |
| Named parameters | `Text('Hi', style: ...)` | leesbare widget-constructors |

## Compileren
- **JIT** tijdens het ontwikkelen → maakt [[Hot reload en hot restart|hot reload]] mogelijk.
- **AOT** voor de release → snelle native code.

## Projectbestanden
Code staat in `lib/` (`main.dart` is het startpunt); packages voeg je toe via [[pubspec.yaml]] (`flutter pub add ...`).

## Gerelateerd
[[Flutter]] · [[pubspec.yaml]] · [[StreamBuilder]]

## Meer leren
- [Dart language tour](https://dart.dev/language)

---
Hoort bij: [[Flutter aan de slag]]
