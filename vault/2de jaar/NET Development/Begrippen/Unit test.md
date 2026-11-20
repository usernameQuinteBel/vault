---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10]
groep: Testing, DI en architectuur
aliases: [Unit testing, Unit tests, Automated testing]
---
# Unit test

> Een **unit test** controleert één klein stukje logica (functie, methode, klasse) **geïsoleerd**, zonder database, bestand of netwerk, en checkt of het werkt zoals verwacht.

## Waarom?
- bugs **vroeg** ontdekken (lagere kost van bugfixing later);
- je moet nadenken over wat er **fout kan lopen**;
- creëert een **kwaliteitsmindset**; tests zijn een vangnet tegen regressies.

## Testniveaus
| Niveau | Wie / hoe | Doel |
|---|---|---|
| **Unit testing** | developers, white box | individuele componenten |
| [[Integration test]] | testers, black box | samenwerking tussen modules |
| **System testing** | testers | volledige applicatie, functioneel én niet-functioneel |

## Een unit test mag niet
een database aanspreken, HTTP-calls doen, bestanden lezen, afhangen van systeemtijd of externe services. Zodra infrastructuur meespeelt is het geen unit test meer.

## Principes
| Principe | Betekenis |
|---|---|
| **Isolatie** | geen gedeelde state, geen volgorde-afhankelijkheid; tests kunnen alleen, parallel en in willekeurige volgorde draaien |
| **Deterministisch** | altijd hetzelfde resultaat: vermijd `DateTime.Now`, random, omgevingsvariabelen |
| **Eén gedrag per test** | leest als documentatie |
| **Async** | testmethode geeft `Task` terug en `await`; nooit `.Result`/`.Wait()` ([[Async en await]]) |

## Automated vs manual
Automatisch: duur om op te zetten maar sneller voor herhaalde tests. Manueel: exploratief, door ervaren testers.

## Gerelateerd
[[Arrange-Act-Assert]] · [[MSTest en xUnit]] · [[Assert]] · [[Mocking (Moq)]] · [[TDD]]

---
Hoort bij: [[Unit testing en TDD]]
