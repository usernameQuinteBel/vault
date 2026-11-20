---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: 9
groep: Toegang
aliases: [Insecure Direct Object Reference]
---
# IDOR

> **Insecure Direct Object Reference**: de app gebruikt een door de gebruiker **aangeleverde waarde** (een ID, een bestandsnaam) om **rechtstreeks** een object op te halen, **zonder te controleren** of die gebruiker het wél mag zien. Het schoolvoorbeeld van **horizontale** [[Privilege escalation]].

```
GET /myaccount?id=123   → mijn account
GET /myaccount?id=456   → andermans account 😱
GET /download/transcript/2.txt → chatlog van een andere klant
```

## Testen
Maak **twee accounts** en probeer met account A de ID's/URL's van account B. Let op ID's in **URL's, JSON-bodies, cookies en hidden fields**. GUIDs maken raden moeilijker, maar lekken vaak **elders** (in berichten, reviews, e-mails).

## Verdediging
Bij **elk** verzoek **server-side** controleren: is dit object van (of gedeeld met) de **ingelogde** gebruiker? Beter nog: haal objecten op **via de sessie** (`/myaccount` → "het account van wie nu ingelogd is") in plaats van via een ID uit de request, zodat er niets te manipuleren valt.

---
Hoort bij: [[Access Control]]
