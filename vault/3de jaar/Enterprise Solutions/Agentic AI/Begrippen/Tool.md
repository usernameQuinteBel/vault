---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [2, 3]
groep: Tools & environment
aliases: [Tools]
dictionary_nr: 27
---
# Tool

> Een functie die de [[Harness]] aan de [[Agent]] aanbiedt om aan te roepen – bv. Read, Write, Bash, Search. Tools zijn de enige manier waarop een agent de [[Environment (agent)|environment]] kan waarnemen en veranderen.

## Typische tools van een coding-agent
| Tool | Wat |
|---|---|
| Read | Inhoud van een bestand teruggeven |
| Write / Edit | Bestand maken of aanpassen |
| Bash / Shell (bv. PowerShell) | Commando uitvoeren en output teruggeven |
| Search / Grep / Glob | Zoeken in bestanden |
| WebFetch | Een webpagina ophalen |
| Skill / Task | Een [[Skill]] laden of een [[Subagent]] starten |

## Kost
Elke tool call kost een extra [[Model provider request]], want het resultaat moet terug naar het model voor het kan beslissen wat volgt.

## Uitbreiden
Extra tools komen via **[[MCP]]-servers** of plugins. Elke tooldefinitie kost wel tokens in de context.

## In OpenCode
Je zag in module 2 hoe [[OpenCode]] tools zoals PowerShell gebruikt om bestanden te maken, te navigeren, ...

## Gerelateerd
[[Tool call]] · [[Tool result]] · [[MCP]] · [[Permission request]] · [[Tools (Copilot Studio)]]

## Bron
- AI Coding Dictionary – term 27/71: [Tool](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Tool.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]] · [[Module 3 - Context]]
