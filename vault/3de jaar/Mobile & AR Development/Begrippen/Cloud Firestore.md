---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Firebase
aliases: [Firestore]
---
# Cloud Firestore

> Firebase's **NoSQL-documentdatabase** met **realtime** synchronisatie en offline-ondersteuning.

## Datamodel
```
collection → document → velden (+ subcollections)
users/{uid}/trips/{tripId}
   title: "Rome"
   destination: "Italië"
   tags: ["citytrip", "eten"]
   checklist: [{ text: "paspoort", done: true }]
   budget: 800
   createdAt: Timestamp
```
- Een **collection** bevat documents; een **document** bevat velden en kan **subcollections** hebben.
- De structuur `users/{uid}/trips` zet de **user-id in het pad** → handig voor de [[Firestore security rules]].

## Basisbewerkingen (Dart)
```dart
final trips = FirebaseFirestore.instance
    .collection('users').doc(uid).collection('trips');

await trips.add({'title': 'Rome', 'createdAt': FieldValue.serverTimestamp()}); // create
trips.orderBy('createdAt', descending: true).snapshots();                         // read (realtime)
await trips.doc(id).update({'title': 'Rome 2027'});                               // update
await trips.doc(id).delete();                                                     // delete
```
`snapshots()` geeft een **stream** die je met een [[StreamBuilder]] toont.

## Waarom NoSQL hier past
Zie [[NoSQL]]: flexibele velden (tags, checklist), data per gebruiker, realtime UI.

## Gerelateerd
[[NoSQL]] · [[StreamBuilder]] · [[Firestore security rules]] · [[Repository pattern]]

## Meer leren
- [Cloud Firestore data model](https://firebase.google.com/docs/firestore/data-model)

---
Hoort bij: [[Travel Notes met Firebase]]
