---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [6, 8, 9, 10]
groep: Unity
aliases: [Build naar Android, Player Settings, Build Profiles]
---
# Deploy naar Android

> De vaste **buildinstellingen** om een Unity/Vuforia-app op een Android-toestel te draaien. Komt in **elke** workshop terug.

## Stappen
1. Open de scène met **ARCamera**, targets en modellen, en **sla op**.
2. Controleer de **[[Vuforia License Key]]**.
3. **File → Build Profiles** (oudere Unity: *Build Settings*) → **Android** → **Switch Platform**.
4. **Scene List** → *Add Open Scenes*; je AR-scène aangevinkt en als **eerste**.
5. **Player Settings → Android → Other Settings**:

| Instelling | Waarde | Waarom |
|---|---|---|
| Minimum API Level | **Android 10 (API 29)** | vereiste van Vuforia |
| Scripting Backend | **IL2CPP** | nodig voor ARM64 |
| Target Architectures | enkel **ARM64** | moderne toestellen, vereist door Google Play |
| Default Orientation | **Portrait** (geolocation) | vaste schermstand |
| Graphics API | volgens de cursuspagina | compatibiliteit met Vuforia |

6. Toestel in **ontwikkelaarsmodus** met **USB-debugging** → **Build and Run**.

## Problemen?
- Zwart camerabeeld → license key of camerapermissie.
- Build faalt → verkeerde SDK/API-versie (gebruik de geteste combinatie).

Voor de **Flutter-integratie** gelden andere versies: zie [[Flutter-Unity-Vuforia integratie]].

## Gerelateerd
[[Vuforia License Key]] · [[IL2CPP en ARM64]]

---
Hoort bij: [[Vuforia en image tracking]]
