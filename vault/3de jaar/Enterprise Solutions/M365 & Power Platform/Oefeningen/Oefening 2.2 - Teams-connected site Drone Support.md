---
type: oefening
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 2
groep: Oefeningen
---
# Oefening 2.2 - Teams-connected site Drone Support

> Maak van de homepage van de Teams-connected site *Drone Support* een handige startpagina voor de helpdeskmedewerkers: nieuws, snelle links, een issuelijst met grafiek en het supportteam.

**Doel:** web parts inzetten voor dagelijks gebruik door een supportteam dat via Teams samenwerkt.

## Op te nemen web parts

### News (filmstrip)
Maak enkele nieuwsberichten, bv. over een nieuw ticketsysteem en een opleiding over AI-troubleshooting, en toon ze als **filmstrip**.

### Quick links
Links naar de kanalen **User manuals** en **Legal regulations** – zie [[Teams-kanalen]].

### List + Quick chart
1. Maak een eigen lijst **Issue Tracking** met kolommen **Issue Title**, **Priority** en **Status**.
2. Voeg voorbeelditems toe (bv. drone maakt geen wifi-verbinding – High – Blocked; batterij laadt niet – Critical – In Progress; vertraging camerabeeld – Normal – Completed).
3. Toon op de homepage **enkel de issues die nog lopen** → maak daarvoor een [[SharePoint views|view]] met een filter en kies die in de List web part.
4. Voeg een **Quick chart** toe met statistieken (bv. aantal issues per prioriteit of status).

### People
1. Voeg enkele extra gebruikers toe aan je M365-tenant (via het [[Microsoft 365 admin center]]).
2. Toon ze als supportteam met hun rol, bv. een diagnose-engineer, een verantwoordelijke voor training en documentatie, en een supporttechnicus voor de AI-functies.

## Tips
- De lijst *Issue Tracking* wordt later in [[Power Automate]] gebruikt (archiveren, arrays) – zie [[Demo 3.3 - Issue Tracking archiveren]]. Hou de kolommen dus netjes.
- Gebruikers toevoegen vraagt licenties – zie [[Licenties]].

## Gebruikte begrippen
[[Teams-connected site]] · [[Web parts]] · [[SharePoint list]] · [[SharePoint views]] · [[Teams-kanalen]]

---
Hoort bij: [[Chapter 2 - M365 & SharePoint building blocks]]
