---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Data operations
aliases: [Compose action]
---
# Compose

> Een data operation die in één stap een invoer neemt, eventueel bewerkt met expressies, en het resultaat teruggeeft als output. Typeloos en erg flexibel.

## Wanneer gebruiken?
- Een tussenresultaat berekenen (bv. de prijs per persoon).
- Zelf een [[JSON]]-object opbouwen.
- Een stuk tekst bewaren, bv. **CSS** om een HTML-tabel op te maken.
- Debuggen: tijdelijk een waarde tonen.

## Variabele vs. Compose
| [[Variabelen in Power Automate|Variabele]] | Compose |
|---|---|
| Heeft een **type** | **Typeloos** (tekst, getal, JSON, XML, ...) |
| Eerst **initialiseren** (bovenaan de flow) | Kan **overal** aangemaakt worden |
| Kan **meerdere keren** gewijzigd worden | Wordt **één keer** ingesteld |
| Overal bruikbaar | Bruikbaar, maar enkel binnen dezelfde scope |
| Veel acties onder *Variables* | Eén actie onder *Data operations* |

## Voorbeeld
Workshopprijs: `if(triggerBody()?['boolean'],100,180)` in een Compose geeft 100 of 180; daarna `mul(outputs('Compose'),triggerBody()?['number'])` voor het totaal. Zie [[Demo 3.5 - Variabelen en Compose (workshopprijs)]].

## Tip
**Hernoem** Compose-acties (bv. *CSS table style*) – anders heb je al snel *Compose 1, 2, 3* en weet niemand meer wat wat is.

## Gerelateerd
[[Variabelen in Power Automate]] · [[Expressions]] · [[JSON]] · [[Arrays in Power Automate]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
