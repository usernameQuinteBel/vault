---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 9
groep: Toegang
aliases: [Vertical privilege escalation, Horizontal privilege escalation]
---
# Privilege escalation

> **Meer rechten krijgen dan je zou mogen.** De twee richtingen komen rechtstreeks uit de twee soorten [[Access Control]].

| | Verticaal | Horizontaal |
|---|---|---|
| Wat | een gewone gebruiker krijgt de **functies** van een **hogere** rol (admin) | een gebruiker krijgt de **resources** van een **andere** gebruiker op hetzelfde niveau |
| Voorbeeld | `/admin` openen, `?admin=true` zetten, een rol-cookie `role=1` wijzigen | `myaccount?id=123` → `id=456` ([[IDOR]]) |

**Horizontaal kan verticaal worden**: raak je via [[IDOR]] bij het account van een **admin** (en zie/reset je bv. zijn wachtwoord), dan escaleer je van "andere gebruiker" naar "beheerder".

## Ook op systeemniveau
Naast escalatie in een **webapp** bestaat er escalatie op het **besturingssysteem**: van een beperkte gebruiker (bv. `www-data` na een [[Reverse shell]]) naar `root`/Administrator, via verkeerd ingestelde rechten, kwetsbare software of opgeslagen wachtwoorden.

## Verdediging (webapp)
- **Server-side** autorisatie bij elke request, nooit op basis van verborgen velden, cookies of URL-parameters die de gebruiker kan aanpassen.
- **Deny by default**: alles is verboden tenzij expliciet toegelaten.
- Object-level checks: is deze resource van **deze** gebruiker? (tegen [[IDOR]]).
- Admin-functies niet enkel "verbergen" in de UI.
- Rechten centraal regelen (middleware/attributen zoals `[Authorize(Roles = "Admin")]`).

---
Hoort bij: [[Access Control]]
