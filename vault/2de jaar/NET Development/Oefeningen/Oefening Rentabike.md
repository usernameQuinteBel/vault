---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 1
groep: Oefeningen
---
# Oefening Rentabike 📝

> Introductie-oefening objectoriëntatie: een **Windows Forms-app** voor fietsverhuur "Rentabike" met een basisklasse `Material`, een afgeleide klasse `Bike` en een klasse `BikeRental`. Oefent [[OOP]], [[Overerving]] en [[Polymorfisme]] uit [[CSharp basis en OOP|C# basis en OOP]].

## Opbouw
| Deel | Wat | Belangrijkste eisen |
|---|---|---|
| 1 | **Form** (presentatielaag) | elke control een duidelijke naam in **camelCasing**, bv. `textBoxSerialNumber` (geen underscores) |
| 2 | **`Material`** (basisklasse) | `SerialNumber` + `Description` (lezen én wijzigen), constructor met beide, `ReturnRentalPrice()` → **100 euro** |
| 3 | **`Bike : Material`** | extra property `Code` (cijferslot, willekeurig **100–999**, **enkel opvraagbaar**), zelfde constructor, prijs **20% hoger** dan `Material`, `ToString()` overschrijven |
| 4 | **`BikeRental`** | lijst `OverviewRentals` (**enkel lezen** van buitenaf), `RegisterRent` (geen dubbele op serienummer), `DeregisterRent` |
| 5 | **Code-behind** van het form | huren, tonen in de listbox, terugbrengen |
| 6 | **Extra's** | exception bij dubbele huur + messagebox; alternatief met een **event** |

## Aanpak
1. Ontwerp het form met de Toolbox: tekstvakken voor serienummer en beschrijving, knoppen *Rent a bike* en *Return rented bike*, een listbox.
2. Maak `Material` met twee [[Property (CSharp)|properties]] en een [[Constructor (CSharp)|constructor]]; maak `ReturnRentalPrice()` overschrijfbaar ([[Abstract en virtual|virtual]]).
3. Laat `Bike` erven van `Material`; roep de basisconstructor aan en ken `Code` automatisch een willekeurig getal toe. Geef `Code` geen publieke setter ([[Encapsulatie]]).
4. Overschrijf `ReturnRentalPrice()` (prijs van de basis × 1,2) en `ToString()` (serienummer, beschrijving, code en prijs).
5. In `BikeRental`: de lijst enkel naar buiten tonen, `RegisterRent` controleert eerst of het **serienummer** al in de lijst staat.
6. Code-behind: bij *Rent a bike* een `Bike` maken, registreren en de listbox verversen; bij *Return rented bike* het geselecteerde item verwijderen zodat de fiets opnieuw gehuurd kan worden.
7. Extra: gooi een [[Exceptions (CSharp)|exception]] bij een dubbele registratie en vang ze in het form op met een messagebox ("fiets niet beschikbaar"). Daarna hetzelfde gedrag via een [[Events (CSharp)|event]].

## Verwacht resultaat
Serienummer `001`, beschrijving *Urban Lady Bike* → de listbox toont alle gegevens, ook de willekeurige code (bv. 930) en de huurprijs (**120**).

## Valkuilen
- Naamgeving: **camelCasing** voor controls en variabelen, **PascalCasing** voor publieke methodes, klassen en properties.
- Controleer dubbele fietsen op **serienummer**, niet op objectreferentie.
- `Code` en `OverviewRentals` mogen van buitenaf niet gewijzigd worden.

## Begrippen
[[OOP]] · [[Overerving]] · [[Polymorfisme]] · [[Encapsulatie]] · [[Constructor (CSharp)|Constructor (C#)]] · [[Property (CSharp)|Property (C#)]] · [[Exceptions (CSharp)|Exceptions (C#)]] · [[Events (CSharp)|Events (C#)]]

---
Hoort bij: [[CSharp basis en OOP|C# basis en OOP]]
