---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 4
groep: Flutter
---
# Debuggen (Flutter)

> Uitzoeken **waar** iets misgaat en **waarom**. Travel Notes is een ideale oefenapp: Firebase-initialisatie, authenticatie, Firestore lezen/schrijven, formulieren en realtime updates.

## Stap 1: lees de foutboodschap
Vraag je af:
- Welk **bestand** en welke **regel** worden genoemd?
- Is het een **Flutter**-, **Firebase**- of **Dart**-fout?
- Gebeurde het tijdens het **bouwen van de UI**, **inloggen**, **lezen** of **opslaan**?

> **Verander niet lukraak code.** Zoek eerst waar de fout begint.

## Stap 2: tools
| Tool | Waarvoor |
|---|---|
| VS Code-debugger (**breakpoints**) | de app pauzeren en variabelen bekijken |
| `debugPrint(...)` / Debug Console | waarden loggen |
| **Stack trace** | de keten van calls tot de fout (lees van boven naar je eigen code) |
| Flutter DevTools | widget inspector, performance |
| [[Hot reload en hot restart]] | snel testen na een fix |

## Veelvoorkomende Travel Notes-bugs
| Symptoom | Oorzaak |
|---|---|
| `No Firebase App '[DEFAULT]' has been created` | `Firebase.initializeApp()` vergeten of niet ge-`await`-ed vóór `runApp()` |
| `permission-denied` | [[Firestore security rules]] blokkeren de lees/schrijf (of verkeerd pad) |
| lijst blijft leeg | verkeerd Firestore-pad, of `uid` verschilt |
| `RenderFlex overflowed` | te veel content in een `Row`/`Column` → `Expanded` of scrollen |
| `Null check operator used on a null value` | `!` gebruikt op iets dat null was (bv. `currentUser!` vóór inloggen) |

## Gerelateerd
[[Hot reload en hot restart]] · [[Firebase]] · [[Firestore security rules]]

---
Hoort bij: [[Flutter UI-kwaliteit]]
