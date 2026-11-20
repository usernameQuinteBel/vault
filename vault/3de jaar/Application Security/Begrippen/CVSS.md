---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 16
groep: Rapportering
aliases: [Common Vulnerability Scoring System, CVE en NVD]
---
# CVSS

> **Common Vulnerability Scoring System**: een open framework dat de **ernst** van een kwetsbaarheid uitdrukt als een kwalitatieve **score van 0 tot 10**. Let op: het meet **ernst**, niet **risico** (risico = ernst × kans × context). Je berekent het niet met de hand maar met een **calculator** (first.org of de NVD).

## Drie groepen metrics
| Groep | Wat |
|---|---|
| **Base** | de intrinsieke, **constante** kenmerken → levert de 0–10-score |
| **Temporal** | verandert over **tijd**: bestaat er exploitcode, een fix, hoe zeker is de melding? |
| **Environmental** | past de score aan **jouw** omgeving aan |

## Base-metrics (wat de score bepaalt)
- **Exploitability**: Attack Vector (Network/Adjacent/Local/Physical), Attack Complexity (Low/High), Privileges Required (None/Low/High), User Interaction (None/Required).
- **Impact**: Confidentiality, Integrity, Availability (elk None/Low/High).
- **Scope** (Unchanged/Changed): raakt de kwetsbaarheid componenten **buiten** het kwetsbare onderdeel? [[SQL Injection]] is een typisch voorbeeld van **changed scope**: de impact reikt tot de **databaseserver**, een ander component.

## Vector string
Een compacte tekstvorm die alle keuzes samenvat, bv. `CVSS:3.1/AV:N/AC:H/PR:H/UI:N/S:C/C:L/I:H/A:L`. Zo kan iedereen de score reproduceren en nagaan hoe je eraan komt.

Naast CVSS bestaat de **OWASP Risk Rating Methodology** (Risk = Likelihood × Impact), die meer naar **risico** dan naar ernst kijkt.

---
Hoort bij: [[Reporting Vulnerabilities]]
