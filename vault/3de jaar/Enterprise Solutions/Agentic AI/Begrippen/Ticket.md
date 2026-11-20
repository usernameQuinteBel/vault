---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Handoffs
dictionary_nr: 50
---
# Ticket

> Een [[Handoff artifact]] dat **één sessie** werk afbakent. Staat op zichzelf of hangt onder een [[Spec]]. Tickets kunnen elkaar blokkeren → de volgorde van werk volgt uit hun afhankelijkheidsgraaf.

## De grootte: één sessie
Een ticket moet af kunnen voor de sessie uit de [[Smart zone]] drijft – en dat is testbaar:
- Sessies degraderen voor het werk af is → tickets te groot, splitsen.
- Sessies besteden het meeste context aan opzet voor 5 minuten werk → te klein, samenvoegen.

## Een goed ticket
Geschreven voor een lezer zonder andere context: doel, acceptatiecriteria, en [[Context pointer]]s naar relevante bestanden en beslissingen.

## Parallelisme
Onafhankelijke tickets (de bladeren van de graaf) kunnen elk tegelijk in een eigen sessie draaien → meerdere agents tegelijk.

## Gerelateerd
[[Spec]] · [[Handoff artifact]] · [[Smart zone]] · [[Context pointer]]

## Bron
- AI Coding Dictionary – term 50/71: [Ticket](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Ticket.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
