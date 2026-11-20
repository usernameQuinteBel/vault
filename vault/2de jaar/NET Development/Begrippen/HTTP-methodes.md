---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [4, 8]
groep: ASP.NET Core API
aliases: [HTTP methods, GET POST PUT PATCH DELETE, HTTP-verbs]
---
# HTTP-methodes

> De **werkwoorden** van een HTTP-request bepalen welke actie een endpoint uitvoert.

| Methode | Attribuut | Doel | Voorbeeld |
|---|---|---|---|
| GET | `[HttpGet]` | resource(s) opvragen | `/api/cities` |
| POST | `[HttpPost]` | resource aanmaken | `/api/cities` |
| PUT | `[HttpPut]` | volledig vervangen | `/api/cities/1` |
| PATCH | `[HttpPatch]` | gedeeltelijk wijzigen | `/api/cities/1` |
| DELETE | `[HttpDelete]` | verwijderen | `/api/cities/1` |

Zie [[PUT vs PATCH]] voor het verschil en [[HTTP-statuscodes]] voor de bijhorende antwoorden.

## Gerelateerd
[[Routing]] · [[REST API]] · [[Controller]]

---
Hoort bij: [[Een API maken en resources teruggeven]]
