---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 4
groep: Memory & steering
aliases: [Meta-repo]
dictionary_nr: 59
---
# Home Repo

> Een repository met je [[Skill]]s, je [[AGENTS.md]] en gedeelde docs, die naar je andere repo's verwijst. Je start je [[Agent]] in de Home Repo, en die opent of cloont de andere repo's wanneer nodig.

## Probleem dat het oplost
Bij een project over meerdere repo's ziet een agent die in één repo start enkel die repo. Elke repo krijgt zijn eigen kopie van skills en agent-setup; die kopieën lopen uit elkaar.

## Wat staat waar?
| In de Home Repo | In elke repo |
|---|---|
| Skills die over repo's heen gebruikt worden | De code van die repo |
| AGENTS.md met een pointer naar elke repo | Eigen AGENTS.md, build- en testcommando's |
| Gedeelde docs: codestandaarden, woordenlijst, systeembrede beslissingen | Docs over enkel die repo |
| Tooling (bv. een CLI die de agent met externe diensten verbindt) | |

Elke pointer is een [[Context pointer]]: één lijn met de repo, waar hij op schijf staat en waar je hem kan clonen.

## Gerelateerd
[[AGENTS.md]] · [[Skill]] · [[Context pointer]]

## Bron
- AI Coding Dictionary – term 59/71: [Home Repo](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Home%20Repo.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 4 - Local AI]]
