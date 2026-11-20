---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Sessies & context
aliases: [Coding agent]
dictionary_nr: 21
---
# Agent

> Een [[Model]] in een [[Harness]] met [[Tool]]s, een [[System prompt]] en een [[Context window]], dat beurten neemt met een gebruiker. Claude Code, Cursor, [[OpenCode]] en ook Claude.ai zijn agents. De agent is "wat je aanspreekt".

## Geen mechanisch onderdeel
Het model is een bestand met parameters, de harness is software. De agent is geen van beide: het is de **combinatie** die je als één actor aanspreekt ("het brak de build weer"). We vermenselijken AI voortdurend; de agent is die vermenselijkte eenheid.

## Wat maakt iets een agent? (gastcollege Inetum)
- Een model interpreteert een **doel of intentie**.
- Kiest **stappen** op basis van context en beschikbare tools.
- Raadpleegt externe systemen of **voert acties uit**.
- **Evalueert tussenresultaten** en past het plan aan.

## Agent-lus
Model stelt een [[Tool call]] voor → harness voert uit → [[Tool result]] terug naar het model → herhaal tot het doel bereikt is.

## Vermijd
"de AI", "de bot" – te vaag; ze verbergen of je de parameters of het geheel bedoelt.

## Relatie met andere notities
- In Copilot Studio heet een gespecialiseerde agent een [[AI agent]] (M365 & Power Platform).
- Een agent die door een andere agent gestart wordt = [[Subagent]].

## Gerelateerd
[[Harness]] · [[Model]] · [[Tool]] · [[Agent mode]] · [[AI agent]] · [[OpenCode]]

## Bron
- AI Coding Dictionary – term 21/71: [Agent](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Agent.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
