---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: [4, 6]
groep: MVVM
---
# HttpClient

> De .NET-klasse om **HTTP-requests** te sturen: data ophalen bij een [[REST API]] of een Azure AI-dienst aanspreken.

## Basisgebruik
```csharp
var client = new HttpClient();
List<Friend> friends = await client.GetFromJsonAsync<List<Friend>>(url);   // GET
await client.PostAsJsonAsync(url, newFriend);                              // POST
await client.PutAsJsonAsync($"{url}/{id}", friend);                        // PUT
await client.DeleteAsync($"{url}/{id}");                                   // DELETE
```
De `...AsJsonAsync`-methodes (uit `System.Net.Http.Json`) doen de JSON-(de)serialisatie voor je.

## Headers voor Azure
Azure AI-diensten vragen een **sleutel** in een header:
```csharp
client.DefaultRequestHeaders.Add("Prediction-Key", predictionKey);         // Custom Vision
client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", key);        // andere Azure AI
```

## Goede gewoontes
- Altijd **async** (`await`), anders bevriest de UI.
- Eén `HttpClient` hergebruiken (registreren als singleton) i.p.v. telkens `new`.
- `response.EnsureSuccessStatusCode()` of de statuscode controleren, en fouten opvangen met `try/catch`.

## Gerelateerd
[[DataService]] · [[REST API]] · [[Prediction API]]

---
Hoort bij: [[MVVM met DataServices]]
