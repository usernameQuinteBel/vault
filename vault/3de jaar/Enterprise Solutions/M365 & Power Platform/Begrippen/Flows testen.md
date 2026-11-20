---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Run history, Testen]
---
# Flows testen

> Een flow test je manueel (door de trigger zelf te laten gebeuren) of automatisch met data van een vorige run, en daarna bekijk je per stap wat er gebeurde in de run history.

## Testen
- **Eerste keer: manueel** – bv. zelf een mail met bijlage naar je inbox sturen, een bestand toevoegen, een formulier invullen.
- **Daarna: automatisch** – kies een vorige run om de trigger opnieuw te gebruiken.
- **Scheduled flows** kan je meteen vanuit de editor testen.

## Run history
- Klik op een run → je ziet elke stap met een groen vinkje of rode fout.
- Open een stap → **Show raw inputs / outputs** toont de [[JSON]].
- Handig om de output te kopiëren voor [[Parse JSON]].

## Analytics
Op de detailpagina van de flow → **Analytics** → aantal runs en acties (belangrijk voor de request-limieten).

## Tips
- Gebruik [[Control-acties|Terminate]] om al geteste stappen tijdelijk over te slaan.
- Na een aanpassing: **opnieuw testen**!

## Gerelateerd
[[Flow checker]] · [[Flow]] · [[Best practices voor flows]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
