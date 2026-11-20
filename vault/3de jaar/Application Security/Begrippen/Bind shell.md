---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 15
groep: Na de aanval
---
# Bind shell

> Een manier om op afstand commando's op een systeem te draaien waarbij **het slachtoffer luistert**: op de doelmachine wordt een nieuwe dienst gestart die **op een poort wacht**, en de **aanvaller verbindt** ernaartoe om een shell te krijgen.

## De opbouw (conceptueel)
De aanvaller gebruikt een kwetsbaarheid (bv. [[Command Injection]]) om op het slachtoffer een **listener** te starten die een shell aan een TCP-poort koppelt. Daarna opent hij vanaf zijn eigen machine een gewone TCP-verbinding naar het **IP en de poort** van het slachtoffer, en kan hij commando's typen waarvan hij de output terugkrijgt. Je kan dit lokaal oefenen met twee terminals (listener + verbinder) met [[Netcat]].

## Het grote nadeel
Een **firewall** blokkeert meestal alle **inkomende** verbindingen behalve een paar (80/443), en **NAT** maakt het IP van het slachtoffer vaak onbereikbaar. Daarom werkt een bind shell in de praktijk vaak niet en gebruikt men een **[[Reverse shell]]** (zie [[Gaining Remote Access]] voor die afweging).

## Bind vs. reverse
| | Bind shell | [[Reverse shell]] |
|---|---|---|
| wie luistert | het **slachtoffer** | de **aanvaller** |
| richting verbinding | aanvaller → slachtoffer (**inkomend**) | slachtoffer → aanvaller (**uitgaand**) |
| firewall/NAT | meestal **geblokkeerd** | vaak **toegelaten** (uitgaand verkeer) |

## Detectie en verdediging
- Een onverwachte **luisterende poort** op een server is een sterk signaal: controleer regelmatig welke processen luisteren (bv. met `ss -tulpn` of `netstat`) en vergelijk met wat er hoort te draaien.
- **Firewall**: standaard alle inkomende poorten dicht behalve de nodige.
- De echte oorzaak wegwerken: de kwetsbaarheid die toeliet om een programma te starten (bv. [[Command Injection]]).
- Diensten met **minimale rechten** laten draaien, zodat een gekaapte shell weinig kan.

---
Hoort bij: [[Gaining Remote Access]]
