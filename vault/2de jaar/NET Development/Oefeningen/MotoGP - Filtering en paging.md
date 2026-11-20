---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 13
groep: Oefeningen
---
# MotoGP - Filtering en paging 📝

> Deel 10 van [[MotoGP - Overzicht|MotoGP]]: **filtering, searching en paging** van tickets, eerst in de API en daarna in de React-front-end met een filter- en paginatiecomponent.

## 1. TicketSeeder
- Installeer **Bogus** om nepdata met structuur te genereren ([[Bogus]]).
- Map **`Seeders`** met `TicketSeeder.cs` uit de resources; `SeedController.cs` in `Controllers`.
- **POST `/api/seed/tickets`** voegt **1000** ticketreservaties toe.

## 2. API — `GetCountries()`
Optionele `bool onlyWithTickets` (standaard `false`), doorgegeven aan `GetCountriesAsync()`: bij `true` enkel landen waarvoor **minstens één ticket** verkocht is.

## 3. API — `GetTickets()`
| Parameter | Betekenis |
|---|---|
| `searchQuery` | zoeken op **naam of e-mail** van de koper ([[Searching]]) |
| `countryId` | filter op land ([[Filtering]]) |
| `raceId` | filter op race |
| `open` | `true` → enkel **onbetaalde** tickets |
| `pageNumber` (standaard 1), `pageSize` (standaard 10) | [[Paging]] |

Geef ook de **pagination metadata** terug ([[Pagination metadata]]). Probeer de resultaten te verfijnen tot 2–3 records.

## 4. Front-end — filter gebruiken
- `CountryService`: extra methode `getAllWithTickets()`.
- `TicketService.getAll()` met parameters (Axios zet het `params`-object om naar query parameters):
```js
getAll(params) {
    return apiClient.get('/tickets', { params });
},
```
- In `TicketsScreen` een state `filters` met dezelfde waarden als je API-test, en [[useEffect]] die opnieuw ophaalt bij elke wijziging:
```js
useEffect(() => {
    getTickets(filters);
}, [filters]);
```

## 5. TicketsFilter-component
- Zet de standaardfilter zo dat alle tickets getoond worden (dus de eerste 10).
- Kopieer `tickets_filter.jsx` naar `components/tickets` en toon `<TicketsFilter filters={filters} onFilterChange={setFilters} countries={countries} races={races} />` boven `TicketsList` ([[Lifting state up]]).
- Extra state `races` en `countries` (landen **met tickets**), maar haal ze maar **één keer** op, niet bij elke render.

## 6. Pagination-component
- Map `components/ui` met `pagination.jsx` en `pagination.module.css`; toon `<Pagination currentPage={filters.pageNumber} totalPages={pageCount} onPageChange={handlePageChange} />` tussen filter en lijst.
- **CORS** in de API uitbreiden met **`.WithExposedHeaders("X-Pagination")`**, anders ziet de front-end de header niet ([[CORS]]).
- State `pageCount`; bij het ontvangen van de tickets:
```js
setPageCount(JSON.parse(result.headers["x-pagination"]).TotalPageCount);
```
- Bij een paginawissel past `handlePageChange` het paginanummer in `filters` aan, wat een nieuwe request uitlokt ([[Spread operator]]):
```js
function handlePageChange(newPage) {
    setFilters({ ...filters, pageNumber: newPage });
}
```

## Controle
Bestel zelf tickets en kijk of je je bestelling makkelijk terugvindt.

## Begrippen
[[Filtering]] · [[Searching]] · [[Paging]] · [[Pagination metadata]] · [[Bogus]] · [[CORS]] · [[useEffect]] · [[Spread operator]] · [[Lifting state up]]

---
Hoort bij: [[Filtering, searching en paging]]
