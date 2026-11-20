---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [13, 19]
groep: API uitbreiden
aliases: [Cross-Origin Resource Sharing, WithExposedHeaders, Origin]
---
# CORS

> **Cross-Origin Resource Sharing**: een **browsermechanisme** (security) dat toegang tot resources van een **andere origin** regelt. Zonder CORS-configuratie blokkeert de browser calls van je React-app (`http://localhost:5173`) naar je API.

Typische fout in de console: *"Access to XMLHttpRequest at 'https://localhost:7111/api/forecasts' from origin 'http://localhost:5173' has been blocked by CORS policy…"*

## Wat is een origin?
Zelfde origin = **protocol, domein en poort** identiek.
| URL 1 | URL 2 | Zelfde origin? |
|---|---|---|
| `https://example.com/foo.html` | `https://example.com/bar.html` | **Ja** |
| `https://example.com/foo.html` | `https://example.net` | Nee, ander domein |
| `https://example.com/foo.html` | `https://contoso.example.com/foo.html` | Nee, ander subdomein |
| `https://example.com/foo.html` | `http://example.com/foo.html` | Nee, ander protocol |
| `https://example.com/foo.html` | `https://example.com:9000/foo.html` | Nee, andere poort |

## Eén origin toelaten (KMI-API)
```csharp
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
        builder.WithOrigins("http://localhost:5173")
               .AllowAnyHeader()
               .AllowAnyMethod());
});

var app = builder.Build();
app.UseHttpsRedirection();
app.UseCors();            // vóór UseAuthorization
app.UseAuthorization();
```
**Veiliger** is enkel toe te laten wat de API nodig heeft: `.WithMethods("GET", "POST")` en `.WithHeaders("Content-Type", "Authorization", "X-API-Key")`.

## Pagination-header zichtbaar maken (MotoGP)
```csharp
builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().WithExposedHeaders("X-Pagination");
```
Zonder `WithExposedHeaders("X-Pagination")` ziet de browser-client de header niet ([[Pagination metadata]]).

## Let op
- CORS is een **middleware** in [[Program.cs]] ([[Middleware]]).
- De oplossing zit **in de API**, niet in React ([[React - Axios]]).

## Gerelateerd
[[Axios]] · [[API]] · [[Paging]]

---
Hoort bij: [[React - Axios]]
