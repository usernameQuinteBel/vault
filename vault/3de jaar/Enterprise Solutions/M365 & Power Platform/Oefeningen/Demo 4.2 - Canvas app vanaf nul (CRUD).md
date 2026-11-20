---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Oefeningen
---
# Demo 4.2 - Canvas app vanaf nul (CRUD)

> Een lege canvas app (telefoonlayout) bouwen op de Dataverse-tabel *Drone Products*, met lijst, detail, bewerken, nieuw, verwijderen, sorteren en zoeken.

## Stap 1 – Lijstscherm
1. **Blank canvas app**, telefoonlayout.
2. Gallery toevoegen (layout kiezen) → databron *Drone Products*.

## Stap 2 – Detailscherm
1. Nieuw leeg scherm → **Display form** (*FormViewer*), DataSource = *Drone Products*.
2. *Item* = `Gallery1.Selected` → het eerste record verschijnt.
3. Afbeelding toevoegen in de image card.
4. Knop **Back** met `Back()`.
5. In de gallery: pijl-icoon → `Navigate(Screen2)`.

## Stap 3 – Bewerkscherm
1. Derde scherm → **Edit form** (*Form1*), DataSource en *Item* zoals hierboven.
2. Knop **Save**: `SubmitForm(Form1)`.
3. Knop **Cancel**: `ResetForm(Form1); Back()`.
4. *OnSuccess* van het formulier: `Back()`.
5. Op het detailscherm: knop **Edit** → `EditForm(Form1); Navigate(Screen3)`.

## Stap 4 – Nieuw en verwijderen
- **+**-icoon op het lijstscherm: `NewForm(Form1); Navigate(Screen3)`.
- Knop **Delete** op het detailscherm: `Remove('Drone Products', Gallery1.Selected); Back()`.
- Test alle **CRUD**-operaties!

## Stap 5 – Sorteren en zoeken
- Sorteericoon: `UpdateContext({SortDescending: !SortDescending})`.
- Text input *TextSearchBox* (Default leegmaken).
- *Items* van de gallery: de gecombineerde `Sort(If(IsBlank(...), ..., Filter(...)), Name, If(SortDescending, ...))` – zie [[Filteren en sorteren in canvas apps]].

## Stap 6 – Refactoren, publiceren, delen
- **Hernoem** controls (formules passen zich automatisch aan).
- **Publish** en **Share** (eventueel met mail) – een gebruiker zonder co-ownership kan de app enkel *spelen*.

## Gebruikte begrippen
[[Canvas app]] · [[Formulieren in canvas apps]] · [[Navigatie in canvas apps]] · [[Contextvariabelen]] · [[Filteren en sorteren in canvas apps]] · [[Apps publiceren en delen]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
