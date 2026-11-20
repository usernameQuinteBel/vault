---
type: chapter
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 6
groep: Onderdeel 2: Unity & Vuforia
---
# Vuforia en image tracking

> [[Vuforia]] in Unity opzetten en je eerste AR bouwen: een **afbeelding herkennen** en er een 3D-object op tonen ([[Image Target]]), en die app op je **Android-gsm** draaien.

## 1. Vuforia installeren
1. Gratis **Vuforia Developer-account** (Thomas More-mail).
2. Nieuw **3D**-project in Unity 6.3 LTS.
3. **AR Foundation** installeren: *Window → Package Manager → Unity Registry*.
4. **Vuforia Engine 11.4.4**: *Package Manager → + → Add package from git URL* → `https://github.com/mcloots/vuforia_package_11.4.4.git`.
   (Via git-URL i.p.v. een lokaal `.tgz`: zo blijft je repo klein → [[GitHub-teamwork (Unity)]].)
5. **[[Vuforia License Key]]** genereren en invullen in de *Vuforia Engine Configuration*.
6. In de Hierarchy de **Main Camera vervangen** door een **ARCamera** (*GameObject → Vuforia Engine → AR Camera*).

## 2. Een target maken (single image)
1. Foto nemen van wat je wil tracken (bv. met Office Lens, recht en zonder schaduw).
2. **[[Vuforia Target Manager]]**: database (type *Device*) → *Add Target* → *Image* → upload → **breedte in meters**.
3. Wachten tot *Active*; **sterren** en *Show Features* (gele punten) tonen hoe herkenbaar het beeld is.
4. **Download Database** → *Unity Editor* → `.unitypackage` importeren.

## 3. Het target in de scène
1. *GameObject → Vuforia Engine → Image Target*.
2. Inspector: **Type = From Database**, kies database + image.
3. Een 3D-object **boven** de afbeelding plaatsen en als **child** van het Image Target zetten.
4. **Play** → afbeelding voor de webcam → het object verschijnt en volgt het beeld.
5. Optioneel: *On Target Found / On Target Lost* koppelen aan je eigen methodes (animatie, geluid).

## 4. Wat gebeurt er onder de motorkap?
Camera-beeld → Vuforia zoekt **feature points** (hoeken, contrast) → vergelijkt met de database → berekent de **pose** (positie + rotatie) van het target → Unity zet het child-object op die pose, elke frame opnieuw (**tracking**). Daarom is een contrastrijk, gedetailleerd beeld zo belangrijk.

## 5. Op Android draaien
Switch Platform → Android · scène in de build · **API 29**, **IL2CPP**, **ARM64** · Build and Run. Zie [[Deploy naar Android]] en [[IL2CPP en ARM64]].

## Veelgemaakte fouten
| Probleem | Oorzaak |
|---|---|
| zwart scherm / camera start niet | geen of foute license key; camerapermissie geweigerd |
| object verschijnt niet | het is geen child van het Image Target, of staat ver weg / te klein |
| object piepklein of gigantisch | breedte in de Target Manager klopt niet met de modelschaal |
| target wordt slecht herkend | weinig sterren: kies een beeld met meer contrast en details |

## Begrippen
[[Vuforia]] · [[Vuforia License Key]] · [[Vuforia Target Manager]] · [[Image Target]] · [[AR flavors]] · [[Deploy naar Android]] · [[IL2CPP en ARM64]]

## Bron
https://itf-mobiledevelopment.netlify.app/vuforia/

---
Hoort bij: [[Mobile & AR Development]]
