---
type: chapter
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 7
groep: Onderdeel 2: Unity & Vuforia
---
# Flutter-Unity-Vuforia integratie

> De Unity/Vuforia-AR-scène **inbedden in een [[Flutter]]-app** en beide laten **praten**. Dit is hét verplichte onderdeel van het [[AR-project]]: de AR mag **geen losse app** zijn.

## De architectuur
```
┌──────────── Flutter-app ───────────────┐
│ Login (Firebase Auth) · lijsten · UI    │
│   ┌──── EmbedUnity-widget ──────────┐   │
│   │ Unity-scène + Vuforia ARCamera  │   │
│   └─────────────────────────────────┘   │
│     ↑ berichten Flutter → Unity          │
│     ↓ berichten Unity → Flutter          │
└──────────────── Firestore ─────────────┘
```
Flutter beheert de **app en de data**; Unity tekent het **AR-scherm** als widget binnenin; beide sturen elkaar **berichten** (tekst/JSON).

## Geteste versiecombinatie
| Tool | Versie |
|---|---|
| Flutter | **3.44.0** |
| Unity | **6.3 LTS** (nieuwste `6000.3.x`) |
| Vuforia Engine | **11.4.4** |
| [[flutter_embed_unity]] | **2.0.0** |
| Android SDK (integratie) | **API 36** |
> Blijf op 6.3 LTS (niet 6000.4): de plugin documenteert enkel 6000.0 en 6000.3 LTS. Wijk je af, dan zijn buildfouten vaak het gevolg.

## Stappen
1. **Flutter-app** maken en `flutter_embed_unity` toevoegen.
2. In Unity de **Unity-kant van de plugin** importeren en je AR-scène klaarzetten (ARCamera, targets, license key).
3. Unity **exporteren** naar het Android-project van de Flutter-app (als library).
4. **Configuraties** in het Android-project:
   - **ProGuard**-regels zodat Unity-klassen niet weggestript worden;
   - **`MainActivity`** aanpassen;
   - **Impeller uitzetten** voor de embedded AR-view;
   - `compileSdk` / `targetSdk` vastzetten zoals de cursus voorschrijft.
5. De `EmbedUnity`-widget op een Flutter-pagina zetten.
6. **Communicatie** implementeren (zie hieronder) en testen op een toestel.

## Communicatie in twee richtingen
| Richting | Voorbeeld | Hoe |
|---|---|---|
| Flutter → Unity | "toon dino X", "start level 2", ingelogde gebruiker doorgeven | bericht naar een **GameObject + methode** in Unity |
| Unity → Flutter | "dino gevangen", "speler swipete rechts", score | bericht vanuit een Unity-script naar een **listener** in Flutter |
Methodes in Unity die berichten ontvangen markeer je met `[Preserve]`, anders kan IL2CPP ze als "ongebruikt" weggooien.

## Data: twee mogelijke wegen naar Firestore
1. **Via Flutter** (aanbevolen bij login): Unity stuurt een bericht → Flutter schrijft met de Firebase SDK (de ingelogde gebruiker en de [[Firestore security rules]] werken dan gewoon).
2. **Rechtstreeks vanuit Unity** via de **[[Firestore REST API (Unity)]]** (score ophalen/schrijven/updaten) — in de cursus met tijdelijk open rules om te leren.
In de workshop **Match Maker in AR** schrijft Unity swipes weg naar Firestore.

## Teamwerk op GitHub
Vuforia via **git-URL**, `Packages/manifest.json` + `packages-lock.json` committen, `Library/` en het `.tgz` niet. Zie [[GitHub-teamwork (Unity)]].

## Veelvoorkomende problemen
| Probleem | Kijk naar |
|---|---|
| zwart AR-venster in de app | Impeller uitzetten, license key, camerapermissie |
| build faalt | versies (Unity 6.3, SDK), ProGuard, export opnieuw doen |
| bericht komt niet aan | juiste GameObject-naam en methodenaam, `[Preserve]` |

## Begrippen
[[flutter_embed_unity]] · [[Firestore REST API (Unity)]] · [[GitHub-teamwork (Unity)]] · [[IL2CPP en ARM64]] · [[Firestore security rules]]

## Bron
https://itf-mobiledevelopment.netlify.app/unity/

---
Hoort bij: [[Mobile & AR Development]]
