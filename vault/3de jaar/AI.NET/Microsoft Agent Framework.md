---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 10
groep: Deel B: Chatbot
---
# Microsoft Agent Framework

> Deel B: **AI-agents** bouwen in .NET. Het **Microsoft Agent Framework** is een **open-source framework** om **single-agents** en **multi-agent-workflows** te maken bovenop een taalmodel (hier OpenAI `gpt-4o-mini`).

## Wat biedt het framework?
| Mogelijkheid | Betekent |
|---|---|
| **Single-agent** | één agent met **conversatiestatus en geheugen** ([[Sessie (agent)|sessies]]) |
| **Tool calling** | de agent laat jouw code data ophalen of API's aanroepen → [[Tools (Agent Framework)]] |
| **Multi-agent** | meerdere agents, **georkestreerd**, die resultaten doorgeven → [[Multi-agent workflow]] |
| **Human-in-the-loop** | de agent vraagt **input of goedkeuring** van de gebruiker |

## 1. OpenAI opzetten
1. https://platform.openai.com/ → inloggen met Google → *Start building*, gegevens invullen. **1 account per 2 studenten.**
2. *Profile → Billing → Add credit*: **$5** (+ btw). **Auto recharge UIT**, en daarna je **kaart verwijderen**.
3. *Create new secret key* → kopiëren (je ziet hem maar één keer).
Zie [[OpenAI API]].

## 2. Single-agent chatbot (FirstChatbot)
```csharp
var config = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
var client = new OpenAIClient(config["OpenAI:ApiKey"]);
IChatClient chatClient = client.GetChatClient("gpt-4o-mini").AsIChatClient();

AIAgent agent = chatClient.AsAIAgent(
    instructions: "You are a poet and always respond in rhyme.",
    name: "Poet");

var session = await agent.CreateSessionAsync();
while (true)
{
    Console.Write("User > ");
    var input = Console.ReadLine();
    var response = await agent.RunAsync(input, session);
    Console.WriteLine("Assistant > " + response);
}
```
| Onderdeel | Rol |
|---|---|
| [[appsettings.json]] | de API-key (`{"OpenAI": {"ApiKey": "sk-proj..."}}`), **niet** in git; packages `Microsoft.Extensions.Configuration(.FileExtensions/.Json)` |
| `IChatClient` | een generieke chat-interface (Microsoft.Extensions.AI) rond het OpenAI-model |
| `AsAIAgent(...)` | maakt er een agent van (package `Microsoft.Agents.AI.OpenAI`) |
| **instructions** | het **[[System prompt (agent)|systeemprompt]]**: rol en gedrag |
| **name** | interne naam, handig bij meerdere agents |
| **session** | bewaart de **gespreksgeschiedenis** → de agent "onthoudt" wat eerder gezegd is |

## 3. Oefeningen met commando's
| Commando | Doet | Waarom zo |
|---|---|---|
| `/clear` | **nieuwe sessie** zonder de app te herstarten | gesprek wissen = nieuwe sessie aanmaken |
| `/role joker` | rol wisselen (joker, pirate, poet, guru…) | **nieuwe agent én nieuwe sessie**: met de oude geschiedenis blijft de vorige rol de antwoorden beïnvloeden |
| `/help` | lijst van commando's tonen | gebruiksvriendelijkheid |
Voorbeelden van systeemprompts: dichter die rijmt, piraat ("Arrr, Matey"), overdreven motivatiegoeroe.

## 4. Multi-agent workflows
Agents kunnen ook taken uitvoeren **zonder chat**: elk doet een **deeltaak**, een workflow geeft de resultaten door (bv. research → writing → review → rapport).

**Voorbeeld uit de les** (input: de speech *I have a dream*):
```
Summarizer → Translator (NL) → KeywordExtractor (5 woorden) → JsonFormatter → JSON-output
```
Elke agent krijgt strikte instructies ("Output ONLY the summary"), zodat de volgende agent zuivere input krijgt. De JsonFormatter zet alles in `{ "summary", "translation", "keywords": [] }`.

| Variant | Hoe |
|---|---|
| **Sequential (manueel)** | jij roept de agents na elkaar aan en geeft de output door |
| **Workflow** | het framework orkestreert de keten (builder met edges tussen agents) |
| **Conditional** | een **SentimentAnalyzer** antwoordt `POSITIVE`/`NEGATIVE`; een conditie stuurt de review naar de **PositiveSummarizer** (warm bedankje) of de **NegativeSummarizer** (empathisch antwoord, geen beloftes of compensatie verzinnen) |
Bij de conditionele workflow controleer je de output van de sentiment-agent: is het niet exact `POSITIVE` of `NEGATIVE`, dan gooi je een fout — LLM-output altijd **valideren** voor je er logica op bouwt. Zie [[Multi-agent workflow]].

## Kosten en veiligheid
- `gpt-4o-mini` is goedkoop, maar elke call kost tokens; lange sessies = meer tokens.
- Key nooit committen; bij een lek meteen **revoken**.

## Begrippen
[[AI-agent]] · [[OpenAI API]] · [[System prompt (agent)]] · [[Sessie (agent)]] · [[Multi-agent workflow]] · [[appsettings.json]] · [[Tools (Agent Framework)]]

---
Hoort bij: [[AI.NET]]
