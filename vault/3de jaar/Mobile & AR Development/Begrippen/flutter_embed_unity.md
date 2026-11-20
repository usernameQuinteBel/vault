---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 7
groep: Unity
aliases: [Unity embedding]
---
# flutter_embed_unity

> Een Flutter-**plugin** (versie **2.0.0**) die een Unity-project **als widget in een Flutter-app** toont en **berichten in twee richtingen** tussen Flutter en Unity laat sturen. Zo draait je AR-scène **binnen** je app — een vereiste van het [[AR-project]].

## Geteste combinatie (cursus)
| Tool | Versie |
|---|---|
| Flutter | 3.44.0 |
| Unity | 6.3 LTS (6000.3.x) |
| Vuforia Engine | 11.4.4 |
| flutter_embed_unity | 2.0.0 |
| Android SDK (integratie) | API 36 |

## Wat moet je configureren?
1. De **Unity-kant** van de plugin installeren in je Unity-project en Unity **exporteren** naar het Android-project van Flutter.
2. **ProGuard**-instellingen aanpassen (zodat Unity-klassen niet weggestript worden).
3. **MainActivity** aanpassen.
4. **Impeller uitzetten** voor de embedded AR-view (de nieuwe Flutter-renderer werkt niet samen met de Unity-view).
5. `compileSdk`/`targetSdk` vastzetten zoals de cursus voorschrijft.

## Communicatie
- **Flutter → Unity**: een bericht naar een GameObject en methode sturen (bv. "toon profiel X").
- **Unity → Flutter**: een bericht terugsturen (bv. "gebruiker swipete rechts").
In Unity-scripts markeer je ontvangende methodes met **`[Preserve]`**, zodat IL2CPP ze niet wegoptimaliseert.

## Gerelateerd
[[Flutter-Unity-Vuforia integratie]] · [[IL2CPP en ARM64]]

## Meer leren
- [flutter_embed_unity op pub.dev](https://pub.dev/packages/flutter_embed_unity)

---
Hoort bij: [[Flutter-Unity-Vuforia integratie]]
