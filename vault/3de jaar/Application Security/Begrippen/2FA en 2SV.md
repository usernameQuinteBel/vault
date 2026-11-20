---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 8
groep: Toegang
aliases: [2FA, 2SV, MFA, Multi-factor authentication]
---
# 2FA en 2SV

> **Two-step verification ≠ two-factor authentication.** MFA (multi-factor) gaat over **verschillende factoren**, niet louter over het aantal **stappen**.

| | Two-step verification (2SV) | Two-factor authentication (2FA) |
|---|---|---|
| Wat | twee **stappen** | twee **verschillende factoren** |
| Voorbeeld | wachtwoord + een code die naar je **e-mail** gaat (die je óók met een wachtwoord opent) — **beide** "iets wat je weet" | wachtwoord (weet) + code van een authenticator-app op je gsm (hebt) |

De drie factoren: **knowledge** (weet), **possession** (hebt), **inherence** (bent). Echte 2FA combineert er **twee verschillende**; twee keer "iets wat je weet" is dus wél 2-staps maar géén 2-factor.

Ook echte 2FA kan zwak zijn: geen rate limiting op de codecheck, codes die **lekken** in de response, of een server die niet afdwingt dat stap 2 echt gebeurd is (zie [[Authentication vulnerabilities]]).

## Sterkte van tweede factoren (zwak → sterk)
| Methode | Zwakte |
|---|---|
| sms-code | SIM-swapping, onderschepping |
| e-mailcode | eigenlijk 2SV (zelfde factor) |
| TOTP-app (Authenticator) | phishing in realtime blijft mogelijk |
| push-melding | "MFA fatigue" (blijven sturen tot iemand toestaat) |
| **hardware key / passkey** (FIDO2) | phishing-bestendig: gebonden aan het echte domein |

## Verdediging als developer
- **Rate limiting** en lockout op de codecontrole.
- De code **server-side** verifiëren en de sessie pas na stap 2 als "volledig ingelogd" markeren.
- Codes nooit terugsturen in een response of URL.
- Backup-codes eenmalig en gehasht opslaan.

---
Hoort bij: [[Authentication vulnerabilities]]
