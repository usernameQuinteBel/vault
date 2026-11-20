---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: 7
groep: Design system
aliases: [Brad Frost]
---

# Atomic Design

> Een methodologie van **Brad Frost (2013)** om een design system **stap voor stap** op te bouwen: van de kleinste bouwstenen tot volledige pagina's, naar analogie met de scheikunde.

## De vijf niveaus
| Niveau | Wat | Voorbeelden |
|---|---|---|
| **Atoms** | kleinste bouwstenen, niet verder op te splitsen | knop, label, icoon, invoerveld, kleur, font |
| **Molecules** | kleine combinaties met één functie | label + invoerveld + foutmelding; zoekveld + knop |
| **Organisms** | grotere, zelfstandige secties | navigatiebalk, productkaart, formulier, footer |
| **Templates** | pagina-opbouw met **placeholders** | lay-out van een productpagina zonder echte inhoud |
| **Pages** | templates met **echte content** | de productpagina van de iPhone 17 |

## Waarom werkt het?
- Je bouwt van **klein naar groot**: een wijziging in een atom (knopkleur) verspreidt zich naar alles wat ervan gemaakt is.
- Het dwingt tot **herbruikbaarheid** en **consistentie**.
- Designers en developers spreken dezelfde taal: in code worden dit **componenten** (React, Flutter-widgets, MAUI-controls).

## In Figma
- Atoms en molecules = **componenten** (met [[Component set en varianten|varianten]]).
- Organisms = componenten opgebouwd uit **instances** van kleinere componenten, met [[Auto Layout]].
- Templates/pages = je schermen.
- Daarboven liggen de **foundations** (kleuren, typografie, spacing) als [[Design tokens|tokens]]/styles.

## Gerelateerd
[[Design system]] · [[Component set en varianten]] · [[Design tokens]]

## Meer leren
- [Atomic Design — Brad Frost](https://atomicdesign.bradfrost.com/table-of-contents/)

---
Hoort bij: [[Design Systems & Accessibility]]
