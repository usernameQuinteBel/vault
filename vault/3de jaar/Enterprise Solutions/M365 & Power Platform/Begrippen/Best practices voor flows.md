---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Best practices Power Automate]
---
# Best practices voor flows

> Afspraken om flows onderhoudbaar, leesbaar en transparant te houden.

## Verplicht (MUST)
- Geef je flow een **relevante naam**.
- Voeg een **beschrijving** toe met het doel van de flow.

## Aangeraden (CAN)
- Geef triggers en acties een **betekenisvolle naam** (bv. *Get completed issues* i.p.v. *Get items*). In expressies wordt die naam gebruikt, dus doe dit vroeg.
- Voeg **notities/commentaar** toe aan stappen.
- Groepeer acties in **scopes** – zie [[Control-acties]].
- Gebruik [[Trigger conditions]] om onnodige runs te vermijden.
- Gebruik [[OData filter]]s i.p.v. alles op te halen en dan te filteren.
- Zet **concurrency** aan bij grote Apply to each-lussen.
- Hernoem [[Compose]]-acties.
- Voeg je naam toe in een gedeelde tenant – zie [[Naamgeving in een gedeelde tenant]].

## Gerelateerd
[[Flow]] · [[Control-acties]] · [[Flows testen]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
