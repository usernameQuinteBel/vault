---
type: oefening
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 3
groep: Tasks
---
# Task 3.2 - Handoff-plugin in OpenCode

> Gebruik de /handoff-plugin voor OpenCode bij het bouwen van een kleine test-API: laat na het plannen een technische documentatie maken in een aparte sessie, bouw daarna de API en controleer of beide overeenkomen.

**Deadline:** 8 nov 2026 · **Plugin:** [opencode-handoff](https://github.com/joshuadavidthomas/opencode-handoff)

## Voorbereiding (2 valkuilen!)
- OpenCode moet minstens **versie 2** zijn → `opencode upgrade --major`.
- Fout in de README: de sleutel in de config is **`"plugin"`**, niet `"plugins"`:
```json
{ "plugin": ["opencode-handoff"] }
```

## Stappen
1. Plan een kleine test-API met OpenCode (Plan mode).
2. **Na het plannen, vóór het bouwen**: `/handoff` → laat de agent in een nieuwe sessie een `.md`-bestand met technische documentatie schrijven over wat gebouwd zal worden.
3. Neem screenshots van **beide sessies** en vergelijk hun context (wat ging mee, hoe groot?).
4. Laat de documentatie afwerken.
5. Ga terug naar de **oorspronkelijke sessie** en laat de API bouwen.
6. Controleer: komt de documentatie overeen met wat gebouwd werd?
7. Upload gesprek-extracten, screenshots en resultaten.

## Waar let je op?
- De nieuwe sessie start met een kleine, gerichte context (samenvatting + enkele bestanden) → [[Smart zone]].
- De documentatie is een [[Handoff artifact]] en [[Secondary source]]: wat de planningssessie geloofde. Wijkt de build af? Dan zie je het verschil tussen plan en [[Primary source]] (de code).

## Begrippen
[[Handoff]] · [[Handoff artifact]] · [[Session]] · [[Clearing]] · [[Compaction]] · [[OpenCode]]

---
Hoort bij: [[Module 3 - Context]]
