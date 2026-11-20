---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [2, 3]
groep: Tools & environment
aliases: [Model Context Protocol, MCP server, MCP-server]
dictionary_nr: 30
---
# MCP

> **Model Context Protocol**: een open protocol om externe tool-servers aan een [[Harness]] te koppelen – zo krijgt een [[Agent]] [[Tool]]s bovenop wat de harness zelf meebrengt. Geïntroduceerd door Anthropic (november 2024). Naast tools kan een server ook **resources** (leesbare data) en **prompts** (herbruikbare sjablonen) aanbieden.

## Welk probleem lost het op?
Zonder standaard moet elke harness zijn eigen Jira-, Slack- of database-integratie bouwen en onderhouden. Met MCP schrijf je de integratie **één keer als server**, en elke MCP-compatibele harness kan ze gebruiken: de harness verbindt met de server, de server meldt welke tools hij heeft, en die tools worden beschikbaar naast de ingebouwde.

De agent "roept geen MCP aan" – hij roept een tool aan die de harness via een MCP-server kreeg.

## Architectuur
Zie [[MCP-architectuur]] voor host, client, server, tools/resources/prompts en hoe een tool call verloopt.

## Kost: context
Elke tool die een server aanbiedt, komt als **definitie** (naam, beschrijving, parameterschema) in de context. Laad je naïef alles, dan start een sessie met duizenden tokens aan schema's – die [[Attention budget]] kosten voor tools die je niet gebruikt.
- Oplossing in veel harnesses: **tool search** – enkel een [[Context pointer]] naar de tools; de definitie wordt pas geladen wanneer nodig.
- Anders: zet enkel de servers aan die het project echt nodig heeft.

## MCP vs. API
Zie [[MCP vs API]]: MCP vervangt de API niet, maar legt er een laag bovenop die door AI ontdekt en gebruikt kan worden.

## In OpenCode
MCP-servers configureer je in de OpenCode-config (`opencode.json`, bv. globaal) – zie [[OpenCode]] en de [docs](https://opencode.ai/docs/mcp-servers/).

## Gerelateerd
[[MCP-architectuur]] · [[MCP vs API]] · [[MCP security en governance]] · [[Tool]] · [[Inetum gastcollege - MCP]] · [[Task 3.1 - BPMN-analyse met MCP-servers]]

## Bron
- AI Coding Dictionary – term 30/71: [MCP](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/MCP.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]] · [[Module 3 - Context]]
