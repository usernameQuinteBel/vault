---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [12]
groep: Testing, DI en architectuur
aliases: ["Lagen: Contracts, Domain en Infrastructure", CityInfo.Contracts, CityInfo.Domain, CityInfo.Infrastructure, Presentation layer]
---
# Lagen: Contracts, Domain en Infrastructure

> De vier projecten van CityInfo na het opsplitsen: **API**, **Contracts**, **Domain** en **Infrastructure**.

| Laag | Verantwoordelijkheid | Inhoud |
|---|---|---|
| **CityInfo.API** (Presentation) | ingang: input aanvaarden, vertalen, repository/service aanroepen, response teruggeven | controllers, mapping profiles, `Program.cs`, appsettings |
| **CityInfo.Contracts** (Communication) | gedeelde bibliotheek: het *wat*, niet het *hoe* | **DTO's** (+ interfaces) |
| **CityInfo.Domain** (Core Business) | meest **stabiele** laag, **nul afhankelijkheden** | businessregels en **entities** ([[Entity class]]) |
| **CityInfo.Infrastructure** (Data) | persistentie en technische details | `DbContext`, migrations, **repository-implementaties**, logging, API-clients |

## Referenties
API → Contracts, Infrastructure (en Domain); Infrastructure → Domain (en Contracts waar nodig).

## Migrations in Infrastructure
`modelBuilder.ApplyConfigurationsFromAssembly(typeof(CityInfoContext).Assembly);` in `OnModelCreating`; in de Package Manager Console: **Default project = Infrastructure**, **Startup project = API** ([[Migrations]]).

## Gerelateerd
[[Layered architecture]] · [[DTO]] · [[Fluent API]]

---
Hoort bij: [[Layered architecture en Repository pattern]]
