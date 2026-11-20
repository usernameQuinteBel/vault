---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 5
groep: Unity
aliases: [SerializeField]
---
# MonoBehaviour

> De **basisklasse** van een Unity-script. Erf ervan om eigen gedrag aan een [[GameObject]] te hangen. Unity roept zelf bepaalde methodes aan op het juiste moment (de *game loop*).

## Een eenvoudig script
```csharp
using UnityEngine;

public class Rotator : MonoBehaviour
{
    public float speed = 90f;            // instelbaar in de Inspector

    void Start()  { Debug.Log("Gestart"); }

    void Update()
    {
        transform.Rotate(0, speed * Time.deltaTime, 0);
    }
}
```
Sleep het script op een GameObject (of *Add Component* in de Inspector).

## Belangrijke methodes (callbacks)
| Methode | Wanneer |
|---|---|
| `Awake()` | bij het laden, vóór `Start` |
| `Start()` | één keer, vóór de eerste frame |
| `Update()` | **elke frame** |
| `FixedUpdate()` | vaste interval, voor physics |
| `OnCollisionEnter()` / `OnTriggerEnter()` | bij botsingen |
| `OnDestroy()` | bij verwijderen |
Zie [[Start en Update]].

## Publieke velden = Inspector
`public` velden (of `[SerializeField] private`) verschijnen in de **Inspector**, zodat je waarden en referenties (bv. een ander GameObject, een AudioSource) kan **slepen** zonder code te wijzigen.

## Gerelateerd
[[Start en Update]] · [[GameObject]]

---
Hoort bij: [[Unity basis]]
