---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Failure modes
dictionary_nr: 37
---
# Parametric knowledge

> Wat het [[Model]] "weet" uit [[Training]], opgeslagen in zijn [[Parameters]]. Bevroren op het moment van training. Tegenhanger van [[Contextual knowledge]].

## Geen feitendatabase
Training geeft het model geen database; het past parameters aan tot het tekst goed voorspelt. Een model dat goed tekst over een onderwerp voorspelt, *gedraagt zich alsof* het het onderwerp kent.

## Betrouwbaarheid hangt af van frequentie
- Onderwerp met miljoenen voorbeelden (bv. React) → nauwkeurig.
- Onderwerp met een handvol voorbeelden (bv. jouw interne SDK) → het model **gokt** op basis van gelijkaardige onderwerpen.
- Reproduceren en gokken zijn voor het model hetzelfde proces → het kan het verschil niet zien. Een verzonnen antwoord klinkt even vlot als een correct.

## Veroudert
De parameters stoppen bij de [[Knowledge cutoff]]: een library van na die datum bestaat niet, een gewijzigde API wordt in zijn oude vorm herinnerd.

## Oplossing voor beide gaten
Te zeldzaam én te recent → je kan het niet in de parameters krijgen, dus lever het als **contextual knowledge** (docs in de context laden).

## Gerelateerd
[[Contextual knowledge]] · [[Knowledge cutoff]] · [[Hallucination]] · [[Parameters]]

## Bron
- AI Coding Dictionary – term 37/71: [Parametric knowledge](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Parametric%20knowledge.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 3 - Context]]
