---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [3]
groep: ASP.NET Core API
aliases: [Application Programming Interface, Endpoint, Endpoints]
---
# API

> Een **Application Programming Interface** is een verzameling **endpoints** waarmee clients via HTTP(S)-requests acties op een database kunnen uitvoeren, zonder te weten hoe de server intern werkt.

## Wie gebruikt een API?
- Single Page Applications (React, Angular, Vue…)
- Mobiele apps (React Native, Flutter…)

```
Client ──GET / POST / PUT / DELETE──► API ──► Database
       ◄────────── JSON / XML ──────────┘
```

## Waarom een API?
- je toepassing communiceert met andere services **zonder te weten hoe die geïmplementeerd zijn**;
- nieuwe componenten integreren wordt eenvoudiger;
- de API werkt als **contract**: requests en responses liggen vast.

**Publieke API's** (Google Maps, Spotify, X, IMDB…) delen data met klanten en externe ontwikkelaars. In dit vak bouw je de **backend voor je eigen applicatie** als **REST – HTTP – JSON** ([[REST API]]).

## Gerelateerd
[[ASP.NET Core]] · [[Controller]] · [[HTTP-methodes]] · [[HTTP-statuscodes]] · [[DTO]]

---
Hoort bij: [[Introductie ASP.NET Core]]
