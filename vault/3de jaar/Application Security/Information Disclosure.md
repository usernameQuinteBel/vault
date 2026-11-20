---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 7
groep: Configuratie
---
# Information Disclosure

> Een website die **onbedoeld gevoelige informatie prijsgeeft**. Niet altijd een aanval op zich, maar heel vaak het **startpunt** voor andere aanvallen: wat lekt, gebruikt de aanvaller om gerichter toe te slaan.

## Wat lekt er zoal?
- **Data van andere gebruikers**: usernames, financiële info.
- **Gevoelige bedrijfsdata**.
- **Technische details** over de site en de infrastructuur (de meest onderschatte categorie).

## Concrete voorbeelden
- Verborgen mappen, hun structuur en inhoud zichtbaar via `robots.txt` of **directory listing**.
- Broncode bereikbaar via tijdelijke **backups** (`index.php~`, `.bak`).
- Tabel- of kolomnamen die expliciet in **foutmeldingen** verschijnen (bv. een onbehandelde SQL-fout of een stack trace met de frameworkversie).
- Onnodig gevoelige info tonen, zoals **volledige** kredietkaartgegevens.
- **Hard-coded** API-keys, IP-adressen of database-credentials in de broncode (of in meegestuurde JavaScript, of een per ongeluk online `.git`-map).
- Subtiele **gedragsverschillen** die het bestaan van een resource of gebruiker verraden: *"Username not found"* vs *"Invalid password"* → zie [[Username enumeration]].

## Impact
- **Juridisch**: ongeoorloofde toegang tot gevoelige data = GDPR-boetes, rechtszaken.
- **Financieel**: diefstal van intellectuele eigendom, verlies van concurrentievoordeel.
- **Reputatieschade**, identiteitsdiefstal, en materiaal voor **phishing/social engineering**.

## Detectie
- Vermijd **tunnelvisie**: gevoelige data kan **overal** lekken, niet enkel waar je ze verwacht.
- **Fuzzing**: stuur onverwachte datatypes en waarden (tekst waar een getal verwacht wordt) en **vergelijk** de responsen — afwijkend gedrag verraadt vaak een lek.
- **Scanning tools** crawlen en auditen de site en flaggen veel automatisch.
- **Handmatig**: zoek gevoelige data in URL's, foutmeldingen, directory listings, logging, HTML-commentaar en response headers (`Server`, `X-Powered-By`).

## Verdediging
Generieke foutmeldingen voor gebruikers (details enkel in de **server-logs**), **debug uit** in productie, geen backups of `.git` in de webroot, secrets in een **vault** of omgevingsvariabelen, en overbodige headers verwijderen.

## Oefenen
[[PortSwigger labs per onderwerp]] · https://portswigger.net/web-security/information-disclosure

---
Hoort bij: [[Application Security]]
