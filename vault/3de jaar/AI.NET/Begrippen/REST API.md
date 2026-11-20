---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 4
groep: MVVM
aliases: [REST, Web API]
---
# REST API

> Een web-API die data aanbiedt via **HTTP** met vaste werkwoorden en **resources** (URL's). Meestal in JSON.

## Werkwoorden en CRUD
| HTTP | Actie | [[CRUD]] | Voorbeeld |
|---|---|---|---|
| `GET` | ophalen | Read | `GET /friend` of `GET /friend/3` |
| `POST` | aanmaken | Create | `POST /friend` met JSON-body |
| `PUT`/`PATCH` | wijzigen | Update | `PUT /friend/3` |
| `DELETE` | verwijderen | Delete | `DELETE /friend/3` |

## Statuscodes die je moet kennen
`200 OK` · `201 Created` · `204 No Content` · `400 Bad Request` · `401 Unauthorized` · `404 Not Found` · `500 Internal Server Error`.

## In dit vak
- **[[MockAPI]]** (deel A) als nep-backend voor FriendSportConnect.
- **Azure AI-diensten** zijn ook REST API's (een endpoint + key).
- **Open-Meteo** in de chatbot-[[Tools (Agent Framework)|tools]] (deel B).

## Een request met HttpClient
```csharp
var friends = await httpClient.GetFromJsonAsync<List<Friend>>("friend");
var response = await httpClient.PostAsJsonAsync("friend", newFriend);
response.EnsureSuccessStatusCode();   // gooit een fout bij 4xx/5xx
```

## Begrippen
| Term | Betekenis |
|---|---|
| **endpoint** | een URL + methode (`GET /friend/3`) |
| **resource** | het "ding" (friend, sport) |
| **body** | de JSON-data bij POST/PUT |
| **headers** | extra info (Content-Type, API-key) |
| **stateless** | elke request staat op zichzelf; de server onthoudt niets tussen requests |

## Gerelateerd
[[HttpClient]] · [[DataService]] · [[CRUD]]

---
Hoort bij: [[MVVM met DataServices]]
