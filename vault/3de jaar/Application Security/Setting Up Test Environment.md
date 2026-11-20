---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 3
groep: Methode en omgeving
---
# Setting Up Test Environment

Je eigen **"cyber shooting range"**: een **virtuele speeltuin** waar je aanvalstechnieken kan uitproberen zonder iets belangrijks te beschadigen of de wet te overtreden. De kernidee: **isolatie** — je "wapens" mogen nooit per ongeluk op een verkeerd doelwit gericht raken. Zie [[Cyber shooting range]].

## 1. Hypervisor: VirtualBox
- Virtuele machines **isoleren** je testomgeving van je andere (gevoelige) data en systemen.
- Download op https://www.virtualbox.org/wiki/Downloads (+ eventueel het Extension Pack). Een andere hypervisor mag ook.
- **Eigen netwerk** maken: File › Tools › Network Manager › tab **NAT Networks** › Create, geef een naam (bv. `CyberShootingRange`), vink **Enable DHCP** aan. Alle lab-VM's komen in **hetzelfde** netwerk, zodat ze elkaar wel maar je echte machines niet kunnen bereiken.

## 2. Aanvals-VM: Kali Linux
- [[Kali Linux]] (gekend uit Security Essentials). Alternatieven: ParrotOS, BlackArch, ArchStrike, BackBox (dan moet je tools zoals Burp soms zelf installeren).
- Download het **VirtualBox VM-pakket** op https://www.kali.org/get-kali/#kali-virtual-machines, uitpakken met **7-Zip**, dan VirtualBox › Machine › Add › het `.vbox`-bestand.
- Apple Silicon/ARM: de x86 `.vbox` werkt niet, gebruik de **ARM-ISO**.
- Settings › Network › Attached to **NAT Network** › `CyberShootingRange`.
- Neem een **snapshot** (menu naast de VM › Snapshots › Take) zodat je altijd kan terugkeren naar een propere staat.
- Standaardlogin: **kali / kali**.
- AZERTY instellen: `sudo dpkg-reconfigure keyboard-configuration` › Other › Belgian › Belgian › defaults › herstarten (en daarna nog een snapshot).

## 3. Burp Suite + FoxyProxy
Dit is de kern van je **handmatig** testwerk: al het verkeer tussen je browser en de app loopt via [[Burp Suite]] als **proxy**, zodat je elk request kan **bekijken en aanpassen**.
- Start **Burp Suite** (Community Edition) › I Accept › Temporary project › Start Burp.
- In Firefox: add-on **FoxyProxy Standard** › Options › Proxies › Add: Title `Burp Suite`, Hostname `127.0.0.1`, Port `8080`. Zie [[FoxyProxy]].
- **Proxy-certificaat** (anders HTTPS-waarschuwingen): surf (met de proxy aan) naar `http://burp/cert` → `cacert.der`; Firefox-instellingen › certificates › View Certificates › Import › vink "Trust this CA to identify websites" aan.

## 4. Doelwitten
- Vooral de **[[PortSwigger Web Security Academy]]** (https://portswigger.net/web-security/): tijdelijke, bewust kwetsbare apps die je **mag** aanvallen.
- Extra: **VulnHub** (bewust kwetsbare VM-images) en **Hack The Box** (gamified, met VPN naar hun kwetsbare machines). Elke nieuwe VM in **hetzelfde** NAT-netwerk!

## 5. Opruimen
Groepeer je lab-VM's: rechtsklik › Move to group › [New], daarna Rename group.

## Begrippen
[[Cyber shooting range]] · [[Kali Linux]] · [[Burp Suite]] · [[FoxyProxy]] · [[PortSwigger Web Security Academy]]

---
Hoort bij: [[Application Security]]
