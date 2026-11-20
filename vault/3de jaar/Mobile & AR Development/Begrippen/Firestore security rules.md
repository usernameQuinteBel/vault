---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Firebase
aliases: [Security rules]
---
# Firestore security rules

> Regels die **in Firestore zelf** bepalen welke (ingelogde) gebruiker welke documenten mag **lezen en schrijven**. De echte beveiliging van je data.

## Waarom nodig?
Je Flutter-app draait op het **toestel van de gebruiker**. Die kan de app inspecteren en zelf requests sturen. Controles in je app (verbergen, valideren) zijn dus **niet genoeg**: de database moet zelf weigeren.

## Test mode is niet veilig
Tijdens het leren start je in **test mode** (iedereen mag alles, tijdelijk). Voor een echte app vervang je dat door strikte regels.

## Waar?
Firebase-console → Firestore → **Rules** (of `firestore.rules` in je project).

## Trips enkel voor de eigenaar
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/trips/{tripId} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```
Dankzij het pad `users/{uid}/trips` kan de regel de `uid` uit het pad vergelijken met de ingelogde gebruiker (`request.auth.uid`).

## Velden valideren
```
allow create: if request.auth.uid == uid
              && request.resource.data.title is string
              && request.resource.data.title.size() > 0
              && request.resource.data.budget is number
              && request.resource.data.budget >= 0;
```

## ⚠️ Rules zijn geen filters
Een regel zegt wat **mag**, niet wat een query **teruggeeft**. Vraag je data op waar je geen recht op hebt, dan **faalt de hele query** (permission-denied) in plaats van stil te filteren. Je query moet dus zelf al binnen je rechten blijven.

## Gerelateerd
[[Cloud Firestore]] · [[Firebase Authentication]] · [[Form en validatie]]

## Meer leren
- [Firestore security rules](https://firebase.google.com/docs/firestore/security/get-started)

---
Hoort bij: [[Travel Notes met Firebase]]
