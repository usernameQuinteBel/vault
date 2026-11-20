---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: MCP
aliases: [Prompt injection, MCP security]
---
# MCP security en governance

> Met MCP kan een agent echte acties uitvoeren in bedrijfssystemen. Daarom moeten identiteit, rechten, logging, goedkeuring en dataminimalisatie **vanaf het begin** ontworpen worden.

## Nieuwe risico's met dynamische tools
- Een agent kan tools combineren in **flows die nooit getest** werden.
- Te brede tool-toegang vergroot de impact van **prompt injection** (externe content die de agent probeert te sturen).
- Context kan **gevoelige data lekken** naar tools of logs.
- Slechte logging maakt **incidentanalyse** moeilijk.

## Governance-controles
| Controle | Concreet | Waarom |
|---|---|---|
| **Authenticatie** | Identiteit van gebruiker én agent | Geen anonieme tooltoegang |
| **Autorisatie** | Scopes per tool en per resource | Beperkt de "blast radius" |
| **Audit logging** | Tool, input, output, gebruiker, tijdstip | Traceerbaarheid |
| **Menselijke goedkeuring** | Bevestiging voor riskante acties | Geen ongewenste uitvoering |
| **Dataminimalisatie** | Enkel de nodige context doorgeven | Minder datalekken |

## De tool-perimeter ontwerpen
| Te breed ❌ | Ideaal ✅ |
|---|---|
| Ruwe databasequery | Domeinspecifieke tools |
| Generieke HTTP-client | Strikte invoerschema's |
| Schrijven zonder bevestiging | Standaard read-only |
| Lezen en wijzigen niet gescheiden | Expliciete goedkeuring voor acties |

## Ontwerpprincipes
- Start **read-only** en breid bewust uit.
- Tools **klein genoeg** om te controleren, **groot genoeg** om nuttig te zijn.
- Scopes die passen bij echte verantwoordelijkheden.
- Log beslissingen en tool calls apart.
- Test met misleidende prompts en foute data.

## Oefening uit het gastcollege: wachtwoord-reset-tool
| Ontwerpkeuze | Oplossing | Waarom |
|---|---|---|
| Intentie | `startPasswordReset` voor een geverifieerd account | Eén duidelijk doel |
| Verplichte input | requesterId, accountId, resetReason | Geen dubbelzinnige of onnaspeurbare aanvragen |
| Verificatie | MFA of goedkeuring helpdesk vóór de reset | Blokkeert accountovername via prompt injection |
| Toegestane actie | Reset-taak + veilige resetlink | Agent ziet nooit tijdelijke wachtwoorden |
| Auditrecord | Actor, gebruiker, ticketId, goedkeuring, tijdstip | Volledig spoor voor security |
Belangrijk: de server leidt de aanvrager af uit de **geauthenticeerde sessie**, niet uit wat het model zegt. "Goedkeuring is gegeven" in een prompt telt niet.

## Gerelateerd
[[MCP]] · [[MCP-architectuur]] · [[Permission request]] · [[Sandbox]] · [[Governance]]

---
Hoort bij: [[Module 3 - Context]]
