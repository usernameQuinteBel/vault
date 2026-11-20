---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1]
groep: C# en .NET
aliases: [Events (C#), Event handler, Event]
---
# Events (C#)

> Code die moet draaien **als er iets gebeurt** (meestal een gebruikersactie, zoals een klik). Een event-handler heeft altijd **twee parameters**: `sender` en `EventArgs`.

```csharp
private void AddContactButton_Click(object sender, RoutedEventArgs e)
{ /* uitgevoerd bij klik */ }
```
| Parameter | Betekenis |
|---|---|
| `sender` | het object dat het event gooide |
| `e` (`EventArgs`) | extra info over het event |

In de Rentabike-oefening (WinForms/WPF) koppel je handlers aan knoppen ([[Oefening Rentabike]]).

## In React
Het React-equivalent staat in [[Events (React)]].

## Gerelateerd
[[OOP]]

---
Hoort bij: [[CSharp basis en OOP]]
