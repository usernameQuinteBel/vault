---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [6, 8]
groep: Unity
aliases: [IL2CPP, ARM64]
---
# IL2CPP en ARM64

> Twee buildinstellingen die je bij elke Android-build zet.

## IL2CPP
**Intermediate Language To C++**: Unity zet je C#-code (IL) om naar **C++** en compileert die naar native machinecode.
| Mono (alternatief) | IL2CPP |
|---|---|
| sneller bouwen | trager bouwen |
| enkel 32-bit (ARMv7) | ondersteunt **ARM64** |
| — | betere performance |

## ARM64
De **64-bit processorarchitectuur** van moderne smartphones. Google Play eist 64-bit, en Vuforia heeft het nodig. Omdat Mono geen ARM64 ondersteunt, moet je dus **IL2CPP** kiezen.

## Gevolgen voor je workflow
- IL2CPP-builds duren **langer** (C++-compilatie); de eerste build kan meerdere minuten duren — volgende builds gaan sneller.
- **Code stripping**: IL2CPP verwijdert code die nergens aangeroepen lijkt te worden. Methodes die enkel via reflectie of vanuit **Flutter** worden opgeroepen moet je beschermen met `[Preserve]` (zie [[flutter_embed_unity]]).
- Je hebt de **Android NDK** nodig (meegeïnstalleerd via Unity Hub bij Android Build Support).

## Controleren
*Player Settings → Other Settings → Configuration*: Scripting Backend = IL2CPP, Target Architectures = enkel ARM64 aangevinkt (ARMv7 uit).

## Gerelateerd
[[Deploy naar Android]]

---
Hoort bij: [[Deploy naar Android]]
