---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [15]
groep: Authenticatie, logging en configuratie
aliases: [Configuration, appsettings per omgeving, MailSettings]
---
# IConfiguration

> Dé manier om **configuratiewaarden te lezen**: je injecteert `IConfiguration` in de constructor en vraagt waarden op met een sleutel `"Sectie:Sleutel"`.

```csharp
public class LocalMailService : IMailService
{
    private string _mailTo = string.Empty;
    public LocalMailService(IConfiguration config)
    {
        _mailTo = config["MailSettings:MailToAddress"];
    }
}
```
## Bestanden per omgeving
| Bestand | Rol |
|---|---|
| `appsettings.json` | **root**: waarden voor alle omgevingen (bv. connection string) |
| `appsettings.Development.json` | overschrijft/vult aan voor Development |
| `appsettings.Production.json` | idem voor Production |

**Configuratie wordt geërfd**: zet gemeenschappelijke waarden in de root en overschrijf enkel wat verschilt. Staat een connection string alleen in Development, dan faalt Production.

```json
// Development
"MailSettings": { "MailToAddress": "developer@cityinfo.be" }
// Production
"MailSettings": { "MailToAddress": "admin@cityinfo.be" }
```
In `Program.cs` lees je ze met `builder.Configuration["..."]` ([[Connection string]], [[AutoMapper]]).

## Gerelateerd
[[appsettings.json]] · [[Omgevingen (Development en Production)]] · [[Mailservice (strategie)]]

---
Hoort bij: [[Logging en configuratie]]
