---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [6, 7]
groep: Azure
---
# Prediction API

> Het **endpoint** dat je krijgt na het **publishen** van een Custom Vision-model. Je app stuurt er een afbeelding naartoe en krijgt de **voorspellingen** terug in JSON.

## Aanroepen vanuit MAUI (SafariSnap)
```csharp
public async Task<List<PredictionModel>> ClassifyImageAsync(Stream photo)
{
    using var client = new HttpClient();
    client.DefaultRequestHeaders.Add("Prediction-Key", predictionKey);
    using var content = new StreamContent(photo);
    content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
    var response = await client.PostAsync(predictionUrl, content);
    var result = await response.Content.ReadFromJsonAsync<PredictionResult>();
    return result.Predictions.OrderByDescending(p => p.Probability).ToList();
}
```

## Wat krijg je terug?
```json
{ "predictions": [
    { "tagName": "elephant", "probability": 0.97 },
    { "tagName": "rhino",    "probability": 0.02 } ] }
```
Bij [[Object detection]] komt er per voorspelling ook een **boundingBox** (`left`, `top`, `width`, `height`, relatief 0–1) bij.

## Twee URL-varianten
- `/classify/.../image` — je stuurt de **bytes** van de afbeelding.
- `/classify/.../url` — je stuurt een **URL** naar een afbeelding.

## Gerelateerd
[[Custom Vision]] · [[HttpClient]] · [[Azure Custom Vision]]

---
Hoort bij: [[Azure Custom Vision]]
