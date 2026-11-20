---
type: demo
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 2
groep: Oefeningen
---
# Demo 2.1 - Sites, Teams en hub opzetten

> Stappen uit de les om de basisstructuur van een intranet op te zetten: een team site, een team met kanalen, een communication site als hub, en alles koppelen. Dit vormt de basis voor alle volgende oefeningen.

**Doel:** begrijpen hoe SharePoint-sites, Teams en Microsoft 365-groepen samenhangen, en een intranet opbouwen.

**Tip:** gebruik overal een unieke naam – zie [[Naamgeving in een gedeelde tenant]].

## Stap 1 – Team site *Innovation Lab*
1. SharePoint admin center → **Active sites → Create** → **Team site** (standaardsjabloon).
2. Merk op: automatisch is een **[[Microsoft 365 group]]** *Innovation Lab* aangemaakt.
3. In het admin center voeg je mensen toe als **owner, member of visitor**. Bv. een teamlid krijgt enkel bewerkrechten. Controleer de rechten in de site zelf.
4. Bekijk de groepsmailbox: in de site via **Conversations**, of in Outlook onder **Groups**.

## Stap 2 – Team *Drone Support*
1. **Teams admin center → Teams → Manage teams → Add** → team *Drone Support*.
2. Er is meteen een kanaal **General**. In een kanaal kan je berichten posten, bestanden opslaan, ...
3. Automatisch aangemaakt: een M365-groep *Drone Support* én een **[[Teams-connected site]]**. De bibliotheek *Documents* is de hoofdopslag.

## Stap 3 – Kanalen toevoegen (zie [[Teams-kanalen]])
| Kanaal | Type | Gevolg |
|---|---|---|
| Legal regulations | Standaard | Submap in *Documents* van de Drone Support-site |
| Drone detection software | Privé | Aparte channel site, enkel leden van het team kunnen toegang krijgen |
| User manuals | Gedeeld | Aparte channel site, ook externen kunnen erbij |

## Stap 4 – Communication site *Contoso Electronics*
1. Nieuwe **[[Communication site]]**, sjabloon *Standard communication*.
2. **Settings → Change the look → Header** om het uitzicht aan te passen (logo: `sitelogo.png` uit de resources).

## Stap 5 – Hub en associaties
1. Registreer *Contoso Electronics* als **[[Hub site]]** in het SharePoint admin center.
2. Associeer *Drone Support* met de hub → de hub-navigatiebalk verschijnt; voeg een link naar Drone Support toe.
3. Associeer ook *Innovation Lab*.
4. Resultaat: de hub werkt als **[[Intranet]]**.

## Resultaat (architectuur)
Zie [[Flat architecture]]: alle sites staan naast elkaar, de hub brengt ze samen.

## Gebruikte begrippen
[[SharePoint site]] · [[Team site]] · [[Communication site]] · [[Hub site]] · [[Microsoft Teams]] · [[Teams-kanalen]] · [[Microsoft 365 group]] · [[Teams-connected site]]

---
Hoort bij: [[Chapter 2 - M365 & SharePoint building blocks]]
