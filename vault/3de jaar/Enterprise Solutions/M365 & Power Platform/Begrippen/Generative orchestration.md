---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 5
groep: Copilot Studio
aliases: [Generatieve orchestratie, Orchestration, Classic orchestration]
---
# Generative orchestration

> De manier waarop een agent in Copilot Studio zelf een plan maakt: op basis van de vraag kiest hij de beste combinatie van topics, tools en kennisbronnen, voert die uit en bundelt alles in één antwoord.

## Klassieke vs. generatieve orchestratie
**Klassiek**
1. De gebruiker zegt iets.
2. De agent zoekt een **topic** dat past (via trigger phrases).
3. Gevonden → het topic wordt uitgevoerd zoals de maker het schreef.
4. Niet gevonden → **fallback**: zoeken in de kennisbronnen en een antwoord samenvatten; lukt dat niet → "Sorry, ik begreep dat niet".

**Generatief**
1. De gebruiker zegt iets (of een gebeurtenis treedt op).
2. De agent maakt een **plan** met één of meer tools, topics en kennisbronnen.
3. **Slot filling**: ontbrekende invoer wordt gevraagd.
4. **Uitvoering** van het plan.
5. Eén **samengevoegd antwoord**, met bronvermeldingen.
Niets gevonden → fallback-topic.

## Instellen
**Settings van de agent** → *Generative AI orchestration* staat standaard aan; je kan terugschakelen naar de klassieke ervaring.

## Belang van beschrijvingen
Bij generatieve orchestratie kiest de agent op basis van de **beschrijving** van topics en tools → schrijf die duidelijk.

## Gerelateerd
[[Topics (Copilot Studio)]] · [[Tools (Copilot Studio)]] · [[Kennisbronnen (Copilot Studio)]] · [[Conversatiemodel van een agent]]

---
Hoort bij: [[Chapter 5 - Copilot Studio]]
