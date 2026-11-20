---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [10, 11]
groep: Agent
aliases: [Configuratie, User secrets]
---
# appsettings.json

> Een JSON-configuratiebestand waarin je **instellingen en geheimen** (zoals je OpenAI-key) bewaart, los van je code.

## Waarom niet in de code?
- Een key in de code belandt in Git → iedereen met toegang tot de repo kan ze gebruiken (op jouw kosten).
- Instellingen wijzigen zonder te hercompileren.

## Inlezen in een console-app
```csharp
var config = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json")
    .Build();

string apiKey = config["OpenAI:ApiKey"];
```
Zet het bestand op **Copy to Output Directory: Copy if newer**, anders vindt de app het niet.

## Beveiligen
- `appsettings.json` in **`.gitignore`**, en een `appsettings.example.json` zonder echte key in de repo.
- Alternatief: **user secrets** (`dotnet user-secrets`) of omgevingsvariabelen.

## Uit git houden
```gitignore
appsettings.json
appsettings.*.json
```
Commit wél een **voorbeeldbestand** zonder echte waarden (`appsettings.example.json`), zodat je teamgenoot weet welke sleutels nodig zijn.

## Alternatieven
| Methode | Wanneer |
|---|---|
| **User Secrets** (`dotnet user-secrets set "OpenAI:ApiKey" "sk-..."`) | lokaal ontwikkelen, staat buiten je projectmap |
| **omgevingsvariabelen** | servers, CI/CD |
| **Azure Key Vault** | productie |
In een **MAUI**-app wordt een meegeleverd bestand mee in de app verpakt → wie de app uitpakt, vindt de key. Voor echte apps hoort een geheime key op een **backend**, niet op het toestel.

## Copy to Output Directory
Zet de eigenschap op *Copy if newer*, anders vindt de console-app het bestand niet bij het uitvoeren.

## Gerelateerd
[[OpenAI API]] · [[Microsoft Agent Framework]]

---
Hoort bij: [[Microsoft Agent Framework]]
