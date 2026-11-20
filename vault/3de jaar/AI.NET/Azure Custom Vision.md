---
type: chapter
vak: AI.NET
onderdeel: AI.NET
chapter: 6
groep: Deel A: Azure AI
---
# Azure Custom Vision

> App **SafariSnap**: je **traint zelf** een beeldclassificatiemodel dat de **Big Five** (leeuw, olifant, buffel, luipaard, neushoorn) herkent, en roept het aan vanuit een **MAUI-app** met camera of fotogalerij. Combineert alles uit deel A: MVVM, DI, bindings + een AI-dienst.

## 1. Azure klaarzetten
| Stap | Waar |
|---|---|
| Inloggen | [[Azure Portal]] — https://portal.azure.com/ |
| Gratis tegoed | **Azure for Students** — https://www.microsoftazuresponsorships.com/ |
| Container voor je oplossing | een **[[Resource Group]]** (alle diensten van één oplossing samen → samen beheren/verwijderen) |
| AI-dienst | een **Custom Vision**-resource (training + prediction) |

## 2. Het model trainen (customvision.ai)
1. **Project** maken: type **Classification**, multiclass (één label per foto), domain *General*.
2. **Afbeeldingen toevoegen** per **tag** (`Lion`, `Elephant`, …). Minstens ±15 per tag, gevarieerd (hoek, licht, achtergrond).
3. **Vergeet de `Negative`-tag niet**: foto's die **geen** van de klassen zijn. Anders "ziet" het model in elke foto een dier.
4. **Train** (Quick Training volstaat). Bekijk **precision** en **recall** per tag.
5. **Quick Test** met nieuwe foto's.
6. **Publish** de iteratie → je krijgt de **[[Prediction API]]**: endpoint-URL + **Prediction-Key**.
Meer: [[Custom Vision]] · [[Training (Custom Vision)]] · [[Image classification]].

## 3. De MAUI-app
Nieuw project **SafariSnap**, `MainPage` weg, start van `SafariSnap.zip`.
| Laag | Inhoud |
|---|---|
| **Services** | `CustomVisionService.ClassifyImageAsync(stream)` → POST van de foto naar de Prediction API, beste voorspelling (`TagName`, `Probability`) teruggeven |
| **Models** | `SizeInfo`, `BigFiveAnimal` (naam, beschrijving, gewicht…), `BigFiveAnimalDataService` (info per dier) |
| **Views** | `InfoPage` + contract `IInfoViewModel` |
| **ViewModels** | `InfoViewModel` |

### InfoViewModel uitgelegd
| Property/command | Rol |
|---|---|
| `IsRunning` | toont een `ActivityIndicator` tijdens de API-call |
| `Photo` (`ImageSource`) | de gekozen foto in de UI |
| `ClassifiedAnimal` | het herkende dier + info |
| `PickPhotoCommand` | foto uit de galerij (`MediaPicker.PickPhotosAsync`) |
| `TakePhotoCommand` | foto met de camera (`MediaPicker.CapturePhotoAsync`) |
Beide commands zijn **`AsyncRelayCommand`**s en eindigen in `ClassifyPhotoAsync(photo)`:
1. bestand openen en naar een **`MemoryStream`** kopiëren;
2. `Photo = ImageSource.FromStream(() => new MemoryStream(bytes))` (een **kopie**, want een stream kan maar één keer gelezen worden);
3. `memoryStream.Position = 0` en naar `ClassifyImageAsync` sturen;
4. `Probability.ToString("P1")` → "90.0%";
5. `TagName == "Negative"` → melding "geen Big Five-dier", anders de info van het dier tonen.
Zie [[MediaPicker (MAUI)]].

### Samenvoegen
[[Dependency Injection]] (service, ViewModel, page) en alle **bindings** in de View.

## 4. Android-permissies
Zonder permissies crasht de camera of blijft de galerij leeg. In `Platforms/Android` (assembly-attributen of `AndroidManifest.xml`):
- **galerij**: `ReadMediaImages` (+ `ReadExternalStorage` tot SDK 32);
- **camera**: `Camera` (+ `WriteExternalStorage` tot SDK 32), `UsesFeature("android.hardware.camera")`;
- een `<queries>`-intent voor `android.media.action.IMAGE_CAPTURE`.
Zie [[Android-permissies (MAUI)]].

## 5. Sleutels veilig houden
Endpoint en key niet hardcoderen in een publieke repo → [[appsettings.json]] of user secrets, en uitsluiten van git.

## Begrippen
[[Azure Portal]] · [[Resource Group]] · [[Azure AI Services]] · [[Custom Vision]] · [[Training (Custom Vision)]] · [[Prediction API]] · [[Image classification]] · [[MediaPicker (MAUI)]] · [[Android-permissies (MAUI)]] · [[appsettings.json]]

---
Hoort bij: [[AI.NET]]
