---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 5
groep: Oefeningen
---
# Demo 5.2 - Topic dronecategorie (Full)

> In Copilot Studio Full de Lite-agent overnemen en uitbreiden met een eigen topic dat de dronecategorie bepaalt op basis van het gewicht.

## Voorbereiding
- Meld je aan voor de **Copilot Studio-trial** met je tenant-mailadres – zie [[Custom engine agent]] voor de beperkingen.
- Open copilotstudio.microsoft.com en maak een nieuwe agent. Kopieer **beschrijving en instructies** van de Lite-agent. (Lite-agents rechtstreeks importeren zou vanaf eind 2025 mogelijk worden.)
- Bekijk het **Knowledge**-blok: hier kan je ook SharePoint, Teams, Dataverse, documenten, ... als bron toevoegen (bv. een Word-document met de Belgische regels).

## Topic toevoegen
1. **Topics → Add topic** → geef een duidelijke **beschrijving** (bij [[Generative orchestration]] kiest de agent daarop).
2. Voeg een **Question node** toe met de gewichtsklassen als opties.
3. Per optie wordt **automatisch een conditie** aangemaakt.
4. Zet in elke tak een **Message node** met de categorie (A1 / A2 / A3, volgens de EASA-tabel van de open categorie).
5. **Testen**: stel een vraag over je drone → het topic wordt herkend en de vraag verschijnt.
6. Bekijk de **YAML**-weergave van het topic.

## Gebruikte begrippen
[[Topics (Copilot Studio)]] · [[Generative orchestration]] · [[Custom engine agent]] · [[Kennisbronnen (Copilot Studio)]]

---
Hoort bij: [[Chapter 5 - Copilot Studio]]
