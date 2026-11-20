---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 1
groep: Methode en omgeving
---
# Introductie Application Security

Dit hoofdstuk legt de **denkhouding** van het vak vast: waarom application security bestaat, hoe professionals te werk gaan, en welke gewoontes je de hele cursus door toepast. Lees het vóór de eerste lab, want elk later hoofdstuk bouwt erop verder.

## Waarom application security?
Bijna elke organisatie draait een deel van haar business via webapps: shops, banken, ziekenhuizen, studentenplatformen, interne tools. Elke app heeft een **publiek adres**, en iedereen ter wereld kan er verzoeken naar sturen. De meeste verzoeken zijn normaal gebruik; sommige komen van aanvallers die een ingang zoeken. **De sterkste firewall helpt daar niet tegen**, want de aanvaller gebruikt exact dezelfde deur als een gewone gebruiker: **de applicatie zelf**.

Als die deur een zwakte heeft, reikt de impact veel verder dan de app: aanvallers hebben via webkwetsbaarheden klantendatabases gelezen, zich als admin aangemeld en eigen commando's op servers van anderen uitgevoerd.

### Twee invalshoeken die elkaar versterken
- **CCS-studenten** (Cloud & Cyber Security) kennen de verdediging **aan de rand**: firewalls, segmentatie, hardening. In dit vak gebeurt de aanval **binnen** die perimeter, in de **code** — dus moet je begrijpen hoe software gebouwd is.
- **APP-studenten** bouwen die apps zelf. Hier leer je je eigen werk **door de ogen van een aanvaller** zien, wat verandert hoe je ontwerpt en schrijft.

> Auditors die developers begrijpen, en developers die aanvallers begrijpen, maken samen de veiligste apps.

Het vak bouwt verder op **Security Essentials** (hoe webapps werken, een HTTP-request, sessies, basisnetwerken).

## Hoe professionals testen
Draai een automatische scanner op een app en je krijgt binnen minuten **honderden** meldingen. Sommige zijn echte kwetsbaarheden, sommige onschuldige waarschuwingen, en een paar wijzen naar problemen die niet bestaan. **Het moeilijke is niet op "scan" drukken**, maar weten **wat** je test, **in welke volgorde**, en **wat je rapporteert** aan wie het moet oplossen.

Daarom werken professionals met een **methodologie** in plaats van lukraak te prikken tot er iets breekt. Zie [[Pentest]] (de vier fasen) en [[OWASP WSTG]] (hoe je per categorie test). Een methodologie maakt je werk:
- **herhaalbaar** — een andere auditor volgt dezelfde stappen en komt tot vergelijkbare resultaten;
- **volledig** — een checklist voorkomt dat je een hele categorie vergeet;
- **verdedigbaar** — je kan aan een klant of developer precies uitleggen hoe je tot elke conclusie kwam.

In dit vak baseer je je plan op de [[OWASP WSTG]] (Web Security Testing Guide), vereenvoudigd tot **vier fasen** (zie [[Pentest]]). De [[OWASP Top 10]] zegt daarbij *wát* de belangrijkste klassen van kwetsbaarheden zijn.

## De centrale gewoonte: *trust tools, but verify*
Stel: je scanner meldt "SQL injection" op de zoekpagina omdat een enkele quote een databasefout geeft. Is de app echt kwetsbaar? **Misschien.** Of de app toont gewoon ruwe foutmeldingen bij foute input — dat is [[Information Disclosure]], niet per se injectie. De scanner kan dat onderscheid niet maken; **jij wel**, zodra je begrijpt wat de app met je input doet.

> **Een finding komt pas in je rapport nadat je hem bevestigd hebt en kan uitleggen.** Dit is het belangrijkste wat dit vak je leert.

## Eén rapport, twee doelgroepen
- Een **developer** heeft technische details nodig: waar zit het, hoe reproduceer je het, wat kan een aanvaller ermee, en welke fix beveelt de documentatie aan.
- Een **manager of klant** kan daar niets mee: die wil het grote plaatje — hoe veilig is de app globaal, welke problemen zijn het belangrijkst, en wat kost het oplossen aan tijd of risico.

Beide versies goed schrijven is een professionele vaardigheid die je de hele cursus oefent. Zie [[Reporting Vulnerabilities]].

## ⚠️ Test enkel wat je mag testen
Securitytesten gebruikt **exact dezelfde technieken als een echte aanval**. Zonder toestemming is dat in de meeste landen **illegaal**, en een scanner op een systeem dat je niet bezit richten kan echte schade aanrichten. In dit vak test je **enkel** de labs in je eigen VM en de PortSwigger-labs, tenzij een docent uitdrukkelijk anders zegt. Deze regel geldt in **elk** hoofdstuk.

## Testen begint niet pas als de code af is
Apps worden gebouwd in een cyclus (de [[SDLC-fases en security|SDLC]]): requirements, design, implementatie, testen, release. **Wáár** je security test, bepaalt de kost: een zwakte gevonden tijdens het **ontwerp** is een aangepast diagram; dezelfde zwakte **na release** betekent een uitgebuite database, een patch onder tijdsdruk en verloren vertrouwen. Als auditor kom je meestal **laat** in de cyclus — net daarom moet je rapport goed zijn: het is vaak het moment waarop het team leert wat er eerder misliep.

## Begrippen
[[OWASP Top 10]] · [[OWASP WSTG]] · [[Pentest]] · [[Vulnerability, threat en exploit]] · [[SDLC-fases en security|SDLC]]

## Bron
Cursussite: https://it-factory-thomas-more.gitlab.io/application-security/course/

---
Hoort bij: [[Application Security]]
