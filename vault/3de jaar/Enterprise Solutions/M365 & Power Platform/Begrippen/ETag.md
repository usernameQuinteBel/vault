---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
---
# ETag

> Een speciale identifier die een **specifieke versie** van een bestand of item aanduidt. Nodig wanneer je in een flow de goedkeuringsstatus van een bestand wil zetten.

## Waarom?
De actie **Set content approval status** wil zeker zijn dat ze de juiste versie goedkeurt (die waarvoor goedkeuring gevraagd werd). Daarom vraagt ze de ETag.

## Probleem
De ETag is bij de trigger *When a new file is added* **niet** beschikbaar als dynamic content.

## Oplossing
Voeg de actie **Get file metadata** toe en gebruik daarvan de ETag.

## Let op
- **Identifier ≠ ID**. Voor bestandsacties heb je vaak de *Identifier* nodig, niet de numerieke *ID*.

## Gerelateerd
[[Approval flow]] · [[Content approval]] · [[Dynamic content]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
