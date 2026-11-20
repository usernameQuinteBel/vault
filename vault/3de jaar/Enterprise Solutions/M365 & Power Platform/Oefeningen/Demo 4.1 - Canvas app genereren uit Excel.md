---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Oefeningen
---
# Demo 4.1 - Canvas app genereren uit Excel

> Power Apps laat een volledige canvas app genereren op basis van een Excel-bestand – de snelste manier om de editor te leren kennen.

## Stappen
1. Upload `DronesList.xlsx` (resources chapter 4) naar **OneDrive for Business**.
2. Power Apps → **Create → Start from data → Connect external data → From Excel**.
3. Kies het bestand → **Create app**.
4. Power Apps bekijkt je data en maakt een werkende app (lijst, detail, bewerken).
5. **F5** om te testen (preview als tablet, telefoon, browser).

## De editor verkennen
Controlpaneel, designpaneel, eigenschappenpaneel, formulebalk – zie [[Canvas app]].

## Oefening: data binding
- Voeg in het detailformulier een **afbeelding** toe: kaart *unlocken* → Image-control → *Image* = `ThisItem.<afbeeldingsveld>`.
- Laat het **zoekveld** werken: *Items* van de gallery = `Filter('OverviewDrones', SearchInput1.Text in 'Name')`.

## Probleem?
Werkt het genereren niet, verwijder dan de door Power Apps aangemaakte **ID-kolom** in het Excel-bestand. Genereren lukt maar één keer per bestand.

## Variant: via Dataverse
1. Kies **Start from data** maar laat een **Dataverse-tabel** maken uit het Excel-bestand.
2. Wijzig de meervoudsnaam van de tabel naar *Drone Products*.
3. Opslaan en de canvas app openen → app op een Dataverse-tabel, die je ook rechtstreeks kan bewerken.

## Gebruikte begrippen
[[Canvas app]] · [[Data binding in canvas apps]] · [[Power Fx]] · [[Dataverse]] · [[OneDrive]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
