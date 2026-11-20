---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 19
groep: Deel C: React front end
aliases: [React les 4, React Lesson 4 Axios, Axios, useEffect API, CORS React, container presentational]
---
# React - Axios

> Met **Axios** (promise-based HTTP-client, bij voorkeur met `async/await`) haal je data uit je .NET API in een **`useEffect`** (side effect, los van het renderen); de API moet **CORS** toelaten, requests bundel je in een **`apiClient`** en **service classes**, en je scheidt **container components** (logica) van **presentational components** (uiterlijk).

_Slides: "React Lesson 4: Axios" (project `lesson4` met de **KMI.API** weather-API) en oefening MotoGP (API integreren)._

**Inhoud:** de KMI-API maken · de front end maken · Axios · `useEffect` · CORS · `apiClient` · service classes · container vs presentational components.

## 1. De KMI-API maken
In Visual Studio een nieuwe **ASP.NET Core Web API**-solution **KMI** met project `KMI.API`. Kopieer `WeatherForecastController.cs` en `WeatherForecast.cs` uit de resources.
- **Swagger:** NuGet-pakket **`Swashbuckle.AspNetCore`** installeren (Tools → NuGet Package Manager) en `Program.cs` aanpassen.
- In **`launchSettings.json`** het `https`-profiel zo wijzigen dat de **browser start** (`"launchBrowser": true`) en **`"launchUrl": "swagger"`** is.
- De controller gebruikt `[Route("api/forecasts")]`, endpoints `GetAll` en `GetById(int id)`. Voor de oefening bevat de API een **delay** (`await Task.Delay(delay)` met `delay = 2000`) en geeft `BadRequest` bij een ongeldige id (`"The id must be between 1 and {Forecasts.Length}."`).
Zie [[Swagger]] en [[launchSettings.json]].

## 2. De front end maken
```bash
npm create vite@latest lesson4 -- --template react
npm install
npm install react-router-dom
npm install axios
npm run dev
```
**Resources kopiëren:** `vite.config.js` (alias `'@': '/src'`), `assets/icons` → `public` (weer-iconen `01d.png`… `50n.png`: **data-gerelateerde afbeeldingen zijn public assets**), `App.jsx`, `components`, `apis` → `src`.
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': '/src' } }   // Maps '@' to the /src directory
})
```
**Oefening React Router:** in `App.jsx` navigeren tussen **`ListScreen`** (route `/`) en **`DetailsScreen`** (route `/:id`). Zie [[React - Single Page Applications]].

## 3. Axios
> **Axios** is een **promise-based HTTP client** voor JavaScript: eenvoudig **asynchrone HTTP-requests** naar een **REST-API** sturen. Ondersteunt **`async/await`** (aanbevolen: leesbaarder, betere foutafhandeling). Zie [[Axios]] en [[REST API]].
```javascript
const getForecasts = async () => {
  try {
    const result = await axios.get('https://localhost:7111/api/forecasts');
    console.log(result.data);
  } catch (error) {
    console.error('Error fetching forecasts:', error);
  }
};
```
`result.data` bevat de **response body**; fouten (netwerk, 4xx/5xx) belanden in `catch`.

## 4. Side-effects en `useEffect`
Een component **rendert output** (op basis van props en state). Instructies die **niet** op de output mikken, zijn **side-effects**: een timer zetten, **data ophalen uit een API**, … **Rendering moet altijd losgekoppeld zijn van de side-effect!** Waar roep je dan `getForecasts` op? → **`useEffect()`**, de hook die side-effects **onafhankelijk van het renderen** uitvoert. Zie [[useEffect]] en [[Side effects]].
```javascript
useEffect(callback[, dependencies]);
```
- **`callback`**: de functie met de side-effect-logica; ze wordt uitgevoerd **net nadat de wijzigingen naar de DOM gepusht zijn** (na het renderen/mounten).
- **`dependencies`**: optionele **array**; `useEffect` voert de callback enkel uit **als de dependencies tussen twee renders veranderd zijn**.

| Variant | Wanneer wordt de callback uitgevoerd? |
|---|---|
| `useEffect(() => { … }, [])` | **één keer** na de eerste render |
| `useEffect(() => { … }, [prop, state])` | één keer na de eerste render **én** na elke render **enkel als `prop` of `state` verandert** |
| `useEffect(() => { … })` | na **elke** render |

```jsx
import axios from 'axios';
import { useEffect } from 'react';

function ListScreen() {
  const getForecasts = async () => {
    try {
      const result = await axios.get('https://localhost:7111/api/forecasts');
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching forecasts:', error);
    }
  };

  useEffect(() => {
    getForecasts();
  }, []);
}
```

## 5. CORS
Zonder aanpassing krijg je in de console: *"Access to XMLHttpRequest at 'https://localhost:7111/api/forecasts' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."* (`AxiosError … ERR_NETWORK`).
> **CORS = Cross-Origin Resource Sharing**: een **browsermechanisme** dat toegang tot resources van een **andere origin** regelt — **security!** **Standaardbeleid: alle inkomende calls van andere origins blokkeren.** Hier: React (`localhost:5173`) → .NET API (`localhost:7111`). Zie [[CORS]].

### Wat is een origin?
Twee URL's hebben **dezelfde origin** als **protocol (schema), domein (host) en poort identiek** zijn:
| URL 1 | URL 2 | Zelfde origin? |
|---|---|---|
| `https://example.com/foo.html` | `https://example.com/bar.html` | **Ja** |
| `https://example.com/foo.html` | `https://example.net` | Nee, ander domein |
| `https://example.com/foo.html` | `https://contoso.example.com/foo.html` | Nee, ander **subdomein** |
| `https://example.com/foo.html` | `http://example.com/foo.html` | Nee, ander **protocol** |
| `https://example.com/foo.html` | `https://example.com:9000/foo.html` | Nee, andere **poort** |

### Eén origin toelaten in `Program.cs` van de API
```csharp
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
        builder.WithOrigins("http://localhost:5173")
               .AllowAnyHeader()
               .AllowAnyMethod());
});

var app = builder.Build();
app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();
```
`AddCors` met een **default policy** + **`app.UseCors()`** in de pipeline (vóór `UseAuthorization`).

### Enkel GET en POST toelaten
```csharp
builder.WithOrigins("http://localhost:5173")
       .AllowAnyHeader()
       .WithMethods("GET", "POST");
```
**Veiliger:** enkel specifieke headers die je API echt nodig heeft:
```csharp
builder.WithOrigins("http://localhost:5173")
       .WithHeaders("Content-Type", "Authorization", "X-API-Key")
       .AllowAnyMethod();
```
(`Content-Type: application/json` = formaat van de request body; `Authorization: Bearer eyJ…` = authenticatietoken; `X-API-Key: …` = custom API key.) Voor de MotoGP-oefening was `AllowAnyOrigin()` + `WithExposedHeaders("X-Pagination")` nodig — zie [[Filtering, searching en paging]]. Zie [[Middleware]].

## 6. `apiClient` en service classes
**`api/api_client.js`** — één geconfigureerde Axios-instantie (pas de **poort** aan naar die van jouw API):
```javascript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://localhost:7111/api/',
  headers: { 'Content-Type': 'application/json' },
});
export default apiClient;
```
**Service class** — *maak voor elke resource van je back end een service class en daarin een methode voor elk endpoint van die resource*:
```javascript
import apiClient from './api_client';

const ForecastsService = {
  getAll() {
    return apiClient.get('/forecasts');
  },
  getById(id) {
    return apiClient.get(`/forecasts/${id}`);
  },
};
export default ForecastsService;
```
**Oefening:** `ListScreen` herwerken met `ForecastsService` i.p.v. rechtstreeks `axios` (import `ForecastsService` uit `@/api/forecasts_service`) en controleren dat de forecasts nog in de console verschijnen. Zie [[Service class en apiClient]].

## 7. Separation of concerns: container vs presentational
| | **Presentational components** ("dumb") | **Container components** ("smart") |
|---|---|---|
| Zorg | **hoe dingen eruit zien** | **hoe dingen werken** |
| Afhankelijkheden | geen met de rest van de app | kennen de applicatielogica |
| Data | ontvangen data **en callbacks uitsluitend via props**; weten niet waar de data vandaan komt | leveren **data en gedrag** aan presentational components; zijn vaak **stateful** (databronnen) |
| Markup | de eigenlijke markup | geen markup behalve wat wrapping `div`s |
Zie [[Container vs presentational components]].

### ListScreen = container
State toevoegen en de data (forecasts) doorgeven aan het presentational component `WeatherList`; **gedrag** (navigeren naar de details) ook doorgeven:
```jsx
function ListScreen() {
  const [forecasts, setForecasts] = useState([]);
  const navigate = useNavigate();

  const getForecasts = async () => {
    try {
      const result = await ForecastsService.getAll();
      setForecasts(result.data);
    } catch (error) {
      console.error('Error fetching forecasts:', error);
    }
  };
  useEffect(() => { getForecasts(); }, []);

  function gotoDetails(id) {
    navigate('/' + id);
  }

  return (
    <>
      <WeatherList forecasts={forecasts} onClickIcon={gotoDetails} />
    </>
  )
}
```
### WeatherList = presentational (oefening)
- Vergeet de **properties in de functiedefinitie** niet: `{ … }`.
- Itereer over de forecasts met **`map`** en maak een **`WeatherItem`** per forecast (**`key`** niet vergeten).
- Toon de forecastdata in `WeatherItem` (bv. "4°C - partly cloudy", datum, icoon).
- Klik op het weericoon → navigeer naar het detailscherm.

### DetailsScreen = container, WeatherDetail = presentational
```jsx
function DetailsScreen() {
  const navigate = useNavigate();
  const [forecast, setForecast] = useState({});
  const { id } = useParams();

  const getForecast = async (id) => {
    try {
      const result = await ForecastsService.getById(id);
      setForecast(result.data);
    } catch (error) {
      console.error('Error fetching forecast:', error);
    }
  };

  useEffect(() => { getForecast(id); }, [id]);   // opnieuw uitvoeren als id verandert

  return (<><WeatherDetail forecast={forecast} /></>)
}
```
`WeatherDetail` toont temperatuur, samenvatting, beschrijving en een **Back**-knop.

### Oefeningen: een trage API en een ontbrekende forecast
- **Trage API** (de API wacht 2 s): toon een **"Loading…"**-toestand tot de data er is.
- **Forecast bestaat niet** (bv. `/44` → `400 Bad Request`, console: *Request failed with status code 400*): toon een nette boodschap i.p.v. een lege/foute weergave.

## 8. Oefening MotoGP: de API integreren
Zie [[MotoGP - API integreren in React]]. Samengevat:
1. **CORS inschakelen** in de API; starterscode uit de resources kopiëren; **Axios** installeren; poort controleren en `baseURL` in `api_client.js` aanpassen.
2. Drie **service classes**: `RacesService`, `RidersService`, `TeamsService` — een methode per endpoint.
3. **Routes** in `App.jsx`:
| Route | Scherm | Opmerking |
|---|---|---|
| `/list_riders` | `RidersScreen` | alle riders gesorteerd op **nummer** |
| `/list_races` (parent route) | `RacesScreen` | alle races gesorteerd op **datum** |
| `/list_races/:id` (child route) | `RaceScreen` | details van één race |
| `/races_map` | `MapScreen` | alle races op de wereldkaart |
| `/list_teams` | `TeamsScreen` | alle teams |
| `/show_sponsors/:id` | `SponsorsScreen` | alle sponsors van één team |
4. **Container + presentational components** (bv. `riders_screen.jsx` en `riders_list.jsx`):
   - **Riders:** lijst van alle riders.
   - **Races en Map:** races op datum, **per nieuwe maand een titel**; klik op een race voor de details; op de `MapScreen` zijn de paarse stippen **klikbaar** (een cirkelvormig **area** per race) en tonen dezelfde detailpagina.
   - **Teams en Sponsors:** overzicht van alle teams met de rijders eronder; klik op een team-tegel om **op dezelfde pagina** de foto's van de rijders te tonen; de knop **Advertisement** gaat naar `SponsorsScreen` (teamnaam + sponsors); klik op een logo → de officiële website van de sponsor in een **nieuw tabblad**.

## Tips en valkuilen
- Haal data op in **`useEffect`**, nooit rechtstreeks in de render-body (anders oneindige render-lus).
- Geef `[]` als dependencies als je enkel bij het mounten wil ophalen; `[id]` als je moet herladen bij een andere route-parameter.
- **CORS-fouten** los je op in de **API** (niet in React): `UseCors` + juiste origin (protocol + host + **poort**).
- Plaats `baseURL` en headers in **één `apiClient`**; één **service class per resource**.
- Houd **fetch-logica in containers**, presentational components blijven herbruikbaar.
- Vang fouten op met `try/catch` en toon een melding.

## Begrippen
[[Axios]] · [[useEffect]] · [[Side effects]] · [[CORS]] · [[Service class en apiClient]] · [[Container vs presentational components]] · [[Async en await]] · [[REST API]] · [[Swagger]]

## Oefening
[[MotoGP - API integreren in React]]

---
Hoort bij: [[NET Development|.NET Development]]
