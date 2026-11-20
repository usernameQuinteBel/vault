---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [2, 3]
groep: Flutter
aliases: [InputDecoration, TextField]
---
# TextEditingController

> Een controller die de **tekst van een `TextField`** bijhoudt, zodat je ze kan **uitlezen, instellen of wissen** vanuit je code.

## Gebruik (currency converter)
```dart
final amountController = TextEditingController();

TextField(
  controller: amountController,
  keyboardType: TextInputType.number,
  decoration: const InputDecoration(labelText: 'Bedrag'),
);

final amount = double.tryParse(amountController.text) ?? 0;
```

## Levenscyclus
Maak de controller in de `State`-klasse en geef hem vrij in `dispose()`:
```dart
@override
void dispose() {
  amountController.dispose();
  super.dispose();
}
```

## InputDecoration
Met `InputDecoration` geef je een veld een **label**, hint, icoon, rand en foutboodschap — belangrijk voor duidelijkheid en [[Flutter accessibility|toegankelijkheid]].

## Luisteren naar wijzigingen
```dart
@override
void initState() {
  super.initState();
  amountController.addListener(_recalculate);   // bij elke toets
}
```
Alternatief zonder controller: `onChanged: (value) => setState(() => amount = value)`.

## Controller vs. onChanged
| Controller | `onChanged` |
|---|---|
| tekst **instellen** of **wissen** vanuit code (`controller.clear()`) | enkel lezen bij wijziging |
| beginwaarde (`text: '100'`) | geen beginwaarde |
| moet `dispose()` krijgen | niets op te ruimen |
In een `Form` met `TextFormField` werk je vaak met `onSaved` of een controller per veld.

## Gerelateerd
[[Stateless en stateful widget]] · [[Form en validatie]]

---
Hoort bij: [[Flutter aan de slag]]
