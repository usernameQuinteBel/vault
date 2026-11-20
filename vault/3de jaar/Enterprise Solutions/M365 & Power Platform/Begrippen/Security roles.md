---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Beheer & ALM
aliases: [Security role, Rollen, Environment Maker, System Administrator, System Customizer, Basic User]
---
# Security roles

> Rollen in een Power Platform-environment die bepalen wat iemand mag doen: apps maken, data lezen/wijzigen, de environment beheren.

## Belangrijke rollen
| Rol | Mag |
|---|---|
| **Environment Maker** | Resources maken (apps, connections, custom API's, flows) en apps delen met anderen. **Geen** toegang tot data in Dataverse! |
| **Basic User** | Een app draaien en gewone taken uitvoeren op records die hij bezit; toegang tot kern-tabellen (Account, Contact, Activity, ...). Enkel standaardtabellen. |
| **System Customizer** | Nodig (bovenop Environment Maker) om apps te maken die tabellen in de database maken of wijzigen. |
| **System Administrator** | Volledige controle: environment aanpassen en beheren, rollen toewijzen, **alle data** bekijken en wijzigen. |

## Tips
- Een **[[Global admin]]** kan zichzelf in elke environment verhogen tot System Administrator.
- Makkelijkste setup voor het **project**: elke app-ontwikkelaar wordt System Administrator. (In een bedrijf: least privilege!)

## Gerelateerd
[[Environment]] · [[Co-ownership van apps]] · [[Dataverse]] · [[Microsoft Entra ID]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
