---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 2
groep: Methodologie
aliases: [Software Development Life Cycle, Secure SDLC, Shift left]
---
# SDLC

> **Software Development Life Cycle**: de fasen die elk softwareproject doorloopt. Elk ontwikkelmodel (waterfall, iterative, agile, V-model, big bang) deelt dezelfde kern; ze verschillen vooral in hoe vaak en in welke volgorde ze de fasen doorlopen.

| Fase | Security-activiteit (kort) |
|---|---|
| Vóór development | policies, standaarden, metrics |
| Definitie & design | requirements-, design- en UML-review, [[Threat modeling]] |
| Development | code walkthrough, code review |
| Deployment | pentest, configuratietest |
| Onderhoud & operaties | health checks, change verification |

## Shift left
De kernboodschap: **hoe vroeger** in de SDLC je security aanpakt, **hoe goedkoper** fouten zijn om op te lossen. Security is dus geen eindfase maar een eigenschap van elke fase. Details per fase: [[Phases of SDLC and Testing Methodology]].

## Voorbeelden van shift left in de praktijk
| Fase | Concreet |
|---|---|
| requirements | security-eisen opnemen ("wachtwoorden gehasht met Argon2", "rate limiting op login") |
| design | [[Threat modeling]] (bv. STRIDE) op het architectuurschema |
| development | secure coding guidelines, code reviews, **SAST**-tools in de IDE/CI |
| testen | **DAST**, dependency scanning, [[Pentest]] |
| deployment | hardening, secrets management, configuratiechecks |
| onderhoud | patchen, monitoring, incident response |

## Waarom goedkoper?
Een fout in het design (bv. geen autorisatielaag) vraagt na de release een herwerking van grote delen van de app; tijdens het design kost het een gesprek en een schets. Hoe later, hoe meer code, tests en klanten geraakt worden.

---
Hoort bij: [[Phases of SDLC and Testing Methodology]]
