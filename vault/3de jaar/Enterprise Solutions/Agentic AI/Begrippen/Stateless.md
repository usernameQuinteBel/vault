---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Sessies & context
dictionary_nr: 17
---
# Stateless

> Geen informatie meedragen. Het [[Model]] is stateless tussen [[Model provider request]]s (elke request stuurt het volledige [[Context window]] opnieuw). Een [[Agent]] is standaard stateless tussen [[Session]]s: een nieuwe sessie begint leeg. Tegenhanger van [[Stateful]].

## Het model is altijd stateless
De [[Parameters]] zijn bevroren na [[Training]]. Het model:
- leert niet van je correcties;
- herinnert zich niet dat je hetzelfde gisteren zei;
- "leert je niet kennen", hoe het gesprek ook aanvoelt.

Het gevoel van continuïteit binnen een sessie wordt **gemaakt door de [[Harness]]**, die het transcript bijhoudt en telkens opnieuw meestuurt. Het model *herinnert* het gesprek niet, het *herleest* het.

## Praktisch gevolg
Wil je dat iets onthouden wordt over sessies heen, dan moet je het **opschrijven** op een plek die de agent terugleest:
- [[AGENTS.md]]
- een [[Memory system]]
- een [[Handoff artifact]]

Blijft de agent dezelfde gecorrigeerde fout maken? De vraag is niet "waarom leert hij niet" (dat kan hij niet), maar "waar moet die correctie staan zodat elke sessie ze leest?"

## Gerelateerd
[[Stateful]] · [[Session]] · [[Memory system]] · [[AGENTS.md]] · [[Model]]

## Bron
- AI Coding Dictionary – term 17/71: [Stateless](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Stateless.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
