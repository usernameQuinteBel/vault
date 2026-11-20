---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [6, 8, 9, 10]
groep: Vuforia
aliases: [License Key, App License Key]
---
# Vuforia License Key

> Een **sleutel** die je app het recht geeft om de Vuforia Engine te gebruiken. Zonder geldige key start de AR-camera niet.

## Aanmaken
1. Log in op de Vuforia Developer Portal.
2. **Plan & Licenses** → *Generate Basic License* (gratis voor ontwikkeling).
3. Kopieer de lange sleutel.

## Invullen in Unity
**Window → Vuforia Engine → Vuforia Engine Configuration** (of via de ARCamera) → veld **App License Key**.

## Typische fout
Lege of verkeerde key → zwart scherm of een foutmelding bij het starten van de AR-camera. Controleer dit eerst bij [[Deploy naar Android]].

## Basic vs. betaalde licenties
| Basic (gratis) | Betaald |
|---|---|
| ontwikkeling en testen | publicatie, meer functies |
| watermerk of beperkingen kunnen gelden | geen watermerk |
| device-databases | ook cloud recognition |

## Veilig omgaan met de key
De key komt in je Unity-project terecht (`VuforiaConfiguration`). In een **publieke** repo kan iedereen hem gebruiken; in een privé-repo voor je team is het oké. Bij twijfel: een nieuwe key genereren op de portal.

## Eén key per project?
Je kan dezelfde basic key in meerdere oefenprojecten gebruiken; voor je eindproject maak je best een eigen key aan.

## Gerelateerd
[[Vuforia]] · [[Deploy naar Android]]

---
Hoort bij: [[Vuforia en image tracking]]
