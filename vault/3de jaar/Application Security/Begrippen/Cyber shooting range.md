---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 3
groep: Tools
---
# Cyber shooting range

> De naam voor je **geïsoleerde oefenomgeving**: een set virtuele machines in **één eigen NAT-netwerk** waar je aanvalstechnieken mag uitproberen. Zoals een schietbaan: je oefent met echte wapens, maar in een afgebakende ruimte waar niets van waarde geraakt kan worden.

## Waarom isolatie?
- Securitytesten gebruikt dezelfde technieken als een echte aanval; buiten je lab is dat **illegaal** en schadelijk.
- Een eigen NAT-netwerk zorgt dat je aanvals-VM ([[Kali Linux]]) enkel je **doelwit-VM's** kan bereiken, niet je echte machines of het internet van je huisgenoten.
- Met **snapshots** keer je na een experiment terug naar een propere staat.

Opzet: zie [[Setting Up Test Environment]]. Gebruikt in o.a. [[Oefening reverse shell op Ubuntu target]].

## Typische opbouw
| VM | Rol |
|---|---|
| [[Kali Linux]] | aanvaller (tools) |
| kwetsbare webapp(s) / Ubuntu-target | doelwit |
| (optioneel) Windows-VM | doelwit voor Windows-technieken |
Alle VM's in hetzelfde **NAT-netwerk** van VirtualBox/VMware, zonder bridged adapter.

## Goede gewoontes
- **Snapshot** van elke VM in propere staat vóór je begint.
- Geen echte wachtwoorden of persoonlijke data in de VM's.
- Test **enkel** systemen die je zelf beheert of waarvoor je **schriftelijke toestemming** hebt (zoals PortSwigger-labs).

---
Hoort bij: [[Setting Up Test Environment]]
