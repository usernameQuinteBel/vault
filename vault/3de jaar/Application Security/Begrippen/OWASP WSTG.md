---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 2
groep: Methodologie
aliases: [WSTG, Web Security Testing Guide]
---
# OWASP WSTG

> De **Web Security Testing Guide**: een gratis framework van OWASP dat beschrijft **hoe** je een webapplicatie test. Dé referentie voor pentesters; de meeste bedrijven baseren hun eigen test-roadmap erop. Waar de [[OWASP Top 10]] zegt *wat* de grote risico's zijn, zegt de WSTG *hoe* je er concreet op test.

De WSTG verdeelt het werk in **passief** (informatie verzamelen) en **actief** (gericht testen per categorie).

## Passief testen — informatie verzamelen
Doel: de **logica** van de app begrijpen vóór je aanvalt (fase 2 van de [[Pentest]]).
- De app gebruiken als een gewone eindgebruiker.
- Alle HTTP-requests en -responses bekijken; **entry points** en **injection points** in kaart brengen.
- `robots.txt` analyseren op verborgen paden.
- Type en versie van webserver en database bepalen.
- De Network-tab in DevTools: welke bestanden, frameworks en packages worden geladen?

## Actief testen — de categorieën
| Categorie | Wat test je? | Voorbeelden |
|---|---|---|
| Configuration & Deployment Management | de serverconfiguratie (een keten is zo sterk als de zwakste schakel) | overbodige docs/debug-extensies, HTML-commentaar met info, gevoelige logs, een andere HTTP-methode om access control te omzeilen (soms 200 OK!), of de **HSTS**-header aanwezig is |
| Identity Management | registratie, wachtwoord-reset, rollen | tussen rollen wisselen, kan iedereen registreren, **voorspelbare usernames** (bv. 3 letters voornaam + 3 letters achternaam), foutmeldingen die verklappen of een username bestaat |
| Authentication | de login (verificatie van de digitale identiteit) | default credentials, "remember me", zwak wachtwoordbeleid → [[Authentication vulnerabilities]] |
| Authorization | correcte toegang ná login | [[Privilege escalation]], het autorisatieschema omzeilen → [[Access Control]] |
| Session Management | hoe de state bijgehouden wordt (HTTP is stateless) | cookie-attributen, blootgestelde session-variabelen |
| Input Validation | wordt input correct gevalideerd? (oorzaak van bijna alle grote kwetsbaarheden) | [[SQL Injection]], [[Cross-Site Scripting (XSS)]], file system attacks, buffer overflows |
| Error Handling | wat verraden fouten? | foutcodes, stack traces → [[Information Disclosure]] |
| Weak Cryptography | is encryptie sterk genoeg? | wachtwoordopslag, HTTPS |
| Business Logic | logische fouten in de workflow | stap 1 → stap 3 overslaan: faalt het "open", weigert het, of geeft het een 500-fout? Niet te vinden met een scanner, vraagt creativiteit, vaak het schadelijkst |
| Client-side | code die in de browser draait | DOM-based XSS, HTML injection, browser storage |
| API Testing | de API's achter een SPA | ze praten met de database en draaien op jouw infrastructuur |

Bron: https://owasp.org/projects/web-security-testing-guide

---
Hoort bij: [[Phases of SDLC and Testing Methodology]]
