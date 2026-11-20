---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5, 9]
groep: EF Core
aliases: [Navigation properties, Foreign key]
---
# Navigation property

> Een property die **naar een andere entity (of collectie)** verwijst; ze bestaat enkel in het objectmodel, de database bewaart alleen de **foreign key**.

```csharp
public class PointOfInterest
{
    [ForeignKey("CityId")]
    public int CityId { get; set; }          // foreign key
    public City? City { get; }                // navigation property naar de ouder
    public ICollection<Category> Categories { get; } = new List<Category>();
}
```
EF Core houdt FK en navigation **gesynchroniseerd**. De navigation property vervangt de join: laden via [[Include en loading|Include]].

## Gerelateerd
[[Relaties in EF Core]] · [[Entity class]] · [[Self-referencing loop]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
