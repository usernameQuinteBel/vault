---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Beheer & ALM
aliases: [Co-ownership, Samenwerken aan apps, Co-owner app]
---
# Co-ownership van apps

> Hoe je met meerdere mensen aan dezelfde app werkt: toegang tot de environment, de app delen als co-owner, en de data-rechten apart regelen.

## Stappenplan
1. **Environment kiezen** – bij het maken van een app kies je de environment. Check welke er zijn in het Power Platform admin center.
2. **Toegang tot de environment** – de System Administrator van die environment voegt de collega toe als gebruiker met de rol **Environment Maker** (Power Platform admin center → environment → Users).
3. De collega kan nu **apps maken** in die environment.
4. **App delen** met de collega als **co-owner** → de app verschijnt bij hem onder *Shared with me* en hij kan ze bewerken.
5. **Data-toegang** apart regelen:
   - SharePoint/OneDrive → rechten in die apps.
   - Dataverse → [[Security roles|security role]] (Basic User, System Customizer of System Administrator).

## Let op
- Er kan maar **één persoon tegelijk** een canvas app bewerken; de andere moet wachten.
- Een environment met Dataverse wordt beheerd door een **System Administrator** (vaak de persoon die ze maakte). Een global admin kan zich die rol altijd geven.

## Gerelateerd
[[Environment]] · [[Security roles]] · [[Apps publiceren en delen]] · [[Flows delen en exporteren]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
