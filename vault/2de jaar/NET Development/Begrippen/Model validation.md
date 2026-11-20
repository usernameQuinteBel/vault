---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [4, 8]
groep: EF Core
aliases: [Input-validatie, ModelState, Validatie]
---
# Model validation

> Door `[ApiController]` en [[Data annotations]] op de DTO controleert ASP.NET Core de input **automatisch**: bij ongeldige input krijgt de client **400 Bad Request** met een lijst `errors`.

```json
{ "errors": { "Name": ["Name can't be longer then 50 characters"] } }
```
- `[Required]` → verplicht; `[MinLength(3)]` / `[MaxLength(50)]` → lengte; custom `ErrorMessage`.
- Validatie zit op de **creation/update/patch-DTO's** ([[Creation-, update- en patch-DTO]]), niet op de read-DTO.
- Test in Swagger: te korte waarde → 400.

## Gerelateerd
[[Controller]] · [[HTTP-statuscodes]]

---
Hoort bij: [[EF Core - POST, PUT, PATCH en DELETE]]
