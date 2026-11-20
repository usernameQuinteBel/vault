---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [5, 9]
groep: Unity
aliases: [IEnumerator, yield return, StartCoroutine]
---
# Coroutine (Unity)

> Een methode die zijn uitvoering kan **pauzeren** en later **verdergaan**, verspreid over meerdere frames, zonder de app te blokkeren. Herkenbaar aan `IEnumerator` en `yield return`.

## Waarom?
Sommige dingen duren seconden (de GPS opstarten, een download, een vertraging). In een gewone methode zou de hele app bevriezen; een coroutine wacht "op de achtergrond" en laat de frames gewoon doorlopen.

## Voorbeeld (PlayerLocation, workshop 2)
```csharp
IEnumerator Start()                    // Start mag zelf een coroutine zijn
{
    Input.location.Start();
    int maxWait = 20;
    while (Input.location.status == LocationServiceStatus.Initializing && maxWait > 0)
    {
        yield return new WaitForSeconds(1);   // wacht 1 s, ga dan verder
        maxWait--;
    }
    if (maxWait <= 0) yield break;            // stoppen
}
```
Een andere coroutine start je met `StartCoroutine(MijnRoutine());`.

## Veelgebruikte yields
| Yield | Wacht tot |
|---|---|
| `yield return null` | de volgende frame |
| `yield return new WaitForSeconds(s)` | `s` seconden voorbij zijn |
| `yield return webRequest.SendWebRequest()` | een netwerkrequest klaar is (bv. [[Firestore REST API (Unity)]]) |
| `yield break` | (stopt de coroutine) |

## Vergelijking
Gelijkaardig aan `async`/`await` in C# en Dart, maar Unity-specifiek en gekoppeld aan de frame-loop.

## Gerelateerd
[[MonoBehaviour]] · [[Location Service (Unity)]] · [[Start en Update]]

---
Hoort bij: [[Unity basis]]
