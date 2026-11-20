---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [3, 4]
groep: Failure modes
aliases: [Context poisoning, Context distraction, Context confusion, Context clash]
---
# Context engineering

> De discipline om de [[Context]] van een agent bewust samen te stellen: de juiste informatie, op het juiste moment, en niets meer. Te veel, foute of tegenstrijdige context maakt een agent slechter.

## Vier manieren waarop context tegen je werkt
(uit de video *Context Engineering for AI Agents: 4 Failure Modes*)
| Failure mode | Wat gebeurt er | Voorbeeld |
|---|---|---|
| **Context poisoning** | Een fout of [[Hallucination]] belandt in de context en wordt telkens opnieuw als "waar" gebruikt | Een verzonnen functienaam blijft terugkomen |
| **Context distraction** | De context wordt zo lang dat het model zich op de geschiedenis focust i.p.v. op de taak | Herhaalt oude acties i.p.v. nieuwe te bedenken |
| **Context confusion** | Overbodige info (bv. te veel tooldefinities) leidt tot slechte keuzes | Kiest een verkeerde tool uit 50 MCP-tools |
| **Context clash** | Tegenstrijdige info in de context | Oude en nieuwe versie van een regel staan er allebei |

## Oplossingen
- **Kleine, gerichte context** – [[Progressive disclosure]] en [[Context pointer]]s.
- **[[Clearing]]** of **[[Compaction]]** als de sessie vervuild is.
- **[[Handoff]]** naar een verse sessie met enkel het essentiële.
- **[[Subagent]]s** voor lawaaierig zoekwerk (isoleert context).
- **Enkel de nodige tools/MCP-servers** aanzetten.
- Beslissingen op schijf ([[Memory system]], [[Handoff artifact]]) i.p.v. in een lange sessie.
- Oude/foute info **verwijderen**, niet enkel corrigeren erboven.

## Extra belangrijk bij kleine modellen
Kleine lokale modellen hebben een klein [[Context window]] en een zwak [[Attention budget]] → zie [[Task 4.2 - Context engineering voor kleine modellen]].

## Gerelateerd
[[Context]] · [[Attention degradation]] · [[Smart zone]] · [[Progressive disclosure]] · [[Handoff]]

---
Hoort bij: [[Module 3 - Context]] · [[Module 4 - Local AI]]
