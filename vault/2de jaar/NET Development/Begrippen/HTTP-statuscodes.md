---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [4, 8, 14]
groep: ASP.NET Core API
aliases: [Status codes, HTTP status codes, 200 201 204 400 401 403 404 409 500]
---
# HTTP-statuscodes

> Een correcte statuscode laat de consument weten of de request lukte en zo niet **waarom** niet.

| Reeks | Betekenis |
|---|---|
| 1xx | informational (niet belangrijk) |
| 2xx | succes |
| 3xx | redirection (niet gebruikt door API's) |
| 4xx | fout van de **client** |
| 5xx | fout van de **server** |

| Code | Wanneer |
|---|---|
| **200 OK** | succesvolle GET |
| **201 Created** | succesvolle POST |
| **204 No Content** | geslaagd, niets terug te geven (update, delete…) |
| **400 Bad Request** | verkeerde request (foute JSON-body…) |
| **401 Unauthorized** | geen of ongeldige authenticatie |
| **403 Forbidden** | geauthenticeerd maar geen toegang |
| **404 Not Found** | resource bestaat niet |
| **409 Conflict** | bv. edit-conflict bij gelijktijdige update |
| **500 Internal Server Error** | fout bij de server |

## Valkuilen
- Geen 200 OK als er iets mis is.
- Geen 500 als de client de fout maakte.
- Geen 404 als de resource bestaat maar je er geen toegang toe hebt (dat is 403).
- `/api/cities/5` mag niet 200 geven als stad 5 niet bestaat → controleer en geef `NotFound()` ([[ActionResult]]).

## Gerelateerd
[[HTTP-methodes]] · [[Authorize]] · [[CreatedAtAction]]

---
Hoort bij: [[Een API maken en resources teruggeven]]
