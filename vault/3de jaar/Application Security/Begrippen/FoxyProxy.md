---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 3
groep: Tools
---
# FoxyProxy

> Een Firefox-add-on (**FoxyProxy Standard**) om met **één klik** te wisselen tussen gewoon surfen en surfen via de [[Burp Suite]]-proxy. Zonder zo'n schakelaar zou je telkens handmatig de proxy-instellingen van je browser moeten aanpassen.

## Instellen
1. Installeer via https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/ en pin het aan de toolbar.
2. Icoon › Options › Proxies › Add:
   - Title: `Burp Suite`
   - Hostname: `127.0.0.1`
   - Port: `8080`
   - (optioneel een kleur ter herkenning)
3. Save, en activeer via het icoon wanneer je wil onderscheppen.

Daarna het Burp-CA-certificaat importeren (`http://burp/cert`), anders krijg je bij HTTPS-sites certificaatfouten (Burp zit immers "in het midden" en herondertekent het verkeer). Zie [[Setting Up Test Environment]].

## Waarom niet de systeemproxy?
Als je de proxy van je hele systeem op Burp zet, loopt **al** je verkeer (updates, andere apps) door Burp — rommelig en traag. Met FoxyProxy stuur je enkel het **browserverkeer** door, en alleen wanneer jij dat wil.

## Patronen (optioneel)
In FoxyProxy kan je ook met **patronen** werken: enkel verkeer naar bv. `*.web-security-academy.net` via Burp sturen, de rest rechtstreeks. Zo blijft je HTTP-history in Burp overzichtelijk.

## Alternatief
Burp heeft een eigen **ingebouwde Chromium-browser** (*Open browser* in de Proxy-tab) die al correct ingesteld is — handig als je FoxyProxy niet wil configureren.

---
Hoort bij: [[Setting Up Test Environment]]
