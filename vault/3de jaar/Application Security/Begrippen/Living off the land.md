---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 15
groep: Na de aanval
aliases: [LOTL, GTFOBins, LOLBAS]
---
# Living off the land

> Aanvallen met **wat er al op het systeem staat**, in plaats van eigen tools mee te brengen. Nodig omdat productiesystemen meestal **geen** aanvalstools hebben, of een [[Netcat]]-versie **zonder** de `-e`-optie om een shell te koppelen.

## Waarom het relevant is
In [[Oefening reverse shell op Ubuntu target]] merk je dat de simpele Netcat-aanpak **niet** werkt op de Ubuntu-target, omdat die een andere Netcat-versie heeft. Je moet dan creatief zijn met **standaard geïnstalleerde** programma's (shells, scripttalen, systeemtools) om toch een uitgaande [[Reverse shell]] op te zetten.

## Naslagwerken
- **GTFOBins** — Linux: welke standaard-binaries je waarvoor kan misbruiken.
- **LOLBAS** — Windows: de "Living Off The Land Binaries, Scripts and Libraries".

De concrete commando's staan in het cursusdocument en worden in de les besproken; gebruik ze enkel in je eigen [[Cyber shooting range]].

## Waarom aanvallers het doen (en waarom het moeilijk te detecteren is)
- Er moet **niets nieuws** geïnstalleerd worden → geen verdachte bestanden voor een antivirus.
- De gebruikte programma's zijn **legitiem** en worden ook door beheerders gebruikt.
- Het verkeer lijkt op normaal systeemgebruik.

## Verdediging
| Maatregel | Effect |
|---|---|
| **minimale installatie** op servers (geen compilers, scripttalen of netwerktools die niet nodig zijn) | minder "land" om van te leven |
| **least privilege** voor de webserver-gebruiker | een gekaapte shell kan weinig |
| **egress filtering** (uitgaand verkeer beperken) | uitgaande verbindingen naar onbekende hosts worden geblokkeerd |
| **monitoring/EDR** op gedrag (bv. een webserverproces dat een shell start) | detectie op basis van gedrag, niet bestanden |
| logging van uitgevoerde commando's | forensisch onderzoek achteraf |

---
Hoort bij: [[Gaining Remote Access]]
