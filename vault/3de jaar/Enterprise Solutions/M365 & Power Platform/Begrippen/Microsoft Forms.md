---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [2, 3]
groep: Power Automate
aliases: [Forms, MS Forms]
---
# Microsoft Forms

> De formulier- en enquêtetool van Microsoft 365. Vaak de startplek van een flow: "wanneer iemand een formulier invult, doe dan ...".

## In de oefeningen
- Registratieformulier voor een productdemo op de hub site – zie [[Oefening 2.1 - Hub site Contoso Electronics]].
- Inschrijving voor technische workshops (online of ter plaatse, met bestandsupload) – zie [[Demo 3.4 - Forms-inschrijving met Planner-taak]].

## Gebruik in een flow
1. Trigger: **When a new response is submitted**.
2. Actie: **Get response details** – pas dan zijn alle antwoorden beschikbaar als dynamic content.

## Let op
- Een formulier met een **bestandsupload**-vraag kan enkel binnen je organisatie gebruikt worden (niet anoniem).
- Geüploade bestanden komen automatisch in **OneDrive** terecht.
- Het antwoord van een uploadvraag is een **JSON-array** → gebruik [[Parse JSON]] en daarna *Get file content* om het bestand als bijlage te gebruiken.

## Gerelateerd
[[Trigger]] · [[Parse JSON]] · [[OneDrive]] · [[Microsoft Planner]]

## Meer leren
- [Automatische workflow voor Microsoft Forms](https://support.microsoft.com/en-us/office/create-an-automated-workflow-for-microsoft-forms-dee28c00-503a-48b3-89df-91a5084e6e43)

---
Hoort bij: [[Chapter 2 - M365 & SharePoint building blocks]] · [[Chapter 3 - Power Automate]]
