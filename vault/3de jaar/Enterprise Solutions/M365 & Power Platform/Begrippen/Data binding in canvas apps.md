---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Power Apps
aliases: [Gallery, ThisItem, Data cards]
---
# Data binding in canvas apps

> De koppeling tussen controls en data: een gallery toont meerdere records, een formulier toont één record, en elke kaart in een formulier toont één veld.

## Gallery
- Toont **meerdere records**.
- Eigenschap **Items** = de databron (eventueel gefilterd/gesorteerd).
- Binnen een gallery verwijst **`ThisItem`** naar het record van die rij, bv. `ThisItem.Name`, `ThisItem.Image`.
- **`Gallery1.Selected`** = het record waarop de gebruiker klikte.

## Formulier (Display/Edit form)
- **DataSource** = de tabel.
- **Item** = welk record, meestal `Gallery1.Selected`.
- Bestaat uit **data cards**: elke kaart toont **één veld**.

## Een kaart aanpassen
Kaarten zijn standaard **vergrendeld**. Wil je bv. een afbeelding toevoegen aan een kaart:
1. **Unlock** de kaart (Advanced-tab).
2. Voeg een **Image**-control toe.
3. Zet de eigenschap *Image* op `ThisItem.Image` (of `Parent.Default`).

## Gerelateerd
[[Canvas app]] · [[Formulieren in canvas apps]] · [[Power Fx]] · [[Filteren en sorteren in canvas apps]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
