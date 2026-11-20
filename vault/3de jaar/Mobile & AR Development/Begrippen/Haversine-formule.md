---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 9
groep: Vuforia
aliases: [Haversine, Bearing]
---
# Haversine-formule

> Een formule die de **afstand** tussen twee punten op een **bol** (de aarde) berekent uit hun **breedte- en lengtegraad**. Samen met een verwante formule voor de **richting** (bearing) vormt ze de basis van de geolocation-schattenjacht.

## Waarom niet gewoon Pythagoras?
Lengte- en breedtegraden zijn **hoeken**, geen meters, en de aarde is rond. Een graad lengte is aan de evenaar ±111 km, maar in België veel minder. Haversine houdt daar rekening mee.

## De formule
```
a = sin²(Δφ/2) + cos φ1 · cos φ2 · sin²(Δλ/2)
c = 2 · atan2(√a, √(1−a))
d = R · c        (R = 6 371 000 m)
```
φ = breedtegraad, λ = lengtegraad, in **radialen**.

```csharp
float Distance(float lat1, float lon1, float lat2, float lon2)
{
    const float R = 6371000f;
    float dLat = (lat2 - lat1) * Mathf.Deg2Rad;
    float dLon = (lon2 - lon1) * Mathf.Deg2Rad;
    float a = Mathf.Sin(dLat/2) * Mathf.Sin(dLat/2) +
              Mathf.Cos(lat1*Mathf.Deg2Rad) * Mathf.Cos(lat2*Mathf.Deg2Rad) *
              Mathf.Sin(dLon/2) * Mathf.Sin(dLon/2);
    return R * 2 * Mathf.Atan2(Mathf.Sqrt(a), Mathf.Sqrt(1 - a));
}
```

## Gebruik in workshop 2
- **Afstand** speler → schat: > 10 m → **pijl** tonen, < 10 m → **UFO** tonen.
- **Richting** (bearing) min de kompasrichting van het toestel → hoek waarnaar de **pijl** moet draaien.

## Gerelateerd
[[Workshop 2 - Geolocation Treasure Hunt]] · [[Location Service (Unity)]]

---
Hoort bij: [[Workshop 2 - Geolocation Treasure Hunt]]
