---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [10, 11]
groep: Agent
aliases: [OpenAI, API key]
---
# OpenAI API

> De API van OpenAI die het **taalmodel** levert waarop je [[AI-agent]] draait. Het [[Microsoft Agent Framework]] spreekt ze voor je aan.

## Account en kosten (zoals in de les)
1. Account op https://platform.openai.com/ (login met Google) → *Start building*.
2. **1 account per 2 studenten.**
3. *Your profile → Billing → Add credit to balance*: **$5** (+ ±$1,05 btw).
4. **Auto recharge OFF** en daarna je **kredietkaart verwijderen** → je kan nooit meer uitgeven dan je tegoed.
5. *Create new secret key* en die veilig bewaren (je ziet hem maar één keer).

## De key gebruiken
`appsettings.json`:
```json
{ "OpenAI": { "ApiKey": "sk-proj..." } }
```
Inlezen met de configuratiepakketten:
```
dotnet add package Microsoft.Agents.AI.OpenAI
dotnet add package Microsoft.Extensions.Configuration
dotnet add package Microsoft.Extensions.Configuration.FileExtensions
dotnet add package Microsoft.Extensions.Configuration.Json
```
Zie [[appsettings.json]].

## Hoe worden kosten berekend?
Per **token** (stukjes tekst), apart voor **input** (je vraag + het hele gesprek + instructies) en **output** (het antwoord). Een lange sessie wordt dus steeds duurder, want het volledige gesprek gaat telkens mee.

> ⚠️ Zet je key **nooit** in version control: voeg `appsettings.json` toe aan `.gitignore`.

## Gerelateerd
[[appsettings.json]] · [[Microsoft Agent Framework]] · [[AI-agent]]

---
Hoort bij: [[Microsoft Agent Framework]]
