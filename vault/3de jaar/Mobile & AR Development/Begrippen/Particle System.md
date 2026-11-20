---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 10
groep: Unity
aliases: [Particles]
---
# Particle System

> Een Unity-component dat **veel kleine deeltjes** uitstoot om effecten te maken: bubbels, vuur, rook, vonken, sterretjes.

## Belangrijke modules
| Module | Bepaalt |
|---|---|
| **Main** | levensduur, snelheid, grootte, kleur, aantal |
| **Emission** | hoeveel deeltjes per seconde |
| **Shape** | vorm van de bron (kegel, bol, rand) |
| **Color/Size over Lifetime** | verloop tijdens het leven van een deeltje |
| **Renderer** | materiaal/texture van een deeltje |

## In workshop 3 (Sea World)
Opstijgende **luchtbellen** onder water. Start een effect vanuit code met `particles.Play()` (bv. bij een tik op een vis).

## Let op op mobiel
Te veel deeltjes kosten veel rekenkracht → hou het aantal beperkt.

## Bubbels maken (Sea World)
| Module | Instelling |
|---|---|
| Main | Start Lifetime 3–5 s, Start Speed 0,2, Start Size 0,02–0,05, Gravity Modifier **−0,05** (stijgen) |
| Emission | Rate over Time 5–10 |
| Shape | Cone, kleine radius onder de vis/het koraal |
| Color over Lifetime | van wit naar transparant (fade-out) |
| Renderer | een rond, half doorzichtig materiaal |

## In AR
Zet het Particle System als **child van het target**, en *Simulation Space = Local*, zodat de bubbels meebewegen met het object. Met *World* blijven ze in de wereld hangen als je het target beweegt.

## Gerelateerd
[[Workshop 3 - 3D en Model Targets]]

---
Hoort bij: [[Workshop 3 - 3D en Model Targets]]
