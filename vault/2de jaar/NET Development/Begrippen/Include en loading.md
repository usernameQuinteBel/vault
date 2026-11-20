---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [6, 9]
groep: EF Core
aliases: [Include, ThenInclude, Eager loading, Lazy loading, Explicit loading]
---
# Include en loading

> Gerelateerde entities worden **standaard niet mee geladen**; met `Include` (eager loading) vraag je ze expliciet op via een join.

```csharp
_context.Cities.Include(c => c.PointsOfInterest).ToList();
// SELECT … FROM Cities LEFT JOIN PointsOfInterest ON Cities.Id = PointsOfInterest.CityId
```
Zonder `Include` krijg je `pointsOfInterest: []`. `ThenInclude()` laadt **geneste** relaties (bv. POI → categorieën).

## Strategieën
| Strategie | Werking | Opmerking |
|---|---|---|
| **Eager** | meteen met `Include()` | grotere query, geen extra round trips |
| **Lazy** | automatisch bij toegang | vereist proxies; in API's vaak afgeraden (onvoorspelbare performance) |
| **Explicit** | manueel laden via de context | volledige controle, extra code |

## N+1-probleem
Eén query laadt N entities en elke entity triggert een extra query → N+1. Detecteer via logging; oplossing: eager loading/projectie. Te veel `Include`s maken ook grote joins.

## Gerelateerd
[[Navigation property]] · [[Self-referencing loop]] · [[AsNoTracking]]

---
Hoort bij: [[EF Core - bevragen met LINQ]]
