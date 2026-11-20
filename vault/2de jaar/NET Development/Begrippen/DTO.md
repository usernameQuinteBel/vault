---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [4, 7]
groep: ASP.NET Core API
aliases: [Data Transfer Object, DTO's, Model class]
---
# DTO

> Een **Data Transfer Object**: een modelklasse voor wat je ontvangt of teruggeeft via de API; **niet hetzelfde als een entity** ([[Entity class]]).

```csharp
public class CityDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public ICollection<PointOfInterestDto> PointsOfInterest { get; set; } = new List<PointOfInterestDto>();
    public int NumberOfPointsOfInterest { get { return PointsOfInterest.Count; } }   // berekende property
}
```
- Eén DTO per object dat je ontvangt of terugstuurt, in de map **Models**.
- `string?` = mag `null` zijn; in de cursus staat `<Nullable>annotations</Nullable>`.
- Een berekende property (`NumberOfPointsOfInterest`) hoort in de DTO, niet in de database.

## Later
Aparte DTO's voor aanmaken en wijzigen ([[Creation-, update- en patch-DTO]]); het omzetten entity ↔ DTO doe je met [[AutoMapper]].

## Gerelateerd
[[Controller]] · [[Property (CSharp)|Property (C#)]]

---
Hoort bij: [[Een API maken en resources teruggeven]]
