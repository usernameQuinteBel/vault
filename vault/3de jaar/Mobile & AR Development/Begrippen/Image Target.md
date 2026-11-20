---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [6, 8]
groep: Vuforia
aliases: [Multiple image tracking, Default Observer Event Handler]
---
# Image Target

> Een **platte afbeelding** die [[Vuforia]] herkent en waarop het virtuele inhoud plaatst. De eenvoudigste [[AR flavors|AR-flavor]] (image recognition).

## In Unity
1. Database importeren (uit de [[Vuforia Target Manager]]).
2. Hierarchy → **Vuforia Engine → Image Target**.
3. Inspector → *Image Target Behaviour*: **Type = From Database**, kies database en target.
4. Voeg een 3D-object toe, plaats het **boven** het beeld en maak het een **child** van het Image Target.
5. **Play** en houd de afbeelding voor je webcam → het object verschijnt.

## Reageren op tracking
Het Image Target heeft een **Default Observer Event Handler** met events *On Target Found* en *On Target Lost*. Koppel er methodes aan, bv. een animatie starten of geluid afspelen wanneer de dino zichtbaar wordt (workshop 1).

## Multiple image tracking
Meerdere targets tegelijk herkennen (Dino Battle: elke dino op zijn eigen kaart). Stel in de Vuforia-configuratie het **maximum aantal gelijktijdig getrackte afbeeldingen** hoog genoeg in.

## Gerelateerd
[[Vuforia Target Manager]] · [[AR flavors]] · [[Workshop 1 - Dino Battle]]

---
Hoort bij: [[Vuforia en image tracking]]
