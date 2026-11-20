---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Oefeningen
---
# Demo 3.1 - Mailbijlagen naar OneDrive

> Een template aanpassen: bijlagen van binnenkomende mails automatisch opslaan in een OneDrive-map.

**Doel:** leren werken met templates, de editor, dynamic content, expressies, de flow checker en testen.

## Voorbereiding
Maak in je OneDrive een map `EmailAttachments`.

## Stappen
1. **Templates** → zoek op "attachment" → kies de template die **Office 365 Outlook** en **OneDrive for Business** gebruikt (niet de eerste/persoonlijke variant).
2. Meld aan bij beide connectors.
3. Bekijk de structuur: **trigger** (nieuwe mail) → **condition** (heeft bijlagen?) → **apply to each** (per bijlage) → actie in OneDrive (*Create file*).
4. Pas de trigger aan: enkel mails **met bijlagen**, en **inhoud van bijlagen** meenemen.
5. Pas de bestandsnaam aan met [[Dynamic content]]: voeg een tijdstempel toe. Zet `utcNow()` **vooraan** de naam – achteraan valt de extensie weg.
6. Laat de [[Flow checker]] lopen; verwijder de overbodige *Apply to each* in de nee-tak.
7. **Test**: stuur jezelf een mail met bijlage → controleer de map.
8. Bekijk de run en de [[JSON]] (raw inputs/outputs).
9. Geef de flow een naam en beschrijving – zie [[Best practices voor flows]].

## Oefening bij deze demo
Pas de flow aan zodat bijlagen van een bepaalde afzender in **submappen per belang** (low / normal / high) terechtkomen.
**Hint:** je hebt geen extra condities nodig en hoeft de submappen niet vooraf te maken. Gebruik het veld **Importance** als dynamic content in het **mappad**.

## Gebruikte begrippen
[[Flow templates]] · [[Trigger]] · [[Control-acties]] · [[Dynamic content]] · [[Expressions]] · [[Flows testen]] · [[OneDrive]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
