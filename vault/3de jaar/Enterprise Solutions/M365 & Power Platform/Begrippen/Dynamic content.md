---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Dynamische inhoud]
---
# Dynamic content

> De velden die triggers en vorige acties opleveren en die je in latere stappen kan gebruiken – zonder iets te typen, via een keuzemenu.

## Wat is het?
In Power Automate bestaat dynamic content uit de **variabelen die door triggers en acties worden aangemaakt**. Via het dynamic content-menu kies je velden die naar vorige stappen verwijzen. Bijvoorbeeld bij een Outlook-trigger: onderwerp, afzender, ontvangsttijd, bijlagen, belang (importance), ...

## Voorbeeld
In de demo met mailbijlagen wordt de **ontvangsttijd** van de mail aan de bestandsnaam toegevoegd, en wordt de **importance** (low/normal/high) gebruikt als mapnaam – zie [[Demo 3.1 - Mailbijlagen naar OneDrive]].

## Dynamic content in expressies
Je kan dynamic content ook doorgeven aan [[Expressions]] (tekst-, datum-, reken- en conversiefuncties).

## Let op
- Als een veld een **lijst** is (bv. alle bijlagen), zet Power Automate er automatisch een **Apply to each** rond.
- Bij meerdere vorige stappen heeft elke stap zijn eigen *ID*: kies bewust **welke** ID je nodig hebt.
- Sommige velden zijn niet meteen beschikbaar (bv. **ETag** bij goedkeuringen) en moet je eerst ophalen met een extra actie – zie [[ETag]].
- In [[Trigger conditions]] is het dynamic content-menu niet beschikbaar; daar moet je met expressies werken.

## Gerelateerd
[[Expressions]] · [[JSON]] · [[Trigger]] · [[Actie (Power Automate)]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
