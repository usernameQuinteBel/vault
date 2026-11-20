---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 4
groep: Injectie
aliases: [UNION attack, UNION SQLi]
---
# UNION-based SQL injection

> Met het SQL-sleutelwoord **`UNION`** plak je de resultaten van een **tweede** `SELECT` aan die van de eerste. Zo lees je data uit tabellen die de pagina **nooit** hoorde te tonen (andere gebruikers, wachtwoordhashes). Het is de stap voorbij "enkel welke rijen de legitieme query toont".

```
-- origineel
SELECT title, author FROM books WHERE genre = '?'
-- na injectie (structuur)
... WHERE genre = '' UNION SELECT username, password FROM users --'
```

## De voorwaarde die de opbouw bepaalt
`UNION` werkt alleen als **beide** queries **evenveel kolommen** met **compatibele types** teruggeven; anders **weigert de database** de hele query. Daarom kan je niet zomaar `UNION SELECT username, password` plakken — je moet eerst de vorm van de eerste query achterhalen. Dat gebeurt **stapsgewijs**, en elke stap is klein, verifieerbaar en voorspelbaar (vandaar dat begrip beter werkt dan copy-paste):

1. **Aantal kolommen bepalen.** Verhoog het aantal `NULL`-kolommen in `UNION SELECT NULL, NULL, ...` tot de query **niet meer faalt**, of gebruik `ORDER BY 1`, `ORDER BY 2`, … tot het **wél** faalt (de laatste die werkt = het aantal kolommen).
2. **Een kolom vinden die tekst aankan.** Zet op elke positie om beurt een string en kijk **waar** die op de pagina verschijnt.
3. **De data lezen.** Plaats de gewenste kolommen op de werkende positie; met **string-concatenatie** kan je meerdere waarden in één kolom samenvoegen.

## Database onderzoeken
Zodra je UNION werkt, haal je ook **metadata** op:
- **Versie/type**: `@@version` (MySQL/SQL Server), `version()` (PostgreSQL), `SELECT banner FROM v$version` (Oracle).
- **Inhoud**: `information_schema.tables` / `information_schema.columns` (niet-Oracle), of `all_tables` / `all_tab_columns` (Oracle).

Details per database: [[SQL cheat sheet (per database)]].

---
Hoort bij: [[SQL Injection]]
