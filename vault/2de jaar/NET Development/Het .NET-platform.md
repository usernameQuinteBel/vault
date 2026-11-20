---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 2
groep: Deel A: C# en .NET
aliases: [.NET Framework theorie, C# Deep Dive, CLR en CIL]
---
# Het .NET-platform

> **C#** is de taal, de **CLR** is de motor die de code uitvoert en de **BCL/FCL** zijn de bibliotheken: C# wordt gecompileerd naar **CIL** in een assembly, en de CLR zet dat via **JIT** om naar machinecode — daarom werkt .NET op meerdere platformen.

_Bron: PDF "Theoretical concepts .NET Framework" (C# Deep Dive)._

## 1. Drie lagen die je moet onderscheiden
| Laag | Wat | Rol |
|---|---|---|
| **[[CSharp|C#]]** (de taal) | syntax, types, methodes, namespaces, klassen | bepaalt *hoe code eruitziet*; **voert zelf niets uit** |
| **[[CLR]]** (runtime) | Common Language Runtime — de uitvoeringsomgeving | draait je programma veilig, efficiënt en cross-platform |
| **[[BCL en FCL]]** (bibliotheken) | kant-en-klare klassen | strings, collecties, I/O, netwerk, web… |

De CLR beheert onder meer: assemblies laden, IL verifiëren, IL omzetten naar native code, **geheugen** toewijzen/vrijgeven, **exceptions**, **threads en async werk**, **type- en beveiligingscontrole**. Zonder runtime kan gecompileerde C#-code niet draaien.

### BCL vs FCL
| | **BCL** (Base Class Library) | **FCL** (Framework Class Library) |
|---|---|---|
| Scope | kern, gedeeld door alle .NET-apps | BCL + bibliotheken van hoger niveau |
| Bevat | `System`, `System.IO`, `System.Collections`… | BCL + ASP.NET, WinForms, WPF… |
| Gebruik | alle .NET-toepassingen | platformspecifieke functies |
De BCL is dus een **deelverzameling** van de FCL. WPF (Windows-only: `System.Windows`, XAML) hoort bij de FCL.

## 2. Van C# naar uitvoering
```
C#-broncode  →  C#-compiler  →  CIL (in een assembly: .dll of .exe)  →  CLR + JIT  →  machinecode
```
1. De compiler vertaalt C# **niet** meteen naar machinecode maar naar **[[CIL]]** (Common Intermediate Language) → platformonafhankelijk.
2. CIL wordt samen met **metadata** verpakt in een **[[Assembly]]**: `.dll` (class library) of `.exe` (applicatie). Een assembly bevat CIL-instructies, metadata over types/methodes/namespaces en een *manifest* (identiteit + afhankelijkheden).
3. Bij het opstarten laadt de **CLR** de assembly, leest de metadata en past **Just-In-Time (JIT)**-compilatie toe: CIL → native code.

Voorbeeld — dit C#:
```csharp
int age = 20;
if (age >= 18) Console.WriteLine("Adult"); else Console.WriteLine("Minor");
```
wordt CIL die met een **stack** en **sprongen** werkt (`ldc.i4.s 20`, `stloc.0`, `ldloc.0`, `ldc.i4.s 18`, `blt.s IL_0015` = "spring als age < 18", `ldstr "Adult"`, `call … WriteLine`, `br.s` = spring naar het einde…). Jij denkt "als waar doe X, anders Y", de CIL-runtime evalueert een voorwaarde en **springt naar een adres**.

## 3. Strong typing en type safety
Elke variabele heeft een type dat **bij compilatie** vastligt en niet onverwacht verandert ([[Strong typing]]). Voordelen: fouten vóór het uitvoeren, zelfdocumenterende code, correcte autocomplete, veilig refactoren. Dat is anders dan JavaScript, waar veel fouten pas in productie opduiken.

## 4. Value types vs reference types
| | **Value types** | **Reference types** |
|---|---|---|
| Voorbeelden | `int`, `double`, `bool`, `struct`, `enum` | `class`, `string`, array, `object` |
| Bewaren | de waarde zélf | een **verwijzing** (geheugenadres) naar een object op de heap |
| Kopiëren | **kopie** van de waarde | kopie van de **referentie** (zelfde object) |
| Typisch geheugen | stack | object op de heap, referentie op de stack |

```csharp
int a = 10; int b = a; b = 20;        // a blijft 10: b is een kopie

Car car1 = new Car();
Car car2 = car1;                      // zelfde object!
car2.Color = "Red";                   // car1.Color is nu ook "Red"
```
**Stack** = methodeaanroepen, lokale variabelen, referenties (snel, wordt automatisch opgeruimd bij het einde van de methode). **Heap** = objecten. Zie [[Value type vs reference type]].

> **Valkuil:** twee referentievariabelen kunnen naar **hetzelfde** object wijzen; wijzig je het via de ene, dan ziet de andere dat ook.

## 5. Garbage collection
Objecten op de heap worden niet vernietigd als de variabele buiten scope gaat, maar pas als er **geen referenties meer** zijn. De **Garbage Collector** volgt welke objecten nog bereikbaar zijn en ruimt de rest op — op een moment dat de runtime kiest.
```csharp
void Example() { Car car = new Car(); }   // na de methode: referentie weg → object komt in aanmerking voor GC
```
Zie [[Garbage collection]].

## 6. Casting
- **Implicit** (veilig, geen dataverlies, automatisch): `int x = 10; double y = x;`
- **Explicit** (mogelijk dataverlies, moet je zelf schrijven): `double z = 9.7; int a = (int)z;` → `9`
C# verbiedt onveilige casts. Filosofie: *fail early, fail safely, fail at compile time.* Zie [[Casting]].

## Samenvatting
- value types: waarde direct, gekopieerd per waarde; reference types: verwijzing naar heap-object
- stack = snel en automatisch; heap = beheerd door de GC
- casting-regels beschermen tegen onveilige conversies

## Begrippen
[[CSharp|C#]] · [[CLR]] · [[CIL]] · [[Assembly]] · [[BCL en FCL]] · [[Strong typing]] · [[Value type vs reference type]] · [[Garbage collection]] · [[Casting]]

---
Hoort bij: [[NET Development|.NET Development]]
