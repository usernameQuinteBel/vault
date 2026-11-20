---
type: chapter
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 8
groep: Onderdeel 3: Workshops
---
# Workshop 1 - Dino Battle

> **Multiple image tracking**: elke dino staat op zijn **eigen kaart** ([[Image Target]]). Toon je twee kaarten tegelijk en schuif je ze **dicht genoeg** bij elkaar, dan **vechten** de dino's met animaties en geluid — en de **sterkste wint**. Basis voor **opdracht 1**.

## Wat leer je?
Multiple image tracking · 3D-modellen van [[Sketchfab]] · [[Animatie (Unity)|modelanimaties]] · [[Start en Update|de game loop]] · afstanden in 3D · geluid met [[Audio Source]] · [[Deploy naar Android]].

## Stap voor stap
| # | Stap | Hoe |
|---|---|---|
| 1 | Project + Vuforia | git-package 11.4.4 + [[Vuforia License Key]] |
| 2 | Targets | in de [[Vuforia Target Manager]] één image per dino; database importeren |
| 3 | Image Targets in de scène | per dino een Image Target; max. aantal gelijktijdige targets hoog genoeg |
| 4 | Modellen | dino's van Sketchfab importeren + textures/materials; als **child** op hun target |
| 5 | Animaties | import op **Legacy** (volstaat hier); een **AnimationManager** |
| 6 | Animatie bij tracking | script `StartAnimationWhenTracked` op elk target |
| 7 | Afstand checken | script `CheckDistanceDinos` met `Vector3.Distance` |
| 8 | Eén gevecht per paar | gevechten bijhouden in een **dictionary** |
| 9 | Fight | aanval- en val-animaties afspelen |
| 10 | Geluid | achtergrondmuziek (loop) + roar in `Fight` |
| 11 | Sterkste wint | `DinoProperties` met `strength` |
| 12 | Deploy | API 29, IL2CPP, ARM64 |

## De scripts uitgelegd
**AnimationManager** — één centrale plek die per model weet welke animatie bij welke actie hoort, met drie dictionaries:
```csharp
idleAnimations.Add("TriceratopsModel", "NoseDirt");
attackAnimations.Add("TriceratopsModel", "Attack");
fallAnimations.Add("TriceratopsModel", "Fall");
// + getters: GetIdleAnimation(name), GetAttackAnimation(name), ...
```
Waarom? Elk Sketchfab-model noemt zijn animaties anders; zo blijven de andere scripts generiek.

**StartAnimationWhenTracked** — staat op elk Image Target. In `Start()` zoekt het de AnimationManager (`FindFirstObjectByType`) en het `Animation`-component van het model (`GetComponentInChildren`). Methodes `DinoFound()` / `DinoLost()` koppel je aan **On Target Found / Lost**: idle-animatie starten of stoppen.

**CheckDistanceDinos** — in `Update()` elk **paar** dino's overlopen (dubbele lus `i`, `j = i + 1`) en de afstand vergelijken met een drempel (`closeThreshold`):
```csharp
bool AreDinosClose(GameObject a, GameObject b) =>
    Vector3.Distance(a.transform.position, b.transform.position) < closeThreshold;
```
Probleem: `Update()` loopt elke frame → zonder extra logica start het gevecht **tientallen keren per seconde**. Oplossing: een **dictionary** met reeds gestarte gevechten (sleutel bv. `"Triceratops-Stegosaurus"`) en enkel vechten als het paar er nog niet in zit.

**Fight(winner, loser)** — speelt bij de winnaar de **attack**-animatie één keer (`WrapMode.Once`), bij de verliezer de **fall**-animatie, en speelt de **roar** (`AudioSource.Play()`).

**DinoProperties** — een klein script met `public float strength = 100f;` per dino. In `CheckDistanceDinos` vergelijk je de `strength` en bepaal je zo **winnaar en verliezer**.

## Geluid
- Leeg GameObject + Audio Source + **Loop** → achtergrondgeluid.
- Audio Source op het object met `CheckDistanceDinos` → roar in `Fight()`.

## Oefening
Voeg een **derde dino** (Tyrannosaurus) toe en herhaal alle stappen: target, model, animatienamen in de AnimationManager, sterkte, opname in de `dinos`-array.

## Ideeën om "verder te gaan" (opdracht 1)
Levensbalk boven de dino's · particles bij een treffer · een scorebord · herstarten van een gevecht als je de kaarten uit elkaar haalt · verschillende aanvallen afhankelijk van de afstand.

## Begrippen
[[Image Target]] · [[Vuforia Target Manager]] · [[Sketchfab]] · [[Animatie (Unity)]] · [[Start en Update]] · [[Audio Source]] · [[Deploy naar Android]]

---
Hoort bij: [[Mobile & AR Development]]
