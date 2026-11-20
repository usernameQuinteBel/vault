---
type: oefening
vak: Application Security
onderdeel: Application Security
chapter: 4
groep: Labs
---
# Labs SQL Injection 📝

> De praktijklabs bij [[SQL Injection]], op de [[PortSwigger Web Security Academy]]. Werk ze **in volgorde** en laat ze aansluiten bij de theorie. Zoek **geen** oplossingen online: de **redenering** naar de payload is het leerdoel. Voorspel elk resultaat vóór je verstuurt; faalt een lab, leg jezelf dan uit **welke aanname** fout was.

> ⚠️ PortSwigger geeft je **expliciet** toestemming om deze lab-instanties aan te vallen. Die toestemming geldt **enkel** voor de labs.

## De reeksen (oplopend in moeilijkheid)
1. **First steps** — input die een `WHERE`-clause verandert (verborgen data tonen), en input die de **login-logica** verandert (bypass).
2. **UNION attacks** — vier labs die je door de volledige UNION-sequentie leiden: aantal kolommen bepalen, een tekstkolom vinden, meerdere waarden in één kolom, en data uit een **andere tabel** lezen. Zie [[UNION-aanval]].
3. **Examining the database** — type en versie bepalen en de inhoud lijsten, óók op **Oracle** (dat een `FROM` vereist en je dus payloads laat aanpassen i.p.v. hergebruiken). Zie [[SQL cheat sheet (per database)]].
4. **Blind SQL injection** — zichtbare fouten, conditional responses, conditional errors en time-based, in oplopende moeilijkheid. Zie [[Blind SQL injection]].

Gebruik [[Burp Suite]] (vooral Repeater) om je payloads te versturen en responsen te vergelijken.

Startpunt: https://portswigger.net/web-security/sql-injection

---
Hoort bij: [[SQL Injection]]
