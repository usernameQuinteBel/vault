---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 4
groep: Injectie
aliases: [Prepared statements, Prepared statement, Geparametriseerde query]
---
# Parameterized queries

> Ook **prepared statements**. De definitieve oplossing tegen [[SQL Injection]]: de query is een **vaste, hard-gecodeerde constante** met **placeholders**, en de input gaat **apart** mee als data. De database **compileert eerst de query** en vult de waarde **pas daarna** in — dus de input wordt **nooit** deel van de querytekst.

Het gevolg: een quote in de input kan de string **niet meer vroegtijdig afsluiten**, want de input is nooit "code".

```php
// PHP (PDO)
$stmt = $pdo->prepare("SELECT * FROM products WHERE category = ? AND released = 1");
$stmt->execute([$category]);
```
```csharp
// C# (ADO.NET)
var cmd = new SqlCommand("SELECT * FROM products WHERE category = @cat", conn);
cmd.Parameters.AddWithValue("@cat", category);
```

ORM's (Entity Framework, Hibernate…) parametriseren **standaard**. Let wel op ruwe-SQL-methodes (`FromSqlRaw`, string-interpolatie in queries): daar sluip je de kwetsbaarheid terug binnen.

## Twee eerlijke grenzen
1. **Werkt enkel waar input *data* is.** Een input die een **tabelnaam, kolomnaam of `ORDER BY`** kiest, is **structuur** en kan geen parameter zijn → gebruik een **allow-list** (de app kiest uit een vaste set toegelaten opties en weigert de rest).
2. **Beschermt de query, niet het systeem** → combineer met **least privilege**: de database-account van de app mag geen tabellen lezen die ze nooit nodig heeft. Goed uitgevoerde preventie is zo **gelaagd**.

In een rapport is dit stuk de **aanbeveling voor developers**: de locatie, de reproductiestappen én deze fix, geformuleerd voor het team dat ze moet toepassen.

---
Hoort bij: [[SQL Injection]]
