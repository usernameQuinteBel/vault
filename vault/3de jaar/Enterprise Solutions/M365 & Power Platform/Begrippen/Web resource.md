---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: 4
groep: Beheer & ALM
aliases: [Web resources, Image web resource, HTML web resource]
---
# Web resource

> Een bestand (afbeelding, HTML, JavaScript, CSS) dat je in een solution oplaadt om te gebruiken in model-driven apps, bv. een logo of een stukje HTML dat een afbeelding toont.

## Afbeelding als web resource
1. Upload bv. `sitelogo.png` als web resource in je [[Solution]].
2. **Publish** de resource.
3. Voeg ze in een formulier toe met de component **Image web resource**.

## Afbeelding per record tonen (vanuit een URL in een veld)
Model-driven apps tonen een afbeelding uit een URL-veld via een **HTML-web resource met JavaScript**.
1. Maak een **HTML**-web resource (bestand uploaden of code rechtstreeks typen) – in de resources: `loadimage.html`.
2. Het script leest de waarde van het URL-veld via `window.parent.Xrm.Page.getAttribute("<logical name>").getValue()` en zet die als `src` van een `<img>`.
3. Vervang de veldnaam door de **logical name** van jouw veld (zie [[Naamgeving in Dataverse]]) – terug te vinden in de form designer.
4. **Publish**.
5. Voeg in het formulier de component **HTML web resource** toe → **cross-frame scripting** inschakelen en de **recordcontext doorgeven**.

## Voorwaarde
De URL moet naar een **publiek** bereikbare afbeelding wijzen (zonder login).

## Gerelateerd
[[Model-driven app]] · [[Solution]] · [[Naamgeving in Dataverse]] · [[Demo 4.4 - Model-driven app Drone Management]]

---
Hoort bij: [[Chapter 4 - Power Apps]]
