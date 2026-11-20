---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [2]
groep: C# en .NET
aliases: [Common Language Runtime, Runtime]
---
# CLR

> **Common Language Runtime**: de **uitvoeringsomgeving** die je gecompileerde .NET-code veilig, efficiënt en cross-platform laat draaien.

## Wat de CLR beheert
- [[Assembly|assemblies]] **laden** en **CIL verifiëren**;
- CIL omzetten naar **native code** (**JIT**, Just-In-Time-compilatie);
- **geheugen** toewijzen en vrijgeven ([[Garbage collection]]);
- **exceptions**, **threads en async** werk;
- **type- en beveiligingscontrole**.
Zonder runtime kan gecompileerde C#-code niet draaien.

## Plaats in het geheel
```
C#-broncode → compiler → CIL (assembly) → CLR + JIT → machinecode
```
[[CSharp|C#]] is de taal, de CLR de motor, de [[BCL en FCL]] de bibliotheken.

## Gerelateerd
[[CIL]] · [[Het .NET-platform]]

---
Hoort bij: [[Het .NET-platform]]
