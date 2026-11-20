---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 7
groep: Unity
aliases: [UnityWebRequest, FirestoreScoreClient]
---
# Firestore REST API (Unity)

> In het cursushoofdstuk *Unity – Firebase and Firestore* spreekt Unity **[[Cloud Firestore]]** aan via de **REST API**, zonder de zware Unity Firebase SDK. Zo kan je AR-scène bv. een **score** lezen en schrijven.

## Wat kan het voorbeeld (FirestoreScoreClient)?
- een **scoredocument ophalen** uit Firestore;
- een scoredocument **schrijven**;
- hetzelfde document later **updaten**.

## Benodigd
- Het **project-ID** en de **API-key** van je Firebase-project.
- Een script met `UnityWebRequest` dat naar `https://firestore.googleapis.com/v1/projects/<id>/databases/(default)/documents/...` stuurt.
- Testknoppen in de scène om fetch/write/update te proberen.

## Het JSON-formaat
Firestore's REST API verwacht **getypeerde velden**:
```json
{ "fields": { "player": { "stringValue": "Sam" }, "score": { "integerValue": "42" } } }
```
In workshop 3 (Match Maker in AR) bouw je die JSON met **JObject/JArray** (Newtonsoft) in een *Firestore write helper*.

## ⚠️ Open rules enkel om te leren
Het voorbeeld gebruikt **tijdelijk open** Firestore-regels om eerst de communicatie te laten werken. In een echte app moeten gebruikers inloggen en moeten de [[Firestore security rules]] controleren wie mag lezen en schrijven.

## Gerelateerd
[[Cloud Firestore]] · [[Flutter-Unity-Vuforia integratie]]

---
Hoort bij: [[Flutter-Unity-Vuforia integratie]]
