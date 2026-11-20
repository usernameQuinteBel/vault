---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 4
groep: Injectie
aliases: [SQL injection cheat sheet]
---
# SQL cheat sheet (per database)

> De syntax voor een SQL-injectie **verschilt per databasetype**. De PortSwigger SQL injection cheat sheet bundelt de verschillen; je gebruikt hem als **naslag** zodra je weet welk databasetype je voor je hebt (achterhaald via een versie-query of een foutmelding).

| Taak | Oracle | SQL Server | PostgreSQL | MySQL |
|---|---|---|---|---|
| **String aaneenrijgen** | `'foo'\|\|'bar'` | `'foo'+'bar'` | `'foo'\|\|'bar'` | `CONCAT('foo','bar')` of twee strings met spatie |
| **Substring** | `SUBSTR('foobar',4,2)` | `SUBSTRING('foobar',4,2)` | `SUBSTRING(...)` | `SUBSTRING(...)` (offset is 1-based) |
| **Commentaar** | `--comment` | `--comment` of `/*comment*/` | `--comment` | `#comment` of `-- ` (spatie!) |
| **Versie** | `SELECT banner FROM v$version` | `SELECT @@version` | `SELECT version()` | `SELECT @@version` |
| **Tabellen/kolommen** | `all_tables`, `all_tab_columns` | `information_schema.tables/.columns` | idem | idem |
| **Onvoorwaardelijke vertraging (10s)** | `dbms_pipe.receive_message(('a'),10)` | `WAITFOR DELAY '0:0:10'` | `SELECT pg_sleep(10)` | `SELECT SLEEP(10)` |

## Nuttige weetjes
- **Conditional errors**: met een `CASE`-constructie forceer je een fout (bv. deling door nul) **enkel** als een voorwaarde waar is → basis van error-based [[Blind SQL injection]].
- **Zichtbare foutmeldingen** kunnen data lekken: een `CAST`/`CONVERT` van tekst naar een getal faalt met een foutmelding die de tekst **toont** (type-conflict).
- **Batched/stacked queries** (`query1; query2`): meerdere queries na elkaar. Werkt op SQL Server en PostgreSQL, meestal **niet** op MySQL, en **niet** op Oracle. Vooral nuttig bij blind: een tweede query triggert een DNS-lookup, fout of vertraging.
- **Oracle** vereist altijd een `FROM` (gebruik `FROM dual` voor een dummy).

---
Hoort bij: [[SQL Injection]]
