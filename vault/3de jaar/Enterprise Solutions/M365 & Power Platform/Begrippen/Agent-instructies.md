---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 5
groep: Copilot Studio
aliases: [Instructies, Instructions, Starter prompts]
---
# Agent-instructies

> De instructies van een agent bepalen zijn rol, taken, grenzen, toon en hoe hij met fouten en privacy omgaat. Goede instructies zijn de belangrijkste factor voor een goede agent.

## Tips voor goede instructies
- Gebruik **duidelijke, specifieke en uitvoerbare** taal; vermijd dubbelzinnigheid.
- Omschrijf de **rol** en de **taken** van de agent.
- Splits complexe taken op in **stappen**.
- Gebruik **Markdown** (kopjes, bullets) voor leesbaarheid.
- Geef **voorbeelden** en leg vakjargon uit.
- Leg regels vast voor **toon**, **privacy** en **foutafhandeling**.
- Zeg ook wat de agent **niet** mag doen (onderwerpen buiten scope).
- Verwijs naar **tools** in de instructies om ze te laten gebruiken ("Als de gebruiker vraagt om ..., gebruik dan de tool X").

## Voorbeeldstructuur (drone-regels agent)
```markdown
# Doel
- De agent geeft enkel informatie, geen juridisch advies of vluchttoelatingen.

# Antwoordregels
- Vermeld bij vluchten in de EU altijd de toepasselijke EU-verordeningen.
- Herinner gebruikers eraan de nationale geozones en lokale beperkingen te controleren.
- Geef minstens één link naar EASA of een nationaal geo-portaal.
- Gebruik een precieze, neutrale toon met focus op veiligheid.
- Beantwoord geen vragen buiten luchtvaart (bv. hardwareproblemen).
```

## Voorgestelde prompts (starter prompts)
Knoppen die gebruikers kunnen aanklikken, bv. "Minimumleeftijd" of "Registratie verplicht?", met achter elke knop een uitgewerkte prompt (bron vermelden, samenvatten in bullets, ...).

## Gerelateerd
[[Declarative agent]] · [[Kennisbronnen (Copilot Studio)]] · [[Tools (Copilot Studio)]] · [[Demo 5.1 - Drone-regels agent (Lite)]]

---
Hoort bij: [[Chapter 5 - Copilot Studio]]
