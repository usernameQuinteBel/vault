---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 10
groep: Agent
aliases: [Instructions]
---
# System prompt (agent)

> De **instructions** van een [[AI-agent]]: een tekst die je vooraf meegeeft en die de **rol, toon en regels** van de agent vastlegt, nog voor de gebruiker iets typt.

## Voorbeelden uit de les
- "You are a poet and always respond in rhyme."
- "You are a pirate assistant. Speak like a pirate at all times, using words like Arrr, Matey, and Shiver me timbers."
- "You are an over-the-top motivational guru."

## Een goed systeemprompt bevat
| Onderdeel | Voorbeeld |
|---|---|
| **Rol** | "Je bent een klantendienst-assistent voor een fietsenwinkel." |
| **Doel** | "Help klanten een herstelling te plannen." |
| **Regels** | "Antwoord kort, in het Nederlands. Verzin geen prijzen." |
| **Tools** | "Gebruik de tool GetAvailability om vrije momenten op te vragen." |
| **Format** | "Geef de afspraak terug als datum + uur." |

## Rol wisselen (`/role joker`)
Wissel je de rol maar houd je de **oude sessie**, dan blijft de vorige historie het antwoord kleuren (de piraat blijft door het gedicht schemeren). Daarom: bij rolwissel een **nieuwe [[Sessie (agent)|sessie]]** starten.

## Gerelateerd
[[AI-agent]] · [[Sessie (agent)]] · [[Microsoft Agent Framework]]

---
Hoort bij: [[Microsoft Agent Framework]]
