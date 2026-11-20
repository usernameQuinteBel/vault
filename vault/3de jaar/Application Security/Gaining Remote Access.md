---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 15
groep: Na de aanval
---
# Gaining Remote Access

> Nadat een aanvaller een kwetsbaarheid gevonden heeft, is de logische volgende stap **toegang krijgen tot de machine** waarop de app draait — gedeeltelijke of volledige controle over de server en al zijn resources. **Welke** aanpak past, hangt af van de aard van de kwetsbaarheid en van het **netwerk** (firewall, NAT) ertussen.

Dit hoofdstuk legt het **verschil op netwerkniveau** uit tussen drie technieken. (De concrete commando's staan in het cursusdocument *Gaining Remote Access* en horen enkel op toegelaten doelwitten — zie [[Introductie Application Security]].)

## De drie technieken
| Techniek | Wie **luistert**? | Wie **verbindt**? | Wanneer? |
|---|---|---|---|
| **[[Web shell]]** | niemand (via de webserver) | de aanvaller via de browser | je kan een script op de server laten uitvoeren ([[File Upload Vulnerabilities]], [[Command Injection]]) |
| **[[Bind shell]]** | het **slachtoffer** opent een poort | de **aanvaller** verbindt ernaartoe | je kan het slachtoffer **rechtstreeks** bereiken (geen firewall/NAT ertussen) |
| **[[Reverse shell]]** | de **aanvaller** | het **slachtoffer** verbindt naar buiten | een firewall blokkeert **inkomend** verkeer, of NAT verbergt het IP van het slachtoffer — het **meest gebruikt** |

## De kernredenering: waarom een reverse shell?
Een **bind shell** is comfortabel (hij wacht tot jij verbindt), maar botst vaak op het netwerk: een **firewall** blokkeert doorgaans **alle** inkomende verbindingen behalve een paar poorten (80/443 voor een webserver), en **NAT** maakt het IP van het slachtoffer onbereikbaar. Je zou op poort 80/443 kunnen binden, maar dan is de website zelf **onbereikbaar** — dat valt meteen op bij een beheerder.

Een **reverse shell** draait de rollen om: de **aanvaller** zet een listener op, en het **slachtoffer** maakt een **uitgaande** verbinding naar die listener. **Uitgaand** verkeer wordt zelden geblokkeerd, want servers moeten updates ophalen en externe API's bereiken — de reverse shell lijkt dus op "zoveelste uitgaande connectie". Het **effect** is hetzelfde als bij een bind shell; het verschil zit puur op **netwerkniveau** (wie verbindt met wie). De tool hiervoor is doorgaans **[[Netcat]]**.

## "Living off the land"
Productiesystemen hebben meestal **geen** handige aanvalstool geïnstalleerd, of een versie van [[Netcat]] zónder de optie om meteen een shell te koppelen. Dan moet je **creatief** zijn met wat er **al** op het systeem staat ([[Living off the land]]): standaardtools die toch een uitgaande shell kunnen opzetten. Dit is precies wat [[Oefening reverse shell op Ubuntu target]] je laat ervaren.

## Verdediging (voor developers/beheerders)
De kwetsbaarheden dichten die toegang geven ([[File Upload Vulnerabilities]], [[Command Injection]]); het **uitgaand** verkeer van servers beperken (egress filtering); **least privilege**; en **monitoring** op ongewone processen en verbindingen.

## Begrippen
[[Web shell]] · [[Bind shell]] · [[Reverse shell]] · [[Netcat]] · [[Living off the land]]

---
Hoort bij: [[Application Security]]
