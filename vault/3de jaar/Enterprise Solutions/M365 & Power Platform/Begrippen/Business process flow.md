---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [3, 4]
groep: Beheer & ALM
aliases: [BPF, Business process flows, Bedrijfsprocesstroom]
---
# Business process flow

> Een begeleidende stappenbalk bovenaan een formulier in een model-driven app die gebruikers door een vast proces leidt, fase per fase, met verplichte velden en vertakkingen.

## Waarom?
- Gebruikers zien **waar ze zitten** in het proces.
- **Minder opleiding** nodig.
- **Consistentie en datakwaliteit**: iedereen volgt dezelfde stappen.
- Kan beleid afdwingen.
- Aanpasbaar per rol (security roles).

## Opbouw
- **Stages (fasen)** – bv. *Initieel contact* → *Audit & evaluatie* → *Activatie*.
- **Data steps** – velden die in die fase ingevuld moeten worden (eventueel verplicht).
- **Conditions** – vertakkingen (bv. niet gekwalificeerd → fase *Deactiveren*).
- **Flow steps** – een cloud flow starten vanuit een fase (na gebruikersinteractie).

## Maken
In je [[Solution]]: **New → Automation → Process → Business process flow** → kies de tabel → fasen, stappen en condities slepen → **opslaan en activeren**.

## Valkuil: Ja/Nee-velden
In een BPF wordt **"Nee" vaak gezien als "niet ingevuld"**. Een verplicht ja/nee-veld blokkeert dan de doorgang. Oplossingen:
1. **Aanbevolen**: gebruik een **Choice**-kolom met twee opties (bv. *Goedgekeurd* / *Afgekeurd*).
2. Een [[Business rule]] die het veld standaard op "Nee" zet als het leeg is (werkt niet altijd).

## Automatisatie toevoegen
Cloud flows (met de **Dataverse**-connector) kunnen statussen zetten op basis van input – zie [[Demo 4.5 - Business process flow nieuwe fabrikant]].

## Verschil met een gewone flow
Een BPF **automatiseert niets op de achtergrond**: hij **begeleidt de gebruiker**. Een [[Flow|cloud flow]] voert acties automatisch uit.

## Gerelateerd
[[Model-driven app]] · [[Soorten flows]] · [[Business rule]] · [[Solution]] · [[Workflow]]

---
Hoort bij: [[Chapter 3 - Power Automate]] · [[Chapter 4 - Power Apps]]
