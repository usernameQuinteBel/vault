---
type: chapter
vak: UI UX
onderdeel: UI UX
chapter: 7
groep: Hoofdstukken
---

# Design Systems & Accessibility 🌍🧩

> Je hi-fi scherm staat. Nu maak je er een **systeem** van (tokens, component sets, documentatie) en controleer je of **iedereen** het kan gebruiken. De fouten die je in de audit vindt, los je op **via tokens en componenten**.

## Waar staan we?
| Al gedaan (deel 4) | Vandaag (deel 5) |
|---|---|
| spacing-schaal + layout grid | accessibility **zelf ervaren** en je hi-fi **auditen** |
| typescale + text styles | vastleggen als **design system**: tokens, component sets |
| kleursysteem met variabelen | **annotaties** voor wat je niet ziet |
| componenten + Auto Layout | |

## Deel 1 — Accessibility (A11y)
> *"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect."* — Tim Berners-Lee

### Waarom?
- **1 op 6** mensen wereldwijd leeft met een beperking (WHO).
- **Wettelijk**: de [[European Accessibility Act]] geldt sinds **28 juni 2025** o.a. voor webshops, bankdiensten en e-books.
- Vooral: een **betere ervaring voor iedereen** → accessibility is deel van UX.

### Beperkingen zijn permanent, tijdelijk of situationeel
| | Permanent | Tijdelijk | Situationeel |
|---|---|---|---|
| zicht | blind/slechtziend | na een oogoperatie | fel zonlicht |
| motoriek | één arm | gebroken arm | baby op je arm |
| gehoor | doof | oorontsteking | lawaaierige trein |
Ontwerp voor de eerste kolom en je helpt ook de andere twee → [[Persona spectrum]].

### WCAG 2.2 — mik op AA
Vier principes **P.O.U.R.**: **P**erceivable (contrast, alt-tekst) · **O**perable (toetsenbord, focus) · **U**nderstandable (labels, voorspelbaar gedrag) · **R**obust (devices, browsers). Niveaus A, AA, AAA; wetten vragen **AA**. Zie [[WCAG]].
| Norm (AA) | Waarde |
|---|---|
| contrast gewone tekst | **4,5 : 1** (bv. #767676 op wit haalt het net) |
| contrast grote tekst (≥ 24 px of 18,7 px bold) | **3 : 1** |
| contrast UI-elementen (iconen, rand invoerveld, focusrand) | **3 : 1** |
| klikzone | min. **24 × 24 px**, voor vingers liefst **44–48 px** |
| zoom | tekst tot **200 %** zonder overlap of afknippen |
Uitzonderingen: **disabled** elementen, logo's, puur decoratieve elementen. Zie [[Kleurcontrast]].

### Zes vuistregels
Voldoende contrast · info **nooit enkel via kleur** · interactieve elementen herkenbaar · **labels en instructies** bij formuliervelden · alternatieven voor beeld/media · duidelijke, consistente navigatie. Zie [[Accessibility (A11y)]].

### Voorbeeld-audit: productkaart
| Probleem | Gemeten | Fix |
|---|---|---|
| wit icoon op oranje winkelmandknop | 2,2 : 1 (min. 3) | donker icoon (7,0 : 1) of donkerder oranje |
| groene tekst "Morgen geleverd" | 3,1 : 1 (min. 4,5) | green/700 #007A0F → 5,5 : 1 |
| gele sterren op wit, vol/leeg enkel via kleur | 1,4 : 1 | score ook als tekst ("4,0") + donkerder geel |
| titel, header, "Onze keuze" | 5,6–18,6 : 1 | ✓ |

### Tools
In Figma: **contrast checker** in de color picker, **Stark**-plugin, **Color Blind**-plugin. Web: **WebAIM Contrast Checker**; bij het bouwen: **WAVE**, **Google Lighthouse**. Zelf ervaren met een [[Screen reader]] (VoiceOver: 3× zijknop; TalkBack: beide volumeknoppen 3 s; vegen = volgend element, dubbeltik = activeren).

## Deel 2 — Design systems
> *"A design system is the single source of truth for design decisions."*
Herbruikbare **componenten, stijlen en richtlijnen** → consistentie, schaalbaarheid, één referentie voor het team. In de praktijk start je vaak van een **UI kit** en pas je die aan; hier bouw je zelf een klein systeem om de **logica** te begrijpen. Zie [[Design system]].

### Tokens: geef je kleuren een rol
| Primitive (ruwe waarde) | → Semantische token | Gebruikt in |
|---|---|---|
| blue/900 #003399 | color/bg/brand | header, filterknop |
| orange/500 #FF9500 | color/action/primary | winkelmandknop |
| green/500 #00AB14 | color/text/success | "Morgen geleverd" |
| neutral/0 #FFFFFF | color/bg/surface | kaartachtergrond |
In Figma: twee **variable collections** — *Primitives* en *Tokens* (die via een **alias** verwijzen). In code: `--color-text-success: var(--green-500);`.
**Eén token aanpassen, overal opgelost**: `text/success` → green/700 en alle "Morgen geleverd"-teksten halen 5,5 : 1. Waarom niet green/500 zelf donkerder? Dan klopt je schaal niet meer en verandert ook elke plek waar het wél goed was. Zie [[Design tokens]].

### Atomic Design
Atoms (knop, label) → molecules (label + input) → organisms (navigatie, kaart) → templates → pages. Zie [[Atomic Design]].

### Component sets: varianten en states
- Eén **component set** met variant-properties, bv. `Type` (primary, secondary) × `State` (default, hover, focus, disabled); naam `Type=Primary, State=Hover`.
- Andere properties: tekst, icoon aan/uit (boolean), icoon wisselen (instance swap).
- Gebruik altijd **instances** → component aanpassen = elk scherm past mee.
- **Bouw a11y in**: knoppen met contrast, **zichtbare focus state** en ≥ 44 px; invoervelden met **zichtbaar label** en een **foutmelding met icoon + tekst** (niet enkel rood); disabled mag lager contrast.
Zie [[Component set en varianten]].

### Annoteer wat je niet ziet
Labels voor iconknoppen ("Winkelmand, 2 items"), **alt-tekst** (of "decoratief"), **koppen** (H1/H2). In Figma: **Annotation tool (Shift + T)** of een eigen annotatie-component. Zie [[Accessibility-annotaties]].

### Documenteren
Een page **"Design system"**: foundations (primitives + tokens, typescale, spacing, grid), componenten met alle varianten, en **3 à 5 gebruiksregels** (do/don't, bv. "één `action/primary`-knop per scherm"; "geen primitives rechtstreeks in schermen"). Zie [[Design system documenteren]].

## Werkmomenten
De vier oefenmomenten (ervaren, auditen, tokens, component set + annotaties) staan stap voor stap in [[Werkmomenten accessibility en design system]].

## Opdracht 📝
[[Groepsopdracht 6 - Accessible design system]]

## Begrippen
[[Accessibility (A11y)]] · [[WCAG]] · [[Kleurcontrast]] · [[Screen reader]] · [[Persona spectrum]] · [[European Accessibility Act]] · [[Design system]] · [[Design tokens]] · [[Atomic Design]] · [[Component set en varianten]] · [[Accessibility-annotaties]] · [[Design system documenteren]]

---
Hoort bij: [[UI UX]]
