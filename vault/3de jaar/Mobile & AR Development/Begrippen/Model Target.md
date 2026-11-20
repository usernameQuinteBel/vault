---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 10
groep: Vuforia
aliases: [Model Targets, Cylinder Target, Model Target Generator]
---
# Model Target

> Een AR-target op basis van een **echt 3D-voorwerp**: Vuforia herkent de **vorm** van het object (niet een afbeelding) en plaatst er inhoud op. Valt onder object/scene recognition.

## De pipeline in drie stappen (workshop 3)
| Stap | Tool | Van → naar |
|---|---|---|
| 1 | **[[Reality Scan]]** (telefoon-app) | echt voorwerp → **3D-model** |
| 2 | **Model Target Generator** (Vuforia, desktop) | 3D-model → **Object/Model Target** |
| 3 | **Unity** | target-database + jouw AR-inhoud |

## Model Target Generator (stap 2)
1. Download op https://developer.vuforia.com/downloads/tools.
2. *Create a Model Target* → selecteer je gescande model.
3. **Up vector** juist zetten (object rechtop).
4. De **juiste grootte** (echte afmetingen) instellen.
5. Een **Advanced view (Full 360°)** maken zodat het object vanuit elke hoek herkend wordt.
6. *Generate Advanced Model Target* → *Create Database* → *Add Model Targets* → **Train** (duurt lang!).
7. **Export** als Unity-package.

## Verwante targets
- **Cylinder Target**: een cilindervormig oppervlak (blikje, fles) — Sea World in deel 1 van workshop 3.
- **Multi Target**: een doos met meerdere vlakken.
- **[[Image Target]]**: plat.

## Gerelateerd
[[Reality Scan]] · [[AR flavors]] · [[Workshop 3 - 3D en Model Targets]]

---
Hoort bij: [[Workshop 3 - 3D en Model Targets]]
