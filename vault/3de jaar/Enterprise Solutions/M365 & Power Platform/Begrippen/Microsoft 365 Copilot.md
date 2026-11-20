---
type: begrip
vak: Enterprise Solutions
onderdeel: M365 & Power Platform
chapter: [1, 5]
groep: Microsoft 365
aliases: [M365 Copilot, Copilot Chat]
---
# Microsoft 365 Copilot

> De AI-assistent ingebouwd in Microsoft 365. Hij beantwoordt prompts en helpt in Word, Excel, Outlook, Teams, ... op basis van de bedrijfsdata waar de gebruiker toegang toe heeft.

## Hoe werkt het? (architectuur)
1. Een gebruiker typt een prompt in een M365-app.
2. Copilot **verrijkt** de prompt met context uit de tenant via [[Microsoft Graph]] – dit heet [[Grounding]].
3. Alleen data waar **die gebruiker** toegang toe heeft, wordt meegenomen. Data is versleuteld onderweg.
4. De gegronde prompt gaat naar het taalmodel (LLM).
5. Het LLM maakt een antwoord dat relevant is voor de taak.
6. Copilot geeft het antwoord terug in de app.

Copilot is een gedeelde dienst zoals andere M365-diensten: je data blijft binnen de **service boundary** van Microsoft 365 en volgt het beveiligings-, compliance- en privacybeleid dat de organisatie al heeft (bv. in [[Microsoft Entra ID]]).

## Gratis vs. betaald
| Microsoft 365 Copilot **Chat** (gratis bij M365) | Microsoft 365 **Copilot** (betaalde licentie per gebruiker) |
|---|---|
| Te zien als een "zakelijke ChatGPT" | Extra premium functies |
| Zelfde soort GPT-modellen, kan op het web zoeken | Gegrond op bedrijfsdata (Outlook, Teams, SharePoint) |
| | Integratie in de Office-apps |
| | Geavanceerde agents (research/analyst), afbeeldingen, code interpreter |

In de les heb je enkel de **gratis** versie. Zie ook [[Copilot]].

## Uitbreiden
Je kan Copilot specialiseren met agents uit [[Copilot Studio]] – bv. een [[Declarative agent]].

## Gerelateerd
[[Copilot]] · [[Microsoft Graph]] · [[Grounding]] · [[Copilot Studio]] · [[AI agent]] · [[Microsoft 365]]

## Meer leren
- [Architectuur van Microsoft 365 Copilot](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-architecture)

---
Hoort bij: [[Chapter 1 - Introductie & setup]] · [[Chapter 5 - Copilot Studio]]
