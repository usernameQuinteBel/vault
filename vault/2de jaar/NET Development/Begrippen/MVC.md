---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [3, 4]
groep: ASP.NET Core API
aliases: [Model-View-Controller, Model View Controller]
---
# MVC

> **Model – View – Controller**: architecturaal patroon dat **separation of concerns**, **testbaarheid** en **herbruikbaarheid** verbetert door model, weergave en invoerafhandeling te scheiden.

| Onderdeel | In onze API |
|---|---|
| **Model** | applicatiedata en/of businesslogica en -regels; data opslaan/ophalen |
| **View** | de weergave van de modeldata, bij een API de **JSON-representatie** van de resource |
| **Controller** | neemt input van de gebruiker aan en vertaalt die naar modeldata die de view kan gebruiken |

De controller kiest welke view/data de consument krijgt ([[Controller]]).

## In de cursus
ASP.NET Core MVC (met controllers) is de gekozen aanpak, naast Minimal API ([[ASP.NET Core]]).

## Gerelateerd
[[Separation of concerns]] · [[Routing]]

---
Hoort bij: [[Een API maken en resources teruggeven]]
