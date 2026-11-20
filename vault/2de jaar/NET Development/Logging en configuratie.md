---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 15
groep: Deel B: ASP.NET Core API
aliases: [Logging, Configuration, Serilog, LoggingService, les 12, appsettings Production, IMailService]
---
# Logging en configuratie

> ASP.NET Core heeft **ingebouwde DI**, **logging** (`ILogger<T>` met log levels, configureerbaar in `appsettings`), en **omgevingsafhankelijke configuratie** (`appsettings.Development/Production.json`, `IConfiguration`); voor loggen naar een bestand voeg je een third-party provider zoals **Serilog** toe, en met een **IMailService-strategie** kies je per build of omgeving de juiste implementatie.

_Slides: "12. LoggingService & Configuration" (CityInfo) en oefening MotoGP (laatste deel)._

## 1. Inhoud van de les
IoC en DI · logging in ASP.NET Core · eigen services maken en gebruiken · werken met **configuratiebestanden** per omgeving.

### Ingebouwde DI in ASP.NET Core (recap)
ASP.NET Core ondersteunt het **DI-pattern** = een techniek voor **IoC** tussen klassen en hun dependencies. Er is een **service container** waarin je services registreert (**interface → implementatie**) in `Program.cs` via `builder.Services`. Je injecteert ze als **constructorparameter** in al je klassen; de runtime lost de service op uit de container en geeft de juiste implementatie. Zie [[Dependency Injection (les)]].

## 2. Logging
Een **standaardconfiguratie** voor logging is al aanwezig. Je gebruikt ze door een `ILogger<T>` te injecteren (hier in `CategoriesController`):
```csharp
private readonly IMapper _mapper;
private readonly ICategoryRepository _categoryRepository;
private readonly ILogger<CategoriesController> _logger;

public CategoriesController(
    ILogger<CategoriesController> logger,
    IMapper mapper,
    ICategoryRepository categoryRepository)
{
    _logger = logger;
    _mapper = mapper;
    _categoryRepository = categoryRepository;
}
```
Zie [[Logging (ILogger)]].

### Log levels
De `_logger`-instantie logt op **verschillende niveaus**. Dat niveau is belangrijk omdat je in `appsettings.Development.json` bepaalt **welke berichten** (op basis van het level) gelogd worden. Standaard worden **alle Information-berichten en hoger** gelogd.

**Volgorde (laag → hoog):** `Trace`, `Debug`, `Information`, `Warning`, `Error`, `Critical`, `None`.
| Level | Betekenis |
|---|---|
| **Trace** | gedetailleerde logs op laag niveau voor debugging |
| **Debug** | logs voor debugging en troubleshooting |
| **Information** | algemene info over de toestand/het gedrag van de app |
| **Warning** | mogelijke problemen of onverwachte gebeurtenissen |
| **Error** | fouten tijdens de uitvoering |
| **Critical** (Fatal) | kritieke fouten waardoor de app crasht of instabiel wordt |
Zie [[Log levels]].

### Voorbeeld: loggen wanneer een categorie niet gevonden wordt
```csharp
[HttpGet("{id}")]
public async Task<ActionResult<CategoryDto>> GetCategory(int id)
{
    var category = await _categoryRepository.GetCategoryAsync(id);
    if (category == null)
    {
        _logger.LogInformation($"Category with id {id} wasn't found when accessing categories.");
        return NotFound();
    }
    return Ok(_mapper.Map<CategoryDto>(category));
}
```
Console-uitvoer: `info: CityInfo.API.Controllers.CategoriesController[0] Category with id 15 wasn't found when accessing categories.` (naast de `Executed DbCommand`-SQL van EF Core).

### Configuratie in `appsettings.Development.json`
```json
"Logging": {
  "LogLevel": {
    "Default": "Information",
    "Microsoft.AspNetCore": "Warning"
  }
}
```
- **`Default`**: elke logger-categorie zonder specifiekere regel logt vanaf dit level.
- **`Microsoft.AspNetCore`**: framework-logs (middleware, routing, HTTP-requests, authenticatie/autorisatie).
- **`CityInfo.API.Controllers`**: logs gedefinieerd in controllers.

Experimenten uit de slides:
| Configuratie | Gevolg |
|---|---|
| `Default: Critical`, `Microsoft.AspNetCore: Warning` | ons Information-bericht wordt **niet** gelogd |
| `Default: Information`, `Microsoft.AspNetCore: Warning`, `CityInfo.API.Controllers: Information` | bericht **wel** gelogd |
| `…, "CityInfo.API.Controllers": "Critical"` | bericht **niet** gelogd |

### Een exception gooien (default logging)
Met `throw new Exception("Get Category Exception");` in `GetCategory`: de exception verschijnt in de **console**, **Swagger** toont **500 Internal Server Error** en de **browser** toont de volledige exception (Developer Exception Page).

### Loggen naar een bestand: Serilog
**Niet standaard** in ASP.NET Core → integreer een **third-party logging provider**: voeg een NuGet-pakket toe en roep een extension-methode van `ILoggerFactory`/`ILoggingBuilder` aan. Voorbeelden van providers: **Serilog**, NLog, Log4Net, Sentry, KissLog, elmah.io… Zie [[Serilog]].

**NuGet (laatste stabiele versies):** het Serilog-pakket en een **sink** voor elke bestemming (bv. **`Serilog.Sinks.Console`** en een bestands-sink); installeren kan ook via de Package Manager Console: `install-package serilog.sinks.console`.
```csharp
// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Console()
    .WriteTo.File("logs/cityinfo.txt", rollingInterval: RollingInterval.Day)
    .CreateLogger();

// Use Serilog for logging
builder.Host.UseSerilog();

var app = builder.Build();
```
- Met level **Debug** verschijnt **elke actie** in console én bestand.
- **Sink** = één per bestemming (bestand, console, …); `RollingInterval.Day` maakt een nieuw logbestand per dag (`cityinfo2026….txt`).
- Logregels: `2026-04-27 11:07:05.875 +02:00 [DBG] …` in het bestand; in de console korter `[19:42:37 INF] Now listening on: https://localhost:7275`.

## 3. Een eigen MailService (strategie via DI)
**Doel:** DI écht begrijpen door een **mailservice** toe te voegen met twee implementaties van `IMailService`: **`LocalMailService`** (development) en **`CloudMailService`** (production), en dan via DI **op basis van de omgeving** de juiste registreren. (Serilog eventueel even uitschakelen.)
> Een **strategy pattern** schakelt **tijdens runtime** tussen implementaties op basis van code (bv. gebruikersvoorkeuren uit een database). Kiezen via configuratie/omgeving is **geen echte strategy**, maar conceptueel gelijkaardig. Zie [[Strategy pattern]].

Map `Strategies`:
```csharp
public interface IMailService
{
    void Send(string subject, string message);
}

public class LocalMailService : IMailService
{
    private string _mailFrom = "noreply@cityinfo.be";
    private string _mailTo = "admin@cityinfo.be";

    public void Send(string subject, string message)
    {
        // Send mail - output to console
        Console.WriteLine($"Mail from {_mailFrom} to {_mailTo}, " +
            $"with {nameof(LocalMailService)}.");
        Console.WriteLine($"Subject: {subject}");
        Console.WriteLine($"Message: {message}");
    }
}
```
`CloudMailService` implementeert dezelfde interface en zou mails via een **cloudprovider** versturen; je hoeft ze niet echt uit te werken, enkel het verschil tonen zodat je kan wisselen.

**Oefening:** een lokale mail sturen bij het lezen van een stad: de service **registreren**, in de controller **injecteren**, **versturen**, uitproberen. Uitvoer: `Mail from noreply@cityinfo.be to admin@cityinfo.be, with LocalMailService. Subject: City exists! Message: City with id 2 is Antwerp`.

### Verschillende builds: Debug vs Release
```csharp
#if DEBUG
builder.Services.AddTransient<IMailService, LocalMailService>();
#else
builder.Services.AddTransient<IMailService, CloudMailService>();
#endif
```
Wisselen tussen Debug en Release **(un)commentet** de regel die uitgevoerd wordt: de code binnen `#if DEBUG` verdwijnt in een Release build volledig (**enkel op compile-time**). `AddTransient` = elke aanvraag een nieuwe instantie. In Release krijg je in Visual Studio een *Just My Code*-waarschuwing bij debuggen (breakpoints worden niet geraakt). Zie [[Omgevingen (Development en Production)]].

### Verschillende omgevingen: Development vs Production
```csharp
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddSingleton<IMailService, LocalMailService>();
}
else
{
    builder.Services.AddSingleton<IMailService, CloudMailService>();
}
```
`AddSingleton` registreert de service zo dat **dezelfde instantie** elke keer teruggegeven wordt (één gedeelde instantie voor de hele app). De omgeving staat in **`launchSettings.json`** (`ASPNETCORE_ENVIRONMENT`).
- **Development testen:** eerst terug naar *Debug*.
- **Production testen:** in `launchSettings.json` `ASPNETCORE_ENVIRONMENT` op **`Production`** zetten, **Swagger ook in Production inschakelen** (in `Program.cs` voor alle omgevingen), en een stad lezen → `…with CloudMailService.`
- Zie [[launchSettings.json]] en [[Program.cs]].

## 4. Verschillende omgevingen = verschillende configuraties
Een API heeft veel **configuratie**nodig: welke database/server (**connection string**), welke e-mailinstellingen, hoe logging. Welke waarden gelden hangt van de omgeving af: in **development** een nep-mailsysteem en een lokale database; in **production** bv. **SendGrid** voor mails en een gedeployde **SQL Server** (Azure of on-prem).

| Bestand | Rol |
|---|---|
| `appsettings.json` | **root**: waarden die voor alle omgevingen gelden (bv. connection string) |
| `appsettings.Development.json` | overschrijft/vult aan voor Development |
| `appsettings.Production.json` | nieuw bestand ("App Settings File"), voor Production |
**Configuratie wordt geërfd** → zet de connection string in de **root**; override ze indien nodig in een omgevingsspecifiek bestand (bv. een productiedatabase op Azure; in de les mag ze gelijk zijn). Staat de connection string enkel in Development en start je in Production, dan krijg je een **`NullReferenceException`** (`ConfigurationManager.this[string].get returned null`). Zie [[IConfiguration]] en [[Connection string]].

### Config-waarden lezen in de MailService
```json
// appsettings.Development.json
"MailSettings": { "MailToAddress": "developer@cityinfo.be" }
// appsettings.Production.json
"MailSettings": { "MailToAddress": "admin@cityinfo.be" }
```
```csharp
public class LocalMailService : IMailService
{
    private string _mailFrom = "noreply@cityinfo.be";
    private string _mailTo = string.Empty;

    public LocalMailService(IConfiguration config)
    {
        _mailTo = config["MailSettings:MailToAddress"];
    }
}
```
`IConfiguration` **injecteer je in de constructor** en je leest waarden via een **sleutel** (`"Sectie:Sleutel"`). **Oefening:** ook de Cloud-versie aanpassen. Test in dev en prod: dev → `…to developer@cityinfo.be, with LocalMailService`; prod → `…to admin@cityinfo.be, with CloudMailService`.

## 5. Oefening MotoGP: logging & configuratie
Zie [[MotoGP - Logging en configuratie]]. Samengevat:
1. **Geen TicketSeeder in production:** `appsettings.Production.json` maken, de connection string naar de **root** verplaatsen, Swagger in Production aanzetten en testen. De `SeedController` mag in production niet bruikbaar zijn: inject **`IWebHostEnvironment`** (`_env`) en blokkeer:
```csharp
if (!_env.IsDevelopment()) return Forbid();   // 403
```
   Wil je de controller helemaal weg uit production, omring ze met `#if DEBUG … #endif` (wordt in een Release build niet eens gecompileerd en verdwijnt uit Swagger).
2. **E-mail bij betaalde tickets:** in **development** een bericht naar de **console**, in **production** een mail via **Mailtrap** (simuleert mailverkeer zonder echte mails). Interface `IEmailService` in map `Strategies` met `Task SendEmailAsync(string to, string subject, string body);` (async!) en twee klassen `ConsoleEmailService` (dev) en `MailtrapEmailService` (prod; de uitwerking wordt in de resources gegeven). Config-sleutels in `appsettings.Development.json` en `appsettings.Production.json` (afzender `no-reply@motogp.com`; Mailtrap-**host, port, username, password** uit je inbox in de Production-file). De juiste service **registreren op basis van de omgeving**, `IEmailService` in de `TicketsController` injecteren en een **bevestigingsmail** versturen (mét racenaam) in `PartiallyUpdateTicket()`. Testen via de front end (de endpoints zijn beveiligd → eerst inloggen, tickets ophalen, betaling bevestigen).

## Tips en valkuilen
- Het gekozen **log level** bepaalt wat je ziet; controleer `Default` én de specifieke categorieën.
- Zet **geheimen** (wachtwoorden, licentiesleutels) niet in gedeelde bestanden zonder na te denken: gebruik per omgeving een apart bestand.
- `#if DEBUG` is **compile-time**, `IsDevelopment()` is **runtime** op basis van `ASPNETCORE_ENVIRONMENT`.
- Een **seed-endpoint** hoort **niet** in production (onbedoelde data-invoer): `Forbid()` of `#if DEBUG`.
- Config erft van de root: zet gemeenschappelijke waarden daar.

## Begrippen
[[Logging (ILogger)]] · [[Log levels]] · [[Serilog]] · [[Mailservice (strategie)]] · [[IConfiguration]] · [[Omgevingen (Development en Production)]] · [[Connection string]] · [[launchSettings.json]] · [[Strategy pattern]] · [[Service lifetimes]]

## Oefening
[[MotoGP - Logging en configuratie]]

---
Hoort bij: [[NET Development|.NET Development]]
