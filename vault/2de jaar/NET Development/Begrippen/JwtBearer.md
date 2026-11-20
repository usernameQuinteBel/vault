---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [14]
groep: Authenticatie, logging en configuratie
aliases: [Microsoft.AspNetCore.Authentication.JwtBearer, AddJwtBearer, Authority, Audience]
---
# JwtBearer

> De ASP.NET Core-authenticatie die een binnenkomend [[JWT]] valideert; geleverd door NuGet `Microsoft.AspNetCore.Authentication.JwtBearer`.

```csharp
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = "https://YOUR_AUTH0_DOMAIN/";
        options.Audience = "YOUR_AUTH0_API_AUDIENCE";
    });
```
| Instelling | Waar vind je het | Opmerking |
|---|---|---|
| **Authority** | Auth0 → SPA-app → *Settings → Domain* | zet **`https://`** voor het domein |
| **Audience** | de **identifier (URL)** van je .NET API | **exact** dezelfde URL, zonder slash |

De authenticatie-middleware staat in de pipeline vóór autorisatie ([[Middleware]]).

## Gerelateerd
[[Auth0]] · [[Authorize]] · [[Program.cs]] · [[NuGet]]

---
Hoort bij: [[Authentication met Auth0]]
