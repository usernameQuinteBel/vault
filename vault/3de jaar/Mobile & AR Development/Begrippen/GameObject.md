---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 5
groep: Unity
aliases: [Component (Unity), Transform]
---
# GameObject

> Elk object in een Unity-scène: een 3D-model, de camera, een licht, een leeg container-object. Een GameObject doet op zich **niets**; je geeft het eigenschappen en gedrag via **components**.

## Het component-systeem
| Component | Waarvoor |
|---|---|
| **Transform** | positie, rotatie, schaal (heeft **elk** object) |
| **Mesh Filter + Mesh Renderer** | de vorm en hoe ze getekend wordt |
| **Material** | kleur en texture |
| **Collider** | botsingen en aanraken (nodig voor [[Raycasting]]) |
| **Rigidbody** | physics: zwaartekracht, krachten |
| **Audio Source** | geluid afspelen (zie [[Audio Source]]) |
| **Animator / Animation** | animaties afspelen |
| **Script** ([[MonoBehaviour]]) | eigen gedrag in C# |

## Parent en child
Een child beweegt, draait en schaalt **mee** met zijn parent. Zo hangt je 3D-model aan een [[Image Target]]: wordt het target bewogen, dan beweegt het model mee.

## In de basisoefening
Een cube maken, verplaatsen/roteren/schalen, een **sphere met Rigidbody** laten vallen op een afgeplatte cube (physics), kleuren en textures geven, en van objecten een [[Prefab]] maken.

## Vanuit code
```csharp
GameObject dino = GameObject.Find("Raptor");
dino.transform.position = new Vector3(0, 0.1f, 0);
var anim = dino.GetComponent<Animation>();
```

## Gerelateerd
[[MonoBehaviour]] · [[Prefab]] · [[Unity editor-panels]]

---
Hoort bij: [[Unity basis]]
