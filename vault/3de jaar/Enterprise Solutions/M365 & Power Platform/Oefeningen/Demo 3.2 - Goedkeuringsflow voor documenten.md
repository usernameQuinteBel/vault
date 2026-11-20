---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Oefeningen
---
# Demo 3.2 - Goedkeuringsflow voor documenten

> Telkens een nieuw document aan een bibliotheek wordt toegevoegd, krijgt de verantwoordelijke een goedkeuringsaanvraag in Teams/Outlook en wordt de status in SharePoint bijgewerkt.

**Doel:** de werking van goedkeuringen, content approval, ETag en trigger conditions begrijpen.

## Deel A – Manuele goedkeuring (zonder flow)
1. Bibliotheek *Documents* → **Integrate → Approvals → Enable approvals**.
2. Er komt een statuskolom bij.
3. Via het menu van een document vraag je manueel goedkeuring → die verschijnt in **Teams**, en het antwoord komt in de statuskolom.

## Deel B – Met Power Automate
1. Zet deel A weer uit.
2. **Library settings → Versioning settings → Require content approval** → kolom *Approval status* verschijnt. Je kan de status ook manueel wijzigen via *More*.
3. Kies een **approval-template**. De flow opent met een beschrijving per blok en vereiste parameters (site, bibliotheek, type goedkeuring, titel, toegewezen persoon).
4. Kies het type: **Basic** (1 goedkeurder) of complexer (meerdere goedkeurders) – zie [[Approval flow]].
5. **Test**: voeg een document toe → keur goed in Outlook of in de **Approvals-app** in Teams.
6. Merk op: de status in SharePoint wordt **niet** automatisch aangepast.
7. Breid uit: **Get file metadata** (om de [[ETag]] te krijgen) → **Set content approval status** (Approved/Rejected + commentaar).

## Wie ziet wat?
Lezers zien enkel goedgekeurde documenten; afgekeurde en pending documenten zijn enkel zichtbaar voor de auteur en de goedkeurders. Dat kan je wijzigen met *Draft item security* – zie [[Content approval]].

## Best practice: trigger condition
Laat de flow enkel starten voor bv. bestanden met "Project" in de naam – zie [[Trigger conditions]].

## Gebruikte begrippen
[[Approval flow]] · [[Content approval]] · [[ETag]] · [[Trigger conditions]] · [[Versiebeheer]] · [[Microsoft Teams]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
