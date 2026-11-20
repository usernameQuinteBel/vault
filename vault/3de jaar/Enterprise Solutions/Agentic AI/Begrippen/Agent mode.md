---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Tools & environment
aliases: [Plan mode, Build mode, YOLO mode, Plan en Build]
dictionary_nr: 33
---
# Agent mode

> Een preset die bepaalt hoe de [[Agent]] werkt: een [[Permission mode]] gebundeld met gedragsinstructies die in de [[System prompt]] worden geïnjecteerd. Kan wisselen tijdens een sessie.

## Voorbeelden
- **Default** – vraagt bij riskante calls.
- **Plan mode** – blokkeert wijzigingen én zegt de agent dat hij in een planningsfase zit → hij leest, stelt vragen en stelt een plan voor.
- **Accept-edits** – keurt bewerkingen automatisch goed.
- **Bypass permissions / YOLO mode** – keurt alles automatisch goed.

## Waarom bundelen?
Een poort alleen geeft een agent die wíl schrijven maar niet mag – hij blijft het proberen. De instructies nemen de "wil" weg: in plan mode weet hij dat het de bedoeling is om te plannen. **Poort en sturing wijzen dezelfde kant op.**

## Plan & Build in OpenCode
[[OpenCode]] heeft twee hoofdmodi die je wisselt met **Tab**:
| Plan | Build |
|---|---|
| Analyseren, vragen stellen, plan maken | Uitvoeren: bestanden maken/aanpassen, commando's |
| Geen wijzigingen aan bestanden | Volledige tools |
Werkwijze in de tasks: eerst **Plan** (laat de agent het werk uitstippelen, stuur bij), dan **Build** (laat het uitvoeren).

## Gerelateerd
[[Permission mode]] · [[OpenCode]] · [[System prompt]] · [[Task 2.1 - OpenCode met Plan en Build mode]]

## Bron
- AI Coding Dictionary – term 33/71: [Agent mode](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Agent%20mode.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
