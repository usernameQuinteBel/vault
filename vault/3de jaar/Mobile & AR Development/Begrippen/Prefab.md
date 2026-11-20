---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 5
groep: Unity
aliases: [Instantiate]
---
# Prefab

> Een **herbruikbaar sjabloon** van een [[GameObject]], inclusief al zijn components, instellingen en kinderen, bewaard als asset in je Project.

## Waarom?
- Je maakt **meerdere instanties** van hetzelfde object (vissen, dino's, UFO's) zonder alles opnieuw in te stellen.
- Pas je de **prefab** aan, dan veranderen **alle instanties** mee.
- Je kan instanties ook **in code** aanmaken:
```csharp
public GameObject fishPrefab;
void Start() { Instantiate(fishPrefab, new Vector3(0, 0.1f, 0), Quaternion.identity); }
```

## Maken
Sleep een GameObject van de **Hierarchy** naar het **Project**-panel → het wordt een prefab (blauw icoon).

## Prefab-mode en overrides
- Dubbelklik op een prefab → **Prefab Mode**: wijzigingen gelden voor **alle** instanties.
- Wijzig je één instantie in de scène, dan is dat een **override** (vetgedrukt in de Inspector). Met *Overrides → Apply All* zet je ze terug in de prefab, met *Revert* gooi je ze weg.
- **Nested prefabs**: een prefab in een prefab (bv. een vis met een bubbel-prefab).
- **Prefab variants**: een afgeleide versie (rode vis) die erft van de basis (vis).

## Vergelijking
Een prefab is voor Unity wat een **component** is in Figma of een **eigen widget** in Flutter: één bron, veel instanties.

## Gerelateerd
[[GameObject]] · [[Unity basis]]

---
Hoort bij: [[Unity basis]]
