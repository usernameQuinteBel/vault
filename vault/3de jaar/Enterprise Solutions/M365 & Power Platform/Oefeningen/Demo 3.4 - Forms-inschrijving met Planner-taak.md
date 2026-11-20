---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Oefeningen
---
# Demo 3.4 - Forms-inschrijving met Planner-taak

> Een flow die reageert op een Microsoft Forms-inschrijving voor technische workshops: deelnemers krijgen de juiste info, een geüpload probleembestand gaat naar de lesgever, en er wordt een Planner-taak aangemaakt om het probleem te onderzoeken.

**Scenario:** Contoso organiseert technische workshops over zijn drones. Deelnemers kiezen online of ter plaatse. Wie een technisch probleem heeft, uploadt een afbeelding/video van de foutmelding.

## Voorbereiding
Maak een formulier met: naam, e-mailadres, online of ter plaatse, en een **bestandsupload**. (Formulieren met een upload werken enkel binnen de organisatie.)

## Deel 1 – Antwoord verwerken
1. Trigger **When a new response is submitted** → actie **Get response details**.
2. **Condition** op "online of ter plaatse":
   - online → mail met de uitnodiging voor de online vergadering;
   - ter plaatse → mail met de praktische info.

## Deel 2 – Bestand doorsturen (parallelle tak)
1. Voeg een **parallelle tak** toe na *Get response details* (niet na de mails) – zie [[Control-acties]].
2. Het antwoord op de uploadvraag is een **JSON-array** → je kan het niet zomaar als bijlage gebruiken.
3. **[[Parse JSON]]**: draai de flow, kopieer de output, *Generate from sample*. (Extra backslashes? Verwijderen.)
4. **Get file content** (OneDrive) met het id van het bestand → automatisch een Apply to each.
5. **Send an email** naar de lesgever met het bestand als bijlage (naam + content).
6. Opnieuw testen en de bijlage controleren.

## Deel 3 – Planner-taak (derde parallelle tak)
1. Maak in Planner het plan *Flywing Technical Workshops* (sjabloon project management) voor de groep *Drone Support*.
2. Actie **Create a task** in de bucket *Initiating*, toegewezen aan een supportmedewerker.
3. Vervaldatum = 10 dagen na indienen: `addDays(outputs('Get_response_details')?['body/submitDate'],10)`
4. **Update task details**: beschrijving, link naar het geüploade bestand, checklistitems.

## Gebruikte begrippen
[[Microsoft Forms]] · [[Parse JSON]] · [[JSON]] · [[Control-acties]] · [[Microsoft Planner]] · [[Expressions]] · [[OneDrive]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
