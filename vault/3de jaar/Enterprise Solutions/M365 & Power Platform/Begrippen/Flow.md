---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Flows, Cloud flow, Cloud flows]
---
# Flow

> Een workflow in Power Automate: een [[Trigger]] gevolgd door een reeks [[Actie (Power Automate)|acties]], eventueel met condities, lussen en parallelle takken.

## Opbouw
```
Trigger (wanneer...)
 └─ Actie 1
 └─ Condition (if/else)
     ├─ Ja → acties
     └─ Nee → acties
 └─ Apply to each (lus)
     └─ acties per item
```

## Een flow maken
Drie manieren:
1. **Vanuit een template** – snel starten en aanpassen ("tweaken"), zie [[Flow templates]].
2. **Vanaf nul** – zelf trigger en acties kiezen.
3. **Vanuit een lijst/bibliotheek of Teams** – via het menu *Integrate / Automate* of de Workflows-app in Teams.

## De editor
- **New designer** (nieuwe editor) en **classic designer**. In de slides wordt vaak de klassieke modus gebruikt omdat je daar makkelijker ziet waar iets gewijzigd werd. Je kan wisselen met de schakelaar bovenaan.
- Elk blok in het schema kan je openen en aanpassen.

## Van bouwen tot draaien
1. Bouwen → [[Flow checker]] (alle fouten oplossen).
2. Testen (manueel of met een vorige run) – zie [[Flows testen]].
3. Run history bekijken: per stap input en output (in [[JSON]]).
4. Delen of exporteren – zie [[Flows delen en exporteren]].

## Best practices
Zie [[Best practices voor flows]].

## Gerelateerd
[[Power Automate]] · [[Soorten flows]] · [[Trigger]] · [[Actie (Power Automate)]] · [[Dynamic content]] · [[Expressions]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
