---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Data operations
aliases: [Variabelen, Variables, Initialize variable]
---
# Variabelen in Power Automate

> Benoemde waarden met een vast type die je eerst initialiseert en daarna in de flow kan lezen en wijzigen.

## Regels
- De eerste actie is altijd **Initialize variable** (bovenaan, buiten lussen of condities).
- Elke variabele heeft een **type**: Boolean, Integer, Float, String, Object, Array.
- Daarna: *Set variable*, *Increment/Decrement variable*, *Append to string/array variable*.

## Voorbeeld: workshopprijs berekenen
Scenario: een manueel gestarte flow berekent de prijs van een workshop: €100 per persoon voor een standaardworkshop in groep, €180 per persoon voor een workshop op maat.
1. Manuele trigger met **verplichte invoer**: aantal deelnemers (getal) en "standaardworkshop?" (ja/nee).
2. Initialiseer een variabele *Fee*.
3. **Condition** op de ja/nee-invoer (ja/nee wordt gecontroleerd met **true/false**) → zet *Fee* op 100 of 180.
4. Bereken het totaal met `mul()`.

Hetzelfde kan korter met een [[Compose]] – zie [[Demo 3.5 - Variabelen en Compose (workshopprijs)]].

## Gerelateerd
[[Compose]] · [[Arrays in Power Automate]] · [[Expressions]] · [[Trigger]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
