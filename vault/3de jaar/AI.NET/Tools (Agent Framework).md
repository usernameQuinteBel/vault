---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 11
groep: Deel B: Chatbot
---
# Tools (Agent Framework)

> Een agent laten **handelen** in plaats van enkel praten: weer opvragen, lampen schakelen, data opslaan, een echte API aanroepen. Onderwerpen: tools **maken**, **registreren**, werken met **data**, data **bewaren** en een **API aanroepen**.

## Wat is een tool?
- Een **[[Tool (AI-agent)|tool]]** is een verzameling AI-skills die het framework kan gebruiken; elke tool bevat **functies**.
- Een **functie** is gewone **C#-code** die een taak doet: API aanroepen, bestand lezen, mail sturen.
- **Het model beslist** welke functie aangeroepen wordt — niet het framework. Het framework zorgt enkel voor de **communicatie** tussen je app, je tools en het model. Zie [[Function calling]].

## 1. Startpunt: console-app SmartHome
Packages `Microsoft.Agents.AI.OpenAI` + de configuratiepackages, [[appsettings.json]] met de key, een agent (`instructions`, `name`), een sessie en een `while`-lus met `agent.RunAsync(input, session)`.

## 2. WeatherTool
```csharp
public class WeatherTool
{
    private readonly Dictionary<string, string> weatherData = new()
    {
        { "London", "Cloudy, 15°C" }, { "Brussels", "Rainy, 17°C" }, { "Paris", "Rainy, 12°C" }
    };

    [Description("Gets the current weather for a given city")]
    public async Task<string> GetWeatherAsync(string city) =>
        weatherData.TryGetValue(city, out var w) ? w : $"No weather data for {city}";
}
```
| Element | Waarom |
|---|---|
| `[Description(...)]` | wordt **naar het model gestuurd**; hiermee beslist het **wanneer** deze functie nuttig is |
| parameternamen (`city`) | het model vult ze in uit de vraag ("weer in Brussel?") |
| `async Task<string>` | functies lopen **asynchroon**; in het echt een API-call met [[HttpClient]] |

### Registreren
De functies worden als **AI-functies** aan de agent gegeven (via `AIFunctionFactory.Create(tool.GetWeatherAsync)` in de `tools`-lijst bij het aanmaken van de agent). Vanaf dan kan het model ze aanroepen.

## 3. SmartHome: LightsTool
Model `LightModel { Id, Name, IsOn }` en een lijst lampen (Kitchen Table, Garage, Study Room).
| Oefening | Functies |
|---|---|
| Lampen bekijken en schakelen | `GetLights()` → lijst met status · `SetLightState(id, isOn)` |
| Toevoegen/verwijderen | `AddLight(name)` · `RemoveLight(id)` |
| **Status bewaren** | lampen opslaan in een **JSON-bestand** (`id`, `name`, `is_on`) en bij de start inlezen (`System.Text.Json` + `[JsonPropertyName("is_on")]`) |
Gebruiker: *"Zet alle lampen beneden uit"* → het model roept `GetLights()` aan, kiest de juiste ID's en roept `SetLightState` meerdere keren aan.

## 4. Een echte API: Open-Meteo
Vervang de nepdata door https://open-meteo.com/ (gratis, geen key):
```csharp
[Description("Gets the current weather using latitude and longitude using real data from the Open-Meteo API")]
public static async Task<string> GetWeatherAsync(double lat, double lon)
{
    var url = $"https://api.open-meteo.com/v1/forecast?latitude={lat.ToString(CultureInfo.InvariantCulture)}" +
              $"&longitude={lon.ToString(CultureInfo.InvariantCulture)}&current=temperature_2m,weather_code";
    var response = await _httpClient.GetAsync(url);
    response.EnsureSuccessStatusCode();
    using var doc = JsonDocument.Parse(await response.Content.ReadAsStringAsync());
    // current.temperature_2m en current.weather_code uitlezen, code → tekst
}
```
| Detail | Waarom |
|---|---|
| `CultureInfo.InvariantCulture` | in België wordt `51.16` anders `51,16` → ongeldige URL |
| `weather_code` → tekst | 0 = clear sky, 1–3 = partly cloudy, 45/48 = fog, 51–55 = drizzle, 61–65 = rain, 71–75 = snow, 95 = thunderstorm |
| `try/catch` → foutstring teruggeven | het **model** krijgt de fout te zien en kan de gebruiker netjes informeren i.p.v. te crashen |
| `static readonly HttpClient` | één herbruikbare client (geen socket-uitputting) |
Het model zet zelf "Geel" om naar coördinaten, omdat de functie `lat`/`lon` vraagt.

## Goede tools ontwerpen
- **Duidelijke namen en beschrijvingen** (wat, wanneer, welke eenheid).
- **Kleine, gerichte** functies.
- Altijd een **begrijpelijke string** teruggeven, ook bij fouten.
- Gevaarlijke acties (verwijderen, betalen) → **bevestiging** vragen (human-in-the-loop).

## Begrippen
[[Tool (AI-agent)]] · [[Function calling]] · [[HttpClient]] · [[Open-Meteo API]] · [[appsettings.json]] · [[Microsoft Agent Framework]]

---
Hoort bij: [[AI.NET]]
