---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 7
groep: Unity
aliases: [Unity .gitignore]
---
# GitHub-teamwork (Unity)

> Afspraken om een Unity/Vuforia-project **in team** op GitHub te beheren: wél wat iedereen nodig heeft, **niet** grote gegenereerde bestanden of lokale archieven. Zo blijft de repo klein, makkelijk te clonen en heb je minder merge-conflicten.

## Wat commit je wél?
- `Assets/` (je scènes, scripts, modellen, prefabs) **met de `.meta`-bestanden**.
- `Packages/manifest.json` en `Packages/packages-lock.json`.
- `ProjectSettings/`.

## Wat commit je níét?
- `Library/`, `Temp/`, `Logs/`, `Obj/`, `Build/` (worden opnieuw gegenereerd).
- Het lokale archief `com.ptc.vuforia.engine-11.4.4.tgz`.
→ Gebruik een **Unity-`.gitignore`** (template van GitHub).

## Vuforia via git-URL
Installeer Vuforia via de **git-URL** van de cursusrepository. Unity bewaart dan enkel een kleine **referentie** in `manifest.json`; na het clonen herstelt Unity het package automatisch.

## Was het archief toch al gecommit?
Verwijder het uit de repository (en uit de geschiedenis indien nodig), voeg het toe aan `.gitignore` en installeer opnieuw via de git-URL.

## Teamafspraken
- Werk in **branches**; merge via pull requests.
- Werk niet met twee personen tegelijk in **dezelfde scène** (scènebestanden mergen moeizaam) → verdeel werk over **prefabs**.
- Commit **vaak** met duidelijke boodschappen.

## Gerelateerd
[[Flutter-Unity-Vuforia integratie]] · [[AR-project]]

---
Hoort bij: [[Flutter-Unity-Vuforia integratie]]
