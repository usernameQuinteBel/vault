---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 4
groep: MVVM
aliases: [mockapi.io]
---
# MockAPI

> **mockapi.io**: een gratis online dienst om in een paar klikken een **nep-REST-API** te maken met echte CRUD-endpoints. Ideaal om een app te bouwen zonder eerst zelf een backend te schrijven.

## Opzetten (les 4)
1. Ga naar https://mockapi.io/ → **Get Started** → aanmelden met Google.
2. **New project** (bv. "Maui").
3. **New resource** (bv. `friend`) met de velden van je model (naam, sport, afbeelding…).
4. Je krijgt meteen een URL zoals `https://xxxx.mockapi.io/api/friend` die `GET`, `POST`, `PUT`, `DELETE` ondersteunt.

## Waarom?
Je focust op de **app-architectuur** ([[DataService]], [[MVVM]]) i.p.v. op een server. Later vervang je de URL door een echte API — dankzij de [[Interface als contract|interface]] verandert er in het ViewModel niets.

## Handig om te weten
- MockAPI genereert automatisch een `id` en kan **nepdata** invullen (faker: namen, avatars, telefoonnummers).
- **Relaties** (bv. `friend` → `sport`) kan je als geneste resources maken.
- Filteren/sorteren via queryparameters: `?sortBy=name&order=asc`, `?search=tennis`.
- Gratis plan: beperkt aantal projecten/resources, data kan gereset worden — niet voor productie.

## Typische problemen
| Probleem | Oorzaak |
|---|---|
| velden blijven leeg in de app | propertynamen in JSON (`name`) ≠ C#-properties → `PropertyNameCaseInsensitive` of `[JsonPropertyName]` |
| `id` is een string | MockAPI gebruikt string-id's ("1"), niet `int` |

## Gerelateerd
[[REST API]] · [[DataService]] · [[MVVM met DataServices]]

---
Hoort bij: [[MVVM met DataServices]]
