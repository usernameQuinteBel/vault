---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 2
groep: Flutter
aliases: [StatefulWidget, StatelessWidget]
---
# Stateless en stateful widget

> Het verschil tussen een widget die **niet verandert** na het opbouwen en een widget die **toestand bijhoudt** die tijdens het gebruik verandert.

| | StatelessWidget | StatefulWidget |
|---|---|---|
| State | geen; **immutable** | houdt [[State (Flutter)|state]] bij in een aparte `State`-klasse |
| Herbouwt bij | enkel als de ouder hem opnieuw bouwt | ook bij `setState(...)` |
| Voorbeeld | statische profielkaart, logo | teller, formulier, currency converter, quiz |

## Stateful widget in 4 stappen (uit de cursus)
1. Een klasse die `StatefulWidget` uitbreidt.
2. `createState()` die een `State`-object teruggeeft.
3. Een `State<…>`-klasse met de **veranderlijke velden**.
4. In `build()` de UI opbouwen; bij een wijziging `setState(() { … })` aanroepen.

```dart
class Counter extends StatefulWidget {
  const Counter({super.key});
  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;
  @override
  Widget build(BuildContext context) => ElevatedButton(
        onPressed: () => setState(() => count++),
        child: Text('Geklikt: $count'),
      );
}
```

## De levenscyclus (kort)
`initState()` (één keer bij aanmaken, bv. een controller maken) → `build()` (telkens bij herbouwen) → `dispose()` (opruimen, bv. een `TextEditingController` vrijgeven).

## Vuistregel
Begin **stateless**; maak een widget pas stateful als hij echt iets moet onthouden.

## Gerelateerd
[[State (Flutter)]] · [[Widget]] · [[TextEditingController]]

---
Hoort bij: [[Flutter aan de slag]]
