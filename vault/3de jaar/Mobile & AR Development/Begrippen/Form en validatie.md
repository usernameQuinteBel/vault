---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Firebase
aliases: [TextFormField, Validatie (Flutter), GlobalKey]
---
# Form en validatie

> Invoer **controleren vóór** je ze naar Firebase stuurt. Flutter gebruikt een `Form` met `TextFormField`s en een `GlobalKey<FormState>`.

## TextField vs. TextFormField
| Widget | Gebruik wanneer |
|---|---|
| `TextField` | eenvoudige invoer **zonder** validatie |
| `TextFormField` | het veld hoort bij een **formulier** en moet gevalideerd worden |
| `Form` | je wil **meerdere velden samen** valideren |

## Werkwijze
```dart
final _formKey = GlobalKey<FormState>();
bool _saving = false;

Form(
  key: _formKey,
  child: Column(children: [
    TextFormField(
      decoration: const InputDecoration(labelText: 'E-mail'),
      validator: (v) => (v == null || !v.contains('@')) ? 'Geef een geldig e-mailadres' : null,
    ),
    FilledButton(
      onPressed: _saving ? null : _submit,   // knop uit tijdens het opslaan
      child: const Text('Opslaan'),
    ),
  ]),
);

Future<void> _submit() async {
  if (!_formKey.currentState!.validate()) return;
  setState(() => _saving = true);
  try { /* Firebase-call */ } finally { setState(() => _saving = false); }
}
```
Een `validator` geeft **`null`** als het veld in orde is, of een **foutboodschap**.

## Best practices (Travel Notes)
- Login/register-velden valideren **vóór** de [[Firebase Authentication]]-call.
- Trip-data valideren vóór je naar Firestore schrijft (bv. budget is een positief getal).
- **Dubbele submits voorkomen** terwijl een async-request loopt.
- **Duidelijke** foutmeldingen (wat is fout en hoe los je het op).
- Client-side validatie is voor gebruiksgemak; de echte bescherming zit in de [[Firestore security rules]].

## Gerelateerd
[[TextEditingController]] · [[Firebase Authentication]] · [[Firestore security rules]]

---
Hoort bij: [[Travel Notes met Firebase]]
