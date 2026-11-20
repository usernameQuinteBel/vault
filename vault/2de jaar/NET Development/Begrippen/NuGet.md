---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [3, 5, 14]
groep: ASP.NET Core API
aliases: [NuGet-pakket, NuGet package, PackageReference]
---
# NuGet

> De **pakketbeheerder van .NET**: externe libraries (bv. `Swashbuckle.AspNetCore`, EF Core-pakketten, AutoMapper, Moq) installeer je als NuGet-pakketten; ze verschijnen als `PackageReference` in het `.csproj`.

```xml
<ItemGroup>
  <PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="10.0.2" />
</ItemGroup>
```
## In dit vak
Pakketten voor [[Swagger]], [[Entity Framework Core]] (provider, tools), [[AutoMapper]], [[Mocking (Moq)|Moq]], [[Bogus]], JwtBearer ([[JwtBearer]]) en [[Serilog]]. NuGet is enkel het **distributiemechanisme**, het zegt niets over of iets bij de [[BCL en FCL]] hoort.

## Gerelateerd
[[Assembly]]

---
Hoort bij: [[Introductie ASP.NET Core]]
