---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [12]
groep: Testing, DI en architectuur
aliases: [N-Tier, Clean Architecture, Gelaagde architectuur, Monolithisch]
---
# Layered architecture

> De applicatie opdelen in **lagen** (elk een apart class-library-project) waarbij elke laag een *black box* is voor de lagen erboven ([[Separation of concerns]]).

## Van monolithisch naar gelaagd
**Monolithisch:** controllers, DTO's, entities en data access zitten in één project. **N-Tier/Clean Architecture:** die onderdelen gaan naar aparte projecten ([[Lagen - Contracts, Domain en Infrastructure|Lagen: Contracts, Domain en Infrastructure]]).

| | Betekenis |
|---|---|
| **Strict layering** | laag A mag enkel laag B aanroepen; properder: de database vervangen raakt maar één laag |
| **Relaxed layering** | laag A mag elke onderliggende laag aanroepen |

## Flow of control vs dependency direction
1. *Flow of control*: gebruiker (Presentation) → regel (Domain) → data bewaard (Infrastructure).
2. *Dependency direction*: **Presentation → Infrastructure → Domain → niets.** Domain hangt van niets af.

## Waarom?
Testbaarheid (Domain los te testen), framework-onafhankelijkheid (is EF achterhaald, herschrijf je enkel Infrastructure), duidelijke verantwoordelijkheden.

## Refactoren (stappenplan)
Class libraries maken → folders verplaatsen → namespaces aanpassen ([[Namespace (CSharp)|Namespace (C#)]]) → EF-NuGets naar Infrastructure → project references → build en fouten oplossen.

## Gerelateerd
[[Repository pattern]] · [[Assembly]] · [[Dependency Injection]]

---
Hoort bij: [[Layered architecture en Repository pattern]]
