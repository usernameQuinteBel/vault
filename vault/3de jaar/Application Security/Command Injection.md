---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 5
groep: Injectie
---
# Command Injection

> Ook **shell injection** of **OS command injection**. Hier wordt niet de database maar het **besturingssysteem** het slachtoffer: door zwakke inputvalidatie kan een aanvaller **OS-commando's op de server laten uitvoeren**, meestal doordat de app gebruikersinput in een **shell-commando** plakt.

## De werking
Sommige functies roepen een extern programma of script aan en **bouwen de commandostring op met input**. Zoals bij [[SQL Injection]] is de fout dat input die als **data** bedoeld is, door de **shell** als **code** wordt gelezen. Shells kennen **metatekens** die commando's scheiden of combineren; staat zo'n teken in de input, dan voert de shell **een extra commando** uit.

| Metateken | Werking (shell) |
|---|---|
| `&` of `&&` | voer daarna óók dit commando uit |
| `\|` of `\|\|` | pipe / alternatief commando |
| `;` | commando-scheiding (Unix) |
| `` ` `` of `$( )` | command substitution (Unix) |
| `>` | output naar een bestand |

## Impact
Kan leiden tot **volledige overname** van de applicatieserver: toegang tot gevoelige data (wachtwoorden, kredietkaarten, persoonsgegevens), reputatieschade, boetes, langdurige compromittering. Command injection is vaak de **opstap** naar [[Gaining Remote Access]] (een [[Reverse shell]] of [[Bind shell]]).

## Detectie — de redenering
**Automatisch**: Burp Scanner, of **Commix** (https://github.com/commixproject/commix).

**Handmatig**: test **elk entry point** door **shell-metatekens** in te voegen (`&`, `|`, `;`, `>`) en te kijken naar **fouten of extra output** die verraden dat je commando (deels) uitgevoerd werd.

### Blind OS command injection
Vaak komt de **output niet terug** in de HTTP-respons, terwijl er toch schade kan gebeuren (mails versturen, accounts aanmaken). Dan bewijs je het indirect:
- **Tijdsvertraging**: een commando dat de server laat wachten (bv. een `ping` met een vast aantal pakketten) → de respons komt meetbaar **later**.
- **Output naar een bestand** op de webserver schrijven en dat bestand daarna via de browser **opvragen**.
- **Out-of-band**: een commando dat een **DNS-lookup** doet naar een domein dat jij controleert (zie [[Out-of-band (OAST)]]).

## Verdediging
- **Liefst nooit** een shell aanroepen met gebruikersinput; gebruik veilige taal-API's die het programma **rechtstreeks** aanroepen met de argumenten **apart** (niet als één samengestelde commandostring).
- Kan dat niet, dan **strikte allow-list** (bv. enkel cijfers), **geen** shell-metatekens toelaten, en argumenten gescheiden doorgeven.
- **Least privilege** voor het proces dat het commando uitvoert, zodat een geslaagde injectie beperkt blijft.

## Oefenen
[[PortSwigger labs per onderwerp]] · https://portswigger.net/web-security/os-command-injection

---
Hoort bij: [[Application Security]]
