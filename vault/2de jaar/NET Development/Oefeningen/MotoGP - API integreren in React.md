---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 19
groep: Oefeningen
---
# MotoGP - API integreren in React 📝

> Deel 6 van [[MotoGP - Overzicht|MotoGP]]: de React-front-end koppelen aan de .NET API. Je schakelt **CORS** in, haalt data op met **Axios** via service classes en vult de schermen met **container- en presentational components**.

## Voorbereiding
1. **CORS** inschakelen in de API ([[CORS]]).
2. Starter-code uit de resources naar de root van het project kopiëren en **Axios** installeren ([[Axios]]).
3. Start de API, kijk op welke **poort** ze draait en zet de juiste `baseURL` in `api/api_client.js` ([[Service class en apiClient]]).
4. Maak in `api` drie service classes: **`RacesService`**, **`RidersService`**, **`TeamsService`**, met één methode per API-endpoint.

## Routes
| Route | Scherm | Opmerking |
|---|---|---|
| `/list_riders` | `RidersScreen` | alle rijders, gesorteerd op nummer |
| `/list_races` (parent) | `RacesScreen` | alle races, gesorteerd op datum |
| `/list_races/:id` (child) | `RaceScreen` | details van één race |
| `/races_map` | `MapScreen` | alle races op de wereldkaart |
| `/list_teams` | `TeamsScreen` | alle teams |
| `/show_sponsors/:id` | `SponsorsScreen` | sponsors van één team |

Zie [[Nested routes (Outlet)]] en [[useParams]].

## Schermen
1. **Riders**: `riders_screen.jsx` en `riders_list.jsx` aanvullen.
2. **Races**: lijst gesorteerd op datum, met **een titel per nieuwe maand**; klik op een race → details. Op `MapScreen` zijn de paarse stippen klikbaar via een **area met cirkelvorm** per race en tonen ze hetzelfde detailscherm.
3. **Teams**: overzicht van teams met hun rijders; klik op een tegel → **foto's van de rijders** op dezelfde pagina. Knop *Advertisement* → `SponsorsScreen` met teamnaam en sponsors; klik op een logo → officiële website **in een nieuw tabblad**.

## Aanpak
- Container components halen data op ([[useEffect]] + service class) en bewaren ze in [[State (useState)|state]]; presentational components tonen enkel wat ze via [[Props]] krijgen ([[Container vs presentational components]]).
- Presentational components zijn zo herbruikbaar in verschillende containers.

## Valkuilen
- Verkeerde poort in `baseURL` → requests falen.
- CORS niet ingesteld → de browser blokkeert de requests van de front-end.

## Begrippen
[[Axios]] · [[CORS]] · [[Service class en apiClient]] · [[useEffect]] · [[Container vs presentational components]] · [[React Router]] · [[Nested routes (Outlet)]] · [[useParams]] · [[useNavigate]] · [[Lijsten renderen met map]]

---
Hoort bij: [[React - Axios]]
