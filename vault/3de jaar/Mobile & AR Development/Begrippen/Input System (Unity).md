---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 10
groep: Unity
aliases: [New Input System, Pointer.current]
---
# Input System (Unity)

> Het **nieuwe Input System**-package van Unity: één manier om invoer te lezen van muis, touchscreen, toetsenbord en controllers. Vervangt de oude `Input.GetMouseButtonDown`/`Input.touches`-API.

## Pointer: muis én touch in één
In workshop 3 gebruik je `Pointer.current`, zodat dezelfde code werkt in de **editor (muis)** en op de **gsm (vinger)**:
```csharp
using UnityEngine.InputSystem;

void Update()
{
    if (Pointer.current != null && Pointer.current.press.wasPressedThisFrame)
    {
        Vector2 screenPos = Pointer.current.position.ReadValue();
        Ray ray = Camera.main.ScreenPointToRay(screenPos);
        if (Physics.Raycast(ray, out RaycastHit hit)) { /* object geraakt */ }
    }
}
```

## Belangrijke eigenschappen
| Eigenschap | Betekenis |
|---|---|
| `press.wasPressedThisFrame` | net ingedrukt (begin van tik/klik) |
| `press.isPressed` | wordt vastgehouden (slepen) |
| `press.wasReleasedThisFrame` | net losgelaten |
| `position.ReadValue()` | schermpositie in pixels |

## Instellen
*Project Settings → Player → Active Input Handling* op **Input System Package (New)** of **Both**. Unity 6-projecten gebruiken standaard het nieuwe systeem.

## Gerelateerd
[[Raycasting]] · [[Workshop 3 - 3D en Model Targets]]

---
Hoort bij: [[Workshop 3 - 3D en Model Targets]]
