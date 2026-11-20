---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [11, 15]
groep: Testing, DI en architectuur
aliases: [Strategy, Strategie-patroon]
---
# Strategy pattern

> Een patroon waarbij je **tijdens runtime** tussen verschillende implementaties van dezelfde interface wisselt op basis van code (bv. gebruikersvoorkeuren uit een database).

- Elke strategie implementeert dezelfde **interface** ([[Interface als contract]]); de gebruiker van de interface weet niet welke strategie draait ([[Polymorfisme]]).
- **Kiezen via configuratie of omgeving is geen echte strategy**: dat is gewoon een andere registratie in DI ([[Mailservice (strategie)]]).
- In de MotoGP-oefening wordt de race-duration via een strategie berekend ([[MotoGP - Race duration (Strategy Pattern)]]).

## Tips
- AutoMapper-profiles kunnen geen services via DI krijgen: injecteer de strategie in de controller ([[Mapping profile]]).
- Elke strategie kan je apart unit-testen ([[Unit test]]).

## Gerelateerd
[[Dependency Injection (les)]] · [[Service lifetimes]]

---
Hoort bij: [[Dependency Injection (les)]]
