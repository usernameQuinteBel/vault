---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [5, 8]
groep: Unity
aliases: [Game loop, Update(), Time.deltaTime]
---
# Start en Update

> De twee belangrijkste methodes van de **game loop** in een [[MonoBehaviour]].

| Methode | Wanneer | Typisch gebruik |
|---|---|---|
| `Start()` | **één keer**, vlak voor de eerste frame | referenties ophalen, beginwaarden, dictionary aanmaken |
| `Update()` | **elke frame** (30–120× per seconde) | beweging, input, afstanden checken, [[Raycasting]] |

## Time.deltaTime
De tijd sinds de vorige frame. Vermenigvuldig beweging ermee zodat ze **frame-onafhankelijk** is:
```csharp
transform.Translate(Vector3.forward * speed * Time.deltaTime);
```
Zonder `deltaTime` beweegt een object op een snelle gsm sneller dan op een trage.

## In workshop 1 (Dino Battle)
In `Update()` meet je met `Vector3.Distance(dinoA.position, dinoB.position)` de afstand tussen getrackte dino's. Is die klein genoeg, dan start het **gevecht** — maar **slechts één keer** per paar, daarom hou je de gevechten bij in een **dictionary**.

## Let op
Zware code in `Update()` vertraagt de hele app. Doe dure dingen (`GameObject.Find`, `GetComponent`) liever één keer in `Start()` en bewaar het resultaat.

## Gerelateerd
[[MonoBehaviour]] · [[Workshop 1 - Dino Battle]]

---
Hoort bij: [[Unity basis]]
