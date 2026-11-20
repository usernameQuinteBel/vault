---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: [3, 4, 5, 6, 8, 10, 11, 12, 13]
groep: Tools
aliases: [Burp, Burp Repeater, Burp Scanner, Burp Intruder]
---
# Burp Suite

> Hét industriestandaard-tool van **PortSwigger** om het verkeer tussen je browser en een webapp te **onderscheppen, bekijken en aanpassen**. Draait als een **proxy** op `127.0.0.1:8080`: je browser stuurt alles via Burp, zodat jij elk request kan tegenhouden en wijzigen vóór het de server bereikt.

## Waarom zo centraal in dit vak?
Bijna elke kwetsbaarheid test je door **één parameter, header of bestandsnaam te wijzigen** en de respons te vergelijken. Dat is precies wat Burp mogelijk maakt. In de hoofdstukken komt het telkens terug: een parameter aanpassen (SQLi, access control), een header zetten (`Content-Type`, `Host`, `X-Forwarded-For`), een bestandsnaam of pad veranderen (upload, traversal).

## Belangrijkste onderdelen
| Tool | Waarvoor |
|---|---|
| **Proxy** (Intercept + HTTP history) | elk request tegenhouden en aanpassen; alle verkeer meelezen |
| **Repeater** | één request **herhaaldelijk** aanpassen en opnieuw versturen, **één variabele per keer** → ideaal om payloads te testen en responsen te vergelijken |
| **Intruder** | geautomatiseerd **veel** payloads proberen (brute force, fuzzing, username enumeration) — traag in Community Edition |
| **Decoder** | URL/Base64/HTML encoderen en decoderen (handig bij filter-bypasses) |
| **Comparer** | twee responsen naast elkaar vergelijken (handig bij blind SQLi en [[Username enumeration]]) |
| **Scanner** | automatisch kwetsbaarheden zoeken — **enkel in Pro** |
| **Collaborator** | out-of-band interacties (DNS/HTTP) opvangen — **Pro** (zie [[Out-of-band (OAST)]]) |

Community Edition: enkel tijdelijke projecten, geen scanner/Collaborator.

## Opzet
Firefox + [[FoxyProxy]] om met één klik de proxy aan/uit te zetten, plus het Burp-CA-certificaat importeren via `http://burp/cert`. Zie [[Setting Up Test Environment]].

---
Hoort bij: [[Setting Up Test Environment]]
