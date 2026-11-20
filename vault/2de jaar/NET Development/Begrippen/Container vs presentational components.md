---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [19]
groep: React front end
aliases: [Smart en dumb components, Container component, Presentational component]
---
# Container vs presentational components

> Separation of concerns in React: **presentational** componenten tonen, **container** componenten regelen data en gedrag.

| | **Presentational** ("dumb") | **Container** ("smart") |
|---|---|---|
| Zorg | **hoe dingen eruit zien** | **hoe dingen werken** |
| Afhankelijkheden | geen met de rest van de app | kennen de applicatielogica |
| Data | ontvangen data **en callbacks uitsluitend via props** | halen data op, bewaren state, geven data en gedrag door |
| Markup | de eigenlijke markup | geen, behalve wrapping `div`s |

## Voorbeeld
`ListScreen` (container: state, `useEffect`, `navigate`) → `WeatherList` (presentational) → `WeatherItem`. `DetailsScreen` (container, `useParams`) → `WeatherDetail`.
```jsx
<WeatherList forecasts={forecasts} onClickIcon={gotoDetails} />
```
## Oefeningen
Een "Loading…"-toestand bij een trage API en een nette boodschap bij een niet-bestaande forecast ([[React - Axios]]).

## Gerelateerd
[[Props]] · [[State (useState)]] · [[Separation of concerns]]

---
Hoort bij: [[React - Axios]]
