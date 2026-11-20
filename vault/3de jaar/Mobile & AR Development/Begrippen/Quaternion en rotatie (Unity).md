---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [5, 9, 10]
groep: Unity
aliases: [Quaternion, Slerp, Euler-hoeken]
---
# Quaternion en rotatie (Unity)

> Unity slaat rotaties intern op als **quaternions**: een wiskundige voorstelling (x, y, z, w) die **gimbal lock** vermijdt en vlot kan **interpoleren**. Zelf denk en werk je meestal in **Euler-hoeken** (graden rond X, Y, Z).

## De nuttigste functies
| Functie | Wat | Gebruikt in |
|---|---|---|
| `Quaternion.Euler(x, y, z)` | Euler-hoeken → rotatie | pijl naar het doel (workshop 2), vis kantelen (workshop 3) |
| `transform.Rotate(x, y, z)` | er een rotatie **bij** tellen | clownvis, UFO laten draaien |
| `Quaternion.LookRotation(dir)` | rotatie die in richting `dir` kijkt | schildpad kijkt naar de camera |
| `Quaternion.Slerp(a, b, t)` | **vloeiend** van rotatie a naar b | trage, natuurlijke draai |
| `Quaternion.AngleAxis(angle, axis)` | rotatie van `angle` graden rond een as | UFO-positie corrigeren met de startrichting |
| `Quaternion.identity` | geen rotatie | `Instantiate(prefab, pos, Quaternion.identity)` |

## Rotatie per seconde
```csharp
transform.Rotate(0, 90 * Time.deltaTime, 0);   // 90° per seconde rond Y
```

## Vloeiend draaien
```csharp
Quaternion target = Quaternion.LookRotation(lookDirection);
transform.rotation = Quaternion.Slerp(transform.rotation, target, turnSpeed * Time.deltaTime);
```

## Assen in Unity
**Y = omhoog**, X = rechts, Z = vooruit. Een object horizontaal laten draaien (kompasrichting) = rotatie rond **Y**.

## Gerelateerd
[[Start en Update]] · [[Workshop 2 - Geolocation Treasure Hunt]] · [[Workshop 3 - 3D en Model Targets]]

---
Hoort bij: [[Unity basis]]
