---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 3
groep: Firebase
---
# NoSQL

> Databases die **geen vaste tabelstructuur** opleggen. [[Cloud Firestore]] is een **documentdatabase**: elk document is een flexibel, JSON-achtig object.

## SQL vs. NoSQL (document)
| | Relationeel (SQL) | Document (Firestore) |
|---|---|---|
| Structuur | vaste tabellen en kolommen | flexibele documenten |
| Relaties | joins tussen tabellen | data **nesten** of dupliceren |
| Schema wijzigen | migratie nodig | gewoon een nieuw veld schrijven |
| Queries | zeer krachtig (joins, groeperen) | eenvoudiger, per collection |
| Realtime | meestal niet ingebouwd | **ingebouwd** |

## Waarom past het bij Travel Notes? (uit de cursus)
- De data **hoort bij één gebruiker** → authenticatie nodig, data per gebruiker.
- De app leest en schrijft **kleine documenten**.
- Een trip heeft **flexibele velden** (tags, checklist) die niet elk document moet hebben.
- De UI kan **realtime** meebewegen met de data.

## De denkwijze
Bij NoSQL modelleer je je data rond **hoe je ze leest**, niet rond normalisatie. Je vraagt je af: "welke data toon ik samen op één scherm?" en bewaart die dicht bij elkaar.

## Gerelateerd
[[Cloud Firestore]] · [[Firebase]]

---
Hoort bij: [[Travel Notes met Firebase]]
