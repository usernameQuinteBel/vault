---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [19]
groep: React front end
aliases: [axios, HTTP client, axios.get]
---
# Axios

> Een **promise-based HTTP-client** voor JavaScript om asynchrone requests naar een REST-API te sturen; werkt met `async/await`.

```bash
npm install axios
```
```javascript
const getForecasts = async () => {
  try {
    const result = await axios.get('https://localhost:7111/api/forecasts');
    console.log(result.data);        // response body
  } catch (error) {
    console.error('Error fetching forecasts:', error);
  }
};
```
Fouten (netwerk, 4xx/5xx) belanden in `catch`. Roep dit aan in [[useEffect]] en bewaar het resultaat in [[State (useState)]].

- **`params`**: `apiClient.get('/tickets', { params })` — Axios zet het object om naar query parameters ([[Filtering, searching en paging]]).
- **Token meesturen**: header `Authorization: Bearer <token>` ([[JWT]]).
- Zonder [[CORS]]-configuratie in de API blokkeert de browser de call.

## Gerelateerd
[[Service class en apiClient]] · [[React - Axios]] · [[Async en await]]

---
Hoort bij: [[React - Axios]]
