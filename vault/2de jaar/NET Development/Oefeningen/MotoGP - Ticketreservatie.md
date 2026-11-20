---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 8
groep: Oefeningen
---
# MotoGP - Ticketreservatie 📝

> Deel 7 van [[MotoGP - Overzicht|MotoGP]]: een eenvoudig **ticketboekingssysteem**, met een `Ticket`-entiteit, GET/POST/PATCH-endpoints in de API en een bestel- en betaalscherm in React.

## 1. Back-end
### Ticket-entiteit
| Veld | Type / eis |
|---|---|
| `Id` | primary key, auto number |
| `Name`, `Email`, `Address` | `string` (geen maxlength) |
| `CountryId`, `RaceId` | foreign keys + navigation properties aan **beide kanten** |
| `Number` | `int` (aantal tickets) |
| `OrderDate` | `DateTime` |
| `Paid` | `bool` |

Alle velden verplicht, constructor met `name`. `DbSet` + testdata (resources) toevoegen, migration **`AddTickets`** maken en toepassen.

### Endpoints
| Controller | Methode | Eis |
|---|---|---|
| `CountriesController` | `GetCountries()` | alle landen **gesorteerd op `Name`**, via `CountryListDto` + mapping |
| `TicketsController` | `GetTickets()` | alle tickets **gesorteerd op `OrderDate`**, `TicketListDto` |
| `TicketsController` | `GetTicket()` | één ticket, `TicketDetailsDto` (mappings in `TicketProfile.cs`) |
| `TicketsController` | POST | nieuw ticket via **`TicketForCreationDto`** |
| `TicketsController` | PATCH | enkel **`Paid`** wijzigen via **`TicketForPatchDto`** |

### Eisen voor POST
- Contract: `name`, `email`, `address`, `countryId`, `raceId`, `number`. Alles verplicht; foutmelding **"… is required."** (tip: `{0}` in de `ErrorMessage`) ([[Model validation]], [[Creation-, update- en patch-DTO]]).
- `OrderDate` en `Paid` zitten **niet** in het contract: zet `OrderDate` op de huidige datum en `Paid` op `false`.
- Controleer eerst of `countryId` en `raceId` bestaan; zo niet → **BadRequest** met "Race/Country with Id … does not exist.".
- In de response moeten `RaceName` en `ShortRaceDate` ingevuld zijn: laad de gerelateerde `Race` **expliciet** vóór je het object teruggeeft ([[Include en loading]]).

### Eisen voor PATCH
`TicketForPatchDto` bevat enkel het verplichte `Paid`; een methode om een ticket **gedeeltelijk** bij te werken zodat `Paid` op `true` komt ([[PUT vs PATCH]]).

## 2. Front-end
1. Kopieer de map `tickets` uit de resources naar `components` (`OrderScreen` en `TicketsScreen`).
2. Maak in `api` de service classes **`CountriesService`** en **`TicketsService`**. Voor POST en PATCH geeft de opgave deze code:
```js
placeOrder(orderData) {
    return apiClient.post('/tickets', orderData);
},
registerPayment(ticketId) {
    const patchData = { paid: true };
    return apiClient.patch(`/tickets/${ticketId}`, patchData);
}
```
3. **Routes**: in de layout een extra link **Tickets** (rechts naast Home) naar `/list_tickets`; declareer de routes in `App.jsx` naar `OrderScreen` (`/order_tickets`) en `TicketsScreen`.
4. **TicketsScreen** (container) met `TicketsList` en `TicketItem` (presentational): lijst van alle tickets met een **Pay**-knop bij onbetaalde tickets; na een klik wordt `Paid` true en verschijnt de nieuwe lijst.
5. **OrderScreen**:
   - state `countries` en `races` vullen via async functies in [[useEffect]];
   - `handleOrder()` plaatst de bestelling en vult `orderConfirmation` met de response;
   - toon `OrderConfirmation` als `orderConfirmation` gevuld is, anders `OrderForm`.
6. **OrderForm**: velden `email` en `address` toevoegen; alle velden **gecontroleerd door React** ([[Controlled component]], *single source of truth*); een `option` per land en een **radio button per race**; in `handleSubmit()` eerst het **standaardgedrag van het formulier onderbreken**.
7. **OrderConfirmation**: de responsedata tonen; *Place Another Order* reset `orderConfirmation`.
8. Test en controleer in de database of de bestelling geregistreerd is.

## Begrippen
[[Creation-, update- en patch-DTO]] · [[Model validation]] · [[CreatedAtAction]] · [[PUT vs PATCH]] · [[Include en loading]] · [[Service class en apiClient]] · [[Controlled component]] · [[Lifting state up]] · [[Container vs presentational components]]

---
Hoort bij: [[EF Core - POST, PUT, PATCH en DELETE]]
