---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 15
groep: Na de aanval
---
# Reverse shell

> De omgekeerde van een [[Bind shell]]: **de aanvaller luistert**, en **het slachtoffer maakt een uitgaande verbinding** naar die listener en koppelt er een shell aan. De techniek die je het vaakst nodig hebt, omdat ze **door firewalls en NAT** heen werkt.

## Waarom het werkt
**Inkomend** verkeer naar een server wordt streng gefilterd; **uitgaand** verkeer zelden, want servers moeten updates ophalen en externe API's bereiken. Een reverse shell lijkt daardoor op nog een gewone **uitgaande** connectie en valt niet op. Het **effect** is identiek aan een bind shell — de aanvaller typt commando's en krijgt de output — maar op **netwerkniveau** verbindt nu het slachtoffer met de aanvaller in plaats van omgekeerd.

## De opbouw (conceptueel)
De aanvaller start op zijn [[Kali Linux]]-machine een **listener** op een poort (en noteert zijn eigen IP met `ip address`). Via een kwetsbaarheid dwingt hij het slachtoffer een **uitgaande verbinding** naar dat IP/poort op te zetten en daar een shell aan te koppelen. De exacte commando's verschillen per systeem en per beschikbare tool; op productiesystemen moet je vaak **[[Living off the land|living off the land]]** werken omdat de voor de hand liggende tool ontbreekt. Oefening: [[Oefening reverse shell op Ubuntu target]].

---
Hoort bij: [[Gaining Remote Access]]
