---
type: chapter
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 1
groep: Introductie
---
# Introductie Mobile en AR

> Kennismaking met het vak: **waarom** Flutter + Unity + Vuforia, wat je leert, hoe het vak is opgebouwd en hoe je geëvalueerd wordt.

## De drie leerdoelen
1. Je **analyseert** de mogelijkheden van AR binnen [[Vuforia]] en [[Unity]] in functie van je **eigen projectidee**.
2. Je **ontwikkelt** een cross-platform app in [[Flutter]] volgens de **Flutter design principles en style guide** ([[Material Design (Flutter)]]).
3. Je **integreert** een augmented-reality-component in een mobiele Flutter-app ([[Flutter-Unity-Vuforia integratie]]).

## De drie technologieën en hun rol
| Technologie | Wat is het? | Rol in jouw app |
|---|---|---|
| [[Flutter]] | Google's UI-toolkit: native apps voor mobiel, web en desktop uit **één codebase** ([[Dart]]) | de **app zelf**: schermen, login, lijsten, data |
| [[Unity]] | cross-platform **game-engine**, populair voor mobiele en indie-games, toegankelijk voor beginners | de **3D-wereld**: modellen, animaties, geluid, interactie |
| [[Vuforia]] | **AR-platform** (Android, iOS, Windows…), gebruikt in consumenten- én industriële toepassingen | de **herkenning**: weet waar het target is, zodat Unity er iets op kan tekenen |
| [[Firebase]] | backend-as-a-service | **login** en **database** |

Samen: Flutter is de "verpakking", Unity + Vuforia leveren het AR-scherm **binnenin** die app.

## De drie AR flavors
Image recognition · object/scene recognition · geolocation AR → zie [[AR flavors]].

## Opbouw van het vak (cursussite)
| Flutter | Unity/Vuforia | Workshops |
|---|---|---|
| Flutter verkennen + 3 oefeningen | aan de slag, Unity basics | multiple image tracking + animaties + geluid |
| Firebase, authenticatie, Firestore (NoSQL) | Vuforia basics, single image tracking | geolocation |
| praktisch gebruik in je project | Flutter-integratie | model targets |
| | | Flutter basics, state, Firestore, Flutter ↔ Unity |
Lessen zijn **workshops + coaching** (maandagnamiddag).

| Hoofdstuk | Onderwerp |
|---|---|
| 2 | [[Flutter aan de slag]] |
| 3 | [[Travel Notes met Firebase]] |
| 4 | [[Flutter UI-kwaliteit]] |
| 5 | [[Unity basis]] |
| 6 | [[Vuforia en image tracking]] |
| 7 | [[Flutter-Unity-Vuforia integratie]] |
| 8–10 | [[Workshop 1 - Dino Battle]] · [[Workshop 2 - Geolocation Treasure Hunt]] · [[Workshop 3 - 3D en Model Targets]] |

## Evaluatie
- **3 individuele AR-opdrachten** (één per workshop): video (2 min uitleg + 30 s demo op smartphone) + ZIP van het Unity-project → [[AR-opdrachten (3 assignments)]].
- **Project in teams van twee**: Flutter-app met ingebedde AR, Firebase Auth + Firestore → [[AR-project]].

## Voorbeelden van projecten (uit de les)
| Idee | AR-flavor | Hoe Firestore/API meedoet |
|---|---|---|
| **Museum** — schilderijen scannen die tot leven komen en uitleg geven (kunstenaar, stijl) | image | info per schilderij |
| **Wijnlabels** — label scannen → info in AR, beoordelen, bestellen | image | geproefde wijnen, ratings, bestellingen, gemiddelden |
| **To catch a dino** — creatures vinden op locatie (campus), vangen | geolocation | gevangen dino's, kaart met resterende, scorebord |
| **The city cup** — standbeelden in de stad scannen → video + vraag | object + geolocation | locaties, antwoorden, ranking |
Telkens is de database **zinvol verweven** met de AR — precies wat de projectvereisten vragen.

## Professionele afspraken
Respect, beleefdheid, aanwezigheid (afwezigheid vooraf melden), stiptheid en focus op de les.

## Begrippen
[[Flutter]] · [[Dart]] · [[Unity]] · [[Vuforia]] · [[AR flavors]] · [[Firebase]]

## Bron
https://itf-mobiledevelopment.netlify.app/

---
Hoort bij: [[Mobile & AR Development]]
