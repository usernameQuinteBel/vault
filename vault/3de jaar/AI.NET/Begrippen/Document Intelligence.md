---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 8
groep: Azure
aliases: [Form Recognizer]
---
# Document Intelligence

> Een Azure AI-dienst die **gestructureerde data** uit documenten haalt: PDF's, scans, foto's van formulieren, bonnetjes, facturen. Je krijgt **velden** (sleutel–waarde) terug in plaats van één grote tekstblok.

## Waarom niet gewoon OCR?
[[OCR]] geeft je **alle tekst**, maar weet niet welk stuk de *patiëntnaam* is en welk de *datum*. Document Intelligence begrijpt de **structuur** en geeft `PatientName = "..."`, `Date = "..."`.

## Modellen
| Soort | Voorbeeld | Training |
|---|---|---|
| **Prebuilt** | facturen, bonnetjes, ID-kaarten, visitekaartjes | nee |
| **Layout** | tekst, tabellen, selectievakjes | nee |
| **Custom extraction** | jouw eigen formulier (verwijsbrief) | **ja** |

## Custom extraction model (PatientReferral, Azure 2)
1. Een **[[Storage account]]** aanmaken en de voorbeelddocumenten uploaden (minstens 5).
2. In **Document Intelligence Studio** een custom extraction project maken en koppelen aan de storage.
3. **Labelen**: per document aanduiden welk stuk tekst welk **veld** is.
4. **Trainen** → een model-ID.
5. In de app het model aanroepen met een nieuw document en de velden uitlezen.

**Oefening**: extra velden toevoegen, zoals *Patient Medical Number* en *Patient Email* → opnieuw labelen en trainen.

## Gerelateerd
[[Storage account]] · [[OCR]] · [[Azure Document Intelligence]]

## Meer leren
- [What is Document Intelligence?](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview)

---
Hoort bij: [[Azure Document Intelligence]]
