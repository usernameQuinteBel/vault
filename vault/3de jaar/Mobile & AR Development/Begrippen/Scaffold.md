---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 2
groep: Flutter
aliases: [MaterialApp, AppBar]
---
# Scaffold

> De widget die het **standaard paginaframe** van een Material-app levert: een bovenbalk, de inhoud, en optioneel navigatie, een drawer en een floating action button.

## Belangrijkste "slots"
| Property | Inhoud |
|---|---|
| `appBar` | de bovenbalk (`AppBar` met titel en acties) |
| `body` | de hoofdinhoud van de pagina |
| `floatingActionButton` | de ronde actieknop (bv. "+ trip") |
| `bottomNavigationBar` | navigatie onderaan (`NavigationBar`) |
| `drawer` | het zijmenu |

```dart
Scaffold(
  appBar: AppBar(title: const Text('Travel Notes')),
  body: const TripList(),
  floatingActionButton: FloatingActionButton(
    onPressed: _addTrip,
    child: const Icon(Icons.add),
  ),
)
```

## MaterialApp erboven
Bovenaan de boom staat `MaterialApp`: die levert het **thema** ([[Material Design (Flutter)]]), de navigatie en de startpagina (`home:`).

## Andere handige onderdelen
| Property / methode | Gebruik |
|---|---|
| `endDrawer` | zijmenu rechts |
| `bottomSheet` | vaste balk onderaan |
| `backgroundColor` | achtergrond (liefst uit het thema) |
| `ScaffoldMessenger.of(context).showSnackBar(...)` | korte melding onderaan ("Trip opgeslagen") |
| `resizeToAvoidBottomInset` | inhoud omhoog schuiven als het toetsenbord verschijnt |

## Eén Scaffold per pagina
Elke pagina (route) heeft meestal haar **eigen** Scaffold. Nest geen Scaffolds in elkaar zonder reden — dat geeft dubbele app bars of vreemd gedrag van snackbars.

## Gerelateerd
[[Widget]] · [[Material Design (Flutter)]]

---
Hoort bij: [[Flutter aan de slag]]
