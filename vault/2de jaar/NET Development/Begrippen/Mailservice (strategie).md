---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [15]
groep: Testing, DI en architectuur
aliases: [IMailService, LocalMailService, CloudMailService, Mailservice]
---
# Mailservice (strategie)

> Het voorbeeld uit CityInfo om DI te begrijpen: een `IMailService` met **twee implementaties**, `LocalMailService` (development, schrijft naar de console) en `CloudMailService` (production, via een cloudprovider).

```csharp
public interface IMailService { void Send(string subject, string message); }

public class LocalMailService : IMailService
{
    private string _mailFrom = "noreply@cityinfo.be";
    private string _mailTo = string.Empty;
    public LocalMailService(IConfiguration config) { _mailTo = config["MailSettings:MailToAddress"]; }
    public void Send(string subject, string message) { /* naar de console */ }
}
```
## Kiezen tussen implementaties
| Manier | Code | Wanneer |
|---|---|---|
| **Debug vs Release** | `#if DEBUG` … `#else` … `#endif` met `AddTransient` | enkel **compile-time** |
| **Development vs Production** | `builder.Environment.IsDevelopment()` met `AddSingleton` | via `ASPNETCORE_ENVIRONMENT` ([[launchSettings.json]]) |

Config per omgeving: `MailSettings:MailToAddress` in `appsettings.Development.json` (developer@cityinfo.be) en `appsettings.Production.json` (admin@cityinfo.be).

Dit is **geen echte strategy**: de keuze volgt uit build/omgeving, niet uit runtime-gedrag ([[Strategy pattern]]).

## Gerelateerd
[[IConfiguration]] · [[Omgevingen (Development en Production)]] · [[Service lifetimes]] · [[Logging en configuratie]]

---
Hoort bij: [[Logging en configuratie]]
