---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [1, 5]
groep: Unity
aliases: [Unity Hub, Unity 6]
---
# Unity

> Een **cross-platform game-engine** om 2D- en 3D-ervaringen te bouwen. Populair voor mobiele games en indie-games, en relatief toegankelijk voor beginners. In dit vak bouw je er de **3D-wereld en de AR-logica** mee.

## Waarom Unity voor AR?
- Een volwaardige **3D-engine**: modellen, animaties, licht, physics, geluid.
- **[[Vuforia]]** (en AR Foundation) integreren als package.
- Bouwt naar **Android** en iOS, en kan als **library** in een [[Flutter]]-app ingebed worden ([[Flutter-Unity-Vuforia integratie]]).

## Versie in de cursus
**Unity 6.3 LTS** (`6000.3.x`), via **Unity Hub**, met **Android Build Support**. Gebruik **Android SDK Platform 34** voor Unity/Vuforia (niet 36 voor de standalone build — geeft buildproblemen).

> LTS = *Long Term Support*: de stabiele versie met langdurige bugfixes. Nieuwere "Update"-releases (6000.4) worden nog niet ondersteund door de Flutter-embedding.

## Hoe programmeer je in Unity?
Je maakt **[[GameObject]]s** in een **scène** en geeft ze gedrag met **C#-scripts** die erven van [[MonoBehaviour]] (met [[Start en Update]]).

## De editor
Hierarchy, Scene, Game, Inspector, Project en Console: zie [[Unity editor-panels]].

## Gerelateerd
[[GameObject]] · [[MonoBehaviour]] · [[Unity editor-panels]] · [[Vuforia]]

## Meer leren
- [Unity Learn](https://learn.unity.com/)

---
Hoort bij: [[Unity basis]]
