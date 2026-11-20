---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 8
groep: Unity
---
# Sketchfab

> Een website (https://sketchfab.com/) met **duizenden 3D-modellen**, vaak gratis te downloaden, inclusief textures en soms **animaties**. In workshop 1 haal je er de dino's vandaan.

## Werkwijze
1. Zoek een model en filter op **Downloadable** (en eventueel *Animated*).
2. Let op de **licentie** (vaak *CC Attribution*: naam van de maker vermelden).
3. Download in een formaat dat Unity kan lezen (FBX, glTF/[[GLB-formaat|GLB]]).
4. Sleep het model en de **textures/materials** in je Project en zet ze op de juiste plaats.

## Tips
- Kijk naar het aantal **polygonen**: zware modellen vertragen een mobiele AR-app.
- Controleer of de **schaal** klopt (dino's kunnen gigantisch of piepklein binnenkomen).

## Model voorbereiden voor Unity
1. Download liefst **FBX** of **glTF/GLB** (met textures).
2. Importeer in Unity en controleer:
   - **schaal** (Scale Factor in de import-instellingen),
   - **materialen** (Extract Materials/Textures als ze roze of wit zijn),
   - **animaties** (tab *Rig*: Legacy voor de workshop; tab *Animation*: clips en namen).
3. Noteer de **animatienamen** — die heb je nodig in de AnimationManager.

## Licenties
| Licentie | Betekent |
|---|---|
| CC BY | gratis, **naam van de maker vermelden** |
| CC BY-NC | enkel niet-commercieel |
| CC0 | vrij te gebruiken |
Vermeld de bronnen in je opdracht of project (bv. in de README).

## Gerelateerd
[[Workshop 1 - Dino Battle]] · [[Animatie (Unity)]]

---
Hoort bij: [[Workshop 1 - Dino Battle]]
