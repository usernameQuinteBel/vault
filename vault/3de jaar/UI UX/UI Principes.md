---
type: chapter
vak: UI UX
onderdeel: UI UX
chapter: 6
groep: Hoofdstukken
---

# UI Principes 🎨

> Van **lo-fi naar hi-fi**. Je lo-fi legt vast **wát** er op een scherm staat; hi-fi bepaalt **hoe** het eruitziet — **met een systeem, niet op gevoel**. Vier pijlers: **visuele hiërarchie**, **spacing & alignment**, **typografie** en **kleur**. Componenten en [[Auto Layout]] gebruik je volop.

## 1. Visuele hiërarchie — wat moet de gebruiker eerst zien?
Bepaalt de **volgorde** waarin iemand je scherm leest. Je stuurt die met:
| Middel | Effect |
|---|---|
| **grootte** | groter valt eerst op |
| **gewicht** | bold vs. regular |
| **kleur & contrast** | opvallend vs. gedempt |
| **positie** | we lezen boven → onder, links → rechts |
| **witruimte** | ruimte rond iets geeft het gewicht |
**Squint test**: knijp je ogen half dicht — valt het belangrijkste nog op? Zie [[Visuele hiërarchie]] en [[Squint test]].

### Gestalt: zo groeperen we
| Principe | In UI |
|---|---|
| **nabijheid** — dicht bij elkaar hoort samen | label bij zijn invoerveld, titel bij zijn kaart |
| **gelijkenis** — gelijk uitzicht = gelijke functie | alle links dezelfde kleur, alle primaire knoppen gelijk |
| **gemeenschappelijke regio** — kader/achtergrond = groep | kaarten, secties met achtergrondkleur |
| **uitlijning** — op één lijn = één geheel | tekst, knoppen en beelden op dezelfde rand |
Nabijheid is de reden waarom spacing zo belangrijk is. Zie [[Gestaltprincipes]].

## 2. Spacing & alignment — rust en structuur
- Eén **spacing-schaal**: **8-point grid** (veelvouden van 8), met **4** voor fijne stappen (icoon ↔ label): `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64`. **Geen 13 of 27 px.**
- In code: `8px = 0.5rem`; Tailwind 1 stap = 4 px (`p-2` = 8 px, `p-4` = 16 px).
- **Spacing = relatie**: hoe nauwer verwant, hoe kleiner de afstand — *myself* 4 px (icoon + label), *parent* 16 px (blokken in een kaart), *family friend* 48 px (losse secties).
- **Uitlijning**: kies een paar **vaste randen**; tekst links uitlijnen; iconen verticaal centreren op hun label. Minder uitlijnlijnen = rustiger. *Perfecte uitlijning is onzichtbaar, maar voelbaar.*
- **Layout grid** (startwaarden):

| Toestel | Kolommen | Marge | Gutter |
|---|---|---|---|
| mobiel | 4 | 16 px | 16 px |
| tablet | 8 | 24 px | 24 px |
| desktop | 12 | ≥ 32 px | 24 px |
Zie [[Spacing system]] · [[Uitlijning]] · [[Layout grid]].

## 3. Typografie — leesbaar en duidelijk
| Regel | Waarde |
|---|---|
| fonts | **max. 2**, met meerdere gewichten (bv. Inter Regular/Medium/Semi Bold/Bold) |
| UI-tekst | sans-serif; serif kan voor titels |
| hiërarchie | via **grootte en gewicht**, niet via extra fonts |
| regelhoogte | **1.4–1.6×** lopende tekst, **1.1–1.3×** titels |
| regellengte | **45–75 tekens** |
| uitlijning | links |
**Typescale**: basis **16 px** (14 voor compacte apps), ratio **1.2–1.25**, afgerond op het 4-px-grid → bv. H1 32 · H2 24 · H3 20 · Body 16 · Small 12. Vastleggen als **text styles** (grootte + regelhoogte + gewicht). Tools: typescale.com, fontpair.co. Zie [[Typografie in UI]] · [[Typescale]].

## 4. Kleur — een rol per kleur
Kleur is **functioneel** (status, actie), **emotioneel** (merk) en **praktisch** (contrast). *Kleur is informatie, geen decoratie.*
1. **Primary**: de merkkleur (blauw = betrouwbaar, groen = groei, paars = creatief, oranje = energie, rood = urgentie — cultuurgebonden richtlijn).
2. **Neutrals** + zwart/wit voor achtergrond en tekst.
3. **Accent** (secundaire acties, spaarzaam) en **feedbackkleuren** (success, warning, danger, info — vaste betekenis, los van het merk).
- Elke kleur een **schaal 50–900** (licht → donker), naam als `Primary/500`. Opbouwen met **[[HSL]]** (hue vast, lightness 10–90 %).
- Verhouding **[[60-30-10 regel|60-30-10]]**: 60 % neutraal, 30 % primary, 10 % accent.
- Tools: Figma Colors, Color Palette Generator, Realtime Colors, tailwind.ink.
Zie [[Kleursysteem]].

## Uitgewerkt voorbeeld: productkaart (webshop)
| Pijler | Toepassing |
|---|---|
| hiërarchie | titel groot en bold → prijs bold (2de) → merk klein en licht → specs regular |
| spacing | één gedeelde linkerrand; merk+titel dicht bij elkaar, prijs+levering ook; meer ruimte tussen kaarten; elke kaart = één component |
| kleur | blauw (primary) voor header en "Onze keuze", **oranje enkel voor "In winkelmand"**, groen voor "Morgen geleverd", wit/grijs als basis |

## Van ontwerp naar code
| | Figma | CSS | Tailwind |
|---|---|---|---|
| spacing | Auto Layout gap 16 | `gap: 1rem` | `gap-4` |
| typografie | text style H2 · 24/32 Bold | `font-size: 1.5rem; line-height: 2rem` | `text-2xl font-bold` |
| kleur | variabele `Primary/500` | `var(--primary-500)` | `bg-primary-500` |
Daarom loont een systeem: elke waarde in Figma wordt letterlijk een waarde in code → [[Design tokens]].

## Opdracht 📝
[[Groepsopdracht 5 - Moodboard en hi-fi ontwerp]] — controleer met de [[Hi-fi checklist]]. Visuele richting eerst vastleggen met een [[Moodboard]].

## Begrippen
[[Visuele hiërarchie]] · [[Squint test]] · [[Gestaltprincipes]] · [[Spacing system]] · [[Uitlijning]] · [[Layout grid]] · [[Typografie in UI]] · [[Typescale]] · [[Kleursysteem]] · [[HSL]] · [[60-30-10 regel]] · [[Moodboard]] · [[Hi-fi checklist]] · [[Auto Layout]]

---
Hoort bij: [[UI UX]]
