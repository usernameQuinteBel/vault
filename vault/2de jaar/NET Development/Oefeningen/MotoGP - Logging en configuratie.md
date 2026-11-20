---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 15
groep: Oefeningen
---
# MotoGP - Logging en configuratie 📝

> Deel 12 (laatste deel) van [[MotoGP - Overzicht|MotoGP]]: configuratie voor **Development vs Production**, de seeder enkel in development, en een **e-mail bij betaling** (console in development, Mailtrap in production).

## 1. Geen TicketSeeder in production
1. Maak **`appsettings.Production.json`**; verplaats de connection string naar de root-`appsettings.json` (wordt overgeërfd) ([[appsettings.json]], [[Omgevingen (Development en Production)]]).
2. Zet Swagger aan voor production; start in production en test een endpoint.
3. Injecteer **`IWebHostEnvironment`** als `env` in `SeedController`, bewaar het in `_env` en blokkeer de request buiten development:
```csharp
if (!_env.IsDevelopment()) return Forbid();
```
→ Swagger geeft een **403**.
4. Alternatief: de controller in `#if DEBUG … #endif` zetten. In een **release build** wordt hij dan niet eens gecompileerd en verschijnt hij niet meer in Swagger.

## 2. E-mail bij betaling
| Omgeving | Implementatie | Gedrag |
|---|---|---|
| Development | `ConsoleEmailService` | bericht in de **console** |
| Production | `MailtrapEmailService` | e-mail via **Mailtrap** (simuleert levering) |

1. In `Strategies` een interface **`IEmailService`** met `Task SendEmailAsync(string to, string subject, string body);` ([[Mailservice (strategie)]]).
2. De twee implementaties komen uit de resources; lees de code na.
3. Zet de nodige configuratiesleutels in `appsettings.Development.json` en `appsettings.Production.json`; afzender **`no-reply@motogp.com`** ([[IConfiguration]]).
4. Registreer de juiste e-mailservice **op basis van de omgeving** en injecteer `IEmailService` in `TicketsController`.
5. In **`PartiallyUpdateTicket()`** een bevestigingsmail sturen als een ticket betaald is, **met de racenaam**.
6. Test in development via de front-end (aanmelden, tickets ophalen, betaling bevestigen) en bekijk de console.
7. Production: Mailtrap-account (met Google), *Email Testing → Inboxes*, inbox **MotoGP**; kopieer **host, port, username en password** naar `appsettings.Production.json`. Bevestig drie betalingen en controleer de inbox.

## Valkuilen
- Endpoints zijn beveiligd: test via de **front-end** (eerst aanmelden).

## Begrippen
[[Omgevingen (Development en Production)]] · [[IConfiguration]] · [[appsettings.json]] · [[Mailservice (strategie)]] · [[Strategy pattern]] · [[Logging (ILogger)]] · [[Dependency Injection]]

---
Hoort bij: [[Logging en configuratie]]
