---
type: oefening
vak: AI.NET
onderdeel: AI.NET
chapter: [10, 11]
groep: Oefeningen
---
# Challenge 2 - Chatbot 📝

> Tweede evaluatie-challenge (**50 %**), **per twee of alleen**: een **chatbot met AI-agent** gebouwd met het [[Microsoft Agent Framework]] op [[OpenAI API|OpenAI]].

## Wat moet erin? (opgebouwd uit deel B)
| Onderdeel | Hoe | Zie |
|---|---|---|
| Agent met duidelijke **rol** | goed geschreven `instructions` | [[System prompt (agent)]] |
| **Geheugen** | sessies; `/clear` start opnieuw | [[Sessie (agent)]] |
| Commando's | bv. `/help`, `/role`, `/clear` | [[Microsoft Agent Framework]] |
| **Tools** | functies met `[Description]` die echte acties doen | [[Tools (Agent Framework)]] · [[Function calling]] |
| Data | lezen/bewaren (JSON-bestand, database) | [[Tools (Agent Framework)]] |
| Externe **API** | bv. Open-Meteo, een eigen REST-API | [[Open-Meteo API]] · [[HttpClient]] |
| (Optioneel) **multi-agent** | sequential, workflow of conditional | [[Multi-agent workflow]] |
| (Optioneel) human-in-the-loop | bevestiging bij gevaarlijke acties | [[AI-agent]] |

## Een sterke chatbot onderscheidt zich door
- Een **afgebakend domein** (bv. een assistent voor een sporthal, een studieplanner) i.p.v. een algemene ChatGPT-kloon.
- Tools die echt **iets doen** met **echte data**.
- **Robuustheid**: foutmeldingen uit tools netjes doorgeven, LLM-output valideren.

## Evaluatie
- Op tijd indienen, anders geen presentatie en geen punten.
- Mondelinge presentatie tegenover de vereisten (kunnen uitleggen hoe function calling werkt).
- **< 8/20** → maximaal **9/20** voor het vak.

## Kosten en veiligheid
Klein tegoed, **auto-recharge uit**, key in [[appsettings.json]] en **niet in git**; key revoken bij een lek.

## Checklist
- [ ] Systeemprompt duidelijk en getest.
- [ ] Minstens één tool met een echte actie of API.
- [ ] Sessiebeheer werkt (`/clear`).
- [ ] Geen key in de repository.

---
Hoort bij: [[AI.NET]]
