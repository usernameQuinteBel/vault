---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5, 8]
groep: EF Core
aliases: [Annotations, Validatieattributen, Required MaxLength Key]
---
# Data annotations

> **Attributen** (`[Required]`, `[MaxLength]`…) op properties van een [[Entity class]] of [[DTO]] die zowel het **databaseschema** als de **validatie** beïnvloeden.

| Annotation | Effect |
|---|---|
| `[Key]` | primary key |
| `[DatabaseGenerated(DatabaseGeneratedOption.Identity)]` | PK-waarde automatisch genereren (opties: None / Identity / Computed) |
| `[Required]` | kolom is **not nullable**; bij een DTO: verplichte invoer |
| `[MaxLength(50)]` | `NVARCHAR(50)` / max 50 tekens |
| `[MinLength(3)]` | min 3 tekens (validatie) |
| `[ForeignKey("CityId")]` | foreign key (+ navigation property) |

`Id` of `<Klasse>Id` wordt ook zonder `[Key]` als primary key herkend.

## Waar?
- **Entities**: bepalen de kolommen bij een migration ([[Migrations]]).
- **Creation/update-DTO's**: bepalen de input-validatie ([[Model validation]]).
- Alternatief voor relaties/delete-gedrag: [[Fluent API]] (aanbevolen in echte systemen).

## Gerelateerd
[[Entity class]] · [[Creation-, update- en patch-DTO]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
