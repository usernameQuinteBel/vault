---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [1, 4]
groep: Power Platform
---
# Power Apps

> De tool van de Power Platform om zakelijke apps te bouwen met slepen, configureren en Excel-achtige formules, voor web, tablet en smartphone.

## Wat is het?
Met Power Apps bouw je apps die gebruikers toelaten om **te handelen op data** ("act"): gegevens bekijken, invullen, aanpassen, goedkeuren. Typisch vervang je er papieren formulieren, Excel-lijsten of manuele registraties mee – denk aan inspecties, bestellingen, reservaties, incidentmeldingen.

## Soorten apps
| | [[Canvas app]] | [[Model-driven app]] |
|---|---|---|
| Startpunt | Het **scherm/de UX** – je tekent zelf de schermen | Het **datamodel** in [[Dataverse]] |
| Voor wie | Power users / [[Citizen developer]]s | Eerder developers / IT |
| Data | Uit honderden bronnen via [[Connectors]] | Enkel Dataverse |
| Layout | Volledig vrij (pixel-perfect) | Automatisch gegenereerd, responsive |
| Ideaal voor | Taak- en rolgerichte apps | Volledige bedrijfsapplicaties met processen |

(Daarnaast bestaat [[Power Pages]] voor externe websites.)

## Hoe werkt het?
- Je bouwt in een **WYSIWYG-editor** (Power Apps Studio) met controls zoals galleries, formulieren, knoppen.
- Gedrag stel je in met formules in [[Power Fx]], niet met klassieke code-behind.
- Data komt via een **connection** op een [[Connectors|connector]] (SharePoint, Excel, Dataverse, SQL, ...).
- Apps draaien in een [[Environment]] en worden gedeeld met gebruikers – zie [[Co-ownership van apps]].
- **Veilig by default**: aanmelden gebeurt via de Microsoft-account (Entra ID), MFA kan aangezet worden in de admin, en rechten worden per environment beheerd met [[Security roles]].

## Voorbeelden uit de les
- SNCF (Franse spoorwegen): technici rekenden met pen en papier, met veel fouten. Met een Power App + flow + Power BI daalde het foutpercentage sterk, en het bedrijf wil nu duizenden medewerkers zelf apps laten bouwen.
- Toyota: honderden apps door medewerkers gebouwd, met een **Center of Excellence** dat ondersteunt en apps nakijkt voor ze breed gedeeld worden – zie [[Governance]].
- Andere ideeën: incidenten melden, voertuigen boeken in servicecentra.

## Gerelateerd
[[Canvas app]] · [[Model-driven app]] · [[Dataverse]] · [[Power Fx]] · [[Environment]] · [[Power Automate]] · [[Low-code]]

## Meer leren
- [Power Apps documentatie](https://learn.microsoft.com/en-us/power-apps/)

---
Hoort bij: [[Chapter 1 - Introductie & setup]] · [[Chapter 4 - Power Apps]]
