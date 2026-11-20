---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [13]
groep: API uitbreiden
aliases: [PaginationMetadata, X-Pagination]
---
# Pagination metadata

> Informatie voor de consument over de paginering (totaal items, totaal pagina's, huidige pagina, page size) die je in de **response-header `X-Pagination`** meestuurt.

```csharp
public class PaginationMetadata
{
    public int TotalItemCount { get; set; }
    public int TotalPageCount { get; set; }
    public int PageSize { get; set; }
    public int CurrentPage { get; set; }

    public PaginationMetadata(int totalItemCount, int pageSize, int currentPage)
    {
        TotalItemCount = totalItemCount;
        PageSize = pageSize;
        CurrentPage = currentPage;
        TotalPageCount = (int)Math.Ceiling(totalItemCount / (double)pageSize);
    }
}
```
Rekenvoorbeeld: 3 steden, `pageSize` 2 → `Math.Ceiling(3 / 2.0)` = **2** pagina's.

## Werking
- De klasse staat in een gedeelde bibliotheek **`CityInfo.Shared`** omdat Infrastructure én API ze nodig hebben.
- De repository geeft **steden + metadata** terug als [[Tuple]]; `CountAsync()` haalt het totaal op.
- De controller zet de header:
```csharp
var (cities, paginationMetadata) = await _cityRepository.GetCitiesAsync(name, searchQuery, pageNumber, pageSize, true);
Response.Headers.Add("X-Pagination", JsonSerializer.Serialize(paginationMetadata));
```
Resultaat: `x-pagination: {"TotalItemCount":3,"TotalPageCount":2,"PageSize":2,"CurrentPage":1}`.

## Let op
Zonder `WithExposedHeaders("X-Pagination")` ziet een browser-client de header niet ([[CORS]]).

## Gerelateerd
[[Paging]] · [[Layered architecture]]

---
Hoort bij: [[Filtering, searching en paging]]
