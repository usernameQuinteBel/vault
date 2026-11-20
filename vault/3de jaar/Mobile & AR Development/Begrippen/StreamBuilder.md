---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Firebase
---
# StreamBuilder

> Een widget die zich **abonneert op een `Stream`** en zichzelf **herbouwt** telkens er nieuwe data binnenkomt. Hét middel om **realtime** Firestore-data (en de inlogstatus) te tonen.

## Gebruik met Firestore
```dart
StreamBuilder<QuerySnapshot>(
  stream: tripsRef.orderBy('createdAt', descending: true).snapshots(),
  builder: (context, snapshot) {
    if (snapshot.hasError) return const Text('Er liep iets mis');
    if (!snapshot.hasData) return const CircularProgressIndicator();
    final docs = snapshot.data!.docs;
    if (docs.isEmpty) return const Text('Nog geen trips');
    return ListView.builder(
      itemCount: docs.length,
      itemBuilder: (_, i) => TripCard(trip: Trip.fromDoc(docs[i])),
    );
  },
);
```

## De vier toestanden die je altijd afhandelt
| Toestand | Toon |
|---|---|
| bezig met laden | spinner |
| fout | foutmelding |
| leeg | "nog geen items" |
| data | de lijst |

## Waarom niet zelf ophalen + setState?
Met `StreamBuilder` verschijnt een nieuwe of gewijzigde trip **meteen**, ook als hij op een ander toestel werd toegevoegd — zonder manueel te verversen.

## Gerelateerd
[[Cloud Firestore]] · [[AuthGate]] · [[State (Flutter)]]

---
Hoort bij: [[Travel Notes met Firebase]]
