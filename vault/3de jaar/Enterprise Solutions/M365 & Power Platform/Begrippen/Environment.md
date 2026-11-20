---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [3, 4]
groep: Beheer & ALM
aliases: [Environments, Omgeving, Power Platform environment, Trial environment]
---
# Environment

> Een Power Platform-environment is een afgebakende ruimte om data, apps, flows en chatbots van een organisatie op te slaan, te beheren en te delen.

## Waarom meerdere environments?
- **Test vs. productie**: ontwikkelen in een test-omgeving, daarna overzetten.
- **Per team of afdeling**: elk met de eigen data en apps.
- **Isolatie**: wat in de ene gebeurt, heeft geen invloed op de andere.

## Beheer
Via het **Power Platform admin center**: environments aanmaken, capaciteit bekijken, gebruikers en [[Security roles]] toewijzen.

## In de schooltenant
- Elke tenant heeft standaard één actieve **default environment** (met beperkte Dataverse-capaciteit).
- Bij je eerste app kan er automatisch een **developer environment** voor jou aangemaakt worden.
- Je kan **trial-environments** maken, maar die leven maar **30 dagen**. → Voor het project ontwikkel je in de default environment; trials gebruik je om AI-functies te testen.

## Toegang
- Om apps te maken in een environment heb je de rol **Environment Maker** nodig.
- Voor Dataverse-data heb je extra rollen nodig.
- Zie [[Co-ownership van apps]].

## Gerelateerd
[[Security roles]] · [[Co-ownership van apps]] · [[Dataverse]] · [[Solution]] · [[Governance]]

---
Hoort bij: [[Chapter 3 - Power Automate]] · [[Chapter 4 - Power Apps]]
