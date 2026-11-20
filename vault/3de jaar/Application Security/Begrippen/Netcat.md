---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 15
groep: Na de aanval
aliases: [nc]
---
# Netcat

> `nc`: het "Zwitsers zakmes" voor **TCP/UDP-verbindingen** — je kan er een verbinding mee **openen** of op een poort **luisteren**. Standaard aanwezig op [[Kali Linux]] en de tool waarmee je een [[Bind shell]] of [[Reverse shell]] opzet.

## Belangrijkste opties
| Optie | Betekenis |
|---|---|
| `-l` | **listen**: wacht op inkomende verbindingen |
| `-v` | **verbose**: toont debug-info over de verbindingen |
| `-p <poort>` | de te gebruiken poort |
| `-e <programma>` | voert na verbinding een programma uit en stuurt in-/output over de verbinding |

De `-e`-optie is cruciaal om een shell te koppelen, maar bestaat **niet** in elke Netcat-versie. Juist daarom lukt de eenvoudige aanpak **niet** op veel productiesystemen (zoals de Ubuntu-target), en moet je [[Living off the land|living off the land]] werken. Je eigen aanvals-IP vind je op Kali met `ip address`.

## Legitieme toepassingen
Netcat is een gewoon netwerkhulpmiddel dat ook beheerders gebruiken:
- controleren of een **poort open** is op een server;
- de **banner** van een dienst bekijken (welke webserver/versie?);
- eenvoudig **bestanden** of tekst tussen twee machines sturen in een testomgeving;
- een simpele **listener** om te zien of een applicatie wel naar buiten verbindt.

## Varianten
Er bestaan meerdere versies (traditional, OpenBSD-netcat, `ncat` van nmap) met andere opties. Daarom werkt een commando uit een tutorial niet altijd op elk systeem.

## Verdediging
Netcat op een productieserver is zelden nodig: verwijder het (zie [[Living off the land]]), en monitor onverwachte luisterende poorten en uitgaande verbindingen.

---
Hoort bij: [[Gaining Remote Access]]
