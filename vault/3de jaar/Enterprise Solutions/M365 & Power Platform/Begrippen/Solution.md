---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Beheer & ALM
aliases: [Solutions, Oplossing, Publisher, ALM]
---
# Solution

> Een container waarin je alle onderdelen van een oplossing bundelt (apps, flows, tabellen, web resources, processen) zodat je ze als geheel kan verpakken, versioneren en naar andere environments overzetten.

## Waarom?
- **Best practice** voor professionele ontwikkeling.
- Pakket exporteren/importeren naar andere environments (test → productie).
- Ingebouwde **versiebeheer** en **rollback**.
- Basis van **ALM** (application lifecycle management).
- Flows die je in [[Copilot Studio]] wil gebruiken, moeten in een solution zitten (in dezelfde environment).

## Werkwijze
1. **Solutions → New solution** → betekenisvolle naam (bv. *DroneProductManagement*) en een **publisher** maken (bepaalt het prefix).
2. Maak nieuwe onderdelen **binnen** de solution.
3. Bestaande onderdelen voeg je toe met **Add existing**.
4. Wijzigingen aan bv. de site map of web resources: **Publish** niet vergeten.

## Gerelateerd
[[Model-driven app]] · [[Environment]] · [[Naamgeving in Dataverse]] · [[Flows delen en exporteren]] · [[Web resource]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
