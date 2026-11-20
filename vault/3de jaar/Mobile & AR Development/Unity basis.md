---
type: chapter
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 5
groep: Onderdeel 2: Unity & Vuforia
---
# Unity basis

> [[Unity]] leren kennen als voorbereiding op de AR-scènes: installeren, de editor, [[GameObject]]s en components, physics, materialen, prefabs en je eerste C#-scripts.

## 1. Installatie
| Onderdeel | Keuze | Waarom |
|---|---|---|
| Unity Hub | beheert versies en projecten | |
| Editor | **Unity 6.3 LTS** (nieuwste `6000.3.x`) | stabiel én ondersteund door de Flutter-embedding |
| Modules | **Android Build Support** (+ OpenJDK, Android SDK & NDK) | om naar Android te bouwen |
| Android SDK | **Platform 34** voor Unity/Vuforia | 36 gaf buildproblemen bij de embedded build |
Nieuw project: template **3D (URP of Core)**.

## 2. De editor
Hierarchy (wat staat er in de scène) · **Scene** (bewerken) · Game (wat de speler ziet) · Inspector (components van het geselecteerde object) · Project (assets) · Console (logs). Sneltoetsen **W/E/R** voor move/rotate/scale, **F** om te focussen. Zie [[Unity editor-panels]].

## 3. Basisoefening stap voor stap
1. **Cube** toevoegen (*GameObject → 3D Object → Cube*), verplaatsen, roteren, schalen → **Transform**.
2. Een afgeplatte cube als **vloer** en een **sphere** erboven.
3. Sphere een **Rigidbody** geven → Play → hij valt op de vloer (physics + colliders).
4. **Materialen** maken (kleur, texture) en op objecten slepen.
5. Objecten **nesten** (parent/child): het kind beweegt mee.
6. Een object naar het Project slepen → **[[Prefab]]**; meerdere instanties plaatsen.
7. Een **C#-script** schrijven (bv. een object laten draaien) en erop slepen.

## 4. Scripten: het minimum
```csharp
public class Rotate : MonoBehaviour
{
    public int yDirection = 45;                       // instelbaar in de Inspector
    void Update() => transform.Rotate(0, yDirection * Time.deltaTime, 0);
}
```
- Elke script erft van [[MonoBehaviour]].
- `Start()` één keer, `Update()` elke frame, beweging × `Time.deltaTime` → [[Start en Update]].
- Andere objecten vinden: `FindFirstObjectByType<T>()`, `GetComponent<T>()`, `GetComponentInChildren<T>()`.
- Loggen: `Debug.Log(...)` → Console.

## 5. Components die je in de workshops terugziet
| Component | Workshop |
|---|---|
| Animation | [[Animatie (Unity)]] — dino's |
| Audio Source | [[Audio Source]] — achtergrond en roar |
| Collider + raycast | [[Raycasting]] — op objecten tikken |
| Particle System | [[Particle System]] — bubbels |
| Canvas + Text | UI-tekst in de geolocation-workshop |

## Begrippen
[[Unity]] · [[Unity editor-panels]] · [[GameObject]] · [[MonoBehaviour]] · [[Start en Update]] · [[Prefab]] · [[Coroutine (Unity)]] · [[Quaternion en rotatie (Unity)]]

## Bron
https://itf-mobiledevelopment.netlify.app/unity/basics

---
Hoort bij: [[Mobile & AR Development]]
