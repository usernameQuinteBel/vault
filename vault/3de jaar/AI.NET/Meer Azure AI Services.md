---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 9
groep: Deel A: Azure AI
---
# Meer Azure AI Services

> Kant-en-klare AI-diensten die **geen training** nodig hebben: je stuurt data, je krijgt een resultaat. Geoefend met drie console-apps: **OCRFifa**, **EchoTranslate** en **Visionary**.

## Met of zonder training
| Training nodig (zelf trainen) | Geen training (prebuilt) |
|---|---|
| [[Custom Vision]] — image classification, object detection | [[Computer Vision]] — **OCR**, **image analysis** |
| [[Document Intelligence]] (custom) | [[Azure Speech]] — tekst ↔ spraak |
| | Language Service — sentiment, sleutelwoorden, taal herkennen |
| | [[Azure Translator]] — vertalen |

## App 1 — OCRFifa (OCR)
Rugnummers en namen van **voetbaltruien** lezen (`Jerseys.zip`).
```csharp
var client = new ImageAnalysisClient(new Uri(endpoint), new AzureKeyCredential(key));
ImageAnalysisResult result = await client.AnalyzeAsync(BinaryData.FromStream(stream), VisualFeatures.Read);
foreach (var block in result.Read.Blocks)
    foreach (var line in block.Lines) Console.WriteLine(line.Text);
```
- Package `Azure.AI.Vision.ImageAnalysis`, een `ComputerVisionService` met `AnalyzeImageOCR(path)`.
- In `Program.cs` alle `*.jpg` uit een map overlopen.
- Het resultaat is opgebouwd als **blocks → lines → words** (met posities en confidence).
Zie [[OCR]].

## App 2 — EchoTranslate (Translator + Speech)
Console-app die een **Frans document inleest**, het naar het **Nederlands vertaalt**, opslaat en **voorleest**.
| Bestand | Rol |
|---|---|
| `Helpers/ReadFileHelper.cs` | tekst uit .txt, .docx (OpenXml) of .pdf (PdfPig) lezen |
| `Services/TranslationService.cs` | REST-call naar Azure Translator (`from=fr&to=nl`) |
| `Services/SpeechService.cs` | **text-to-speech** met `Microsoft.CognitiveServices.Speech` (Nederlandse stem) |
| `Documents/document_fr.txt` → `vertaling_nl.txt` | input/output |
Packages: `Microsoft.CognitiveServices.Speech`, `Newtonsoft.Json`, `DocumentFormat.OpenXml`, `UglyToad.PdfPig`.
Flow: inlezen → vertalen → wegschrijven (UTF-8) → origineel tonen → vertaling voorlezen.

## App 3 — Visionary (image analysis)
Een foto laten **beschrijven**:
```csharp
var result = await client.AnalyzeAsync(BinaryData.FromBytes(bytes),
    VisualFeatures.Caption | VisualFeatures.Tags | VisualFeatures.Objects | VisualFeatures.Read);
```
| Feature | Geeft |
|---|---|
| `Caption` | één zin die de foto beschrijft + confidence |
| `Tags` | trefwoorden (`outdoor`, `dog`…) met confidence |
| `Objects` | gevonden objecten met kader |
| `Read` | tekst (OCR) |
Met `|` combineer je meerdere features in **één** call (vlaggen-enum).

## Face API
Gezichtsherkenning (Azure AI Face) bestaat ook, maar is **beperkt toegankelijk** (aanvraag nodig) wegens privacy.

## Algemeen patroon voor elke Azure AI-dienst
1. Resource maken in een [[Resource Group]] → **endpoint + key**.
2. NuGet-package (SDK) of REST via [[HttpClient]].
3. Client maken met `new Uri(endpoint)` + `AzureKeyCredential(key)`.
4. Data sturen, resultaat uitlezen (met **confidence**).
5. Keys in [[appsettings.json]]/secrets, niet in git.

## Begrippen
[[Computer Vision]] · [[OCR]] · [[Azure Translator]] · [[Azure Speech]] · [[Azure AI Services]] · [[Resource Group]] · [[HttpClient]]

---
Hoort bij: [[AI.NET]]
