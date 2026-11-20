---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 8
groep: Toegang
---
# Authentication vulnerabilities

> Kwetsbaarheden in het proces dat **verifieert wie iemand is**. Lukt het een aanvaller dat proces te omzeilen of te brute-forcen, dan logt hij in **als iemand anders** — tot en met de admin, met volledige controle als gevolg.

Begin met het verschil: [[Authenticatie vs autorisatie]] (authenticatie = *ben je wie je zegt?*, autorisatie = *mag je dit?*). Daartussen zit **session management**: welke volgende requests komen van dezelfde ingelogde gebruiker.

## De drie authenticatiefactoren
| Factor | Wat | Voorbeeld |
|---|---|---|
| **Knowledge** | iets wat je **weet** | wachtwoord, antwoord op een beveiligingsvraag |
| **Possession** | iets wat je **hebt** | gsm, security token |
| **Inherence** | iets wat je **bent of doet** | biometrie |
Meer factoren = sterker, maar niet elke "twee stappen" is echt twee factoren: zie [[2FA en 2SV]].

## Twee grote oorzaken
1. **Zwakke bescherming tegen brute force.**
2. **Logische fouten / slechte code** waardoor het hele mechanisme omzeild kan worden = **broken authentication**.

### Zwakke brute-force-bescherming — de valkuilen
- **Geen rate limiting of CAPTCHA**: duizenden pogingen per seconde zonder vertraging of blokkering.
- **Fouten in de rate limiter** zelf: enkel losse requests of eenvoudige username-tellers bekijken; **meerdere credentials in één request** missen; of een IP-lockout die je omzeilt met een vervalste **`X-Forwarded-For`**-header.
- **Goed beschermde login, onbeschermde nevenpaden**: de loginpagina is gehard, maar de **"wachtwoord wijzigen"**-endpoint niet.
- **Account-DoS**: **accounts** blokkeren i.p.v. **IP's**, waardoor een aanvaller echte gebruikers kan **buitensluiten**.

### Broken authentication — de logische fouten
- **Client-side verificatie vertrouwen**: de **browser of URL-routing** laten beslissen of 2FA nodig is, of de server de **state tussen stappen** niet controleren (bv. stap 2 overslaan door meteen naar de "ingelogd"-pagina te surfen).
- **State-desynchronisatie**: fouten in meerstapsverificatie, zoals een **OTP hergebruiken** binnen het nog geldige venster.

## Kwetsbaarheden per mechanisme
| Mechanisme | Typische fouten |
|---|---|
| **Wachtwoordlogin** | [[Username enumeration]]: verschillende **foutmeldingen** ("user not found" vs "incorrect password"), subtiele verschillen in **statuscode/headers/lengte**, **timing** (een geldige username wordt gehasht → meetbaar trager), of **account-lockout** als orakel |
| **MFA-sterkte** | geen rate limiting op de **codecheck-endpoint** (6 cijfers = 1 miljoen opties, dus brute-forcebaar), **voorspelbare** codes (zwakke PRNG), of codes die **lekken** in de response |
| **Stay logged in** | voorspelbare "remember me"-cookies (bv. een zwakke, voorspelbare hash of base64-string), of zwak gehashte credentials in client-side storage → **offline kraken** |
| **Change/Reset password** | logische fouten in tokenafhandeling, **Host header poisoning** (de resetlink wordt gebouwd met de inkomende `Host`-header → de link wijst naar het **aanvallersdomein**), **voorspelbare** tokens (sequentiële ID's) of tokens **zonder vervaldatum**, en wachtwoord wijzigen **zonder het oude te vragen** |

## Impact
Volledige controle over de applicatie, toegang tot interne infrastructuur en gevoelige data. Voorbeeld uit de les: de **Snowflake-breach** (2024), waarbij aanvallers met **gestolen credentials** binnenraakten op klantaccounts die **geen MFA** hadden.

## Verdediging
Rate limiting **per IP én per account**, **generieke** foutmeldingen en **gelijke responstijden** (tegen enumeration), MFA met **server-side state**, **sterke willekeurige** tokens met **korte** geldigheid, reset-URL's met een **vaste** host (niet de `Host`-header vertrouwen), en het **oude wachtwoord vragen** bij een wijziging.

## Oefenen
[[PortSwigger labs per onderwerp]] · https://portswigger.net/web-security/authentication

## Begrippen
[[Authenticatie vs autorisatie]] · [[2FA en 2SV]] · [[Username enumeration]]

---
Hoort bij: [[Application Security]]
