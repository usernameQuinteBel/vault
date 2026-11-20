---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [13]
groep: API uitbreiden
aliases: [Zoeken, searchQuery]
---
# Searching

> **Breder** zoeken wanneer je niet exact weet welke items er zijn: één zoekwaarde (`/api/cities?searchQuery=Tower`), waarbij **de API beslist** hoe de zoekfunctie werkt.

| | [[Filtering]] | **Searching** |
|---|---|---|
| Idee | exact, per veld | breed, één waarde |
| Query string | `?name=Antwerp` | `?searchQuery=Tower` |

In CityInfo zoek je in cities waar de **Name** of de **Description** de zoekwaarde bevat:
```csharp
if (!string.IsNullOrEmpty(searchQuery))
{
    collection = collection.Where(c => c.Name.Contains(searchQuery)
        || (c.Description != null && c.Description.Contains(searchQuery)));
}
```
## Valkuil
Zoek in `Description` **enkel als die niet `null` is**, anders volgt een `NullReferenceException`. SQL: `LIKE`.

## Gerelateerd
[[LINQ]] · [[Paging]] · [[IQueryable en deferred execution]]

---
Hoort bij: [[Filtering, searching en paging]]
