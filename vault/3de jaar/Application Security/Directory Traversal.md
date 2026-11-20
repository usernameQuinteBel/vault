---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 6
groep: Bestanden
---
# Directory Traversal

> Ook **path traversal**. De app bouwt een **bestandspad** op met gebruikersinput, en door daar **relatieve pad-reeksen** (`../`) in te plaatsen, leest een aanvaller **bestanden buiten de bedoelde map**. Het misbruikt zwakke inputvalidatie **en** te ruime bestandsrechten.

## De werking
Een app die bv. afbeeldingen toont, zet een bestandsnaam uit de request achter een vaste map:
```
/loadImage?filename=218.png   → leest  /var/www/images/218.png
/loadImage?filename=../../../etc/passwd → leest /etc/passwd
```
Elke `../` gaat **één map omhoog**. Genoeg `../`-reeksen brengen je vanaf de afbeeldingenmap tot aan de **wortel** van het bestandssysteem, en vandaar naar gevoelige bestanden. Op Windows werken zowel `../` als `..\`.

## Impact
Lekken van **broncode**, **configuratiebestanden** (vaak met wachtwoorden/keys), **systeembestanden**, **gebruikersdata** en **private sleutels** van certificaten. Die data voedt vervolgens verdere aanvallen.

## Detectie
**Automatisch**: Burp Scanner, of **dotdotpwn** (https://github.com/wireghoul/dotdotpwn).
**Handmatig**: test entry points met relatieve paden (`../`, `../../`, `./../../`) en kijk of er systeembestanden of fouten terugkomen.

## Filters omzeilen — de logica (waarom "gewoon `../` wegfilteren" faalt)
| Filter | Waarom hij faalt / bypass |
|---|---|
| `../` wordt **één keer** verwijderd | **geneste** reeksen: `....//` of `..././` → **na** het filteren blijft er `../` over |
| de server **sanitizeert URL-paden** | **URL-encoding**: `%2e%2e%2f` = `../`; of **dubbel** ge-encodeerd: `%252e%252e%252f` → wordt eerst `%2e%2e%2f`, dan `../` |
| het pad moet met de **basismap** starten | begin je payload met die map: `/var/www/images/../../../etc/passwd` |
| het pad moet op `.png` **eindigen** | **null byte**: `../../../etc/passwd%00.png` — oudere systemen stoppen bij de `%00` en negeren de `.png` |
| een **absoluut** pad is toegelaten | gewoon `/etc/passwd` |

De les: validatie die één oppervlakkige vorm wegfiltert, mist de vele **gelijkwaardige** schrijfwijzen.

## Verdediging
- **Liefst geen** gebruikersinput doorgeven aan filesystem-API's.
- Kan dat niet: valideer tegen een **allow-list** (of enkel alfanumeriek), **canonicaliseer** het pad (herleid het tot zijn echte vorm) en **controleer** dat het resultaat nog steeds **binnen** de basismap valt.
- **Least privilege** voor het proces dat bestanden leest.

## Oefenen
[[PortSwigger labs per onderwerp]] · https://portswigger.net/web-security/file-path-traversal

---
Hoort bij: [[Application Security]]
