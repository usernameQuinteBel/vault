---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Prompting & tools
aliases: [Prompting, Prompting 101, Prompt]
---
# Prompt engineering

> Een prompt zo opbouwen dat het [[Model]] in één keer een bruikbaar, correct antwoord geeft: duidelijke taak, juiste [[Context]], voorbeelden en een afgesproken outputformaat. Gebaseerd op de video *Prompting 101* van Anthropic.

## Kernidee
Een model weet niets over jouw situatie behalve wat in de prompt staat. Een goede prompt is als een briefing voor een slimme nieuwe collega die **nul voorkennis** heeft.

## Opbouw van een volledige prompt (volgens Anthropic)
1. **Taakcontext / rol** – wie is het model, wat is de situatie? ("Je bent een business analist die BPMN-diagrammen maakt.")
2. **Toon** – hoe moet het antwoorden (zakelijk, beknopt, ...)? Vraag ook om eerlijk te zijn als iets onzeker is.
3. **Achtergrondinformatie en documenten** – de data waarmee het moet werken (bv. het interview), duidelijk afgebakend met **XML-tags** zoals `<interview>...</interview>`.
4. **Gedetailleerde taakomschrijving en regels** – wat moet het precies doen, stap voor stap, en wat niet.
5. **Voorbeelden** – één of meer voorbeelden van goede output (few-shot).
6. (Eventueel) **gespreksgeschiedenis**.
7. **De directe vraag** – wat moet het nú doen.
8. **Denk stap voor stap** – laat het eerst redeneren/analyseren voor het antwoordt.
9. **Outputformaat** – exact hoe het antwoord eruit moet zien (bv. tabel, JSON, Markdown, met vaste koppen).
10. (Optioneel) **Prefill** – het begin van het antwoord al meegeven.

## Tips
- **Wees specifiek**: vage prompt → vaag antwoord.
- **Structureer** met XML-tags of Markdown-koppen; zet lange documenten bovenaan en de vraag onderaan.
- **Itereer**: test de prompt, kijk waar het fout loopt, voeg regels of voorbeelden toe.
- **Laat het zeggen wat het niet weet** i.p.v. te gokken (beperkt [[Hallucination]]).
- Vraag de output in een vorm die je verder kan gebruiken (bv. een BPMN-tabel met actoren, activiteiten, gateways).

## Voorbeeld (BPMN-analyse, schematisch)
```xml
Je bent een ervaren business analist gespecialiseerd in BPMN 2.0.
<interview>... tekst ...</interview>
Taak: identificeer alle actoren (pools/lanes), activiteiten, beslissingen (gateways),
start- en eindgebeurtenissen en berichtstromen.
Regels: verzin geen stappen die niet in het interview staan; markeer onduidelijkheden.
Denk eerst stap voor stap na in <analyse>, geef daarna het resultaat in <bpmn> als tabel,
en eindig met een lijst open vragen voor een volgend interview.
```

## Gerelateerd
[[Task 1.2 - Prompt volgens Anthropic-richtlijnen]] · [[Context]] · [[System prompt]] · [[BPMN]] · [[Non-determinism]]

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
