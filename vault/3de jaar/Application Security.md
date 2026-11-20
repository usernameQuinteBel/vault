---
type: vak
vak: Application Security
groep: Vak
---
# Application Security

Vak uit het **3de jaar** (voor APP-studenten; CCS-studenten volgen het in hun 2de jaar). De rode draad: leer een webapplicatie bekijken **zoals een aanvaller dat doet** — dezelfde technieken, dezelfde tools — maar in een **veilige labo-omgeving**, zodat je kwetsbaarheden vindt **voordat** een echte aanvaller dat doet, en de developers kan helpen ze op te lossen.

> Met AI-tools kan iedereen sneller een app bouwen, maar daardoor wordt security net belangrijker: kwetsbare apps worden misbruikt om data te stelen, systemen plat te leggen of volledig over te nemen. Een lek herstellen **ná** een aanval is duur en traag; het **vooraf** vinden in een audit is veel goedkoper.

## De drie kernvragen van het vak
1. **Welke kwetsbaarheden** kan een applicatie hebben? → de klassen uit de [[OWASP Top 10]], hoofdstuk per hoofdstuk.
2. **Hoe test je** een applicatie daarop? → een methodologie ([[OWASP WSTG]]) in een veilige omgeving met [[Burp Suite]] op [[Kali Linux]].
3. **Hoe rapporteer je** de resultaten, zowel aan **developers** (technisch, met reproductie en fix) als aan een **niet-technisch publiek** (risico, prioriteit, kost)? → [[Reporting Vulnerabilities]].

Docenten: Alexander Hensels (security consulting, pentesting van netwerken, webapps en IoT, audits, threat modelling) en Michiel Verboven (mobile apps, pentesting frameworks, microservices, enterprise software).

## Evaluatie (1ste en 2de zit)
- **30 % permanente evaluatie**: een pentesting-project.
- **70 % examen**: een Canvas-quiz, **theoretisch**, over de cursusdocumenten. → begrijp **waarom** elke kwetsbaarheid werkt, niet enkel de payload.

## Hoofdstukken
### Methode en omgeving
1. [[Introductie Application Security]] — waarom, de denkhouding ("verify before you report"), en de vier fasen.
2. [[Phases of SDLC and Testing Methodology]] — security in elke fase van de ontwikkeling + de [[OWASP WSTG|WSTG]].
3. [[Setting Up Test Environment]] — je eigen "cyber shooting range".

### Kwetsbaarheden (telkens: wat, werking, opbouw, impact, detectie, verdediging)
4. [[SQL Injection]] · 5. [[Command Injection]] · 6. [[Directory Traversal]] · 7. [[Information Disclosure]] · 8. [[Authentication vulnerabilities]] · 9. [[Access Control]] · 10. [[Cross-Site Scripting (XSS)]] · 11. [[File Upload Vulnerabilities]] · 12. [[Cross-Site Request Forgery (CSRF)]] · 13. [[Server-Side Request Forgery (SSRF)]] · 14. [[Clickjacking]]

### Na de exploit en rapportering
15. [[Gaining Remote Access]] · 16. [[Reporting Vulnerabilities]]

## Oefenen
[[PortSwigger labs per onderwerp]] · [[Labs SQL Injection]] · [[Oefening reverse shell op Ubuntu target]]

## Groot overzicht: oorzaak → verdediging
Bijna elke kwetsbaarheid komt neer op **één fout**: **data van de gebruiker wordt vertrouwd** en als iets anders behandeld dan platte data (als SQL, als een shell-commando, als een bestandspad, als HTML/JavaScript, als een URL die de server ophaalt). De verdediging komt telkens neer op: **scheid data van code**, **valideer tegen een allow-list**, en **werk met least privilege**.

| Kwetsbaarheid | Vertrouwde input wordt… | Belangrijkste verdediging |
|---|---|---|
| [[SQL Injection]] | deel van de **SQL-query** | [[Parameterized query]], allow-list, least privilege |
| [[Command Injection]] | deel van een **shell-commando** | geen shell met input; strikte validatie |
| [[Directory Traversal]] | deel van een **bestandspad** | pad canonicaliseren + controleren tegen basismap |
| [[Information Disclosure]] | — (de app **lekt** zelf info) | generieke fouten, geen debug/backups/secrets online |
| [[Authentication vulnerabilities]] | — (zwakke **identiteitscontrole**) | rate limiting, generieke meldingen, sterke tokens, server-side checks |
| [[Access Control]] | — (ontbrekende **autorisatiecheck**) | deny by default, centraal, server-side |
| [[Cross-Site Scripting (XSS)]] | **JavaScript** in andermans pagina | output encoding, input validatie, CSP |
| [[File Upload Vulnerabilities]] | een **uitvoerbaar bestand** | extensie-allow-list, inhoud checken, buiten webroot |
| [[Cross-Site Request Forgery (CSRF)]] | een **ongewild verzoek** van het slachtoffer | [[Anti-CSRF token]], [[SameSite cookie]] |
| [[Server-Side Request Forgery (SSRF)]] | een **URL die de server ophaalt** | allow-list bestemmingen, interne netwerken afschermen |
| [[Clickjacking]] | een **klik** op een onzichtbare iframe | [[X-Frame-Options en CSP frame-ancestors]] |

---
Hoort bij: [[3de jaar]]
