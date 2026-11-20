---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 10
groep: Unity
aliases: [glTF, glTFast]
---
# GLB-formaat

> **GLB** is de binaire versie van **glTF**, een open standaard voor 3D-modellen ("de JPEG van 3D"). Eén bestand bevat het model, de **textures** en eventueel **animaties**.

## In Unity
Unity leest GLB niet standaard → installeer het package **glTFast** (`com.unity.cloud.gltfast`) via de Package Manager. Daarna sleep je `.glb`-bestanden gewoon in je Project (het koraal in Sea World).

## Waarom GLB?
- **Eén bestand** (geen losse textures die zoek raken).
- Compact en snel te laden — goed voor mobiel.
- Breed ondersteund (Sketchfab, Blender, web).

## Formaten vergeleken
| Formaat | Kenmerken |
|---|---|
| **FBX** | Autodesk-standaard, ingebouwd in Unity, animaties ✓, textures vaak los |
| **OBJ** | eenvoudig, geen animaties, materialen in aparte `.mtl` |
| **glTF / GLB** | open standaard, compact, PBR-materialen, animaties ✓; GLB = alles in één bestand |

## Importeren met glTFast
1. *Package Manager → + → Add package by name* → `com.unity.cloud.gltfast`.
2. Sleep het `.glb`-bestand in je Assets → het verschijnt als een prefab-achtig asset.
3. Sleep het in de scène (als child van je target) en pas **schaal en rotatie** aan.

## Gerelateerd
[[Sketchfab]] · [[Workshop 3 - 3D en Model Targets]]

---
Hoort bij: [[Workshop 3 - 3D en Model Targets]]
