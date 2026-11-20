---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 1
groep: Deel A: C# en .NET
aliases: [C# basis en OOP, Introduction C#, C# introductie, C# crash course]
---
# C# basis en OOP

> [[CSharp|C#]] is een **sterk getypeerde, objectgeoriënteerde** taal van Microsoft (syntax lijkt op Java). Je leert de basis (variabelen, control flow) en vooral de **OOP-bouwstenen**: klassen, [[Encapsulatie]], [[Overerving]], [[Polymorfisme]] en interfaces.

## 1. Wat is C#?
- .NET-programmeertaal, **strongly typed**, **objectgeoriënteerd**, **open source**, eenvoudig, modern en flexibel (≈ Java).
- Ruim inzetbaar: web (ASP.NET Core, Blazor), Web API, desktop (WinForms/WPF), mobiel (MAUI), cloud (Azure), games (Unity), IoT, AI/ML, services…
- Zie [[Het .NET-platform]] voor hoe de taal, de runtime en de bibliotheken samenhangen.

## 2. Syntaxis in vijf regels
- `{ }` begrenzen een codeblok, elke instructie eindigt op `;`.
- Commentaar: `// één regel` of `/* meerdere regels */`.
- Naamgeving ([[Oefening Rentabike]]): **camelCase** voor variabelen en controls (`textBoxSerialNumber`), **PascalCase** voor klassen, properties en publieke methodes.
- `Console.WriteLine(...)` schrijft naar de console.
- **String interpolation**: `$"{x} is een even getal"` – variabelen tussen `{ }` in een string met `$` ervoor.

## 3. Variabelen en datatypes
Een variabele declareer je met type + naam + waarde: `int age = 30;`

| Type | Betekenis | Voorbeeld |
|---|---|---|
| `object` | basisklasse van alle types | `object o = 12;` |
| `int` | geheel getal | `int myNum = 5;` |
| `long` | geheel getal, groter bereik | `long big = 78787877887877L;` |
| `float` | kommagetal (6–7 cijfers) | `float f = 5.99f;` |
| `double` | kommagetal (±15 cijfers) | `double d = 4.189281891;` |
| `bool` | true/false | `bool b = true;` |
| `char` | één teken, **enkele** quotes | `char c = 'M';` |
| `string` | tekst, **dubbele** quotes | `string s = "Hello World";` |

- **Casting** (type omzetten): `a = (int)x;` bij double → int ([[Casting]]).
- **`var`**: de compiler leidt het type af uit de waarde. Het blijft **sterk getypeerd** (bepaald bij compilatie) — `var` is *niet* dynamisch typen. Handig bij lange typenamen ([[var (CSharp)|var (C#)]]).

## 4. Control flow
```csharp
int result = 8;
if (result < 8)       { Console.WriteLine("You did not pass the test."); }
else if (result < 10) { Console.WriteLine("You did not pass but you can tolerate this test."); }
else                  { Console.WriteLine("Congratulations! You passed the test."); }
```
```csharp
int x = 125;
switch (x % 2)
{
    case 0: Console.WriteLine($"{x} is an even value"); break;
    case 1: Console.WriteLine($"{x} is an odd Value");  break;
}
```
```csharp
// for en foreach
int[] diceRolls = new int[5];
Random rnd = new Random();
for (int i = 0; i < diceRolls.Length; i++)
    diceRolls[i] = rnd.Next(1, 7);          // 1 t.e.m. 6
foreach (var roll in diceRolls)
    Console.WriteLine(roll);
```
```csharp
// while en do ... while (lijst loopt van index 0 tot 9)
List<int> numbers = new List<int>();
int i = 1;
while (i <= 10) { numbers.Add(i); i++; }
i--;
do { Console.Write(numbers[i - 1]); i--; } while (i >= 1);
```
| Lus | Gebruik |
|---|---|
| `for` | een vast aantal keer (teller) |
| `foreach` | elk element van een array/collectie |
| `while` | zolang een voorwaarde waar is (test **voor** de body) |
| `do … while` | minstens één keer, test **na** de body |

> **Tip:** `rnd.Next(1, 7)` geeft 1–6: de bovengrens is *exclusief*. Een lijst/array heeft index 0 t.e.m. `Count - 1`.

## 5. Object-oriëntatie (OOP)
Een **klasse** is een blauwdruk (bv. `Car` met attributen merk/kleur en methodes `start()`/`stop()`); een **object** is een instantie ervan (bv. een grijze Ford Fiësta). Zie [[OOP]].

### 5.1 Klasse, field en property
```csharp
public class Car                       // korte notatie met auto-properties
{
    public string Color { get; set; }
    public int MaxSpeed { get; set; }
}
```
Dezelfde klasse met expliciete **fields** (privé opslag) en **properties** (publieke toegang):
```csharp
public class Car
{
    private string color;               // field
    private int maxSpeed;               // field
    public string Color                 // property
    {
        get { return color; }           // getter
        set { color = value; }          // setter
    }
    public int MaxSpeed { get { return maxSpeed; } set { maxSpeed = value; } }
}
```
In Java schrijf je hiervoor `getColor()`/`setColor()`; in C# doet een [[Property (CSharp)|Property (C#)]] dat in één blok.

### 5.2 Namespace
Een [[Namespace (CSharp)|Namespace (C#)]] bepaalt een scope voor verwante types (≈ *package* in Java). `Car` leeft in namespace `Introduction`; in een andere namespace gebruik je `using Introduction;` (≈ `import`).

### 5.3 Object maken en object initializer
```csharp
Car carObject = new Car();
carObject.Color = "white";
carObject.MaxSpeed = 190;

// Object initializer: waarden meteen toekennen, zonder constructor met parameters
Car newCar1 = new Car { Color = "Blue",  MaxSpeed = 220 };
Car newCar2 = new Car { Color = "Green", MaxSpeed = 240 };
```
Zie [[Object initializer]].

### 5.4 De drie pijlers van OOP
| Pijler | Idee |
|---|---|
| [[Encapsulatie]] | details verbergen, data beschermen, regels in de setter |
| [[Overerving]] | nieuwe klasse bouwen op een bestaande (*is-een*) |
| [[Polymorfisme]] | verwante objecten op dezelfde manier behandelen |
(In de PDF komt daar **[[Abstractie]]** bij als vierde bouwsteen — zie §7.)

### 5.5 Encapsulatie in de praktijk
Businessregel in de setter: *"geen rode auto's"*:
```csharp
public string Color
{
    get { return color; }
    set { if (value != "red") color = value; }   // onze business logic zegt NEE tegen rood
}
```
Vandaar dat velden **private** zijn en properties **public**: de buitenwereld kan alleen via jouw regels aan de data.

### 5.6 Constructors
```csharp
public Car()                                   // default constructor: geen parameters, standaardwaarden
{ color = "black"; maxSpeed = 210; }

public Car(string color, int maxSpeed)         // custom constructor: waarden meteen zetten
{ Color = color; MaxSpeed = maxSpeed; }

Car firstCar  = new Car();                     // → "black", 210
Car secondCar = new Car("Blue", 190);
```
C# kiest de constructor op basis van het **aantal en type argumenten** bij `new`. Zie [[Constructor (CSharp)|Constructor (C#)]].

### 5.7 Access modifiers
| Modifier | Zichtbaar voor |
|---|---|
| `public` | alles en iedereen |
| `private` | enkel de klasse zelf |
| `protected` | de klasse en zijn afgeleide klassen |
| `internal` | enkel binnen de huidige assembly (.dll) |
| `protected internal` | assembly, de klasse zelf en afgeleide klassen |
Toepasbaar op **types** (klassen, interfaces, structs, enums, delegates) en op **members** (properties, methodes, constructors, fields). Zie [[Access modifiers]].

### 5.8 Methodes en `ToString()`
- Signatuur: *access modifier – returntype – naam – parameters*: `public int Add(int x, int y) { return x + y; }`
- Meerdere methodes met dezelfde naam mag, zolang de **parameters verschillen** (overloading).
- Elke klasse erft impliciet van `object`, dus heeft elke klasse `ToString()`. Overschrijf het:
```csharp
public override string ToString() { return "Person: " + Name + " " + Age; }
```

### 5.9 Events
Code die moet draaien *als er iets gebeurt* (meestal een gebruikersactie). Een event-handler heeft altijd **twee parameters**: `sender` (wie gooide het event) en `EventArgs` (extra info).
```csharp
private void AddContactButton_Click(object sender, RoutedEventArgs e)
{ /* uitgevoerd bij klik */ }
```
Zie [[Events (CSharp)|Events (C#)]].

## 6. Overerving
Een nieuwe klasse bouwen op een bestaande; "is-een"-relatie (een rechthoek *is een* vorm, een hond *is een* dier). Voordeel: **hergebruik**.
```csharp
public class Animal { public void Run(int speed) { /* laat het dier lopen */ } }

public class Dog : Animal            // Dog erft van Animal
{
    public int Speed { get; set; }
    public Dog(int speed) { Speed = speed; Run(speed); }   // Run() zit in de basisklasse
}
```
Zie [[Overerving]].

## 7. Polymorfisme, virtual en abstract
- **Virtual**: de basisklasse geeft een standaardimplementatie die afgeleide klassen mogen **overschrijven**.
- **Abstract**: geen implementatie, enkel een signatuur; afgeleide klassen **moeten** implementeren.
```csharp
public class Shape     { public virtual void Draw() { /* teken de vorm */ } }
public class Circle    : Shape { public override void Draw() { /* teken een cirkel */ } }
public class Rectangle : Shape { public override void Draw() { /* teken een rechthoek */ } }
```
Zie [[Polymorfisme]] en [[Abstract en virtual]].

Uit de PDF "Object Oriented Programming":
```csharp
public abstract class Shape { public abstract double Area(); }
public class Rectangle : Shape
{
    public double Width { get; }  public double Height { get; }
    public Rectangle(double width, double height) { Width = width; Height = height; }
    public override double Area() => Width * Height;
}
Shape shape = new Rectangle(10, 5);   // variabele-type Shape, object-type Rectangle
double area = shape.Area();           // voert Rectangle.Area() uit
```
Waarom polymorfisme? Zonder polymorfisme zou één `ShapeCalculator` met `if (shapeType == "Rectangle")…` alles moeten kennen: elke nieuwe vorm = bestaande code aanpassen (schendt **Open/Closed**), strings als type (typfouten, *primitive obsession*), te veel parameters, één "God Object" en moeilijk testbaar.

## 8. Interface
Een **set abstracte members** — een *contract* voor een klasse. Elke member moet in de klasse geïmplementeerd worden. Naam begint met een **I**.
```csharp
public interface ICar { public int MaxSpeed { get; set; } public void Drive(); }
public class Car : ICar
{
    public int MaxSpeed { get; set; }   // property is vereist
    public void Drive() { }             // Drive-methode is vereist
}
```
Zie [[Interface als contract]] (3de jaar) — dit principe keert terug in [[Dependency Injection (les)]] en de [[Repository pattern]].

## 9. Object Responsibility Design (uit de PDF)
Een goed object heeft **één verantwoordelijkheid**, **dwingt zijn eigen regels af** en werkt samen met anderen:
```csharp
public sealed class EmailAddress
{
    public string Value { get; }
    public EmailAddress(string value)
    {
        if (string.IsNullOrWhiteSpace(value)) throw new ArgumentException("Email cannot be empty");
        if (!value.Contains("@"))             throw new ArgumentException("Invalid email");
        Value = value;
    }
    public override string ToString() => Value;
}
```
- Validatie **één keer**, geen dubbele checks → een *value object*.
- `sealed` voorkomt dat andere klassen ervan erven.
- Goed ontworpen objecten zijn vanzelf testbaar ([[Unit test]]) — geen mocks, geen database.

## 10. Cheat sheet
De cursus bevat een cheat sheet met vooral: variabelen/datatypes, `if-else`, `switch`, `for`, `foreach`, `while`, klassen met auto-properties, objecten, overerving (`Vehicle` → `Car` met `StartEngine()`), polymorfisme (`Shape` → `Circle`/`Rectangle`) en encapsulatie (private `name` + `GetName()`/`SetName()`).

## Tips en valkuilen
- `char` = enkele quotes, `string` = dubbele quotes.
- Bij `new Car { … }` (initializer) wordt **geen** parameter-constructor gebruikt.
- Een `private` field + `public` property is de standaard; maak fields niet public.
- Zonder `virtual` in de basisklasse kan je niet `override`n.

## Begrippen
[[CSharp|C#]] · [[OOP]] · [[Encapsulatie]] · [[Abstractie]] · [[Overerving]] · [[Polymorfisme]] · [[Abstract en virtual]] · [[Access modifiers]] · [[Constructor (CSharp)|Constructor (C#)]] · [[Property (CSharp)|Property (C#)]] · [[Object initializer]] · [[Namespace (CSharp)|Namespace (C#)]] · [[Casting]] · [[var (CSharp)|var (C#)]] · [[Events (CSharp)|Events (C#)]] · [[Exceptions (CSharp)|Exceptions (C#)]]

## Oefening
[[Oefening Rentabike]]

---
Hoort bij: [[NET Development|.NET Development]]
