---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 3
groep: Tools
aliases: [Kali]
---
# Kali Linux

> Een Linux-distributie **gebouwd voor security testing**, met honderden tools voorgeïnstalleerd: [[Burp Suite]], Netcat, sqlmap, nmap, Commix, dotdotpwn… In dit vak je **aanvals-VM**.

- Draai het als VM in je eigen NAT-netwerk (zie [[Setting Up Test Environment]] / [[Cyber shooting range]]).
- Standaardlogin: `kali` / `kali`.
- Alternatieven: ParrotOS, BlackArch, ArchStrike, BackBox.
- Handige commando's: `ip address` (je eigen IP, nodig als een doelwit naar jou moet terugverbinden bij een [[Reverse shell]]), `nc` ([[Netcat]]).

Waarom een eigen distro? Alles wat je nodig hebt staat er al op, en het is wegwerpbaar (snapshot terugzetten), dus je hoeft je eigen machine niet te "vervuilen" met aanvalstools.

## Belangrijke tools per hoofdstuk
| Tool | Waarvoor | Hoofdstuk |
|---|---|---|
| Burp Suite | requests onderscheppen en aanpassen | bijna alle |
| sqlmap | SQL injection automatiseren | [[SQL Injection]] |
| Commix | command injection testen | [[Command Injection]] |
| dotdotpwn | directory traversal | [[Directory Traversal]] |
| nmap | poorten en diensten scannen | verkenning |
| Netcat | verbindingen openen/luisteren | [[Gaining Remote Access]] |

## Goede gewoontes
- `sudo apt update && sudo apt full-upgrade` bij de start.
- Wijzig het standaardwachtwoord als de VM ooit een bridged netwerk krijgt.
- Gebruik snapshots.

---
Hoort bij: [[Setting Up Test Environment]]
