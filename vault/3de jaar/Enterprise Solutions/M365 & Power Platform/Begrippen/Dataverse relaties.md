---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Dataverse
aliases: [Relaties, Relationships, Lookup, One-to-many]
---
# Dataverse relaties

> Tabellen in Dataverse koppel je met relaties. Bij een one-to-many-relatie krijgt de tabel aan de "veel"-kant een lookup-kolom naar de andere tabel.

## Soorten
- **One-to-many (1:N)** – één fabrikant verkoopt veel producten.
- **Many-to-one (N:1)** – hetzelfde, bekeken vanuit de andere tabel.
- **Many-to-many (N:N)** – bv. studenten en vakken.

## Voorbeeld uit de les
1 *Drone Manufacturer* ↔ N *Drone Products*:
- In *Drone Product* komt een **lookup-kolom** *Drone Manufacturer*.
- Gedrag **Restrict** bij verwijderen: een fabrikant kan je niet verwijderen zolang er nog gekoppelde producten zijn. (Andere opties zoals *cascade delete* verwijderen de gekoppelde records mee.)

## Waar maak je ze?
De **visuele designer** ondersteunt nog niet alle soorten relaties → maak ze via de **tabeleditor** (tabel → Relationships → New).

## Na het maken
- Vul voor elk product de fabrikant in.
- Ververs de dataverbinding in je canvas app → het nieuwe veld verschijnt; de gerelateerde tabel wordt automatisch als databron toegevoegd.
- In een model-driven app zie je gerelateerde records via de **Related**-tab of een **subgrid**.

## Gerelateerd
[[Dataverse]] · [[Dataverse tabeltypes]] · [[Model-driven app]] · [[Demo 4.3 - Dataverse-tabel, relatie, view en business rule]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
