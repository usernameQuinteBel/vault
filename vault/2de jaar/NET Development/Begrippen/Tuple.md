---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [13]
groep: API uitbreiden
aliases: [Tuples, Deconstructie]
---
# Tuple

> Een taalconstructie om **meerdere waarden** (van verschillend type) samen terug te geven, tussen haakjes en gescheiden door een komma.

```csharp
public async Task<(IEnumerable<City>, PaginationMetadata)> GetCitiesAsync(...)
{
    …
    return (collectionToReturn, paginationMetadata);
}

// deconstrueren in twee variabelen:
var (cities, paginationMetadata) = await _cityRepository.GetCitiesAsync(...);
```
Gebruikt in de repository om **items + [[Pagination metadata]]** in één call terug te geven.

## Gerelateerd
[[var (CSharp)|var (C#)]] · [[Paging]]

---
Hoort bij: [[Filtering, searching en paging]]
