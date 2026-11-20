---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 2
groep: Methodologie
aliases: [Threat model, STRIDE]
---
# Threat modeling

> Op basis van het **design, de architectuur en UML-modellen** realistische **dreigingsscenario's** opstellen en per scenario nagaan hoe het ontwerp het **mitigeert, aanvaardt of uitbesteedt**. Heeft een dreiging geen mitigatie, dan pas je samen met de architect het ontwerp aan.

## Waarom en wanneer?
Gebeurt in de **ontwerpfase** van de [[SDLC-fases en security|SDLC]], dus nog **vóór** er code is. Je pakt kwetsbaarheden dus **proactief** aan, wanneer aanpassen nog goedkoop is (een aangepast diagram i.p.v. een herschreven en opnieuw geteste codebase).

## Werkwijze (algemene aanpak)
1. **Decompose**: teken hoe data door de app stroomt (dataflowdiagram): entry points, vertrouwensgrenzen, datastores.
2. **Identify threats**: loop per onderdeel de dreigingen af, vaak met **STRIDE** als geheugensteun:
   - **S**poofing (identiteit vervalsen) · **T**ampering (data manipuleren) · **R**epudiation (ontkennen) · **I**nformation disclosure · **D**enial of service · **E**levation of privilege.
3. **Mitigate**: per dreiging een maatregel kiezen, of het risico bewust aanvaarden/uitbesteden.
4. **Validate**: controleren dat elke dreiging gedekt is.

---
Hoort bij: [[Phases of SDLC and Testing Methodology]]
