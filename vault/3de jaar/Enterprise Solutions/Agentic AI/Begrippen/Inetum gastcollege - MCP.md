---
type: voorbeeld
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: MCP
aliases: [Inetum guest lecture, Gastcollege MCP]
---
# Inetum gastcollege - MCP

> Gastcollege van Inetum (16 oktober 2026) over het professionele gebruik van MCP in AI-agents: *From APIs to AI Agents – how Model Context Protocol connects AI applications to tools and data*.

## Opbouw
1. **API's** – contracten tussen systemen; klassieke integratie vraagt code per workflow → zie [[MCP vs API]].
2. **LLM's** – wat ze kunnen en hun beperkingen ([[LLM]]); hoe AI het werk van developers veranderde (bv. de daling van vragen op Stack Overflow, al is het niet zeker hoeveel daarvan door AI komt).
3. **"Can't you just do it with AI?"** – een LLM schrijft tekst maar voert op zich **geen acties** uit; de output moet nog op de juiste plek geraken.
4. **AI-agents en intent-driven werken** – de agent interpreteert een doel, kiest tools, evalueert resultaten → [[Agent]].
5. **MCP** – standaard om tools, data en prompts te ontdekken en te gebruiken → [[MCP-architectuur]].
6. **Use case: IT service desk** – "mijn laptop krijgt geen wifi, maak een ticket en stel eerste checks voor".
7. **Security en governance** → [[MCP security en governance]].
8. **Praktijkvoorbeeld** – UZ Brussel: meerdere AI-diensten georkestreerd rond het zorgproces (afspraken plannen, patiëntendossiers samenvatten, spraak-naar-tekst).

## De service-desk-flow
Verzoek analyseren → gebruiker en toestel identificeren → kennisbank doorzoeken → ticket maken/bijwerken → antwoorden met volgende stappen.

| Tool | Input | Output |
|---|---|---|
| findUser | E-mail of naam | User-id, afdeling |
| getDevice | User-id of asset tag | Device-id, OS, eigenaar, status |
| searchKnowledgeBase | Dienst en symptomen | Artikels, eerdere tickets, gekende problemen |
| createTicket | Aanvrager, dienst, samenvatting, prioriteit | Ticket-id, status, overzicht |

## De demo (zelf proberen – leerdoel module 3)
- Code: [github.com/DiegoVanBelle/mcp-guest-lecture](https://github.com/DiegoVanBelle/mcp-guest-lecture)
- Een React + Node.js-portaal voor IT-support (API op `http://localhost:4000`) met een **MCP-server** die de bestaande REST-API aanroept.
- MCP-tools: `get_student`, `get_student_devices`, `create_support_ticket`.
- Opstarten: `npm install`, `npm run install:all`, daarna de API (`npm start --prefix server`) of alles samen met het npm-script uit de README.
- Opdracht: de Claude Desktop-config omzetten naar een **OpenCode-config** (zie [[MCP-architectuur]]) en de testprompt uitvoeren: *"My university laptop keeps crashing. I'm student 12345. Please report it to IT."* → de agent zoekt de student op, zijn toestellen, kiest de laptop en maakt een ticket dat ook in het portaal verschijnt.

## Samenvatting van het college
- API's blijven de stabiele contractlaag tussen systemen.
- AI-agents verschuiven orkestratie van vaste flows naar intent-gedreven planning.
- MCP standaardiseert hoe agents tools, data en prompts ontdekken.
- Goede MCP-servers maken bestaande API's herbruikbaar voor meerdere agent-toepassingen.
- Security en governance moeten van bij het begin ontworpen worden.

## Bronnen
Slides: *MCP Presentation 2.0* (Canvas) · [OpenAI MCP-docs](https://developers.openai.com/api/docs/guides/custom-mcp-server) · [OpenCode MCP-docs](https://opencode.ai/docs/mcp-servers/) · video IBM: *MCP vs API* · video: *MCP Servers Explained & Built* (Python).

## Gerelateerd
[[MCP]] · [[MCP vs API]] · [[MCP-architectuur]] · [[MCP security en governance]]

---
Hoort bij: [[Module 3 - Context]]
