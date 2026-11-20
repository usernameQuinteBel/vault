---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 5
groep: Copilot Studio
aliases: [Topic, Topics, System topics, Trigger phrases, Conversation tree]
---
# Topics (Copilot Studio)

> Een topic is een stuk gesprek tussen gebruiker en agent, uitgewerkt als gespreksboom met trigger, vragen, condities, berichten en acties.

## Opbouw van een topic
- **Trigger phrases** / **beschrijving** – wanneer het topic gekozen wordt. Bij [[Generative orchestration]] is vooral de **beschrijving** belangrijk: daaruit leidt de agent af waarvoor het topic dient.
- **Conversation tree** (één per topic) met **nodes**:
  - *Message* – iets zeggen;
  - *Question* – iets vragen (met keuzeopties of een entity);
  - *Condition* – vertakken;
  - *Action* – een flow, tool of andere topic aanroepen.
- **Entities** – voorgebouwd (getal, datum, e-mail, ...) of eigen, om antwoorden te herkennen.
- Alles wordt bewaard in **YAML** (bekijk via de code-editor).

## Soorten topics
| User topics | System topics |
|---|---|
| Zelf gemaakt; vaak 25+ per agent | 8 vooraf gedefinieerde bouwstenen |
| 4 voorbeeldtopics om mee te leren (mag je verwijderen) | Begin en einde van het gesprek, Escalate, **Fallback** ("Sorry, I didn't understand"), foutafhandeling, ... |
| | Best practice: **minimaal** aanpassen (bv. enkel de begroeting) |

Je kan vanuit een topic een ander user- of systeemtopic oproepen (redirect).

## Voorbeeld
Een topic dat de **dronecategorie** bepaalt op basis van het gewicht: een **question node** met gewichtsklassen → per optie automatisch een conditie → per conditie een bericht met de categorie (A1/A2/A3). Zie [[Demo 5.2 - Topic dronecategorie (Full)]].

## Wanneer topics?
Voor **bedrijfskritische** gesprekken die je exact wil controleren (bv. vaste marketingantwoorden, processen met vaste stappen). De rest kan generatieve AI afhandelen.

## Gerelateerd
[[Generative orchestration]] · [[Tools (Copilot Studio)]] · [[Custom engine agent]] · [[Conversatiemodel van een agent]]

---
Hoort bij: [[Chapter 5 - Copilot Studio]]
