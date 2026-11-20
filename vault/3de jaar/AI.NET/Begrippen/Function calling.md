---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 11
groep: Agent
aliases: [Tool calling]
---
# Function calling

> Het mechanisme waarbij het **taalmodel** beslist een **functie van je app** aan te roepen, op basis van de vraag van de gebruiker en de beschrijving van elke beschikbare [[Tool (AI-agent)|tool]].

## Het verloop stap voor stap
1. Gebruiker: *"Doe de lamp in de keuken aan."*
2. Het framework stuurt de vraag **+ de lijst beschikbare functies** (naam, beschrijving, parameters) naar het model.
3. Het model antwoordt niet met tekst maar met: *"roep `TurnOnLight(room: "keuken")` aan"*.
4. Het framework **voert de C#-functie uit**.
5. Het resultaat ("Lamp keuken staat aan") gaat **terug naar het model**.
6. Het model formuleert het eindantwoord: *"De lamp in de keuken staat nu aan."*

## Waarom zijn goede beschrijvingen zo belangrijk?
Het model kent je code niet, enkel de **naam, de `[Description]` en de parameters**. Een vage beschrijving = het model roept de functie niet aan, of de verkeerde.

## Voorbeeld van een goede functie
```csharp
[Description("Turns a light on or off. Use GetLights first to find the id.")]
public string SetLightState(
    [Description("The id of the light")] int id,
    [Description("true = on, false = off")] bool isOn) { ... }
```
- Parameterbeschrijvingen helpen het model de juiste waarden te kiezen.
- Het model kan **meerdere** functies na elkaar aanroepen (eerst `GetLights`, dan `SetLightState`).

## Wat als het misloopt?
| Probleem | Oplossing |
|---|---|
| model roept de functie nooit aan | duidelijkere `Description`, functie geregistreerd? |
| verkeerde parameters | beschrijf eenheid/formaat ("latitude in decimal degrees") |
| exception in je functie | vang op en geef een **foutstring** terug, zodat het model het netjes kan melden |
| gevaarlijke actie | vraag eerst bevestiging (human-in-the-loop) |

## Gerelateerd
[[Tool (AI-agent)]] · [[Tools (Agent Framework)]]

---
Hoort bij: [[Tools (Agent Framework)]]
