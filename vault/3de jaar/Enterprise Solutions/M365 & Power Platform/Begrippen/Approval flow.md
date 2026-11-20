---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [2, 3]
groep: Power Automate
aliases: [Approvals, Goedkeuringsflow, Approval workflow]
---
# Approval flow

> Een flow die automatisch iemand om goedkeuring vraagt (via Outlook en de Approvals-app in Teams), wacht op het antwoord en daarna de juiste acties uitvoert.

## Soorten goedkeuringen
| Type | Werking |
|---|---|
| **Basic** (approve/reject) | Eén goedkeurder, eenvoudige beslissing |
| **Everyone must approve** | Alle aangewezen goedkeurders moeten akkoord gaan |
| **First to respond** | Meerdere goedkeurders, het eerste antwoord telt |
| **Custom responses** | Eigen antwoorden, bv. Ja / Nee / Meer info |

## Goedkeuring van documenten in SharePoint (demo)
1. Zet in de bibliotheek **[[Content approval]]** aan (Versioning settings). Er komt een kolom *Approval status*.
2. Start vanuit een **approval-template** (of vanuit het bibliotheekmenu). Vul de vereiste parameters in: site-adres, bibliotheek, type goedkeuring, titel, toegewezen persoon, ...
3. Trigger: *When a new file is added*.
4. Actie: **Start and wait for an approval**.
5. **Belangrijk**: na approve/reject wordt de statuskolom **niet automatisch** bijgewerkt. Daarvoor heb je de actie **Set content approval status** nodig.
6. Die actie vraagt een **[[ETag]]**, die je eerst moet ophalen met **Get file metadata**.

## Waar keur je goed?
In **Outlook** (actionable mail) of in de **Approvals-app in Teams**. Keur je in het ene goed, dan meldt het andere dat de aanvraag al afgehandeld is.

## Lichte variant zonder Power Automate
In de bibliotheek: **Integrate → Approvals → Enable approvals** (of *Request sign-off*) → manueel goedkeuring vragen; de aanvraag verschijnt in Teams en de status komt in een kolom.

## Gerelateerd
[[Content approval]] · [[ETag]] · [[Trigger conditions]] · [[Versiebeheer]] · [[Demo 3.2 - Goedkeuringsflow voor documenten]]

---
Hoort bij: [[Chapter 2 - M365 & SharePoint building blocks]] · [[Chapter 3 - Power Automate]]
