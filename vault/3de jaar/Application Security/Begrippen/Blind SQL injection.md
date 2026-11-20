---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 4
groep: Injectie
aliases: [Boolean-based SQLi, Time-based SQLi]
---
# Blind SQL injection

> De moeilijkste variant: de applicatie toont **geen resultaten en geen foutmeldingen** — geen zichtbare verandering. De kwetsbaarheid is er wél, maar je moet de database **ja/nee-vragen** stellen en het antwoord **afleiden uit het gedrag** van de app. Elke probe levert **één bit** informatie.

## De drie manieren om dat ene bit te lezen
| Variant | Signaal (1 bit) | Mechanisme |
|---|---|---|
| **Boolean-based** (conditional responses) | de pagina **verandert wel/niet** | je injecteert een voorwaarde in een query die zichtbaar gedrag stuurt (bv. een "welcome"-boodschap verschijnt bij `AND 1=1` maar niet bij `AND 1=2`) |
| **Error-based** (conditional errors) | **fout vs. geen fout** | verandert er niets aan het normale gedrag, dan lok je **enkel** een databasefout uit **als** de voorwaarde waar is (bv. een deling door nul in een `CASE`) |
| **Time-based** | **traag vs. snel** | alle responsen zijn identiek, dus je laat de database **slapen** als de voorwaarde waar is |

Met zo'n ja/nee-vraag per karakter loop je gevoelige data **teken per teken** af: *"is het eerste teken van het admin-wachtwoord groter dan m?"*, enz., met functies zoals `SUBSTRING`.

## Slaapfuncties per database (time-based)
`SLEEP()` (MySQL), `pg_sleep()` (PostgreSQL), `WAITFOR DELAY '0:0:5'` (SQL Server), `dbms_pipe.receive_message(...)` (Oracle). Zie [[SQL cheat sheet (per database)]].

## Automatiseren — met begrip
Eén bit per probe is **traag**, dus je laat **sqlmap** of Burp Intruder het werk doen. Dat mag en is praktisch, maar weet **wat** het tool in jouw naam vraagt: een **lange reeks ja/nee-vragen**. *Kan je die zin uitspreken, dan begrijp je blind injection; kan je dat niet, dan test je niet, dan hoop je.*

---
Hoort bij: [[SQL Injection]]
