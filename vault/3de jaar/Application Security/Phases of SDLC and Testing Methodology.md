---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 2
groep: Methode en omgeving
---
# Phases of SDLC and Testing Methodology

Twee ideeën in één hoofdstuk. **Eerst**: security hoort **niet** enkel op het einde getest te worden, maar in **elke fase** van de [[SDLC-fases en security|SDLC]] ingebouwd. **Daarna**: hoe test je een app volledig zonder iets te vergeten? Met een methodologie, de [[OWASP WSTG]].

## Waarom security in élke fase? (shift left)
Een fout **vroeg** gevonden is goedkoop; **laat** gevonden is duur.

| Gevonden tijdens… | Kost om te herstellen |
|---|---|
| Ontwerp | een aangepast diagram |
| Development | wat code herschrijven |
| Na release | een uitgebuite database, een patch onder tijdsdruk, verloren vertrouwen |

Dit "zo vroeg mogelijk testen" heet **shift left**. Als auditor kom je meestal laat in de cyclus — net daarom is je rapport vaak het moment waarop het team leert wat er vroeger misliep.

## De vijf fasen met hun securityactiviteiten
| Fase | Activiteiten |
|---|---|
| **1. Vóór de ontwikkeling** | Een SDLC-framework met security in **elke** fase; policies, standaarden en documentatie; **codeerstandaarden** (bv. een Java secure coding standard); een **meetprogramma** met vooraf bepaalde criteria om defecten in proces én product te volgen |
| **2. Definitie & ontwerp** | **2.1** Security requirements reviewen (duidelijk en volledig? user management, authenticatie, autorisatie, data-integriteit, sessies, wetgeving) · **2.2** Design en architectuur reviewen (bv. autorisatie en validatie **centraliseren**) · **2.3** UML-modellen maken en reviewen · **2.4** [[Threat modeling|Threat models]] opstellen en reviewen |
| **3. Ontwikkeling** | **3.1 Code walkthrough**: high-level overloop van logica en structuur sámen met de developers · **3.2 Code review**: statische analyse tegen de requirements, OWASP-richtlijnen, taal/framework-specifieke regels en sectorwetgeving (Sarbanes-Oxley, HIPAA) |
| **4. Deployment** | **4.1 Penetration test** van de uitgerolde app (extra zekerheid) · **4.2 Configuration management testing**: infrastructuur en configuratie, geen default-instellingen laten staan |
| **5. Onderhoud & operaties** | **5.1** Operational management reviews · **5.2** Periodieke **health checks** (maandelijks/per kwartaal) · **5.3 Change verification**: na elke wijziging controleren dat security niet verslechterde |

De SDLC-modellen zelf (waterfall, iterative, agile, V-model, big bang) ken je uit Security Essentials; ze delen allemaal deze fasen. Zie [[SDLC-fases en security|SDLC]].

## Hoe test je zonder iets te vergeten?
Volg een **bewezen methodologie**, ga systematisch alles af wat je kan testen, en gebruik het testadvies dat de methodologie geeft. In dit vak: de [[OWASP WSTG]] (passief informatie verzamelen + actief testen per categorie), vereenvoudigd tot de [[Pentest|vier fasen]].

## Begrippen
[[SDLC-fases en security|SDLC]] · [[Threat modeling]] · [[OWASP WSTG]] · [[Pentest]]

---
Hoort bij: [[Application Security]]
