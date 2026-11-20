---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: [2, 3]
groep: Flutter
aliases: [setState]
---
# State (Flutter)

> De **gegevens die kunnen veranderen** terwijl de app draait en die bepalen wat de UI toont: een ingevuld veld, een teller, de geselecteerde munt, de lijst trips uit Firestore.

## Hoe werkt het?
Flutter is **declaratief**: `UI = f(state)`. Je past de state aan en roept `setState()` aan; Flutter bouwt de betrokken widgets opnieuw op met de nieuwe waarden. Je past de UI dus **nooit** rechtstreeks aan.

## Soorten state
| Soort | Voorbeeld | Hoe beheren? |
|---|---|---|
| **Lokale (ephemeral) state** | geselecteerde tab, tekst in een veld, laadindicator | `setState` in een [[Stateless en stateful widget|StatefulWidget]] |
| **App-/data-state** | ingelogde gebruiker, trips uit Firestore | [[StreamBuilder]], een [[Repository pattern|repository]], eventueel Provider/Riverpod |

## Veelgemaakte fout
Data uit Firestore in een lokale lijst kopiëren en die met `setState` bijhouden → je lijst loopt achter. Beter: de **stream** rechtstreeks tonen met een [[StreamBuilder]].

## Gerelateerd
[[Stateless en stateful widget]] · [[StreamBuilder]] · [[Architectuur en state management]]

---
Hoort bij: [[Flutter aan de slag]]
