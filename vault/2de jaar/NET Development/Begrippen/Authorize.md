---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [14]
groep: Authenticatie, logging en configuratie
aliases: [[Authorize], Authorize-attribuut, Secured endpoint]
---
# Authorize

> Het attribuut **`[Authorize]`** beveiligt een controller of action: enkel requests met een geldig token komen erdoor, anders volgt **401 Unauthorized**.

```csharp
[Authorize]
[HttpGet("authorized")]
public async Task<ActionResult<WeatherForecast>> GetAllAuthorized()
{
    return Ok(Forecasts);
}
```
Zonder geldig token krijg je (bv. via Swagger) geen toegang ([[HTTP-statuscodes]]).

## Belangrijk
- Beveiligen op de **server** is wat telt: een verborgen menu-item in React beschermt niets.
- Ook acties zoals `PartiallyUpdateTicket()` beveilig je, anders kan je de betaalstatus zonder token wijzigen ([[MotoGP - Authentication]]).
- Authenticatie (wie ben je?) ≠ autorisatie (wat mag je?) → [[Authenticatie vs autorisatie]].

## Gerelateerd
[[JwtBearer]] · [[JWT]] · [[Middleware]]

---
Hoort bij: [[Authentication met Auth0]]
