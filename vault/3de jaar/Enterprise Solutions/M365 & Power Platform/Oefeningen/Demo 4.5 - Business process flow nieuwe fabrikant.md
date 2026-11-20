---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Oefeningen
---
# Demo 4.5 - Business process flow nieuwe fabrikant

> Een business process flow die het team stap voor stap begeleidt bij het evalueren, goedkeuren en activeren van een nieuwe dronefabrikant, met cloud flows die automatisch statussen zetten.

## Het volledige proces (resources: Word-document over de fasen)
1. **Initieel contact & kwalificatie** – basisgegevens en of de fabrikant relevant is → status *Qualified / Not qualified / Pending*.
2. **Due diligence & evaluatie** – bedrijfsprofiel, fabrieksaudit, kwaliteitscertificaten (ISO, luchtvaart) → aanbeveling *Recommended / Not recommended / On hold*.
3. **Contract & juridisch** – NDA, raamovereenkomst, juridische check, betalingsvoorwaarden, datum contract.
4. **Setup & activatie** – interne systemen ingesteld, communicatie, status *Active*.

In de demo worden drie fasen uitgewerkt: **Initial contact and qualification**, **Audit and evaluation**, **Activation**.

## Stappen
1. **Ontbrekende kolommen** toevoegen aan de tabel *Drone Manufacturer* (contactmail, website, auditresultaat, ISO, statussen, contractdatum). Gebruik **Choice** i.p.v. Ja/Nee voor verplichte stappen – zie de valkuil in [[Business process flow]].
2. In de solution: **New → Automation → Process → Business process flow**.
3. **Fasen** slepen.
4. **Data steps** per fase toevoegen en het juiste veld kiezen. Opslaan!
5. **Condities**:
   - enkel *Qualified* → naar *Audit & evaluation*, anders naar een nieuwe fase *Deactivate after initial contact*;
   - enkel *Recommended* → naar *Activation*, anders naar *Deactivate after audit & evaluation*.
6. **Automatisatie met cloud flows** (in de solution, Dataverse-connector):
   - Flow die de inkoopverantwoordelijke een **mail met opties** stuurt om de kwalificatiestatus te kiezen; het antwoord wordt omgezet met `if(equals(...SelectedOption,'Qualified'),1,0)`.
   - **Oefening**: flow *Set recommendation status* – start bij een update van *ISO certified* en *Factory audit successful*; enkel als beide ja zijn → status *Recommended*.
   - **Oefening**: flow *Set status to inactive* – gestart als **flow step** in de twee deactiveer-fasen (na gebruikersinteractie) → status *Inactive*.
7. **Testen** met vier scenario's: niet gekwalificeerd; gekwalificeerd; gekwalificeerd maar niet aanbevolen (→ Inactive); gekwalificeerd en aanbevolen (→ Active).

## Gebruikte begrippen
[[Business process flow]] · [[Model-driven app]] · [[Solution]] · [[Power Automate]] · [[Expressions]] · [[Business rule]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
