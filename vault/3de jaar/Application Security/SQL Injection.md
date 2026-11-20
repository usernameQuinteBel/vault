---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 4
groep: Injectie
---
# SQL Injection

> Een van de **oudste** webkwetsbaarheden, en nog altijd in echte apps te vinden omdat de onderliggende fout zo makkelijk te maken is: **een database-query als tekst opbouwen met gebruikersinput erin geplakt.** De aanvaller **bemoeit zich** zo met de queries die de app naar haar database stuurt.

## Wat kan een aanvaller ermee?
- **Data bekijken** die hij normaal niet mag zien (andere gebruikers, wachtwoorden).
- Data **wijzigen of verwijderen**.
- De onderliggende **server/infrastructuur compromitteren**.
- Een **DoS**-aanval uitvoeren.

## Impact
Ongeautoriseerde toegang tot gevoelige data (wachtwoorden, kredietkaartgegevens, persoonsgegevens), reputatieschade, boetes (GDPR) en langdurige compromittering.

## De werking: waarom het ontstaat
Veel apps bouwen hun SQL op door een **vaste querytekst** te **plakken** aan een waarde uit de request (URL-parameter, formulierveld, cookie, header). Denk aan een shop die producten toont uit een categorie die uit de URL komt:

```
query = "SELECT * FROM champions WHERE class = '" + input + "' AND released = 1"
```

Bij normale input (`class=Gifts`) ontstaat een perfect normale query. De developer **zag de aanhalingstekens** rond de categorie en ging ervan uit dat de input een categorie **blijft**. Maar een aanvaller ziet iets anders: zijn input **landt binnen** die aanhalingstekens, dus een **quote in de input** kan **uit de string breken** en de **structuur** van de query veranderen.

> Dit is de hele kern: **de developer behandelt de input als data, maar de database ontvangt ze als deel van de querystructuur (code).**

### De twee klassieke bouwstenen
| Bouwsteen | Effect |
|---|---|
| **Een quote** `'` | breekt uit de tekststring |
| **Een commentaarteken** (`--`, `#`, `/* */`) | laat **de rest van de originele query** negeren |

Hiermee zijn twee canonieke lesvoorbeelden te begrijpen (louter ter illustratie van het mechanisme):
- `class = '' OR 1=1 --` → `OR 1=1` is **altijd waar**, dus **alle** rijen komen terug (ook niet-vrijgegeven producten). De check `AND released = 1` staat na de `--` en wordt genegeerd.
- Bij een login `username = 'administrator'--` → de **wachtwoordcheck** staat na de `--` en wordt weggecommentarieerd: de app vindt de admin-rij en logt de aanvaller in **zonder wachtwoord**.

Geen van beide vereist kennis van het databaseschema. **Eén slecht behandelde input is daarom een ernstige finding, geen klein detail.**

## De opbouw per soort
| Soort | Idee | Wanneer |
|---|---|---|
| **In-band (klassiek)** | het resultaat komt **rechtstreeks** terug in de pagina | verborgen rijen tonen (`OR 1=1`), login bypass |
| **UNION-based** | een **tweede query** aan de eerste plakken om een **andere tabel** te lezen | zie [[UNION-aanval]] |
| **Blind — boolean** | geen zichtbaar resultaat; je leest **waar/onwaar** af aan het **gedrag** | zie [[Blind SQL injection]] |
| **Blind — time-based** | geen enkel verschil behalve **tijd**: database laten **wachten** als iets waar is | zie [[Blind SQL injection]] |
| **Out-of-band** | data via een **ander kanaal** (DNS/HTTP) als de app helemaal "stil" is | zie [[Out-of-band (OAST)]] |

## Detectie — de redenering
**Automatisch**: tools als **sqlmap**, **Invicti**, **Burp Scanner**. Behandel hun output als *interessante input*, nooit als eindoordeel.

**Handmatig** — test **elk entry point** (URL-parameters, formulieren, cookies, headers) met drie probes die samen bewijs leveren:
1. **De enkele quote** `'`. Krijg je een databasefout, een lege pagina of een andere statuscode? Dan bereikte je input de query **ongefilterd**. Noteer de reactie.
2. **Het boolean-paar** (iets altijd-waar vs. iets altijd-onwaar). Geeft de "ware" variant extra inhoud en de "onware" de normale pagina, dan heb je een **systematisch verschil** — bewijs dat je input de query beïnvloedt, **ook zonder foutmelding**.
3. **De tijdsvertraging** (een slaapfunctie). Duurt de respons enkele seconden langer, dan draaide je input **als SQL**.

Je gebruikt [[Burp Suite|Burp Repeater]] en varieert **één input per keer** om responsen te vergelijken. De exacte syntax verschilt per database (MySQL, PostgreSQL, Oracle, SQL Server): zie [[SQL cheat sheet (per database)]]. Oracle vereist bijvoorbeeld altijd een `FROM` (vandaar `FROM dual`).

> ⚠️ **Een fout is nog geen SQL injection.** Een `'` die een uitgebreide databasefout toont bewijst **[[Information Disclosure]]**, niet per se injectie. Misschien wordt elke poging om de structuur te breken wél tegengehouden en is enkel de foutmelding het probleem. Een **bevestigde** SQLi vereist een payload die het **gedrag** van de query aantoonbaar verandert (het boolean-paar of de tijdsvertraging). **Rapporteer wat je bewees, niet wat je vermoedt** — dat is de *verify*-gewoonte uit [[Introductie Application Security]].

Automatische tools zoals **sqlmap** zijn uitstekend om een zwakte die je al begrijpt te **bevestigen en te escaleren**, en slecht in zichzelf uitleggen. Jij blijft degene die de finding moet kunnen **tonen en verklaren**.

## Verdediging — grondig
- **[[Parameterized query]]** (prepared statements): de belangrijkste en volledige oplossing voor data in een query. De query blijft een **constante**; de input gaat **apart** mee als data, zodat een quote de string niet meer kan afsluiten.
- **Allow-list** voor alles wat géén parameter kan zijn: een **tabelnaam, kolomnaam of `ORDER BY`-expressie** is *structuur*, geen data, dus je kiest uit een **vaste set** toegelaten waarden en weigert de rest.
- **Least privilege**: de database-account van de app mag enkel lezen/schrijven wat ze écht nodig heeft, zodat een geslaagde injectie minder schade doet. Een geparametriseerde query beschermt de **query**, niet het **systeem** — daarom combineer je ze. Preventie is **gelaagd**.

## Oefenen
[[Labs SQL Injection]] · https://portswigger.net/web-security/sql-injection · ook TryHackMe-rooms `sqlinjectionlm` en `advancedsqlinjection`.

## Begrippen
[[UNION-aanval]] · [[Blind SQL injection]] · [[Out-of-band (OAST)]] · [[Parameterized query]] · [[SQL cheat sheet (per database)]]

## Bron
https://it-factory-thomas-more.gitlab.io/application-security/course/sql-injections/

---
Hoort bij: [[Application Security]]
