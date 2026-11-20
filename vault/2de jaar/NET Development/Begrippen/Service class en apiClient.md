---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [19]
groep: React front end
aliases: [apiClient, Service class, ForecastsService, api_client.js]
---
# Service class en apiClient

> **`apiClient`** is één geconfigureerde Axios-instantie; per resource van de back end maak je een **service class** met een methode per endpoint.

```javascript
// api/api_client.js
const apiClient = axios.create({
  baseURL: 'https://localhost:7111/api/',        // pas de poort aan
  headers: { 'Content-Type': 'application/json' },
});
export default apiClient;
```
```javascript
// api/forecasts_service.js
const ForecastsService = {
  getAll()      { return apiClient.get('/forecasts'); },
  getById(id)   { return apiClient.get(`/forecasts/${id}`); },
};
export default ForecastsService;
```
Een component roept `ForecastsService.getAll()` aan i.p.v. rechtstreeks `axios`. Met token: `getAllAuthorized(token)` met `Authorization: Bearer …` ([[Authentication met Auth0]]).

## Gerelateerd
[[Axios]] · [[Container vs presentational components]]

---
Hoort bij: [[React - Axios]]
