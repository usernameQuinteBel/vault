---
type: chapter
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 9
groep: Onderdeel 3: Workshops
---
# Workshop 2 - Geolocation Treasure Hunt

> **Location-based AR**: een schattenjacht met **GPS en kompas**. Een **pijl** wijst naar de schat; ben je er minder dan **10 m** van, dan verschijnt een **UFO**. Vuforia ondersteunt geolocation niet echt — het resultaat is **aanvaardbaar, niet perfect**, en verbeteringen zijn mogelijk. Basis voor **opdracht 2**.

## De scripts en hun rol
| Script | Verantwoordelijkheid |
|---|---|
| **PlayerLocation** | GPS + kompas starten en de huidige positie bijhouden |
| **TargetLocation** | de coördinaten van de schat(ten) |
| **NavigationService** | afstand berekenen, tekst tonen, pijl/UFO tonen of verbergen |
| **RotateArrow** | de pijl naar het doel laten wijzen |
| **RotateUFO** | de UFO laten ronddraaien |

## 1. PlayerLocation (coroutine)
`Start()` is hier een **[[Coroutine (Unity)|coroutine]]** (`IEnumerator Start()`), omdat de location service tijd nodig heeft:
1. Staat locatie aan op het toestel? Nee → `errorCode = 1`, stoppen.
2. `Input.compass.enabled = true;` en `Input.location.Start();`.
3. Max. **20 s** wachten zolang de status *Initializing* is (`yield return new WaitForSeconds(1)`). Time-out → `errorCode = 2`.
4. Status *Failed* → `errorCode = 3`.
5. Nog 2 s extra wachten, dan `isStartUpFinished = true` en de **startrichting** (`trueHeading`) en **startpositie** onthouden.
In `Update()` worden `latitude`/`longitude` telkens ververst zolang de service *Running* is. Zie [[Location Service (Unity)]].

## 2. Tonen op een canvas
NavigationService schrijft in een `Text` op een **Canvas**: de coördinaten, of "Starting Location Service… Please wait", of de foutcode. Zo zie je op het toestel meteen wat er misloopt.

## 3. Deploy naar smartphone
**Default Orientation: Portrait**, API 29, IL2CPP, ARM64. GPS werkt **enkel op een echt toestel** (en best buiten). Zie [[Deploy naar Android]].

## 4. TargetLocation
Een dictionary met benoemde plaatsen (coördinaten opgezocht in **Google Maps**: rechtsklik → coördinaten kopiëren), bv. de campus, een café, een kerk. Eén ervan wordt het actieve doel.

## 5. Afstand en richting (Haversine)
- **Afstand** speler → doel in meters met de [[Haversine-formule]] (aardstraal 6 371 000 m), afgerond getoond op het canvas.
- **Richting**: de *bearing* via `atan2(x, y)` met
  `x = cos(lat2)·sin(Δlon)` en `y = cos(lat1)·sin(lat2) − sin(lat1)·cos(lat2)·cos(Δlon)`.

## 6. De pijl (RotateArrow)
De bearing is een hoek t.o.v. het **noorden**. Maar de Unity-wereld is gestart in de richting waarin je gsm toen keek. Daarom:
```
hoek = bearing − startDirection + 90
arrow.rotation = Quaternion.Euler(0, hoek, 0)
```
Correctie met de **kompasrichting bij de start**, en +90° omdat het pijlmodel standaard naar "oost" wijst. Zie [[Quaternion en rotatie (Unity)]].

## 7. De UFO
- **RotateUFO**: `transform.Rotate(new Vector3(0, 90, 0) * Time.deltaTime)` → 90°/s rond de Y-as.
- **NavigationService**: pijl en UFO **verbergen** tijdens het opstarten; **pijl** tonen als afstand **> 10 m**, **UFO** als **< 10 m**.
- **UFO herpositioneren**: anders blijft hij op de startpositie staan. Het verschil in graden (huidig − start) omzetten naar meters (× **111 320 m per graad**), als `Vector3(lonMeters, 0, latMeters)`, en roteren over `−startDirection` zodat het klopt met de camerarichting bij de start.
> De omzetting `× 111 320` is een benadering: voor lengtegraden zou je eigenlijk nog met `cos(latitude)` moeten vermenigvuldigen. Op korte afstanden volstaat het — dit is een van de "verbeteringen die mogelijk zijn".

## 8. Oefening: mystery places
Vind de **mystery places** (`51.xxx, 4.yyyy`) **zonder** Google Maps — enkel met de pijl en de afstand.

## Waarom is geolocation onnauwkeurig?
GPS wijkt enkele meters af (meer tussen gebouwen), het kompas wordt verstoord door metaal en elektronica, en Vuforia volgt hier **geen** target in het camerabeeld. Daarom werk je met een **drempel van 10 m** en een groot, duidelijk object (UFO).

## Ideeën om "verder te gaan" (opdracht 2)
Meerdere waypoints na elkaar · koud/warm/heet-feedback · geluid dat sneller piept naarmate je dichter komt · een countdown · een raadsel bij elke locatie · gevarenzones.

## Begrippen
[[Location Service (Unity)]] · [[Haversine-formule]] · [[Coroutine (Unity)]] · [[Quaternion en rotatie (Unity)]] · [[AR flavors]] · [[Deploy naar Android]]

---
Hoort bij: [[Mobile & AR Development]]
