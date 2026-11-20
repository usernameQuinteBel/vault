---
type: chapter
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 10
groep: Onderdeel 3: Workshops
---
# Workshop 3 - 3D en Model Targets

> **Object/scene recognition**: AR op echte **3D-voorwerpen**. Deel A gebruikt een **Cylinder Target** (Sea World, met veel 3D-game-technieken en interactie); deel B maakt een **[[Model Target]]** van een eigen voorwerp. Basis voor **opdracht 3 (interactie)**.

## Deel A — Cylinder Target: Sea World
Een onderwaterwereld rond een cilindervormig voorwerp (blikje, beker).

| Onderdeel | Techniek | Script / begrip |
|---|---|---|
| Koraal | **GLB**-model via package `com.unity.cloud.gltfast` | [[GLB-formaat]] |
| Clownvis draait rond | `transform.Rotate(0, yDirection * Time.deltaTime, 0)` | `Rotate` |
| Vissen dobberen | **sinus** voor op/neer, **cosinus** voor het kantelen | `FishBobbing` |
| Meer vissen | **Ctrl+D** dupliceren; elke vis een willekeurige fase | |
| Onderzeeër duikt | `startY + sin(Time.time * diveSpeed) * diveDepth` | `SubmarineMovement` |
| Licht aan/uit bij tik | **raycast** + emission-kleur van het materiaal | `ToggleLight` · [[Raycasting]] |
| Schildpad kijkt naar je | richting naar de AR-camera + `Quaternion.Slerp` | `LookAtCamera` |
| Schildpad slepen | **screen space ↔ world space** | `MoveTurtle` |
| Luchtbellen | **Particle System** | [[Particle System]] |
| Sfeer | Audio Source + Loop | [[Audio Source]] |

### FishBobbing uitgelegd
```csharp
float t = (Time.time + randomOffset) * bobSpeed;
float y = startY + Mathf.Sin(t) * bobHeight;          // op en neer tussen -1 en 1
float tilt = Mathf.Cos(t) * maxTiltAngle;             // cos = helling van de sinusgolf
transform.localRotation = Quaternion.Euler(tilt, transform.localEulerAngles.y, transform.localEulerAngles.z);
```
- `randomOffset` (0–10) → niet alle vissen bewegen synchroon.
- De **cosinus is de afgeleide** van de sinus: als de vis stijgt, wijst de neus omhoog; als hij daalt, omlaag.
- `[Header]` en `[Tooltip]` maken de instellingen duidelijk in de Inspector.

### ToggleLight (interactie met raycast)
Met het **nieuwe Input System** (`Pointer.current` werkt voor muis én touch): bij `press.wasPressedThisFrame` een ray uit `Camera.main.ScreenPointToRay(...)` schieten; raakt die de onderzeeër (of een child), dan wisselt de `_EmissionColor` van het neus-materiaal tussen aan en uit. Zie [[Input System (Unity)]].

### LookAtCamera
Richting = `transform.position − arCamera.position` (omgekeerd, omdat het model achterstevoren staat), `y = 0` zodat de schildpad niet kantelt, dan `Quaternion.LookRotation` en **`Slerp`** voor een trage, vloeiende draai. Zie [[Quaternion en rotatie (Unity)]].

### MoveTurtle: slepen
1. Bij aanraken: raycast → raken we de schildpad? Onthoud de **diepte** (afstand tot de camera) en de **offset** tussen vinger en object.
2. Tijdens slepen: vingerpositie + diepte → `ScreenToWorldPoint` → nieuwe positie (+ offset).
3. Bij loslaten: stoppen, en `FishBobbing` een nieuwe **basishoogte** geven (anders springt de schildpad terug).

## Deel B — Model Target: een eigen voorwerp
Pipeline: **voorwerp → 3D-model → Model Target → Unity**.
1. **[[Reality Scan]]** (gsm): witte achtergrond, buiten, rondwandelen, ±150 foto's, croppen, processen, exporteren.
2. **Model Target Generator** (desktop): model openen → **up vector** rechtop → **juiste grootte** → **Advanced view (Full 360°)** → *Generate Advanced Model Target → Create Database → Add Model Targets* → **Train** (duurt heel lang) → export als Unity-package.
3. **Unity**: nieuw project + Vuforia, de Model Target Database importeren, de Model Targets in de scène zetten, je modellen eraan koppelen, deployen.
> Bij model targets wordt **één target tegelijk** gevolgd (max. 5 in een database).

## Andere 3D-targets
| Target | Voor |
|---|---|
| **Cylinder Target** | cilinders: blikje, fles, beker |
| **Multi Target** | doosvormige voorwerpen met meerdere vlakken |
| **Model Target** | willekeurige vormen op basis van een 3D-model |

## Deploy
API 29 · IL2CPP · ARM64 → [[Deploy naar Android]].

## Ideeën om "verder te gaan" (opdracht 3)
Meer interactie (tikken, slepen, verzamelen) · een mini-spel rond het voorwerp · geluid per actie · uitleg-labels die verschijnen bij een tik.

## Begrippen
[[Model Target]] · [[Reality Scan]] · [[GLB-formaat]] · [[Raycasting]] · [[Input System (Unity)]] · [[Quaternion en rotatie (Unity)]] · [[Particle System]] · [[Animatie (Unity)]] · [[Audio Source]] · [[Deploy naar Android]]

---
Hoort bij: [[Mobile & AR Development]]
