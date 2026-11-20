---
type: oefening
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [8, 9, 10]
groep: Opdrachten
---
# AR-opdrachten (3 assignments) 📝

> Elke AR-workshop levert een **individuele opdracht** op. Je bouwt verder op het workshopvoorbeeld en toont dat je de AR-flavor **begrijpt**, niet enkel kan nadoen.

## De drie opdrachten
| # | Workshop | AR-flavor | Kern |
|---|---|---|---|
| 1 | [[Workshop 1 - Dino Battle]] | image recognition (multiple) | meerdere targets, animatie, geluid, interactie tussen objecten |
| 2 | [[Workshop 2 - Geolocation Treasure Hunt]] | geolocation | GPS, kompas, afstand/richting, navigeren naar plaatsen |
| 3 | [[Workshop 3 - 3D en Model Targets]] | object/scene recognition | cylinder/model target, **interactie** (tikken, slepen) |

## In te dienen (per opdracht)
| Onderdeel | Inhoud |
|---|---|
| **Video — uitleg (2 min)** | wat je bouwde en **hoe het onder de motorkap werkt** (scripts, tracking, berekeningen) |
| **Video — demo (30 s)** | schermopname van de app op een **smartphone**, AR-features in actie |
| **Broncode** | **ZIP** met het volledige Unity-project |

## Waarop word je beoordeeld?
- Verschillende [[AR flavors]] **verkennen** en weten **wanneer en hoe** je ze gebruikt.
- De vereiste AR-aanpak **correct** toepassen in een werkend Unity-project.
- **Alle kernvereisten** implementeren en combineren tot **één geheel**.
- **Verder gaan** dan het workshopvoorbeeld met eigen ideeën en zinvolle uitbreidingen.
- Een **boeiende** ervaring via **animatie, geluid en interactie**.
- Uitleggen **wat er onder de motorkap** gebeurt, niet enkel wat de gebruiker ziet.

## Tips voor de uitlegvideo
1. Begin met **wat** de gebruiker doet en ziet (10 s).
2. Toon de **scène-opbouw** (Hierarchy: targets, children, managers).
3. Overloop de **belangrijkste scripts**: welke methode, wanneer opgeroepen (`Start`, `Update`, target found), welke berekening (afstand, Haversine, raycast).
4. Vertel wat je **zelf toevoegde** t.o.v. de workshop en waarom.

## Tips voor de ZIP
Exporteer het project **zonder** `Library/`, `Temp/`, `Logs/`, `Build/` (worden opnieuw gegenereerd) — de ZIP blijft dan klein. Controleer dat de [[Vuforia License Key]] en de target-database erin zitten.

## Checklist vóór indienen
- [ ] Draait op een **echt toestel** ([[Deploy naar Android]]).
- [ ] Animatie, geluid én interactie aanwezig.
- [ ] Minstens één duidelijke eigen uitbreiding.
- [ ] Video's: 2 min uitleg + 30 s demo.

---
Hoort bij: [[Mobile & AR Development]]
