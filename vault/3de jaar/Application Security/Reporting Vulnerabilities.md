---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 16
groep: Na de aanval
---
# Reporting Vulnerabilities

> Een kwetsbaarheid **vinden** is maar de helft. Je moet de **ernst scoren**, oplossingen aanraden, en alles **helder rapporteren** — zowel voor **developers** als voor een **niet-technisch publiek**. Rapporteren is een **ethische en professionele plicht**, en is in dit vak (70 % examen) minstens zo belangrijk als de technieken.

Begin met de termen: [[Vulnerability, threat en exploit]].

## Waarom rapporteren?
- **Collaborative defense**: anderen kunnen hun systemen beschermen.
- **Preventie**: sneller herstellen = kleiner aanvalsvenster.
- **Compliance**: regels zoals GDPR vereisen **tijdige** melding en herstel.
- **Betere security posture**: trends herkennen en controles verbeteren.

## Ernst scoren
| Framework | Kort |
|---|---|
| [[CVSS]] | kwalitatieve **ernst**score 0–10 (geen risicomaat) |
| OWASP Risk Rating | **Risk = Likelihood × Impact**, met factoren voor beide |

Gekende kwetsbaarheden krijgen een **CVE**-nummer en staan met hun CVSS-score in de **NVD** (NIST), opzoekbaar via o.a. cvedetails.com.

## Anatomie van een rapport (twee doelgroepen)
| Deel | Voor wie | Inhoud |
|---|---|---|
| **Executive summary** | beslissers/management | overzicht van findings, risico's en aanbevelingen, **zonder** techniek: hoe veilig is de app globaal, wat is het belangrijkst, wat kost oplossen |
| **Scoping** | — | welke assets in scope + de **methodologie** (bv. [[OWASP WSTG]], [[OWASP Top 10]], het scoringsysteem) |
| **Findings** | technici/developers | **per** kwetsbaarheid: severity/risk rating, beschrijving, **proof-of-concept / reproductiestappen**, impact (op confidentiality, integrity, availability) en de **aanbeveling/mitigatie** |

Een **developer** wil de technische details en de fix; een **manager** wil het grote plaatje. Beide versies goed schrijven is de professionele vaardigheid die dit hoofdstuk traint. Concrete opbouw: [[Pentestrapport]].

## Automatische tools
**Dradis**, **Faraday** en **PwnDoc** importeren findings uit testtools en genereren een rapport.

## Begrippen
[[CVSS]] · [[Pentestrapport]] · [[Vulnerability, threat en exploit]]

---
Hoort bij: [[Application Security]]
