---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [2, 3, 4]
groep: Prompting & tools
aliases: [opencode, OpenCode CLI]
---
# OpenCode

> Een open-source AI-coding-[[Agent]] (een [[Harness]]) voor de terminal en IDE. Gekozen in het vak omdat hij **gratis**, **open source** en **niet gebonden aan één model of bedrijf** is: je kiest een eigen model (cloud of lokaal via [[Ollama]]) of een meegeleverd gratis model.

## Installeren (Windows)
```powershell
npm install -g opencode-ai
opencode            # starten in de terminal
opencode upgrade --major   # upgraden naar de nieuwste major versie (nodig voor de handoff-plugin)
```
Niet de WSL-versie gebruiken. Standaard gebruikt hij vaak het gratis model *Big Pickle*. In de les gebruik je OpenCode **in VS Code** (terminal in de IDE).

## Belangrijkste functies
| Functie | Wat |
|---|---|
| **Plan / Build** (Tab) | Plannen zonder wijzigingen vs. uitvoeren – zie [[Agent mode]] |
| **Tools** | Bestanden lezen/schrijven, shell (PowerShell), zoeken – zie [[Tool]] |
| **/new** | Nieuwe [[Session]] |
| **/models** | Model kiezen |
| **/init** | Een [[AGENTS.md]] laten genereren voor je project |
| **Skills** | `.opencode/skills/<naam>/SKILL.md` – zie [[Skill]] |
| **MCP-servers** | Extra tools via `opencode.json` – zie [[MCP]] |
| **Plugins** | Bv. `opencode-handoff` voor /handoff – zie [[Handoff]] |
| **Export** | Gesprek exporteren (voor de tasks) |

## Configuratie
- Globaal: `~/.config/opencode/opencode.json`; per project: `opencode.json` in de projectmap.
- Hierin: provider/modellen, MCP-servers (`"mcp": {...}`), plugins (`"plugin": [...]`).
- Let op: in de handoff-README staat `"plugins"`, maar het moet **`"plugin"`** zijn (fout in de README, zie Task 3.2).
- Docs: [opencode.ai/docs/config](https://opencode.ai/docs/config/)

## Tasks met OpenCode
[[Task 2.1 - OpenCode met Plan en Build mode]] · [[Task 2.2 - Skills demonstreren]] · [[Task 3.1 - BPMN-analyse met MCP-servers]] · [[Task 3.2 - Handoff-plugin in OpenCode]] · [[Task 4.1 - Lokaal model met Ollama]] · [[Task 4.2 - Context engineering voor kleine modellen]]

## Gerelateerd
[[Harness]] · [[Agent mode]] · [[Skill]] · [[AGENTS.md]] · [[MCP]] · [[Ollama]]

---
Hoort bij: [[Module 2 - Harness & Agentic AI]] · [[Module 3 - Context]] · [[Module 4 - Local AI]]
