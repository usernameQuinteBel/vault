---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Dataverse
aliases: [Business rules, Bedrijfsregel]
---
# Business rule

> Server-side logica op een Dataverse-tabel om zonder code regels af te dwingen: "als ... dan ... anders ..." – voor datakwaliteit, consistentie en compliance.

## Wat kan een business rule?
- Waarden **valideren** en een foutmelding tonen.
- **Standaardwaarden** zetten.
- Velden verplicht / zichtbaar / vergrendeld maken (in formulieren).
- Een waarde **aanpassen** (bv. terugzetten naar een minimum).

## Scope
| Scope | Waar | Wanneer |
|---|---|---|
| **Entity (Table)** | Server-side | Bij **elke** creatie of wijziging, ongeacht hoe: model-driven app, canvas app, API, flow, import. Krachtigst → cruciaal voor data-integriteit. |
| **All Forms** | Client-side (browser) | Enkel in de formulieren van model-driven apps |
| **Specifiek formulier** | Client-side | Enkel in dat formulier |

## Voorbeeld uit de les
Prijsvalidatie op *Drone Products*: de prijs mag niet lager zijn dan een minimale productiekost van €150. Na activatie wordt een prijs < 150 automatisch op 150 gezet.

## Werkwijze
Tabel → **Business rules → New** → condities en acties slepen → scope kiezen → **Save → Activate**.

## Gerelateerd
[[Dataverse]] · [[Model-driven app]] · [[Business process flow]] · [[Demo 4.3 - Dataverse-tabel, relatie, view en business rule]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
