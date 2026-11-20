---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [15]
groep: Authenticatie, logging en configuratie
aliases: [LogLevel, Trace Debug Information Warning Error Critical]
---
# Log levels

> Het level van een logbericht bepaalt of het gelogd wordt: berichten onder het geconfigureerde level worden genegeerd.

**Volgorde (laag → hoog):** `Trace`, `Debug`, `Information`, `Warning`, `Error`, `Critical`, `None`.
| Level | Betekenis |
|---|---|
| **Trace** | gedetailleerd, laag niveau, voor debugging |
| **Debug** | debugging en troubleshooting |
| **Information** | algemene info over toestand/gedrag |
| **Warning** | mogelijke problemen of onverwachte gebeurtenissen |
| **Error** | fouten tijdens de uitvoering |
| **Critical** (Fatal) | kritieke fouten waardoor de app crasht of instabiel wordt |

## Configuratie
```json
"Logging": {
  "LogLevel": { "Default": "Information", "Microsoft.AspNetCore": "Warning" }
}
```
- `Default`: elke logger-categorie zonder specifiekere regel.
- `Microsoft.AspNetCore`: framework-logs (middleware, routing, HTTP, auth).
- `CityInfo.API.Controllers`: logs uit je controllers.

| Configuratie | Gevolg |
|---|---|
| `Default: Critical`, `Microsoft.AspNetCore: Warning` | Information-bericht **niet** gelogd |
| `…, CityInfo.API.Controllers: Information` | wél gelogd |
| `…, CityInfo.API.Controllers: Critical` | niet gelogd |

**Tip:** controleer `Default` én de specifieke categorieën.

## Gerelateerd
[[Logging (ILogger)]] · [[appsettings.json]] · [[Serilog]]

---
Hoort bij: [[Logging en configuratie]]
