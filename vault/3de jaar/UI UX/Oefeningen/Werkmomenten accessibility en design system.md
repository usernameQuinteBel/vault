---
type: oefening
vak: UI UX
onderdeel: UI UX
chapter: 7
groep: Opdrachten
---
# Werkmomenten accessibility en design system

> De vier oefenmomenten uit de les, die samen [[Groepsopdracht 6 - Accessible design system]] opbouwen.

## Werkmoment 1 — Ervaar het zelf
1. Vorm duo's. Stel eerst in hoe je de screen reader snel weer uitzet.
2. **A**: zet VoiceOver/TalkBack aan en probeer in 2 minuten een product in de winkelmand van een webshop te leggen ([[Screen reader]]).
3. **B**: bekijk je eigen hi-fi met een **Color Blind**-plugin (`Ctrl/⌘ + K` › Plugins › Color Blind › Run). Welke informatie valt weg?
4. Delen: wat was je grootste struikelblok? Wat zou je in je eigen ontwerp anders doen?

## Werkmoment 2 — Audit je eigen hi-fi
1. Kies je belangrijkste scherm.
2. Controleer elke tekst-achtergrondcombinatie: 4,5:1 (grote tekst 3:1).
3. Controleer iconen, knoppen en randen van invoervelden: 3:1.
4. Zoek info die enkel via kleur gegeven wordt en klikzones < 44 px (lees W en H af in het rechterpaneel).
5. Zet elke fout als **comment** op je scherm met de gemeten ratio ("Prijs: 3,1 : 1 (min. 4,5)").
6. Delen: elke groep noemt zijn slechtste ratio. Zie [[Kleurcontrast]].

## Werkmoment 3 — Van kleurschaal naar tokens
1. Hernoem je kleurschaal-collection naar **Primitives** (niets opnieuw maken).
2. Maak een collection **Tokens** met minstens: text/default, text/muted, text/on-action, bg/surface, bg/brand, action/primary, border/default, feedback/success, feedback/error.
3. Elke token verwijst via een **alias** naar een tint, nooit naar een hex-code.
4. Vervang in je scherm de primitives door tokens.
5. Los minstens één contrastfout op door een token naar een andere tint te laten verwijzen.
6. Tip: kan je buurgroep aan de naam zien waarvoor elke kleur dient? Zie [[Design tokens]].

## Werkmoment 4 — Component set en annotaties
1. Kies je belangrijkste knop en je invoerveld (of een kaart).
2. Maak er een component set van: Default, Hover, Focus, Disabled (+ Error voor invoervelden).
3. Gebruik enkel tokens in de varianten.
4. Vervang losse knoppen door instances.
5. Annoteer één scherm: labels voor iconknoppen en alt-tekst.
6. Delen: is je focus state duidelijk zichtbaar, ook zonder hover? Zie [[Component set en varianten]] · [[Accessibility-annotaties]].

---
Hoort bij: [[Design Systems & Accessibility]]
