---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [1, 6]
groep: Vuforia
aliases: [Vuforia Engine]
---
# Vuforia

> Een **augmented-reality-platform** (van PTC) waarmee je AR-ervaringen maakt voor Android, iOS en Windows. Vuforia **herkent** iets in de echte wereld (een afbeelding, een object) en laat [[Unity]] er virtuele inhoud op plaatsen.

## Hoe werkt AR met Vuforia?
1. De **camera** van het toestel filmt de omgeving.
2. Vuforia zoekt **feature points** en herkent een gekend **target**.
3. Het berekent de **positie en oriëntatie** (pose) van dat target t.o.v. de camera.
4. Unity tekent je 3D-model op die plek, en het blijft "vastgeplakt" als je beweegt (**tracking**).

## De drie AR flavors
1. **Image recognition** → [[Image Target]]
2. **Object/scene recognition** → [[Model Target]], Cylinder Target
3. **Geolocation AR** → GPS/kompas (eigenlijk niet echt ondersteund door Vuforia)
Zie [[AR flavors]].

## Opzetten (cursus)
- Gratis **Vuforia Developer-account** (Thomas More-mail).
- **Vuforia Engine 11.4.4** (vereist Unity 6 LTS ≥ 6000.0.38f1).
- Eerst **AR Foundation** installeren (Package Manager → Unity Registry), dan Vuforia via *Add package from git URL*: `https://github.com/mcloots/vuforia_package_11.4.4.git`.
- Een **[[Vuforia License Key]]** aanmaken en invullen.
- Targets beheren in de **[[Vuforia Target Manager]]**.

## Gerelateerd
[[AR flavors]] · [[Image Target]] · [[Model Target]] · [[Vuforia License Key]]

## Meer leren
- [Vuforia Engine developer library](https://developer.vuforia.com/library/)

---
Hoort bij: [[Vuforia en image tracking]]
