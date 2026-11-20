---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 6
groep: Azure
aliases: [MediaPicker, CapturePhotoAsync]
---
# MediaPicker (MAUI)

> De MAUI-API (onderdeel van *Essentials*) om een **foto te nemen** met de camera of een foto **te kiezen** uit de galerij, met één regel code, op elk platform.

## Gebruik (SafariSnap)
```csharp
// uit de galerij
var photos = await MediaPicker.Default.PickPhotosAsync();
var photo = photos?.FirstOrDefault();          // null als de gebruiker annuleert

// met de camera
var photo = await MediaPicker.Default.CapturePhotoAsync();

if (photo != null)
{
    using var stream = await photo.OpenReadAsync();
    // naar MemoryStream kopiëren, tonen én naar de AI-dienst sturen
}
```
Het resultaat is een `FileResult` (naam, pad, `OpenReadAsync()`).

## Waarom naar een MemoryStream kopiëren?
Een stream kan je maar **één keer** lezen. Je hebt de foto twee keer nodig: om ze te **tonen** (`ImageSource.FromStream`) en om ze naar de **Prediction API** te sturen. Daarom: één keer in een `MemoryStream`, daarna `Position = 0` of een kopie met `ToArray()`.

## Vereisten
- **Android-permissies**: camera en media lezen, plus de `IMAGE_CAPTURE`-query → [[Android-permissies (MAUI)]].
- `MediaPicker.Default.IsCaptureSupported` controleren (emulators zonder camera).
- Aanroepen vanuit een **async command** (`AsyncRelayCommand`), nooit blokkerend.

## Gerelateerd
[[Android-permissies (MAUI)]] · [[Prediction API]] · [[Command (MVVM)]]

---
Hoort bij: [[Azure Custom Vision]]
