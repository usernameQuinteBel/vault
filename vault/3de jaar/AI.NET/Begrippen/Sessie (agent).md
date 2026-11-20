---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 10
groep: Agent
aliases: [Session, Geheugen (agent)]
---
# Sessie (agent)

> Het **geheugen van één gesprek** met een [[AI-agent]]. Binnen een sessie onthoudt de agent wat eerder gezegd is; een **nieuwe sessie** begint blanco.

## Hoe "onthoudt" een model?
Een taalmodel zelf onthoudt niets tussen calls. De sessie bewaart de **berichtgeschiedenis** (gebruiker + agent) en stuurt die **bij elke nieuwe vraag opnieuw mee**. Gevolg: een lange sessie kost meer tokens (zie [[OpenAI API]]).

## Oefeningen uit de les
| Commando | Wat moet er gebeuren? |
|---|---|
| `/clear` | opnieuw beginnen **zonder de app te herstarten** → nieuwe sessie |
| `/role joker` | rol wijzigen → nieuwe sessie, anders blijft de oude rol doorwerken |
| `/help` | de beschikbare commando's tonen |

## In code
```csharp
var session = await agent.CreateSessionAsync();         // nieuw gesprek
var answer  = await agent.RunAsync(input, session);     // vraag binnen dat gesprek
// /clear:
session = await agent.CreateSessionAsync();
```

## Gevolgen van geheugen
- **Kosten**: elke vraag stuurt de hele geschiedenis mee → lange sessies = meer tokens.
- **Contextlimiet**: het model kan maar een beperkte hoeveelheid tekst tegelijk verwerken; heel lange gesprekken moeten ingekort of samengevat worden.
- **Beïnvloeding**: oude berichten blijven het gedrag sturen (daarom nieuwe sessie bij `/role`).
- **Persistent geheugen** (na herstart) vraagt dat je de sessie zelf opslaat (bv. in een bestand of database).

## Gerelateerd
[[AI-agent]] · [[System prompt (agent)]] · [[Microsoft Agent Framework]]

---
Hoort bij: [[Microsoft Agent Framework]]
