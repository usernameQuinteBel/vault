---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 9
groep: Unity
aliases: [Input.location, GPS (Unity), Kompas]
---
# Location Service (Unity)

> De Unity-API om de **GPS-positie** en het **kompas** van het toestel uit te lezen. De basis van [[AR flavors|geolocation AR]].

## Gebruik (PlayerLocation-script)
```csharp
IEnumerator Start()
{
    if (!Input.location.isEnabledByUser) yield break;
    Input.location.Start(1f, 1f);          // nauwkeurigheid, update-afstand (m)
    Input.compass.enabled = true;
    while (Input.location.status == LocationServiceStatus.Initializing)
        yield return new WaitForSeconds(1);
}

void Update()
{
    var d = Input.location.lastData;
    float lat = d.latitude, lon = d.longitude;
    float heading = Input.compass.trueHeading;   // 0 = noorden
}
```

## Belangrijk
- Werkt enkel op een **echt toestel**, buiten (in de editor geen GPS).
- **Locatiepermissie** nodig.
- Het opstarten duurt even → verberg de pijl en UFO tot de service draait (zoals de NavigationService in workshop 2).
- GPS is **niet perfect**: enkele meters afwijking, daarom werk je met een drempel van 10 m.

## Gerelateerd
[[Haversine-formule]] · [[Workshop 2 - Geolocation Treasure Hunt]]

---
Hoort bij: [[Workshop 2 - Geolocation Treasure Hunt]]
