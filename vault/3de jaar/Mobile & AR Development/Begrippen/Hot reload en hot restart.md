---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [2, 4]
groep: Flutter
aliases: [Hot reload, Hot restart]
---
# Hot reload en hot restart

> Twee manieren om codewijzigingen te zien **zonder** de app volledig opnieuw te bouwen en te installeren.

| | Hot reload | Hot restart | Volledige herstart |
|---|---|---|---|
| Sneltoets (terminal) | `r` | `R` | stop + run |
| Snelheid | < 1 s | enkele seconden | traag |
| **State** | **blijft behouden** | wordt **gereset** | gereset |
| Werkt voor | UI-wijzigingen in `build()` | wijzigingen in `initState`, globale variabelen, `main()` | native code, nieuwe packages, `pubspec.yaml`, Firebase-config |

## Wanneer welke?
- Kleur of tekst aangepast → **hot reload**.
- Iets aangepast dat enkel bij de start uitgevoerd wordt (bv. `initState`) → **hot restart**.
- Nieuw package of native configuratie (Firebase, Unity) → **volledig opnieuw runnen**.

Zie ook [[Debuggen (Flutter)]].

## Hoe werkt hot reload?
Tijdens het ontwikkelen draait je Dart-code in een VM met **JIT**-compilatie. Bij hot reload stuurt de tooling enkel de gewijzigde code naar die VM en vraagt Flutter de widget tree opnieuw te **bouwen** — de bestaande `State`-objecten blijven bestaan. Daarom zie je wijzigingen in `build()` meteen, maar niet in code die enkel bij het aanmaken van de state loopt.

## Valkuil
Na een hot reload kan je app in een toestand zitten die bij een normale start **niet** kan voorkomen (oude state + nieuwe code). Twijfel je of een bug echt is? Doe een **hot restart**.

## Gerelateerd
[[Flutter]] · [[Dart]] · [[Debuggen (Flutter)]]

---
Hoort bij: [[Flutter aan de slag]]
