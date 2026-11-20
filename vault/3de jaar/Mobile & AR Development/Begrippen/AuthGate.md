---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Firebase
aliases: [Auth gate]
---
# AuthGate

> Een widget die bovenaan je app beslist **wat de gebruiker ziet** op basis van de **inlogstatus**: de loginpagina of de eigenlijke app.

## Werking
Het luistert naar de stream `FirebaseAuth.instance.authStateChanges()`. Telkens iemand in- of uitlogt, komt er een nieuwe waarde binnen en bouwt het zich opnieuw op.

```dart
class AuthGate extends StatelessWidget {
  const AuthGate({super.key});
  @override
  Widget build(BuildContext context) {
    return StreamBuilder<User?>(
      stream: FirebaseAuth.instance.authStateChanges(),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        }
        return snapshot.hasData ? const TripListPage() : const LoginPage();
      },
    );
  }
}
```
In `MaterialApp` zet je `home: const AuthGate()`.

## Voordeel
Je hoeft na inloggen of uitloggen **niet zelf te navigeren**: de gate reageert automatisch.

## Gerelateerd
[[Firebase Authentication]] · [[StreamBuilder]]

---
Hoort bij: [[Travel Notes met Firebase]]
