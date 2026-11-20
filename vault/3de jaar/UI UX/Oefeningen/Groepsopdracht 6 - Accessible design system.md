---
type: oefening
vak: UI UX
onderdeel: UI UX
chapter: 7
groep: Opdrachten
---

# Groepsopdracht 6 - Accessible design system 🌍🧩

> Maak van je hi-fi ontwerp een **klein, toegankelijk design system**: tokens, component sets met states, documentatie — en los de accessibility-fouten uit je audit **via die tokens en componenten** op.

## Wat moet er zijn?
### Design system
| Onderdeel | Concreet | Zie |
|---|---|---|
| **Primitives** | je kleurschaal (bv. blue/500) als variable collection | [[Kleursysteem]] |
| **Semantische tokens** | collection *Tokens* met min. text/default, text/muted, text/on-action, bg/surface, bg/brand, action/primary, border/default, feedback/success, feedback/error — elk via een **alias** | [[Design tokens]] |
| **Component sets** | knop, invoerveld (of kaart) met **Default, Hover, Focus, Disabled** (+ **Error** voor invoer), enkel tokens | [[Component set en varianten]] |
| **Instances** | schermen gebruiken instances, geen losgekoppelde kopieën | |
| **Page "Design system"** | foundations, componenten, **3 à 5 gebruiksregels** | [[Design system documenteren]] |

### Accessibility
| Onderdeel | Concreet | Zie |
|---|---|---|
| **Audit** | contrast (4,5 : 1 tekst, 3 : 1 groot/iconen/randen), info niet enkel via kleur, klikzones ≥ 44 px — fouten als comment met de gemeten ratio | [[Kleurcontrast]] · [[WCAG]] |
| **Oplossen** | via **tokens** (token naar donkerdere tint) en **componenten** (focus state, label, foutmelding met icoon + tekst) | |
| **Annotaties** | minstens één scherm: labels voor iconknoppen, alt-tekst, koppen | [[Accessibility-annotaties]] |

## Volgorde (= de werkmomenten)
1. Zelf ervaren (screen reader, Color Blind-plugin).
2. Audit van je belangrijkste scherm.
3. Primitives → tokens, scherm omzetten naar tokens, contrastfout oplossen.
4. Component sets + annotaties.
Stap voor stap: [[Werkmomenten accessibility en design system]].

## Eindcontrole (checklist uit de les)
- [ ] Schermen gebruiken **enkel tokens**.
- [ ] Elke tekst gebruikt een **text style**.
- [ ] Component sets met hover, focus, disabled, error.
- [ ] Contrast gehaald; info nooit enkel via kleur.
- [ ] Klikzones ≥ 44 px (absoluut min. 24).
- [ ] Formulieren: zichtbaar label + duidelijke foutmelding.
- [ ] Minstens één scherm geannoteerd.
- [ ] Documentatiepage met 3–5 regels.
Gebruik deze lijst ook om een **andere groep feedback** te geven.

---
Hoort bij: [[Design Systems & Accessibility]]
