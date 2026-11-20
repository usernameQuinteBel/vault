---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
aliases: [Large Language Model, Taalmodel]
---
# LLM

> Large Language Model: een [[Model]] dat getraind is op enorme hoeveelheden tekst om taalpatronen te herkennen en tekst te genereren via [[Next-token prediction]].

## Hoe werkt een LLM (overzicht)
1. **Pre-training** – leren uit enorme tekstcorpora ([[Training]]).
2. **Tokenization** – je tekst wordt opgesplitst in [[Token]]s ([[Tokenization (encoding & decoding)]]).
3. **Inference** – het model voorspelt de volgende tokens ([[Inference]]).
4. **Tekstgeneratie** – tokens worden terug omgezet in tekst.

## Wat kan het?
Vragen beantwoorden, mails en documenten schrijven, vertalen, samenvatten, code genereren, ...

## Voordelen en beperkingen
| Voordelen | Beperkingen |
|---|---|
| Snel, 24/7 beschikbaar | Kan foute antwoorden geven ([[Hallucination]]) |
| Werkt in veel talen | Kan vooroordelen weerspiegelen |
| Automatiseert repetitief werk | Heeft niet altijd actuele info ([[Knowledge cutoff]]) |
| Je kan context geven en doorvragen | Kan op zichzelf **geen acties uitvoeren** → daarvoor heb je een [[Agent]] en [[Tool]]s nodig |

"Bad data in, bad data out": de output hangt sterk af van je prompt en de [[Context]] – zie [[Prompt engineering]].

## Gerelateerd
[[Model]] · [[AI]] · [[Agent]] · [[Prompt engineering]]

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
