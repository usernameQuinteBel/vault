# Cursus Vault

Kennisbank van de vakken uit IT Factory (Thomas More Geel), geschreven als Obsidian-vault én online te bekijken als **groeiende 3D-kennisgraaf**.

## Gebruiken
1. Clone deze repo.
2. Open de map `vault/` in [Obsidian](https://obsidian.md) via **Open folder as vault**.
3. Of bekijk de kennisgraaf online (GitHub Pages, zie hieronder).

## Inhoud
| Jaar | Vak |
|---|---|
| 3de jaar | Enterprise Solutions · UI UX · Application Security · AI.NET · Mobile & AR Development |
| 2de jaar | _volgt_ |
| 1ste jaar | _volgt_ |

## Structuur
```
vault/
├── IT Factory.md                  ← opleiding (root van de graaf)
└── <jaar>/                        ← bv. "3de jaar"
    ├── <jaar>.md
    ├── <Vak>.md                   ← overzicht van een vak
    └── <Vak>/
        ├── <chapters>.md
        ├── Begrippen/
        └── Oefeningen/
site/                              ← de 3D-kennisgraaf (website)
```

## De 3D-kennisgraaf (site/)
De site leest **automatisch** alle notities in `vault/` en bouwt er een graaf van:
- elk `.md`-bestand = een bolletje, elke `[[link]]` = een verbinding;
- kleur = vak, grootte = type (jaar › vak › chapter › begrip);
- het **jaar** komt uit de map (`vault/1ste jaar/...`, `vault/2de jaar/...`), dus nieuwe jaren en vakken verschijnen vanzelf;
- de graaf **groeit** vanaf de root, bolletje per bolletje, en de camera volgt telkens het nieuwste;
- klik op een bolletje (of zoek met `/`) om de notitie te lezen; `?term=widget` in de URL opent meteen een begrip.

Sneltoetsen: `spatie` pauze/verder · `F` camera volgen aan/uit · `/` zoeken · `Esc` paneel sluiten.

### Lokaal bekijken
```bash
cd site
npm install
npm run dev        # http://localhost:8000
```

### Online zetten (eenmalig)
1. Push naar GitHub (branch `main`).
2. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Elke push die iets in `vault/` of `site/` wijzigt, bouwt en publiceert de site opnieuw (`.github/workflows/site.yml`).

> Let op: een GitHub Pages-site is **openbaar**, ook als de repo privé is (en Pages vanuit een privé-repo vraagt GitHub Pro, gratis via het GitHub Student Developer Pack).

## Soorten notities
- **begrip** – uitleg in eigen woorden: wat, waarom, hoe, voorbeelden, valkuilen, links.
- **demo** – stappenplan van een demo uit de les.
- **oefening** – samenvatting van een opdracht, stappen, tips en gebruikte begrippen.

## Regels
- Alles in **eigen woorden**: geen slides, cursusteksten of opgaven kopiëren.
- Geen wachtwoorden, accounts of tenantgegevens.
- Verbind begrippen met `[[links]]`: dat zijn de lijnen in de graaf.
