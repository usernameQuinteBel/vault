---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Flutter
aliases: [Repository, TripRepository]
---
# Repository pattern

> Een patroon dat **data-toegang** (Firebase-calls) **scheidt van je UI**. Een *repository* biedt duidelijke methodes; widgets roepen die aan zonder te weten **hoe of waar** de data opgeslagen wordt.

## Voorbeeld: TripRepository
```dart
class TripRepository {
  TripRepository(this.uid);
  final String uid;

  CollectionReference<Map<String, dynamic>> get _trips =>
      FirebaseFirestore.instance.collection('users').doc(uid).collection('trips');

  Stream<List<Trip>> watchTrips() => _trips
      .orderBy('createdAt', descending: true)
      .snapshots()
      .map((s) => s.docs.map(Trip.fromDoc).toList());

  Future<void> addTrip(Trip t) => _trips.add(t.toMap());
  Future<void> updateTrip(Trip t) => _trips.doc(t.id).update(t.toMap());
  Future<void> deleteTrip(String id) => _trips.doc(id).delete();
}
```

## Waarom? ("remote data belongs in a repository")
- Eén plek voor alle Firestore-paden en -queries → geen gedupliceerde strings in widgets.
- UI blijft **leesbaar**: `repo.addTrip(trip)` i.p.v. drie regels Firestore-code.
- **Vervangbaar** en testbaar (een fake repository in tests).
- Elke file heeft een **duidelijke taak** (zie [[Architectuur en state management]]).

Vergelijkbaar met de [[DataService]] uit AI.NET.

## Gerelateerd
[[Cloud Firestore]] · [[Architectuur en state management]] · [[Model (Flutter)]]

---
Hoort bij: [[Travel Notes met Firebase]]
