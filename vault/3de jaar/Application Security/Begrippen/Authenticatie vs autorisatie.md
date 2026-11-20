---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: [8, 9]
groep: Toegang
aliases: [Authentication vs authorization, AuthN, AuthZ, Session management]
---
# Authenticatie vs autorisatie

> Twee stappen die vaak verward worden maar volgen op elkaar.

| | Authenticatie (authN) | Autorisatie (authZ) |
|---|---|---|
| Vraag | **Ben je wie je zegt dat je bent?** | **Mag je dit doen?** |
| Voorbeeld | is wie inlogt als `micclo` écht de persoon die dit account maakte? | welke rechten heeft `micclo` nu hij ingelogd is? |
| Wanneer | **eerst** (bij de login) | **daarna**, bij elke actie/resource |
| Faalt → | [[Authentication vulnerabilities]] | [[Access Control]], [[Privilege escalation]] |

Daartussen zit **session management**: nadat je geauthenticeerd bent, moet de app bij elke volgende HTTP-request weten dat die van **dezelfde** gebruiker komt — meestal via een **sessiecookie**. Zwaktes daar (voorspelbare of blootgestelde session-tokens) zitten tussen beide in.

Ezelsbruggetje: **authN** = wie (je **n**aam), **authZ** = wat (je **z**one/rechten).

## Verdediging per stap
| Stap | Goede praktijk |
|---|---|
| authenticatie | sterke wachtwoordregels, hashing (bcrypt/Argon2), MFA, rate limiting, generieke foutmeldingen (geen [[Username enumeration]]) |
| sessiebeheer | lange, willekeurige session-ID's; cookies met `Secure`, `HttpOnly`, `SameSite`; nieuwe sessie-ID na login; timeout |
| autorisatie | **server-side** controle bij **elke** request; deny by default; rechten op basis van de sessie, niet van parameters zoals `?role=admin` |

## Testen
Doe dezelfde request als twee verschillende gebruikers (bv. met twee browsers of Burp) en kijk of gebruiker B aan de data van A kan — de basis van access-control-testen.

---
Hoort bij: [[Authentication vulnerabilities]] · [[Access Control]]
