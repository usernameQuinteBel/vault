---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [10, 11]
groep: Agent
aliases: [Agent, AI agent]
---
# AI-agent

> Een programma dat een **taalmodel** (bv. via de [[OpenAI API]]) gebruikt om zelfstandig een taak uit te voeren: het voert een gesprek, onthoudt context en kan **[[Tool (AI-agent)|tools]]** aanroepen om echte acties te doen.

## Chatbot vs. agent
| Gewone chatbot | AI-agent |
|---|---|
| antwoordt enkel met tekst | kan **acties** uitvoeren (API, bestand, database) |
| volgt een vast script | het **model beslist** wat het doet |
| geen geheugen of beperkt | [[Sessie (agent)|sessie]] met geheugen |

## De bouwstenen in het Microsoft Agent Framework
| Bouwsteen | Rol |
|---|---|
| **Model** | het taalmodel (OpenAI) dat tekst genereert en beslissingen neemt |
| **Instructions** | het [[System prompt (agent)|systeemprompt]]: rol en gedrag |
| **Name** | interne naam, handig bij meerdere agents |
| **Session** | het geheugen van het gesprek |
| **Tools** | C#-functies die de agent mag aanroepen |

## Soorten
- **Single-agent**: één agent = een chatbot met rol en geheugen (FirstChatbot).
- **Multi-agent**: meerdere agents die elk een deeltaak doen ([[Multi-agent workflow]]).
- **Human-in-the-loop**: de agent vraagt input of goedkeuring van de gebruiker.

## Gerelateerd
[[Microsoft Agent Framework]] · [[Tool (AI-agent)]] · [[System prompt (agent)]] · [[Sessie (agent)]]

---
Hoort bij: [[Microsoft Agent Framework]]
