---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: MCP
aliases: [MCP host, MCP client, MCP resources, MCP prompts]
---
# MCP-architectuur

> Hoe [[MCP]] technisch in elkaar zit: een **host** (de AI-applicatie) bevat **clients** die verbinden met **servers**, en servers bieden **tools**, **resources** en **prompts** aan bovenop bestaande systemen.

## Rollen
| Rol | Wat | Voorbeeld |
|---|---|---|
| **Host** | De AI-applicatie waarin de gebruiker werkt | Claude Desktop, [[OpenCode]], een IDE-assistent |
| **Client** | Onderdeel in de host dat de verbinding met één server beheert | Eén client per server |
| **Server** | Biedt mogelijkheden aan en praat met het onderliggende systeem | GitHub-, Playwright-, BPMN- of eigen server |
| **Onderliggend systeem** | De echte data/dienst | REST-API, database, bestanden |
Een host kan **meerdere servers** gebruiken.

## Wat biedt een server aan?
| Primitive | Wat | Voorbeeld |
|---|---|---|
| **Tools** | Acties die het model kan laten uitvoeren | `create_support_ticket`, `get_student_devices` |
| **Resources** | Leesbare context zonder actie | Een bestand, een databaseschema, een handleiding |
| **Prompts** | Herbruikbare taaksjablonen met invoervelden | "vat dit incident samen voor doelgroep X" |

## Verloop van een tool call
1. Bij het verbinden **ontdekt** de host welke tools de server heeft (naam, beschrijving, invoerschema).
2. Het model stelt een tool call voor met gestructureerde argumenten.
3. De host stuurt die via zijn client naar de server.
4. De server voert de (toegestane) operatie uit – vaak door een bestaande API aan te roepen.
5. Het resultaat gaat terug naar de host en wordt beschikbaar voor het model.
6. Het model antwoordt of vraagt een volgende stap.

## Transport
- **stdio** – de host start de server als lokaal proces (bv. `node mcp-server/src/index.js`).
- **HTTP (streamable)** – de server draait ergens op het netwerk; vaak met authenticatie (bv. OAuth/tokens).

## Configuratie (voorbeeld Claude Desktop → OpenCode)
Claude Desktop:
```json
{ "mcpServers": { "university-it-support": {
    "command": "node",
    "args": ["C:/pad/naar/mcp-server/src/index.js"],
    "env": { "UNIVERSITY_API_URL": "http://localhost:4000" } } } }
```
OpenCode (`opencode.json`, sleutel `mcp`, type `local`, command als lijst):
```json
{ "mcp": { "university-it-support": {
    "type": "local",
    "command": ["node", "C:/pad/naar/mcp-server/src/index.js"],
    "environment": { "UNIVERSITY_API_URL": "http://localhost:4000" },
    "enabled": true } } }
```
(Controleer de exacte sleutels in de [OpenCode MCP-docs](https://opencode.ai/docs/mcp-servers/).)

## Gerelateerd
[[MCP]] · [[MCP vs API]] · [[MCP security en governance]] · [[Inetum gastcollege - MCP]] · [[Tool call]]

---
Hoort bij: [[Module 3 - Context]]
