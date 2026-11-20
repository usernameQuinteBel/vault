---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 13
groep: Server-side
---
# Server-Side Request Forgery (SSRF)

> Een aanvaller laat de **server-side applicatie zelf een verzoek doen naar een onbedoelde locatie**. Omdat **de server** het verzoek stuurt (niet de externe gebruiker), vertrekt het **vanuit het interne netwerk** van de server — en bereikt het endpoints die van buitenaf **niet** toegankelijk zijn. Het staat als **A10** in de [[OWASP Top 10]].

## De werking
Veel apps halen op basis van een door de gebruiker opgegeven **URL** iets op: een afbeelding voor een thumbnail, of een **stock-checker** die een backend-API aanspreekt. De app **vertrouwt** verzoeken die van zichzelf komen (een *trusted location*). De aanvaller vervangt de URL door een **interne** bestemming, en de server haalt die braaf op en geeft het resultaat terug — bijvoorbeeld een adminpaneel dat enkel lokaal bereikbaar is.

## Veelgebruikte doelen
| Doel | Waarom interessant |
|---|---|
| `http://127.0.0.1/admin` of `http://localhost/admin` | SSRF tegen de server **zelf** (trusted) |
| `http://192.168.0.x/admin` | andere **interne** systemen (backend) |
| `file:///etc/passwd` | lokale **bestanden** via een ander protocol |
| `http://169.254.169.254` | het **cloud-metadata**-endpoint (AWS/Azure/GCP) → credentials en configuratie |

## Verdediging omzeilen — de logica
**Blacklist** (bv. `127.0.0.1`, `localhost`, `/admin` geblokkeerd) faalt omdat er veel **gelijkwaardige** schrijfwijzen zijn:
- alternatieve IP-notaties: `2130706433` (decimaal), `017700000001` (octaal), `127.1` (verkort);
- een **eigen domein** registreren dat naar `127.0.0.1` resolvet;
- de string **obfusceren** met URL-encoding of `cAsE vArIaTiOn`.

**Whitelist** (enkel een toegelaten host) faalt via **verschillen tussen de filter en de URL-parser**:
- credentials vóór de host met `@`: `https://expected-host:pass@evil-host` (de parser gaat naar `evil-host`, de filter ziet `expected-host`);
- een fragment met `#`: `https://evil-host#expected-host`;
- de DNS-hiërarchie misbruiken: `https://expected-host.evil-host`.

**Open redirect** op een toegelaten domein: deel 1 van de URL staat op een toegelaten host, die vervolgens **doorverwijst** naar een interne URL naar keuze van de aanvaller — zo passeert het de filter en landt de server toch intern.

## Blind SSRF
Komt de respons **niet** terug in de frontend, dan detecteer je het **out-of-band**: je laat de server een **DNS/HTTP-request** doen naar een domein dat jij controleert (zie [[Out-of-band (OAST)]]).

## Verdediging
Een **allow-list** van **exacte** bestemmingen, **geen** ruwe URL's van gebruikers aanvaarden, interne diensten **authenticatie** laten vragen, het **uitgaand** verkeer van de server beperken, en **redirects niet volgen**.

## Oefenen
[[PortSwigger labs per onderwerp]] · https://portswigger.net/web-security/ssrf

---
Hoort bij: [[Application Security]]
