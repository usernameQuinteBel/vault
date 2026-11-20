---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 11
groep: Agent
aliases: [Open-Meteo]
---
# Open-Meteo API

> Een **gratis weer-API zonder API-key** (https://open-meteo.com/). In de les vervangt ze de nepdata van de `WeatherTool`, zodat de agent **echt** weer kan opvragen.

## De request
```
https://api.open-meteo.com/v1/forecast?latitude=51.16&longitude=4.99&current=temperature_2m,weather_code
```
| Parameter | Betekenis |
|---|---|
| `latitude`, `longitude` | locatie (met **punt** als decimaalteken → `CultureInfo.InvariantCulture`) |
| `current=…` | welke actuele waarden je wil (temperatuur op 2 m, weercode) |
| `hourly`, `daily` | voorspellingen per uur/dag (optioneel) |

## Het antwoord (vereenvoudigd)
```json
{ "current": { "temperature_2m": 7.4, "weather_code": 61 } }
```
Uitlezen met `JsonDocument.Parse(json).RootElement.GetProperty("current")`.

## Weercodes (WMO)
| Code | Weer |
|---|---|
| 0 | clear sky |
| 1–3 | partly cloudy |
| 45, 48 | fog |
| 51–55 | drizzle |
| 61–65 | rain |
| 71–75 | snow |
| 95 | thunderstorm |

## Waarom handig voor tools?
Geen key, geen account, eenvoudige JSON → ideaal om **function calling** met een echte API te leren. Het model vertaalt "weer in Geel?" zelf naar coördinaten omdat de functie `lat`/`lon` vraagt.

## Gerelateerd
[[Tools (Agent Framework)]] · [[HttpClient]] · [[REST API]]

---
Hoort bij: [[Tools (Agent Framework)]]
