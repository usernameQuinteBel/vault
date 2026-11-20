---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: [11, 15]
groep: Na de aanval
aliases: [Webshell]
---
# Web shell

> Een **script in een taal die de server uitvoert** (PHP, Perl, ASP.NET, Ruby…), dat een aanvaller op de webserver krijgt — meestal via een [[File Upload Vulnerabilities|upload-kwetsbaarheid]], soms via [[Command Injection]] of een schrijfbare map. Eenmaal aanwezig, geeft het via de **browser** de mogelijkheid om **commando's uit te voeren**, bestanden te beheren en verder in te breken.

## Hoe het werkt (conceptueel)
De aanvaller plaatst een klein serverscript dat een **HTTP-parameter** inleest en die aan het besturingssysteem **doorgeeft**. Roept hij dat script dan op met een commando in de parameter, dan voert de server het uit en toont het de output in de pagina. Zo wordt de webserver een afstandsbediening.

Geavanceerdere web shells bieden een **interactieve terminal** in de browser (bv. p0wny-shell). De concrete scriptvoorbeelden staan in het cursusdocument *Gaining Remote Access* en op de PortSwigger-labs; ze horen **enkel** op systemen die je **mag** testen (zie [[Introductie Application Security]]).

## Plaats in de aanvalsketen
Een web shell is het typische **einddoel** van een upload-kwetsbaarheid en vaak de **opstap** naar een volwaardige, interactieve sessie via een [[Reverse shell]] (zie [[Gaining Remote Access]]).

## Verdediging
De kwetsbaarheden dichten die hem binnenlaten ([[File Upload Vulnerabilities]], [[Command Injection]]): uploads streng valideren, bestanden **niet-uitvoerbaar** en **buiten de webroot** opslaan, en de serverrechten beperken (**least privilege**), zodat zelfs een geplaatste shell weinig kan.

---
Hoort bij: [[File Upload Vulnerabilities]] · [[Gaining Remote Access]]
