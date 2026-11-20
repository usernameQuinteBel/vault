---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: [7, 8]
groep: Toegang
aliases: [User enumeration]
---
# Username enumeration

> Een aanvaller ontdekt **welke gebruikersnamen bestaan** doordat de app zich **anders gedraagt** voor bestaande en niet-bestaande accounts. Zodra hij de geldige usernames kent, hoeft hij enkel nog wachtwoorden te raden — de helft van het brute-forcewerk valt weg.

## De "orakels" (signalen die een bestaand account verraden)
| Verschil | Voorbeeld |
|---|---|
| **Foutmelding** | "User not found" vs "Incorrect password" |
| **Subtiel** | een andere **statuscode**, een extra **header**, een andere **responselengte**, een punt meer of minder in de tekst |
| **Timing** | een **geldige** username → het wachtwoord wordt effectief gehasht → de respons komt meetbaar **trager** (zet een extreem lang wachtwoord om het verschil te vergroten) |
| **Account-lockout** | enkel **bestaande** accounts worden geblokkeerd na X pogingen |
| **Registratie/reset** | "Deze e-mail is al in gebruik" |

## Testen
Burp Intruder met een lijst usernames, daarna **sorteren** op responselengte, statuscode of responstijd (Burp **Comparer** helpt bij subtiele verschillen).

## Verdediging
Altijd **dezelfde generieke melding** ("Ongeldige gebruikersnaam of wachtwoord"), een **gelijke responstijd**, en **hetzelfde gedrag** bij reset en registratie. Dit raakt ook [[Information Disclosure]].

---
Hoort bij: [[Authentication vulnerabilities]] · [[Information Disclosure]]
