---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Adaptive card]
---
# Adaptive cards

> Blokken informatie (en formulieren) beschreven in JSON, die automatisch omgezet worden naar de native interface van het platform waar ze getoond worden, zoals Microsoft Teams.

## Wat is het?
Een adaptive card is **platformonafhankelijk**: je beschrijft de inhoud (tekst, afbeeldingen, invoervelden, knoppen) in [[JSON]]. In Teams, Outlook, ... wordt die JSON omgezet in een kaart die past bij die app.

## Gebruik in Power Automate
- Informatie tonen in een Teams-kanaal of chat.
- **Data verzamelen**: een kaart met invoervelden posten en wachten op een antwoord (*Post adaptive card and wait for a response*).

## Belangrijk
De kaart **bewaart zelf geen antwoorden**. In de flow vang je het antwoord op als dynamic content en bepaal jij waar het naartoe gaat:
- een [[SharePoint list]] (*Create item / Update item*) – meest gebruikelijk;
- een [[Dataverse]]-tabel;
- een Excel-tabel in OneDrive (*Add a row into a table*);
- een database (SQL) of externe app (Salesforce, Zendesk, ...).

## Werkwijze
1. Kies waar de kaart gepost wordt (team + kanaal).
2. Schrijf de JSON van de kaart. Start van een voorbeeld uit de documentatie en pas de tekst aan.
3. Verwerk de antwoorden.

## Gerelateerd
[[JSON]] · [[Microsoft Teams]] · [[Demo 3.8 - Data verzamelen met adaptive cards]]

## Meer leren
- [Adaptive cards in Power Automate](https://learn.microsoft.com/en-us/power-automate/create-adaptive-cards)
- [Adaptive Cards Designer](https://adaptivecards.io/designer/)

---
Hoort bij: [[Chapter 3 - Power Automate]]
