---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 18
groep: Oefeningen
---
# MotoGP - React front-end opzetten 📝

> Deel 5 van [[MotoGP - Overzicht|MotoGP]]: de React-app `motogp` als [[SPA]] opzetten, met een globale layout, een hoofdmenu en navigatie via [[React Router]].

## Opzet
```bash
npm create vite@latest motogp -- --template react
```
Daarna de dependencies installeren, **React Router** installeren en de app starten ([[Vite]], [[Node en npm]]).

## Bestanden uit de resources
Kopieer alles naar de root van het project (bestaande bestanden overschrijven, eventueel de dev-server herstarten).

| Bestand / map | Inhoud |
|---|---|
| `index.html` | link naar de **Bootstrap**-stylesheet |
| `/public/assets/flags`, `/races`, `/riders`, `/sponsors`, `/teams` | afbeeldingen bij de **data** uit de API, bv. `` <img src={`/assets/riders/${rider.number}.jpg`} /> `` |
| `vite.config.js` | mapping zodat `@` verwijst naar `/src` |
| `/src/assets` | afbeeldingen voor het **design** (knoppen, menu), bv. `import logoImage from '@/assets/logo.png';` |
| `/src/App.jsx` | root component met **`BrowserRouter`** |
| `/src/index.css` | stylesheet voor `App.jsx` (`App.css` mag weg) |
| `components/layout_template.jsx` | layout met props **`children`** en **`title`**: elk scherm in `<Layout title="…">…</Layout>` |
| `components/menu/home_screen.jsx` (+ `.module.css`) | startpagina met groot MotoGP-logo |
| `components/menu/menu_screen.module.css` | stijl voor het hoofdmenu |

## Aanpak
1. Maak in `components/menu` een **`MenuScreen`** (`menu_screen.jsx`): importeer layout, de vier afbeeldingen en de stylesheet; inhoud in `Layout` (zonder titel); alle afbeeldingen in één `<div>` met `styles.containerCentered`, elke afbeelding in een `<div>` met `styles.cell` ([[Styling in React]]).
2. Test het ontwerp door `MenuScreen` tijdelijk als startcomponent te gebruiken.
3. Maak `HomeScreen` weer het startscherm en voeg routes toe: klik op het logo → route **`/menu`**.
4. Maak de vier afbeeldingen al klikbaar naar `/list_races`, `/list_teams`, `/list_riders` en de ticketroute (die bestaan nog niet → leeg scherm).

## Valkuilen
- Gebruik **geen `<a href…>`** voor interne navigatie: het is een SPA, gebruik React Router.
- `/public`-afbeeldingen horen bij de **data**, `/src/assets`-afbeeldingen bij het **design**.
- De ticketroute heet in deze opgave `/order/tickets`, maar in [[MotoGP - Ticketreservatie]] `/order_tickets`. Kies één naam en gebruik die overal.

## Begrippen
[[SPA]] · [[Vite]] · [[React Router]] · [[Component]] · [[Props]] · [[Styling in React]] · [[NavLink]]

---
Hoort bij: [[React - Single Page Applications]]
