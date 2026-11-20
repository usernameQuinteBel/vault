# Instructies voor AI-agents (Claude Code, OpenCode, ...)

Deze repo is een Obsidian-vault met cursuskennis, later getoond als 3D-kennisgraaf. De gebruiker gebruikt de vault als **naslagwerk**: notities moeten uitgebreid en duidelijk zijn, niet kort samengevat.

## Mappen
- `bronnen/<jaar>/<Vak>/<Onderdeel>/<Chapter of Module>/{theorie,oefeningen of tasks,resources}` (jaar = `1ste jaar`, `2de jaar`, `3de jaar`) – originele slides, PDF's, zips, `links.txt`. **Lokaal, in .gitignore.** Enkel lezen.
- `vault/` – de notities (Markdown). Gaat naar GitHub.
- `vault/Templates/` – sjablonen.

## Structuur
Elk vak hoort bij een jaar: `vault/<jaar>/<Vak>/...` en `bronnen/<jaar>/<Vak>/...`. Voeg een nieuw vak toe aan de lijst in `<jaar>.md`.

## Notitietypes (frontmatter `type`)
| type | wat | map |
|---|---|---|
| opleiding | overzicht van de opleiding | `vault/IT Factory.md` |
| jaar | overzicht van een jaar | `vault/<jaar>/<jaar>.md` |
| vak | overzicht van een vak | `vault/<jaar>/` |
| onderdeel | overzicht van een onderdeel | `vault/<jaar>/<Vak>/<Onderdeel>/` |
| chapter | overzicht per chapter, linkt naar alle begrippen/demo's/oefeningen | idem |
| begrip | één concept, uitgebreid uitgelegd | `.../Begrippen/` |
| demo | stappenplan van een demo uit de slides | `.../Oefeningen/` |
| oefening | opdracht uit een oefeningen-PDF of link | `.../Oefeningen/` |

Frontmatter: `type`, `vak`, `onderdeel`, `chapter` (getal of lijst `[1, 3]`), `groep` (cluster/kleur in de graaf), optioneel `aliases`.

## Opbouw van een begrip
1. `> ` één zin definitie
2. `## Wat is het?`
3. Waarom / wanneer gebruiken, hoe werkt het, tabellen voor vergelijkingen
4. Voorbeelden uit de les
5. `## Let op` / valkuilen
6. `## Gerelateerd` met `[[links]]`
7. `## Meer leren` met officiële links (optioneel)
8. Voettekst `Hoort bij: [[Chapter ...]]`

## Schrijfregels
- Nederlands; vaktermen in het Engels (Power Apps, tenant, connector, trigger, ...).
- **Eigen woorden**, geen zinnen letterlijk uit de slides. Geen wachtwoorden/accounts/tenantgegevens.
- Bestaat een begrip al (ook uit een ander chapter)? **Vul het aan** en voeg het chapter toe aan `chapter:`.
- Elke `[[link]]` moet naar een bestaande notitie wijzen (of een alias). Controleer na het schrijven.
- Bestandsnaam = titel. Demo's: `Demo X.Y - ...`, oefeningen: `Oefening X.Y - ...`.
