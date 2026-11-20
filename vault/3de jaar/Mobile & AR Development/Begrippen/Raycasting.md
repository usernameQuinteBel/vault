---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 10
groep: Unity
aliases: [Physics.Raycast, Screen space, World space]
---
# Raycasting

> Een **onzichtbare straal** de 3D-scène in schieten (meestal vanuit de camera, door het punt waar je tikt) en kijken welke **collider** hij als eerste raakt. Zo weet je op **welk object** de gebruiker tikt.

## Code
```csharp
void Update()
{
    if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
    {
        Ray ray = Camera.main.ScreenPointToRay(Input.GetTouch(0).position);
        if (Physics.Raycast(ray, out RaycastHit hit))
        {
            if (hit.collider.CompareTag("Turtle")) StartDragging(hit.collider.gameObject);
        }
    }
}
```

## Voorwaarden
- Het object moet een **Collider** hebben (Box, Sphere, Mesh…).
- Optioneel **tags** of **layers** om te filteren.

## Screen space ↔ world space
Je vinger tikt in **schermcoördinaten** (pixels, 2D), het object staat in **wereldcoördinaten** (3D). `ScreenPointToRay` en `ScreenToWorldPoint` zetten om. Bij **slepen** (de schildpad in Sea World) reken je de vingerpositie telkens om naar een wereldpositie op de juiste diepte.

## Gerelateerd
[[GameObject]] · [[Workshop 3 - 3D en Model Targets]]

---
Hoort bij: [[Workshop 3 - 3D en Model Targets]]
