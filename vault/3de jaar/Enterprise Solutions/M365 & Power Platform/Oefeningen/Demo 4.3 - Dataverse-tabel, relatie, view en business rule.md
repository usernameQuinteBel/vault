---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Oefeningen
---
# Demo 4.3 - Dataverse-tabel, relatie, view en business rule

> Een eigen tabel *Drone Manufacturer* maken, data importeren, een relatie met *Drone Product* leggen, een view maken en een business rule toevoegen.

## Stap 1 – Tabel maken
1. **Tables → New table** (via *Advanced settings* kan je o.a. het type kiezen).
2. Kolommen toevoegen. De **ID-kolom** wordt automatisch gemaakt. Het designvenster is enkel bij de start beschikbaar.

## Stap 2 – Data importeren
1. Upload `DronesManufacturers.xlsx` naar OneDrive.
2. **Import → Import data** met [[Power Query]] → connector *Excel workbook* → bestand kiezen.
3. **Transform → Use first row as headers**.
4. Kolommen mappen en laden. Alles wordt bewaard als [[Dataflow]].

## Stap 3 – Relatie one-to-many
1. Via de **tabeleditor** (de visuele designer ondersteunt niet alles): 1 *Drone Manufacturer* → N *Drone Products*.
2. In *Drone Product* komt de lookup-kolom *Drone Manufacturer*. Gedrag *Restrict*: een fabrikant met producten kan niet verwijderd worden.
3. Vul bij elk product een fabrikant in.
4. In de canvas app: dataverbinding **verversen** → veld is beschikbaar.

## Stap 4 – View *Products by DJI*
**Drone Products → Data experiences → Views → New view** → kolommen *Name, Price, Drone Manufacturer* → filter op fabrikant DJI → sorteren op prijs → **Save and publish**. Gebruik de view in een app – zie [[Dataverse views]].

## Stap 5 – Business rule
Op *Drone Products*: prijs mag niet onder €150 zakken. Scope **Entity** → **Save → Activate**. Test: prijs 100 invullen → wordt 150.

## Gebruikte begrippen
[[Dataverse]] · [[Dataverse tabeltypes]] · [[Power Query]] · [[Dataflow]] · [[Dataverse relaties]] · [[Dataverse views]] · [[Business rule]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
