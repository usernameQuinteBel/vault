---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [8, 9]
groep: Azure
aliases: [Optical Character Recognition, Read API]
---
# OCR

> **Optical Character Recognition**: **tekst herkennen in afbeeldingen** (foto's, scans) en omzetten naar gewone tekst die je kan doorzoeken of verwerken.

## Hoe werkt het (grof)?
1. Tekstgebieden in het beeld vinden.
2. Elk teken herkennen.
3. Regels en woorden samenstellen, met hun **positie** in de afbeelding.

## In Azure
Via [[Computer Vision]] (*Read API*) — geen training nodig. Je krijgt tekstregels en woorden met een bounding box en een betrouwbaarheid.

## In de les: OCRFifa
Foto's van voetbaltruien (`Jerseys.zip`) → de **tekst en rugnummers** uitlezen via een `ComputerVisionService`.

## OCR vs. Document Intelligence
OCR geeft **alle tekst**; [[Document Intelligence]] geeft **velden** met betekenis. Kies OCR als je gewoon de tekst nodig hebt.

## Code (OCRFifa)
```csharp
var result = await client.AnalyzeAsync(BinaryData.FromStream(stream), VisualFeatures.Read);
foreach (var block in result.Read.Blocks)
    foreach (var line in block.Lines)
        Console.WriteLine(line.Text);   // ook line.BoundingPolygon en per woord Confidence
```

## Wat maakt OCR moeilijker?
Schuine of gebogen tekst (truien!), weinig contrast, onscherpe foto's, handschrift, sierlettertypes. Tip: eerst **bijsnijden** tot het relevante deel (zoals `outputCroppedPath` in de les) en de resultaten filteren (bv. enkel cijfers voor rugnummers met een regex `^\d{1,2}$`).

## Gerelateerd
[[Computer Vision]] · [[Document Intelligence]]

---
Hoort bij: [[Meer Azure AI Services]]
