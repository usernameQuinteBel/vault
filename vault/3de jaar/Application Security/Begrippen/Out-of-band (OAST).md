---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: [4, 5, 13]
groep: Injectie
aliases: [OAST, Out-of-band, DNS exfiltration]
---
# Out-of-band (OAST)

> **Out-of-band Application Security Testing**: wanneer een app volledig **asynchroon of "stil"** is (geen zichtbaar resultaat, geen verschil in gedrag of timing), laat je de server **zélf contact opnemen** met een systeem dat **jij** controleert, via **DNS** of **HTTP**. Wat daar binnenkomt **bewijst** de kwetsbaarheid, en kan zelfs **data meedragen**.

## Hoe het werkt
De server doet, aangestuurd door jouw injectie, een **uitgaand** verzoek naar `iets.jouw-domein.com`. Jij leest je **DNS-/HTTP-logs** en ziet de interactie — en als je de gevoelige data **in de subdomeinnaam** laat meeliften (DNS-exfiltratie), lees je die data mee.

## Waar het opduikt
- **Blind SQL injection** zonder enig ander signaal: de database een DNS-lookup laten doen (bv. via SQL Server's `xp_dirtree`-mechanisme). *Conceptueel*: de query dwingt een lookup naar `<geheim>.attacker.com` af; het geheim verschijnt in je DNS-logs.
- **Blind command injection**: een commando dat een DNS-lookup doet (`nslookup`) — zie [[Command Injection]].
- **Blind SSRF**: de server een verzoek naar jouw domein laten doen — zie [[Server-Side Request Forgery (SSRF)]].

## Tool
**Burp Collaborator** (Pro) geeft je een uniek domein en toont elke binnenkomende DNS/HTTP-interactie.

---
Hoort bij: [[SQL Injection]]
