---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Power Automate
aliases: [Run a prompt, AI prompt, Prompts]
---
# AI Prompt in Power Automate

> Een eigen AI-prompt (via AI Builder) die je als actie in een flow gebruikt om bv. gestructureerde data uit vrije tekst te halen.

## Werkwijze
1. Power Automate → **More → Prompts** → nieuwe prompt, bv. vanuit het sjabloon *Extract information from text*.
2. Schrijf duidelijke **instructies**: de rol van de AI, welke velden er precies uit moeten, wat te doen als iets ontbreekt (bv. lege string).
3. Kies als output **JSON** (beter dan tekst) en geef een **voorbeeld-JSON** mee voor het schema.
4. **Test** de prompt met voorbeeldtekst tot het resultaat klopt.
5. In de flow: connector **AI capabilities → Run a prompt**.
6. De velden uit de JSON-output zijn bruikbaar als dynamic content.

## Tips voor een goede prompt
- Geef de AI één duidelijke taak ("je enige taak is ...").
- Nummer de velden en omschrijf ze precies.
- Vraag **enkel** JSON terug, exact volgens het schema.
- Zeg wat er moet gebeuren als een waarde ontbreekt.

## Let op: capaciteit
AI Builder/Copilot-functies vragen credits. Studenten krijgen die niet zomaar gratis → maak een **trial-environment** (30 dagen) via de Power Platform admin. Zie [[Environment]].

## Gerelateerd
[[AI Builder]] · [[JSON]] · [[Oefening 3.1 - Vacature-data uit e-mail halen met AI]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
