---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 8
groep: Deel A: Azure AI
---
# Azure Document Intelligence

> App **PatientReferral**: **gestructureerde velden** (patiëntnaam, geboortedatum, arts, reden…) automatisch uit **doorverwijsbrieven** halen. [[Document Intelligence]] is de Azure-dienst die data extraheert uit **PDF's, afbeeldingen, gescande formulieren en bonnetjes**.

## Prebuilt vs. custom
| | Prebuilt model | Custom extraction model |
|---|---|---|
| Voor | standaarddocumenten: facturen, bonnetjes, ID's, visitekaartjes, algemene layout | **jouw eigen** formulier (doorverwijsbrief) |
| Training | geen | **labelen + trainen** |
| Velden | vast | **zelf gedefinieerd** |
In de les: **custom**.

## Workflow (custom extraction)
| # | Stap | Details |
|---|---|---|
| 1 | **[[Storage account]]** | Azure-opslag (blob container) voor de trainingsdocumenten |
| 2 | **Documenten uploaden** | minstens ±5 voorbeelden van hetzelfde type document |
| 3 | **Document Intelligence-resource + Studio** | in Document Intelligence Studio een **Custom extraction model**-project, gekoppeld aan de container |
| 4 | **Data labelen** | velden definiëren (`PatientName`, `DateOfBirth`…) en in elk document de juiste tekst aanduiden |
| 5 | **Trainen** | model-ID kiezen (bv. `PatientReferral`); *template* (vaste layout) of *neural* (variërende layout) |
| 6 | **Testen** | nieuw document analyseren en de velden + confidence bekijken |

## De code (console-app)
```csharp
var client = new DocumentIntelligenceClient(new Uri(endpoint), new AzureKeyCredential(key));
BinaryData content = BinaryData.FromBytes(File.ReadAllBytes("./Documents/MaryJones.pdf"));
var options = new AnalyzeDocumentOptions("PatientReferral", content);         // jouw model-ID
Operation<AnalyzeResult> op = await client.AnalyzeDocumentAsync(WaitUntil.Completed, options);
AnalyzeResult result = op.Value;

foreach (var document in result.Documents)
    foreach (var (name, field) in document.Fields)
        Console.WriteLine($"{name}: {field.Content} ({field.Confidence:P0})");
```
- Package `Azure.AI.DocumentIntelligence`.
- `WaitUntil.Completed`: analyse is een **long-running operation**; zo wacht je tot ze klaar is.
- Elk veld heeft `Content` (tekst) en `Confidence` (zekerheid).
- De **sleutels** staan in een `ApiKeys`-klasse in de les — in een echt project via [[appsettings.json]]/secrets, niet in git.

## Oefening
Voeg velden toe: **Patient Medical Number** en **Patient Email** → opnieuw **labelen**, **hertrainen**, en in de code uitlezen.

## Toepassingen
Facturen verwerken, inschrijvingsformulieren digitaliseren, bonnetjes inlezen in een budget-app.

## Begrippen
[[Document Intelligence]] · [[Storage account]] · [[OCR]] · [[Azure AI Services]] · [[appsettings.json]]

---
Hoort bij: [[AI.NET]]
