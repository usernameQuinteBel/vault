---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Firebase
aliases: [Firebase Auth, AuthService]
---
# Firebase Authentication

> Een kant-en-klaar **authenticatiesysteem**: Firebase beheert accounts, wachtwoorden (gehasht) en sessies, zodat jij **geen wachtwoorden zelf opslaat**.

## Providers
E-mail/wachtwoord (in de cursus), Google, Apple, telefoon, anoniem… E-mail/wachtwoord is het duidelijkst om de flow te leren.

## Inschakelen
Firebase-console → **Security > Authentication** → *Get started* → *Sign-in method* → **Email/Password** aanzetten.

## De drie bouwstenen in Travel Notes
| Bouwsteen | Rol |
|---|---|
| **AuthService** | registreren, inloggen, uitloggen (wrapper rond `FirebaseAuth.instance`) |
| **[[AuthGate]]** | toont de **loginpagina** als niemand ingelogd is, anders de app |
| **Loginpagina** | e-mail + wachtwoord, met [[Form en validatie|validatie]] |

```dart
await FirebaseAuth.instance.createUserWithEmailAndPassword(email: e, password: p);
await FirebaseAuth.instance.signInWithEmailAndPassword(email: e, password: p);
await FirebaseAuth.instance.signOut();
final uid = FirebaseAuth.instance.currentUser!.uid;
```

## Waarom nodig voor Firestore?
Trips zijn **persoonlijk**. De `uid` van de ingelogde gebruiker bepaalt het pad (`users/{uid}/trips`) én wordt in de [[Firestore security rules]] gecontroleerd.

## Foutafhandeling
`FirebaseAuthException` met een `code` (`user-not-found`, `wrong-password`, `email-already-in-use`, `weak-password`) → vertaal die naar een begrijpelijke melding.

## Gerelateerd
[[AuthGate]] · [[Firestore security rules]] · [[Firebase]]

---
Hoort bij: [[Travel Notes met Firebase]]
