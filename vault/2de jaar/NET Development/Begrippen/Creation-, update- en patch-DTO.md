---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [8]
groep: EF Core
aliases: [ForCreationDto, ForUpdateDto, ForPatchDto]
---
# Creation-, update- en patch-DTO

> Voor schrijfacties gebruik je **aparte DTO's met validatie**, zodat consumenten een schoon contract krijgen met enkel relevante properties.

| DTO | Gebruik | Kenmerk |
|---|---|---|
| `…ForCreationDto` | POST | `[Required]`, `[MinLength]`, `[MaxLength]` |
| `…ForUpdateDto` | PUT | identiek aan creation, volledige update |
| `…ForPatchDto` | PATCH | properties **optioneel** (`string?`), enkel lengtevalidatie |

```csharp
public class CategoryForCreationDto
{
    [Required(ErrorMessage = "You should provide a name for the category")]
    [MinLength(3, ErrorMessage = "Name has to got at least 3 characters")]
    [MaxLength(50, ErrorMessage = "Name can't be longer then 50 characters")]
    public string Name { get; set; }
}
public class CategoryForPatchDto
{
    [MinLength(3)] [MaxLength(50)] public string? Name { get; set; }
}
```
Mappen: `CreateMap<CategoryForCreationDto, Category>();` en voor patch met `ForAllMembers`-conditie ([[Mapping profile]]).

## Gerelateerd
[[Model validation]] · [[PUT vs PATCH]] · [[DTO]]

---
Hoort bij: [[EF Core - POST, PUT, PATCH en DELETE]]
