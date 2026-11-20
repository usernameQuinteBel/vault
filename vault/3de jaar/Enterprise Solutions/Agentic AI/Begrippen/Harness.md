---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: [1, 2]
groep: Het model
aliases: [Agent harness, Agentic harness]
dictionary_nr: 11
---
# Harness

> Alles rond het [[Model]] dat er een [[Agent]] van maakt: [[Tool]]s, [[System prompt]], beheer van het [[Context window]], permissies, hooks. Claude.ai en Claude Code gebruiken hetzelfde model maar gedragen zich anders omdat hun harness verschilt.

## Wat doet de harness?
Het model kan enkel tekst in → tekst uit. De harness levert de rest:
- stelt per [[Model provider request]] de [[Context]] samen;
- voert de [[Tool call]]s uit die het model vraagt en stuurt de [[Tool result]]s terug;
- bewaart de [[Session]]-geschiedenis;
- vraagt jou toestemming voor riskante acties ([[Permission request]]);
- beslist wanneer er [[Compaction|gecompacteerd]] wordt.

De **agent-lus** – model stelt voor, harness voert uit, herhaal – wordt door de harness gedraaid.

## Waarom belangrijk? Diagnose!
Gedraagt een product zich anders dan een ander, of anders dan gisteren? Vaak is **niet het model** de variabele, maar de harness: een andere system prompt, andere tools, een gewijzigde permissie-instelling, een nieuwe contextstrategie.

De harness is ook waar je configuratie leeft: [[AGENTS.md]], permissie-instellingen en hooks zijn instructies **aan de harness**, niet aan het model.

## Voorbeelden
Claude Code, Cursor, Codex CLI, [[OpenCode]] – en Claude.ai/ChatGPT (chat-harnesses i.p.v. coding-harnesses).

## Model vs. harness
| Model | Harness |
|---|---|
| Parameters, voorspelt tokens | Software rond het model |
| Stateless | Bewaart sessie, laadt context |
| Kan niets uitvoeren | Voert tools uit, vraagt permissie |

Video module 2: *AI Model vs Agentic Harness: What Actually Drives AI*.

## Gerelateerd
[[Model]] · [[Agent]] · [[OpenCode]] · [[System prompt]] · [[Tool]] · [[Agent mode]]

## Bron
- AI Coding Dictionary – term 11/71: [Harness](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Harness.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]] · [[Module 2 - Harness & Agentic AI]]
