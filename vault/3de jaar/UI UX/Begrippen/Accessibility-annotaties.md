---
type: begrip
vak: UI UX
onderdeel: UI UX
chapter: 7
groep: Design system
aliases: [Annotaties, Alt-tekst, Annotation tool]
---

# Accessibility-annotaties

> Notities in je ontwerp voor toegankelijkheid die je **niet ziet**: wat een screen reader voorleest, welke alt-tekst een afbeelding krijgt, welke tekst een kop is. Zo hoeft de developer **niet te gokken**.

## Wat annoteer je?
| Annotatie | Vraag | Voorbeeld |
|---|---|---|
| **Labels voor iconknoppen** | wat leest een [[Screen reader]] voor bij een knop zonder tekst? | ☰ "Menu openen" · 🔍 "Zoeken" · 👤 "Account" · ♡ "Favorieten" · 🛒 "Winkelmand, 2 items" |
| **Alt-tekst** | wat staat er op een afbeelding — of is ze **decoratief** (dan leeg)? | "iPhone 17 in zwart, voor- en achterkant" |
| **Koppen** | welke tekst is H1, H2…? (screen readers navigeren via koppen) | "Smartphones" = H1 |
| (optioneel) **focusvolgorde** | in welke volgorde springt Tab door de elementen? | genummerde pijlen |
| (optioneel) **landmarks** | header, nav, main, footer | kaders |

## Hoe in Figma?
- **Annotation tool** (**Shift + T**) → klik op een element → typ de notitie ("Label: Winkelmand", "Alt: …", "H1").
- Werkt het niet in jullie plan? Maak een eigen **annotatie-component**: een genummerde cirkel + label, en een legende naast het scherm.

## Goede alt-tekst
- Beschrijf de **functie/inhoud**, niet "afbeelding van…".
- Kort (± 1 zin), relevant in de context.
- Decoratieve beelden → leeg (`alt=""`), anders leest de screen reader ruis voor.
- Bevat het beeld tekst die belangrijk is? Neem die op.

## Waarom?
Labels en alt-tekst zijn deel van WCAG-principe **Perceivable** en **Understandable** ([[WCAG]]). In code worden ze `aria-label`, `alt`, `<h1>` of `Semantics`/`tooltip` (Flutter) en `SemanticProperties` (MAUI).

## Gerelateerd
[[Accessibility (A11y)]] · [[Screen reader]] · [[WCAG]]

---
Hoort bij: [[Design Systems & Accessibility]]
