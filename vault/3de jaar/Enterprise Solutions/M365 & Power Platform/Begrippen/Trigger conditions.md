---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Trigger condition]
---
# Trigger conditions

> Voorwaarden op de trigger zelf, zodat een flow enkel start als aan bepaalde criteria voldaan is – nog vóór er een actie uitgevoerd wordt.

## Waarom?
- De flow draait niet onnodig → minder runs en minder Power Platform-requests (zie [[Soorten flows]]).
- De run history blijft overzichtelijk.

## Voorbeeld
Een goedkeuringsflow start bij *When a new file is added*, maar enkel voor bestanden met "Project" in de naam, of enkel voor bestanden van bepaalde teamleden.

## Hoe?
1. Open de trigger → **Settings → Trigger conditions → Add**.
2. Het dynamic content-menu is hier **niet** beschikbaar → werk met [[Expressions]].
3. Het veld dat je wil controleren, roep je op met `triggerOutputs()?['body/<veldnaam>']`.
4. De expressie moet een **Boolean** opleveren, bv. `@contains(...)`, `@startsWith(...)`, `@not(equals(...))`.

## Tip
De juiste syntax vind je makkelijk door tijdelijk een **Filter array**-actie toe te voegen, de functie te kiezen en dan **Edit in advanced mode** te openen.

## Gerelateerd
[[Trigger]] · [[Expressions]] · [[Best practices voor flows]] · [[Approval flow]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
