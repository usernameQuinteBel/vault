---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [8]
groep: EF Core
aliases: [PUT, PATCH, Volledige vs gedeeltelijke update]
---
# PUT vs PATCH

> **PUT** vervangt een resource **volledig** (alle velden meegeven); **PATCH** wijzigt **gedeeltelijk** (enkel wat verandert). Beide geven bij succes **204 No Content**.

| | PUT | PATCH |
|---|---|---|
| Update | volledig | partieel |
| DTO | `ForUpdateDto` (zoals creation) | `ForPatchDto` (alles optioneel) |
| Mapping | gewoon `CreateMap` | `ForAllMembers` met conditie `srcMember != null` |
| Fout | 404, 400 | 404, 400 |

Zonder die conditie overschrijft AutoMapper bij PATCH niet-meegegeven velden met `null`.

```csharp
[HttpPatch("{categoryId}")]
public ActionResult PatchCategory(int categoryId, CategoryForPatchDto category)
{
    var entity = _context.Categories.Find(categoryId);
    if (entity == null) return NotFound();
    _mapper.Map(category, entity);
    _context.SaveChanges();
    return NoContent();
}
```
## Gerelateerd
[[Creation-, update- en patch-DTO]] · [[HTTP-methodes]] · [[Change tracking]]

---
Hoort bij: [[EF Core - POST, PUT, PATCH en DELETE]]
