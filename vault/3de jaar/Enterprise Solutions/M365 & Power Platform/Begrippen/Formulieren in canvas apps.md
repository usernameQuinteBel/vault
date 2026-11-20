---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Power Apps
aliases: [Display form, Edit form, SubmitForm, CRUD]
---
# Formulieren in canvas apps

> Met de form-controls toon je één record (Display form) of laat je de gebruiker records bewerken en aanmaken (Edit form). Samen met een gallery heb je alle CRUD-functies.

## Display form vs. Edit form
| Display form | Edit form |
|---|---|
| **Read-only** | Velden bewerken, records aanmaken en opslaan |
| DataSource + Item | DataSource + Item (zelfde eigenschappen) |

## Formuliermodi
| Modus | Hoe | Gedrag |
|---|---|---|
| **Edit** | `EditForm(Form1)` | Toont het record van *Item*; opslaan = update |
| **New** | `NewForm(Form1)` | Velden krijgen de standaardwaarden van de bron; *Item* wordt genegeerd; opslaan = nieuw record |
| **View** | (Display form) | Enkel bekijken |
Na een geslaagde *SubmitForm* gaat het formulier terug naar Edit-modus.

## CRUD in de praktijk
| Actie | Formule |
|---|---|
| **Create** | `NewForm(Form1); Navigate(EditScreen)` → knop *Save* met `SubmitForm(Form1)` |
| **Read** | Gallery + Display form met `Item = Gallery1.Selected` |
| **Update** | Edit form → `SubmitForm(Form1)` |
| **Delete** | `Remove('Drone Products', Gallery1.Selected); Back()` |
| **Annuleren** | `ResetForm(Form1); Back()` |

## OnSuccess
Zet de eigenschap **OnSuccess** van het edit form op `Back()` → na succesvol opslaan keert de gebruiker automatisch terug.

## Gerelateerd
[[Canvas app]] · [[Data binding in canvas apps]] · [[Navigatie in canvas apps]] · [[Power Fx]] · [[Demo 4.2 - Canvas app vanaf nul (CRUD)]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
