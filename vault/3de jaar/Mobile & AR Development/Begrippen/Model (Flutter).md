---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [2, 3]
groep: Flutter
aliases: [fromDoc, toMap]
---
# Model (Flutter)

> Een Dart-klasse die een **stuk data** voorstelt (bv. `Trip`, `Currency`, `Country`) met methodes om ze **om te zetten** van en naar Firestore.

## Voorbeeld: Trip
```dart
class Trip {
  final String id;
  final String title;
  final String destination;
  final List<String> tags;
  final double budget;

  Trip({required this.id, required this.title, required this.destination,
        this.tags = const [], this.budget = 0});

  factory Trip.fromDoc(DocumentSnapshot<Map<String, dynamic>> doc) {
    final d = doc.data()!;
    return Trip(
      id: doc.id,
      title: d['title'] ?? '',
      destination: d['destination'] ?? '',
      tags: List<String>.from(d['tags'] ?? []),
      budget: (d['budget'] ?? 0).toDouble(),
    );
  }

  Map<String, dynamic> toMap() => {
        'title': title, 'destination': destination, 'tags': tags, 'budget': budget,
      };
}
```

## Waarom een model?
- **Type-veiligheid**: `trip.title` i.p.v. `doc['title']` overal.
- Eén plek voor **conversie** en **standaardwaarden** (`?? ''`) → minder crashes bij ontbrekende velden.
- In de oefeningen: `Currency` (currency converter), `Country` (Flags-quiz).

## Gerelateerd
[[Repository pattern]] · [[Cloud Firestore]]

---
Hoort bij: [[Travel Notes met Firebase]]
