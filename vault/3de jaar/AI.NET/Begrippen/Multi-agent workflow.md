---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 10
groep: Agent
aliases: [Multi-agent, Agent orchestration]
---
# Multi-agent workflow

> Meerdere [[AI-agent]]s die samen één grotere taak oplossen: **elke agent doet één deeltaak**, en een **workflow** geeft de resultaten door. Agents werken hier **zonder chat-interface**.

## Waarom niet één agent die alles doet?
- Kortere, gerichte **instructies** per agent → betere resultaten.
- Elke stap apart **testen en verbeteren**.
- Stappen **hergebruiken** in andere workflows.

## De drie patronen uit de les
| Patroon | Idee | Voorbeeld |
|---|---|---|
| **Sequential** | agents na elkaar, output van de ene = input van de volgende | `ihaveadream.txt` → Summarizer → Translator → Keyword → JSON Formatter → JSON-output |
| **Workflow** | dezelfde keten, maar als expliciete workflow met verbonden stappen | MultiAgentSequential ↔ MultiAgentWorkflow |
| **Conditional** | een beslissing kiest de route | Sentiment-agent → *positief?* → Positive-agent / Negative-agent |

## Klassiek voorbeeld
Research Agent → Writing Agent → Review Agent → eindrapport.

## Gerelateerd
[[AI-agent]] · [[Microsoft Agent Framework]]

---
Hoort bij: [[Microsoft Agent Framework]]
