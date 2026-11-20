---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5, 9]
groep: EF Core
aliases: [Entity, Entities, Entiteit]
---
# Entity class

> Een klasse waaruit EF Core een **tabel** maakt: lijkt op een [[DTO]] maar met extra **annotations** zodat de tabel juist wordt aangemaakt.

```csharp
public class City
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    [Required] [MaxLength(50)]
    public string Name { get; set; }

    [MaxLength(200)]
    public string? Description { get; set; }

    public ICollection<PointOfInterest> PointsOfInterest { get; } = new List<PointOfInterest>();

    public City(string name) { Name = name; }     // een City heeft altijd een naam
}
```

## Datamodel CityInfo
`City` (1) — (n) `PointOfInterest` (n) — (n) `Category`, via de join-entity `PointOfInterestCategory` ([[Relaties in EF Core]]).

## Entity vs DTO
| | Entity | DTO |
|---|---|---|
| `[Key]` en PK-generatie | ja | nee |
| Validatieattributen | ja | enkel bij insert/update-DTO's |
| Berekende properties | nee | ja |
| Navigation properties | naar entities | naar DTO's |
| FK + `[ForeignKey]` | ja | nee |

## Gerelateerd
[[Data annotations]] · [[Navigation property]] · [[DbSet]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
