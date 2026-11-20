---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [16]
groep: React front end
aliases: [Vite template, npm create vite]
---
# Vite

> *Next generation frontend tooling*: de bouwtool om een React-project te maken en te draaien; voor leren en kleine/middelgrote projecten houden we het bij Vite.

```bash
npm create vite@latest lesson1 -- --template react
npm run dev        # http://localhost:5173/
```
## Projectstructuur
| Bestand | Rol |
|---|---|
| `index.html` | bevat `<div id="root"></div>` en `<script type="module" src="/src/main.jsx">` |
| `src/main.jsx` | start de app: `createRoot(document.getElementById('root')).render(...)` |
| `src/index.css` | globale stijlen |
| `src/App.jsx` | hoofdcomponent |
| `src/components/` | **best practice** voor je componenten |
| `vite.config.js` | o.a. alias `'@': '/src'` |

`StrictMode` in `main.jsx` toont geen UI maar activeert extra controles; enkel in development.

Een bouwtool zet [[JSX]] om naar JavaScript (esbuild; vroeger Babel).

## Public vs src
`/public`: afbeeldingen bij de **data** (`/assets/riders/…`). `/src/assets`: **design**-afbeeldingen, via `import logo from '@/assets/logo.png'`.

## Gerelateerd
[[Node en npm]] · [[React]]

---
Hoort bij: [[React - Components]]
