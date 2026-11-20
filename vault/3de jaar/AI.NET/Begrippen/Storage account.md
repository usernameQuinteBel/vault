---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 8
groep: Azure
aliases: [Blob storage]
---
# Storage account

> Een Azure-resource om **bestanden in de cloud** te bewaren (blob storage). In dit vak bewaar je er de **trainingsdocumenten** voor een custom [[Document Intelligence]]-model.

## Opbouw
Storage account → **containers** → **blobs** (bestanden). Vergelijkbaar met: schijf → mappen → bestanden.

## In de les
1. Storage account aanmaken in je [[Resource Group]].
2. Een **container** maken en de voorbeeld-PDF's uploaden (`Documents.zip` / `Documents Blanco.zip`).
3. Document Intelligence Studio koppelen aan die container (het heeft leesrechten nodig, bv. via CORS en een SAS-URL of managed identity).

## Belangrijke instellingen
| Instelling | Keuze voor dit vak |
|---|---|
| performance | Standard |
| redundancy | **LRS** (goedkoopst, binnen één datacenter) |
| toegang | container **private**; Document Intelligence krijgt toegang via de Studio-koppeling (of een SAS-token) |

## Andere soorten opslag in een storage account
Blobs (bestanden), **Files** (netwerkschijf), **Queues** (berichten), **Tables** (eenvoudige NoSQL). In dit vak enkel blobs.

## Let op
Bestandsnamen en mappen in de container blijven gekoppeld aan je **labels** in Document Intelligence: hernoem of verplaats ze niet na het labelen.

## Gerelateerd
[[Document Intelligence]] · [[Azure Portal]]

---
Hoort bij: [[Azure Document Intelligence]]
