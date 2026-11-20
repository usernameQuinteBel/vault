---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [8]
groep: EF Core
aliases: [201 Created, Location header]
---
# CreatedAtAction

> Hulpmethode die na een POST **201 Created** teruggeeft met een **`Location`-header** naar de plek waar de nieuwe resource opvraagbaar is, plus de nieuwe resource in de body.

```csharp
return CreatedAtAction(nameof(GetCategory),
    new { id = createdCategoryToReturn.Id },
    createdCategoryToReturn);          // location: https://localhost:7003/api/Categories/6
```
**Valkuil:** de route-waarde (`id`) moet overeenkomen met de parameternaam van de GET-action.

## Gerelateerd
[[ActionResult]] · [[HTTP-statuscodes]] · [[HTTP-methodes]]

---
Hoort bij: [[EF Core - POST, PUT, PATCH en DELETE]]
