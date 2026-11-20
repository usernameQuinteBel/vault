---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: 7
groep: Design system
aliases: [Design system checklist]
---
# Design system documenteren

> Maak een aparte **page "Design system"** in je Figma-bestand, zodat je team (en jijzelf over drie weken) weet welke keuzes al gemaakt zijn.

## Inhoud van de page
1. **Foundations**: kleuren (primitives én tokens met hun alias), typescale, spacing en grid.
2. **Componenten**: elke component set met al zijn varianten en states (Button, Input, Card…).
3. **Richtlijnen**: **3 à 5 korte gebruiksregels** voor het systeem als geheel. Per component volstaat één zin in het **description**-veld.

## Voorbeeld richtlijnen (do/don't)
- ✓ Do: één `color/action/primary`-knop per scherm, voor de hoofdactie.
- ✕ Don't: primitives rechtstreeks in je schermen gebruiken.
- Foutmeldingen altijd met icoon + tekst.
- Elke tekst gebruikt een text style.
- Klikzones minstens 44 px.

## Checklist: is je design system klaar?
**Design system**
- [ ] Tokens: kleurschaal als primitives + semantische tokens; schermen gebruiken enkel tokens.
- [ ] Typografie: elke tekst gebruikt een text style.
- [ ] Componenten: component sets met states (hover, focus, disabled, error).
- [ ] Instances: geen losgekoppelde kopieën.
- [ ] Documentatie: page met foundations, componenten en 3–5 regels.

**Accessibility**
- [ ] Contrast: tekst ≥ 4,5:1; grote tekst, iconen en randen ≥ 3:1.
- [ ] Info nooit enkel via kleur.
- [ ] Klikzones ≥ 44 px (absoluut minimum 24 px).
- [ ] Formulieren: zichtbaar label en duidelijke foutmelding.
- [ ] Annotaties: labels voor iconknoppen en alt-tekst op minstens één scherm.

---
Hoort bij: [[Design Systems & Accessibility]]
