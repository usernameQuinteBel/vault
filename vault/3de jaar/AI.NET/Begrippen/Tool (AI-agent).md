---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 11
groep: Agent
aliases: [Tool, Plugin (agent)]
---
# Tool (AI-agent)

> Een verzameling **functies** (C#-code) die een [[AI-agent]] mag aanroepen om een **echte actie** te doen: een API aanroepen, een bestand lezen of schrijven, een mail sturen.

## Anatomie van een tool-functie
```csharp
public class WeatherTool
{
    [Description("Gets the current weather for a given city")]
    public async Task<string> GetWeatherAsync(string city)
    {
        // in de echte versie: HttpClient-call naar Open-Meteo
        return $"It is 18°C and sunny in {city}.";
    }
}
```
| Onderdeel | Waarom |
|---|---|
| `[Description(...)]` | het model leest dit om te beslissen **wanneer** de functie nuttig is |
| parameternamen (`city`) | het model vult ze in uit de vraag |
| `async Task<string>` | het framework voert functies **asynchroon** uit (bv. API-calls) |
| return-waarde | wordt teruggegeven aan het model, dat er zijn antwoord mee formuleert |

## De belangrijkste les uit de slides
> Het **model** beslist welke functie wordt aangeroepen, **niet** het framework. Het framework levert enkel de infrastructuur tussen je app, je tools en het model.

## Voorbeelden en oefeningen
| Tool | Functies | Oefening |
|---|---|---|
| `WeatherTool` | weer voor een stad | overschakelen op de echte **Open-Meteo API** |
| `LightsTool` (SmartHome) | lijst van lampen + status, lamp aan/uit | lampen **toevoegen/verwijderen**; status bewaren in een **JSON-bestand** |

## Gerelateerd
[[Function calling]] · [[Tools (Agent Framework)]] · [[AI-agent]]

---
Hoort bij: [[Tools (Agent Framework)]]
