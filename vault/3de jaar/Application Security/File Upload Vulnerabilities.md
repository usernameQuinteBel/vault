---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 11
groep: Bestanden
---
# File Upload Vulnerabilities

> De app laat bestanden uploaden met **onvoldoende validatie**, waardoor een aanvaller **ongewenste (uitvoerbare) bestanden** op de server krijgt. In het ergste geval plaatst hij een **[[Web shell]]** en neemt hij de server volledig over.

## De typische fouten
- **Geen controle op gevaarlijke extensies** (`.php`, `.phar`, `.jsp`, `.jspx`, `.asp(x)`…).
- De **`Content-Type`-header blind vertrouwen** — die wordt door de **client** gezet en is dus vervalsbaar.
- De upload belandt in een map waar de server scripts **uitvoert**.

## Impact
- Belangrijke bestanden **overschrijven of wijzigen** (zeker in combinatie met path traversal in de bestandsnaam, zie [[Directory Traversal]]).
- Een **[[Web shell]]** uploaden → **volledige compromittering** van de server.

## Detectie — de redenering
**Automatisch**: Burp Scanner, of **Fuxploider** (https://github.com/almandin/fuxploider).
**Handmatig**: probeer **onverwachte** bestanden te uploaden (desnoods een testscript) en pas met de **[[Burp Suite|Burp interceptor]]** de eigenschappen aan die de serverfilter controleert:
- de **bestandsnaam** (dubbele extensie zoals `shell.php.jpg`, hoofdletters `.PhP`, varianten `.php5`, een **null byte** `shell.php%00.jpg`);
- de **`Content-Type`** (van `application/x-php` naar `image/jpeg`);
- de **form-data / inhoud** (echte **magic bytes** van een afbeelding vooraan het bestand plakken);
- het **bestandspad** (path traversal `../` om buiten een niet-uitvoerbare map te raken).

Elke aanpassing test één aanname van de filter: controleert hij de extensie? de MIME-type? de inhoud? de map?

## Verdediging (gelaagd)
- **Allow-list** van toegelaten extensies (niet een blacklist van "gevaarlijke").
- De **inhoud/magic bytes** controleren, niet enkel de naam of de `Content-Type`.
- Het bestand **hernoemen** (eigen gegenereerde naam).
- Opslaan **buiten de webroot**, of in een map **zonder uitvoerrechten**, zodat een geüpload script nooit kan draaien.
- Maximale grootte, en eventueel een virusscan.

## Oefenen
[[PortSwigger labs per onderwerp]] · https://portswigger.net/web-security/file-upload

## Begrippen
[[Web shell]]

---
Hoort bij: [[Application Security]]
