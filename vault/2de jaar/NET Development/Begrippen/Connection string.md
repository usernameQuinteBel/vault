---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [5, 15]
groep: EF Core
aliases: [Connectionstring, ConnectionStrings]
---
# Connection string

> De tekst die zegt **met welke server en database** EF Core verbindt (en hoe). Ze hoort niet hardcoded in `Program.cs`.

## Opbouw
- lokaal: `Data Source=(localdb)\\MSSQLLocalDB;Database=CityInfo;Integrated Security=True;…`
- kopieer ze uit het properties-venster van **SQL Server Object Explorer** en voeg `Initial Catalog=CityInfo;` toe (of `Database=`); anders wijst ze naar de **server** i.p.v. een database erin.

## Veilig bewaren
```json
"ConnectionStrings": { "CityInfoDBConnectionString": "Data Source=(localdb)\\MSSQLLocalDB;Database=CityInfo;…" }
```
```csharp
builder.Configuration["ConnectionStrings:CityInfoDBConnectionString"]   // doorgeven aan UseSqlServer(...)
```
In JSON moet de backslash geëscaped worden (`\\`). Controleren zonder te queryen: breakpoint na de configuratie en in het **Immediate Window** de waarde opvragen (beginnend met `?`).

## Gerelateerd
[[appsettings.json]] · [[IConfiguration]] · [[Omgevingen (Development en Production)]]

---
Hoort bij: [[EF Core - database, migrations en seeding]]
