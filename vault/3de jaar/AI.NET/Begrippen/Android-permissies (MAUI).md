---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [6, 7]
groep: MAUI-basis
aliases: [Camera permission, MediaPicker]
---
# Android-permissies (MAUI)

> Op Android moet je app **expliciet toestemming** vragen voor gevoelige functies zoals de **camera** en de **mediagalerij**. Vergeet je dat, dan crasht de functie of doet ze niets.

## Waar?
In `Platforms/Android/AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
<uses-permission android:name="android.permission.INTERNET" />
```
Daarnaast vraag je op recente Android-versies tijdens **runtime** om toestemming (`Permissions.RequestAsync<Permissions.Camera>()`).

## In de les
SafariSnap ([[Azure Custom Vision]]) neemt een foto of kiest er een uit de galerij met `MediaPicker` → **camera- en mediapermissies** nodig.

## Install-time vs. runtime
| Soort | Voorbeeld | Hoe |
|---|---|---|
| **normale** permissies | `INTERNET` | enkel in het manifest; automatisch toegekend |
| **gevaarlijke** permissies | `CAMERA`, `READ_MEDIA_IMAGES`, locatie | manifest **én** tijdens runtime vragen; de gebruiker kan weigeren |

```csharp
var status = await Permissions.CheckStatusAsync<Permissions.Camera>();
if (status != PermissionStatus.Granted)
    status = await Permissions.RequestAsync<Permissions.Camera>();
if (status != PermissionStatus.Granted) { /* uitleg tonen, functie uitschakelen */ }
```

## Versieverschillen
Tot Android 12 (SDK 32) gebruik je `READ/WRITE_EXTERNAL_STORAGE` (met `MaxSdkVersion = 32`); vanaf Android 13 de fijnere `READ_MEDIA_IMAGES/VIDEO/AUDIO`. Voor de camera-intent heb je ook een `<queries>`-blok met `android.media.action.IMAGE_CAPTURE` nodig.

## Typische fouten
- Permissie vergeten → `PermissionException` of lege galerij.
- Geen afhandeling bij **weigeren** → app crasht i.p.v. een melding te tonen.

## Gerelateerd
[[.NET MAUI]] · [[Azure Custom Vision]]

## Meer leren
- [Permissions in .NET MAUI](https://learn.microsoft.com/en-us/dotnet/maui/platform-integration/appmodel/permissions)

---
Hoort bij: [[Azure Custom Vision]]
