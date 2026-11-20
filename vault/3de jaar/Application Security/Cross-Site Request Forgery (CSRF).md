---
type: chapter
vak: Application Security
onderdeel: Application Security
chapter: 12
groep: Client-side
---
# Cross-Site Request Forgery (CSRF)

> Een aanvaller **dwingt een ingelogde gebruiker** om ongewild een actie uit te voeren op een app waar die gebruiker aangemeld is. Het bijzondere: **de browser van het slachtoffer verstuurt het verzoek, mét zijn sessiecookie** — de aanvaller zelf raakt de app niet aan en **ziet de respons niet**. CSRF mikt daarom op **state-changing** acties (e-mail of wachtwoord wijzigen, geld overschrijven), niet op datadiefstal.

## Waarom het werkt
Browsers sturen een cookie **automatisch** mee naar de site waar hij bij hoort — ook als het verzoek van een **andere** site vertrekt. Is een gebruiker ingelogd op `victim.com` (geldige sessiecookie), dan wordt elke `POST /transfer` uit zijn browser aanvaard. Bezoekt hij `attacker.com`, dan kan die pagina een `POST` naar `victim.com` laten vertrekken; de browser **plakt de cookie erbij** en de server voert de transfer uit, want die ziet een geldige sessie.

## De 3 voorwaarden (de opbouw)
Een CSRF-aanval kan alleen als **alle drie** aanwezig zijn:
1. **Een relevante actie** die de aanvaller wil uitlokken (rechten van anderen wijzigen, of een actie op de eigen data van het slachtoffer zoals wachtwoord/e-mail wijzigen).
2. **Sessiebeheer enkel via cookies**: de app identificeert de gebruiker **uitsluitend** via de sessiecookie, zonder extra validatie van het verzoek.
3. **Geen onvoorspelbare parameters**: de aanvaller kan **alle** nodige waarden raden. Moet je bv. je **huidige wachtwoord** meegeven om het te wijzigen, dan is de functie **niet** kwetsbaar — die waarde kent de aanvaller niet.

## Hoe de payload geleverd wordt
- **GET** — dan volstaat een link of zelfs een **afbeelding** waarvan de `src` het state-changing verzoek is; het laadt zodra het slachtoffer de pagina opent.
- **POST** — een **verborgen formulier** op de aanvallerspagina dat **zichzelf verzendt** met JavaScript. Het slachtoffer hoeft enkel de pagina te bezoeken.

(Burp Pro heeft een "Generate CSRF PoC"-functie die zo'n pagina genereert.)

## Verdediging
| Maatregel | Werking |
|---|---|
| [[Anti-CSRF token]] | een **onvoorspelbare** waarde van de server, mee in elk state-changing request; de server weigert zonder geldig token. De aanvaller kent het token niet → aanval faalt |
| [[SameSite cookie]] | de browser stuurt de cookie **niet** mee bij cross-site requests |
| reCAPTCHA | controleert dat er een **mens** is (tegen geautomatiseerde CSRF) |
| onvoorspelbare parameters | huidig wachtwoord, pincode of OTP vragen (valt samen met voorwaarde 3) |

## Testen (de methode)
1. Zoek requests die **state veranderen** (toevoegen, wijzigen, verwijderen, configuratie).
2. **Verwijder of wijzig** alle parameters die een aanvaller **niet kan raden** (tokens, OTP, pincode). Werkt het verzoek dan nog?
3. Maak een **HTML-pagina** die het request nabootst (een formulier of een `<img>`).
4. Open die pagina in een browser waar je **ingelogd** bent op de doelapp.
5. Is de actie uitgevoerd en de state veranderd → **kwetsbaar**.

Typische implementatiefouten bij tokens: het token enkel bij `POST` controleren (niet bij `GET`), het token **niet aan de sessie** koppelen, of de controle **overslaan** als de parameter ontbreekt.

Zie ook [[Clickjacking]], dat CSRF-tokens juist **omzeilt** door de echte pagina te laden.

## Oefenen
[[PortSwigger labs per onderwerp]] · https://portswigger.net/web-security/csrf

## Begrippen
[[Anti-CSRF token]] · [[SameSite cookie]]

---
Hoort bij: [[Application Security]]
