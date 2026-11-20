---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [8, 10]
groep: Unity
aliases: [AudioSource, Geluid (Unity)]
---
# Audio Source

> Het Unity-component dat **geluid afspeelt** op een [[GameObject]]. Een **Audio Listener** (standaard op de camera) "hoort" het.

## Belangrijke instellingen
| Instelling | Betekenis |
|---|---|
| **AudioClip** | het geluidsbestand |
| **Play On Awake** | meteen afspelen bij het starten |
| **Loop** | blijven herhalen (achtergrondmuziek) |
| **Volume** / **Pitch** | luidheid / toonhoogte |
| **Spatial Blend** | 2D (overal even luid) ↔ 3D (afhankelijk van afstand) |

## In de workshops
- **Achtergrondgeluid**: een leeg GameObject met een Audio Source + **Loop** (Dino Battle, Sea World).
- **Roar bij het gevecht**: een Audio Source op het script `CheckDistanceDinos` en afspelen in de `Fight`-methode:
```csharp
public AudioSource roar;
void Fight() { roar.Play(); /* animaties */ }
```

## 2D vs. 3D-geluid in AR
Met **Spatial Blend = 3D** wordt een geluid stiller naarmate de camera (je gsm) verder van het object is — in AR heel natuurlijk: kom dichter bij de dino en de roar wordt luider. Stel **Min/Max Distance** in (bv. 0,1–2 m bij kleine modellen).

## Vanuit code
```csharp
roar.PlayOneShot(roarClip);   // speelt een clip af zonder de huidige te onderbreken
roar.Stop();
if (!roar.isPlaying) roar.Play();
```

## Tips
- Begin achtergrondmuziek pas bij **Target Found** en pauzeer bij **Target Lost**.
- Comprimeer audio (Vorbis) om de app klein te houden.

## Gerelateerd
[[GameObject]] · [[Workshop 1 - Dino Battle]]

---
Hoort bij: [[Workshop 1 - Dino Battle]]
