---
type: oefening
vak: Application Security
onderdeel: Application Security
chapter: 15
groep: Labs
---
# Oefening reverse shell op Ubuntu target 📝

> Oefening bij [[Gaining Remote Access]]. Je oefent de techniek **binnen je eigen [[Cyber shooting range]]** (zie [[Setting Up Test Environment]]) — **enkel** op je eigen VM's.

## Opzet
- **Aanvaller**: je [[Kali Linux]]-VM. Noteer het IP met `ip address` (je target moet er immers naartoe verbinden).
- **Doelwit**: de **Ubuntu-target**-VM in **hetzelfde** NAT-netwerk.

## Doel
Start een **listener** op Kali en laat de Ubuntu-target een **uitgaande verbinding** terug naar die listener opzetten (een **[[Reverse shell]]**). De eenvoudige [[Netcat]]-aanpak uit de eerdere oefening werkt hier **niet**, omdat Ubuntu een andere Netcat-versie heeft **zonder** de `-e`-optie.

## De les: living off the land
Productiesystemen hebben vaak niet de handige tools; je moet creatief zijn met wat er **al** op staat. Naslag: **GTFOBins** (Linux) en **LOLBAS** (Windows). Zoek daar een manier om met standaardtools een reverse shell op te zetten. De mogelijke oplossingen bespreek je in de les. Zie [[Living off the land]].

De concrete commando's staan in het cursusdocument *Gaining Remote Access*; gebruik ze **enkel** op dit eigen target.

---
Hoort bij: [[Gaining Remote Access]]
