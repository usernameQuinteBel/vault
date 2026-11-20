---
type: oefening
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Oefeningen
---
# Oefening 3.1 - Vacature-data uit e-mail halen met AI

> Een flow die bij een binnenkomende mail over een nieuwe vacature met een AI-prompt de functietitel, afdeling en hiring manager uit de tekst haalt, de manager opzoekt als M365-gebruiker en automatisch een item toevoegt aan de lijst *Job opportunities*.

**Doel:** standaardacties van Power Automate uitbreiden met **AI-prompting**. Erg nuttig tijdens een stage: veel bedrijfsinfo komt binnen via mail en moet manueel overgetypt worden naar CRM, ERP of projecttools.

## Voorbereiding
- AI-functies vragen capaciteit die je als student niet gratis krijgt → maak een **trial-environment** (30 dagen) aan via de Power Platform admin en werk daarin. Zie [[Environment]].
- De lijst *Job opportunities* uit [[Demo 2.2 - Pagina, lijst en bibliotheek]] (pagina Working@Contoso).

## Het proces
Er komt een mail binnen waarin iemand vraagt een nieuwe vacature te publiceren (bv. een techniekerfunctie binnen een bepaalde afdeling, met vermelding van wie de aanwerving doet). De lijst moet automatisch een nieuw item krijgen met die gegevens.

## Stappen
1. **Prompt maken**: Power Automate → **More → Prompts** → nieuw op basis van *Extract information from text*.
   - Instructies: de AI is een data-extractor die **drie velden** haalt: functietitel, afdeling, hiring manager (volledige naam, bruikbaar om een M365-gebruiker op te zoeken).
   - Vraag het resultaat **enkel als JSON**, volgens een schema. Ontbreekt iets → lege string.
   - Voorbeeld-JSON voor het schema met de sleutels `jobTitle`, `department`, `hiringManager`.
   - Output: **JSON** (niet tekst).
   - Test met de voorbeeldmail tot het resultaat klopt.
2. **Flow**:
   - Trigger: *When a new email arrives* (eventueel gefilterd).
   - **AI capabilities → Run a prompt** met de mailbody als invoer.
   - **Office 365 Users → Search for users** met `hiringManager` → een echte M365-gebruiker.
   - **SharePoint → Create item** in *Job opportunities* (titel, afdeling, hiring manager).
3. Testen met een mail en controleren of het item in de lijst staat.

## Valkuilen
- Personenvelden in SharePoint verwachten een gebruiker (e-mail/claims), geen losse naam → daarom *Search for users*.
- *Search for users* kan meerdere resultaten geven → kies het eerste of zorg voor een unieke naam.

## Gebruikte begrippen
[[AI Prompt in Power Automate]] · [[AI Builder]] · [[JSON]] · [[SharePoint list]] · [[Trigger]] · [[Environment]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
