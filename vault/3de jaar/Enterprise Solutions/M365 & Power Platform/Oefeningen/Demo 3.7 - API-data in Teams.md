---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 3
groep: Oefeningen
---
# Demo 3.7 - API-data in Teams

> Een externe API aanroepen, het JSON-antwoord ontleden en het resultaat in een Teams-chat posten.

**Scenario:** haal een willekeurige yes/no-gif op bij [yesno.wtf](https://yesno.wtf/) en stuur die in een Teams-chat.

## Stappen
1. Manuele trigger.
2. **HTTP GET** naar de API.
3. Flow draaien, JSON uit de output kopiëren.
4. **[[Parse JSON]]** met *Generate from sample* → velden *answer* en *image*.
5. **Post message in a chat** (Teams) – het bericht in **HTML**, met een `<img>` naar de gif.

## Tip
Flows die met Teams werken, kan je ook vanuit de Teams-app (Workflows) beheren en bouwen, met templates.

## Gebruikte begrippen
[[API aanroepen in een flow]] · [[JSON]] · [[Parse JSON]] · [[Microsoft Teams]]

---
Hoort bij: [[Chapter 3 - Power Automate]]
