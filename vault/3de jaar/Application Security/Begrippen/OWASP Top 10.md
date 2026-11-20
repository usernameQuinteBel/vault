---
type: begrip
vak: Application Security
onderdeel: Application Security
chapter: [1, 2]
groep: Methodologie
aliases: [OWASP, OWASP Top Ten]
---
# OWASP Top 10

> De lijst van de **tien belangrijkste klassen van kwetsbaarheden** in webapplicaties, samengesteld door **OWASP** (Open Worldwide Application Security Project) uit data van echte pentests en incidenten. De Top 10 vertelt je **wát** je moet testen; de [[OWASP WSTG]] vertelt **hoe**.

Het is geen checklist van losse bugs maar van **categorieën**: één categorie (bv. "Injection") bevat meerdere concrete kwetsbaarheden ([[SQL Injection]], [[Command Injection]], [[Cross-Site Scripting (XSS)]]).

## OWASP Top 10 (editie 2021)
| # | Categorie | Hoofdstukken in dit vak |
|---|---|---|
| **A01** | Broken Access Control | [[Access Control]], [[Directory Traversal]], [[Cross-Site Request Forgery (CSRF)]] |
| **A02** | Cryptographic Failures | zwakke encryptie/wachtwoordopslag (zie [[OWASP WSTG]] – weak cryptography) |
| **A03** | Injection | [[SQL Injection]], [[Command Injection]], [[Cross-Site Scripting (XSS)]] |
| **A04** | Insecure Design | logische fouten, [[Threat modeling]] in de ontwerpfase |
| **A05** | Security Misconfiguration | [[Information Disclosure]], ontbrekende headers ([[Clickjacking]]) |
| **A06** | Vulnerable and Outdated Components | verouderde libraries met gekende [[CVSS|CVE's]] |
| **A07** | Identification and Authentication Failures | [[Authentication vulnerabilities]] |
| **A08** | Software and Data Integrity Failures | onveilige updates/deserialisatie |
| **A09** | Security Logging and Monitoring Failures | aanvallen niet opmerken |
| **A10** | Server-Side Request Forgery | [[Server-Side Request Forgery (SSRF)]] |

Er bestaat ook een nieuwere editie en een aparte **OWASP API Security Top 10** (API's achter een SPA). Check https://top10.owasp.org/ voor de actuele lijst.

## Waarom belangrijk in dit vak?
De Top 10 is de **ruggengraat** van de systematische testfase (fase 3 van de [[Pentest]]): je neemt de categorieën één voor één en test er gericht op.

---
Hoort bij: [[Introductie Application Security]]
