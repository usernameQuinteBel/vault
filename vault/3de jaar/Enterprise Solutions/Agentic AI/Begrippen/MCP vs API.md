---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: MCP
aliases: [API, API vs MCP]
---
# MCP vs API

> Een API is een contract tussen systemen dat een developer in code aanroept. MCP legt daar een laag bovenop zodat een AI-[[Agent]] zelf kan **ontdekken** welke mogelijkheden er zijn en ze kan **kiezen** op basis van een doel. MCP vervangt de API niet.

## Wat is een API?
*Application Programming Interface*: afspraken waarmee software met een ander systeem praat.
- **Endpoint** – welke actie/data beschikbaar is.
- **Request en response** met een vaste structuur (vaak JSON).
- **Authenticatie** – wie mag de call doen; **autorisatie** – wat mag die.
- De **code** van de developer bevat de kennis over volgorde, parameters en foutafhandeling.
Voorbeelden: weer-API, Maps API, betaal-API (Stripe).

## Beperking van klassieke integratie
Elke workflow vraagt code: elke externe dienst mappen naar je eigen model, versies en contractwijzigingen opvolgen, bij meerdere apps hetzelfde werk opnieuw.

## API-driven vs. intent-driven
| API-driven | Intent-driven (agent + MCP) |
|---|---|
| Developer kiest het endpoint | Gebruiker beschrijft het doel |
| Parameters vooraf vastgelegd | Agent kiest de geschikte tool |
| Applicatie bepaalt de volgorde | Planning gebeurt tijdens uitvoering |
| Nieuwe flow = nieuwe code | Nieuwe combinaties worden mogelijk |

## Wat MCP abstraheert
- Endpoints worden beschreven als **capabilities** (tools met naam en beschrijving).
- Parameters krijgen **schema's** die een model kan gebruiken.

## Wat nog steeds nodig is (MCP voegt toe, vervangt niet)
| Nog steeds nodig | Door MCP toegevoegd |
|---|---|
| Betrouwbare API's | Toolbeschrijvingen |
| Identiteit en toegangscontrole | Ontdekken van capabilities |
| Domeinvalidatie | Agent-specifieke context |
| Rate limits en observability | |

## Demo uit het gastcollege
Een student-IT-supportportaal (React + Node) met REST-endpoints (`GET /students/:id`, `GET /devices/:studentId`, `POST /tickets`). De MCP-server leest de data **niet rechtstreeks**: elke tool roept de bestaande REST-API aan. Een ticket dat Claude via MCP maakt, verschijnt dus ook gewoon in het portaal. Zie [[Inetum gastcollege - MCP]].

## Gerelateerd
[[MCP]] · [[MCP-architectuur]] · [[Agent]] · [[API aanroepen in een flow]]

---
Hoort bij: [[Module 3 - Context]]
