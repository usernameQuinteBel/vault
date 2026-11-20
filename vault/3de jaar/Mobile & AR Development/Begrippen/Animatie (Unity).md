---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [8, 10]
groep: Unity
aliases: [Animator, Legacy animation, Bobbing]
---
# Animatie (Unity)

> Beweging van een 3D-model: lopen, aanvallen, zwemmen. In Unity speel je animaties af met het **Animation**- (Legacy) of het **Animator**-component.

## Legacy vs. Animator
| Legacy (`Animation`) | Mecanim (`Animator`) |
|---|---|
| eenvoudig: clip afspelen met `anim.Play("Attack")` | met een **state machine** (overgangen, parameters) |
| volstaat voor simpele animaties (cursus) | voor complexe personages |

## In workshop 1 (Dino Battle)
- Animaties van de Sketchfab-modellen toevoegen (op **Legacy** zetten in de import-instellingen).
- Een **AnimationManager**-script dat een animatie start wanneer een dino **getrackt** wordt, en de **fight**-animaties tijdens het gevecht.

## Animatie via code (workshop 3)
Ook zonder animatieclips kan je bewegen met wiskunde, bv. een vis die op en neer **dobbert** met een sinus:
```csharp
void Update()
{
    float y = startY + Mathf.Sin(Time.time * speed) * amplitude;
    transform.localPosition = new Vector3(x, y, z);
}
```
Sinus en cosinus samen geven een **cirkelbeweging** (rondzwemmen).

## Gerelateerd
[[Sketchfab]] · [[Workshop 1 - Dino Battle]] · [[Workshop 3 - 3D en Model Targets]]

---
Hoort bij: [[Workshop 1 - Dino Battle]]
