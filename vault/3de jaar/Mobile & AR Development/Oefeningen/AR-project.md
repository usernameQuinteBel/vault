---
type: oefening
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [7, 8, 9, 10]
groep: Opdrachten
---
# AR-project 📝

> Het eindproject **per twee**: een volwaardige, professioneel ogende **[[Flutter]]-app** met een **ingebedde AR-ervaring** ([[Unity]] + [[Vuforia]]) en **Firebase** (login + database). "This app can be the eye-catcher in your portfolio."

## Organisatie en timing
| Wanneer | Wat |
|---|---|
| **Week 6** | onderwerp, korte beschrijving en teamleden indienen via **Canvas** |
| Tijdens het semester | code op **GitHub** (je krijgt een repository) |
| **Examenperiode** | deadline + **demovideo (5 min)** uploaden |
| **Examenperiode** | **online demonstratie + technische vragen** |

## Vereisten (en hoe je ze invult)
| Vereiste | Concreet | Zie |
|---|---|---|
| Zelfgekozen onderwerp | iets met een duidelijke reden voor AR | [[AR flavors]] |
| ≥ 1 **AR-flavor** via Unity & Vuforia | image, object/model of geolocation | [[Vuforia en image tracking]] |
| **Firebase Authentication** | login/registratie met een [[AuthGate]] | [[Firebase Authentication]] |
| **Firestore** | lezen **en** schrijven, **zinvol gekoppeld aan de AR** | [[Cloud Firestore]] |
| Unity **in** de Flutter-app | geen losse app; via [[flutter_embed_unity]] | [[Flutter-Unity-Vuforia integratie]] |
| **Communicatie** Flutter ↔ Unity | berichten in minstens één, liefst twee richtingen | [[Flutter-Unity-Vuforia integratie]] |
| **Professionele UI** | Material 3-thema, responsive, toegankelijk | [[Flutter UI-kwaliteit]] |
| **Modulaire code** | pagina's, widgets, repository, services; nette Unity-scripts | [[Architectuur en state management]] |

## Wat betekent "zinvol geïntegreerd"?
De database moet iets **doen** voor de AR, niet ernaast staan:
- **Zwak**: een losse notitielijst in Flutter + een aparte AR-scène zonder verband.
- **Sterk**: Unity meldt "dino gevangen" → Flutter schrijft dat in Firestore → het scorebord en de kaart met resterende dino's passen zich aan → de volgende AR-sessie toont enkel de nog niet gevangen dino's.

## Voorbeeldarchitectuur
```
Flutter: AuthGate → Home (lijst/kaart/scores uit Firestore)
                  → AR-pagina (EmbedUnity)
                        Flutter → Unity : welke content/level, userId
                        Unity → Flutter : gebeurtenis (gevonden, antwoord, score)
                  → Repository schrijft naar users/{uid}/...
Firestore rules: elke gebruiker enkel zijn eigen data (+ eventueel publiek scorebord lezen)
```

## Inspiratie (uit de les)
Museum met levende schilderijen · wijnlabels scannen, beoordelen en bestellen · *To catch a dino* (creatures op locatie, scorebord) · *The city cup* (standbeelden scannen, vraag beantwoorden, ranking). Zie [[Introductie Mobile en AR]].

## Teamwerk
Werk met branches en pull requests; verdeel werk over **prefabs** i.p.v. samen in één scène; commit `Packages/manifest.json`, niet `Library/`. Zie [[GitHub-teamwork (Unity)]].

## De demovideo (5 min) — voorstel
1. Probleem/idee en doelgroep (30 s).
2. Registreren en inloggen (30 s).
3. De AR-ervaring op een echt toestel (2 min).
4. Hoe Firestore en de Flutter ↔ Unity-communicatie samenwerken (1 min 30).
5. Architectuur en wat je zou verbeteren (30 s).

## Checklist
- [ ] Draait op Android met de **geteste versiecombinatie**.
- [ ] Login werkt; data is per gebruiker beveiligd met [[Firestore security rules]].
- [ ] Firestore-lezen én -schrijven zichtbaar verbonden met de AR.
- [ ] AR draait **in** de app, met berichten tussen Flutter en Unity.
- [ ] UI verzorgd (thema, laad-/fout-/lege toestanden).
- [ ] README op GitHub met uitleg en installatiestappen.

---
Hoort bij: [[Mobile & AR Development]]
