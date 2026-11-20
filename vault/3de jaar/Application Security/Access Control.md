---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 9
groep: Toegang
---
# Access Control

> **Wie mag welke acties uitvoeren of welke resources bekijken?** Access control komt **ná** [[Authenticatie vs autorisatie|authenticatie]] en session management: de app weet wie je bent, en moet nu bij **elke** actie beslissen of je die **mag**. Is dat kapot (**broken access control**), dan doet een aanvaller dingen die niet voor hem bedoeld zijn. Het is **nummer 1** in de [[OWASP Top 10]].

## Drie soorten access control
| Soort | Beperkt… | Voorbeeld | Bij falen |
|---|---|---|---|
| **Verticaal** | **functionaliteit** per type gebruiker | enkel admins mogen accounts verwijderen; HR beheert accounts, finance beheert financiële data | verticale [[Privilege escalation]] |
| **Horizontaal** | **resources** per gebruiker | elke klant ziet enkel zijn **eigen** transacties en hypotheken | horizontale escalatie, vaak [[IDOR]] |
| **Contextafhankelijk** | acties volgens de **state** van de app | na de betaling mag je het winkelmandje **niet meer** aanpassen | stappen in de verkeerde volgorde (bv. mandje wijzigen tussen "betaalgegevens" en "betaling geslaagd") |

## Typische fouten bij verticale controle
- **Onbeschermde functionaliteit**: `.../admin` is bereikbaar voor iedereen die de URL **kent** (of vindt in `robots.txt` of in meegestuurde JavaScript). De beveiliging bestaat dan enkel uit "niemand kent de URL" — dat is **geen** beveiliging.
- **Rol op een door de gebruiker beheerde plek**: de app leest de rol uit een **hidden field**, een **cookie** of een **query-parameter** (`.../home.jsp?admin=true`) die de gebruiker zelf kan aanpassen.
- **Platform-misconfiguratie**: een frontend-regel blokkeert `POST /admin/deleteUser`, maar headers zoals `X-Original-URL` of een **andere HTTP-methode** overrulen die regel.
- **URL-matching-verschillen**: `/admin/deleteUser` is beschermd, maar `/ADMIN/DELETEUSER` (of met trailing slash, of `.json` eraan) niet, omdat de toegangsregel exact-string-matcht.

## Horizontaal: IDOR
`.../myaccount?id=123` → verander naar `id=456` en je ziet **andermans** account. Dit is het klassieke voorbeeld van een **Insecure Direct Object Reference**: zie [[IDOR]]. Horizontaal kan **verticaal** worden als je zo bij een **admin**-account raakt.

## Verdediging
- **Vertrouw nooit op verduistering alleen** (obfuscation, "niemand kent die URL").
- **Deny by default**: tenzij een resource bewust publiek moet zijn, standaard **weigeren**.
- Waar mogelijk **één applicatiebreed mechanisme** om access control af te dwingen (niet per endpoint opnieuw bedenken).
- Developers moeten **in de code per resource expliciet declareren** wie toegang heeft, met weigeren als standaard.
- Access control **grondig auditen en testen** (vaak met twee accounts: probeer met account A aan de resources van account B).

## Oefenen
[[PortSwigger labs per onderwerp]] · https://portswigger.net/web-security/access-control

## Begrippen
[[Privilege escalation]] · [[IDOR]]

---
Hoort bij: [[Application Security]]
