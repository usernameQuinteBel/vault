---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [6, 8]
groep: Vuforia
aliases: [Target Manager, Vuforia database]
---
# Vuforia Target Manager

> De webtool op de Vuforia Developer Portal waarin je **databases met targets** aanmaakt, afbeeldingen uploadt, hun **herkenbaarheid** beoordeelt en ze downloadt voor Unity.

## Werkwijze (single image tracking)
1. **Generate Database** → naam + type **Device** (lokaal op het toestel; ook *Cloud* en *VuMark* bestaan).
2. **Add Target** → type **Image**, upload de foto.
3. Geef de **breedte in meters** (10 cm = 0.10). Te klein ziet er in Unity heel klein uit; de cursus raadt een waarde rond 5 aan voor het werken in de editor.
4. Pagina verversen tot de status van *Processing* naar **Active** gaat.
5. Bekijk de **sterren** (augmentable rating) en *Show Features* → de **gele punten** tonen hoe goed het beeld herkend kan worden.
6. **Download Database** → *Unity Editor* → dubbelklik het `.unitypackage` terwijl je project open is → Import.

## Wat maakt een goed target?
Veel **contrast**, veel **details en hoeken**, geen herhalende patronen, geen glanzend oppervlak. Een egale of symmetrische afbeelding krijgt weinig sterren.

## Gerelateerd
[[Image Target]] · [[Vuforia]]

---
Hoort bij: [[Vuforia en image tracking]]
