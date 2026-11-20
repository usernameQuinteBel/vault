---
type: chapter
vak: NET Development
onderdeel: NET Development
chapter: 10
groep: Deel B: ASP.NET Core API
aliases: [Unit Testing, MSTest, TDD, Testing in .NET, les 7 Unit Testing, Test Driven Development]
---
# Unit testing en TDD

> Een **unit test** controleert één klein stukje logica geïsoleerd (zonder database, bestand of netwerk) volgens het **Arrange-Act-Assert**-patroon; bij **TDD** schrijf je eerst een falende test (**red**), dan de minimale code (**green**) en daarna **refactor** je.

_Slides: "7. Unit Testing" (voorbeeld Bank/Account met MSTest), PDF "Testing in .NET" en "Test-Driven Development"._

## 1. Kwaliteitsbewaking (QA)
QA-testing zorgt dat software van de hoogst mogelijke kwaliteit is en onder verschillende omstandigheden/inputs werkt. Het bevat technieken om problemen te **voorkomen** en combineert idealiter **geautomatiseerd** én **manueel** testen.

| | **Automated testing** | **Manual testing** |
|---|---|---|
| Opzet | initiële setup duur en tijdrovend; onderhoud stijgt als de app vaak wijzigt | ad-hoc testing door developers; waardevol door ervaren testers met verschillende profielen/toestellen |
| Sterk in | tests die **herhaaldelijk** moeten gebeuren; sneller en versnelt de ontwikkelcyclus | eerst **exploratief** door de app, daarna alle testscenario's nalopen |

## 2. Unit testing
Een **unit test** is automatische testing die nagaat of **individuele units** (functie, methode, procedure, module, object) werken zoals verwacht. Geschreven door de developers, als eerste stap in automatische testing. De developer kent de interne code → **white box testing**. Zie [[Unit test]].

**Waarom?**
- bugs **vroeg** ontdekken, lagere kost van bugfixing in latere fasen;
- dwingt je na te denken over wat er **fout kan lopen**;
- creëert een **kwaliteitsmindset**.

### Testniveaus
| Niveau | Wie / hoe | Doel |
|---|---|---|
| **Unit testing** | developers, white box | individuele componenten |
| **Integration testing** | testers, **black box** | samenwerking tussen modules |
| **System testing** | testers | volledige applicatie: functionele én niet-functionele eisen |
| **Acceptance testing** | **eindgebruikers/klanten**, einde van het proces | functionaliteit vanuit gebruikersoogpunt |
**Grondige unit testing is de basis van het volledige testproces.**

### Unit tests vs integration tests (PDF)
| Unit tests | Integration tests |
|---|---|
| snel, geïsoleerd | trager, **echte infrastructuur** |
| geen database/bestanden/netwerk | echte database |
| duizenden in seconden | meestal minder |
| testen **gedrag** (business rules) | testen **correctheid van de bedrading/configuratie** |
Voorbeelden integration test: *slaat EF Core correct op en op, werken relaties, rolt een transactie terug?* Unit tests beschermen **gedrag**, integration tests de **infrastructuur**; in professionele systemen zijn beide nodig. Zie [[Integration test]].

Een unit test mag **niet**: een database aanspreken, HTTP-calls doen, bestanden lezen, afhangen van systeemtijd of van externe services. Zodra infrastructuur meespeelt is het geen unit test meer.

## 3. Opzet in Visual Studio (Bank-voorbeeld)
1. **Class Library** `Bank` (.NET 10): bevat de klassen van een bankapp (`Account`, `Customer`); `Class1.cs` verwijderen.
2. Class `Account`:
```csharp
public class Account
{
    private double balance = 0;
    public void Credit(double amount)  { balance += amount; }
    public void Debit(double amount)
    {
        if (balance > amount) { balance -= amount; }
    }
    public double Balance { get { return balance; } }
}
```
3. Solution → Add → **New Project → MSTest Test Project** `BankTest` (.NET 10). Dit is een class library met alle testklassen voor `Bank`.
4. **Project reference**: BankTest → Add → Project Reference → `Bank` (en `using Bank;` bovenaan).
5. `Test1.cs` hernoemen naar `AccountTest.cs`.

```csharp
using Bank;
namespace BankTest
{
    [TestClass]
    public class AccountTest
    {
        [TestMethod]
        public void TestMethod1() { }
    }
}
```
- **`[TestClass]`** is verplicht op elke klasse met testmethoden die je in **Test Explorer** wil draaien.
- **`[TestMethod]`** moet op elke testmethode staan.
Zie [[MSTest en xUnit]].

## 4. Een testmethode schrijven: Arrange-Act-Assert
| Fase | Doet |
|---|---|
| **Arrange** | objecten initialiseren en de testdata klaarzetten |
| **Act** | de te testen methode aanroepen met de voorbereide parameters |
| **Assert** | controleren dat het resultaat/gedrag **zoals verwacht** is |
Zie [[Arrange-Act-Assert]].

### Naamgeving
Slides: `TestedMethod_InitialState_ExpectedState()` — de naam bestaat uit **drie delen**: (1) de methode, (2) de beginsituatie, (3) de verwachte uitkomst. Voorbeeld: `Add_MaximumNumber_ThrowsOverFlowException()`. Naamstandaarden drukken de **intentie** van de test uit. (De PDF toont ook `MethodName_ShouldExpectedBehavior_WhenCondition`, bv. `Withdraw_ShouldThrowException_WhenBalanceIsTooLow`.) Zie [[Test naming]].

### Eerste test
```csharp
[TestMethod]
public void Constructor_Balance0_Returns0()
{
    // ARRANGE
    Account account = new Account();
    // ACT
    double balance = account.Balance;
    // ASSERT
    Assert.AreEqual(0, balance);
}
```
Run via **Test → Run All Tests**; Test Explorer toont groen (geslaagd) of rood (mislukt) met foutmelding, bron en duur.

## 5. De Assert-klasse
`Assert` bevat methoden om voorwaarden te controleren; wordt de voorwaarde niet voldaan, dan wordt een **exception** gegooid.

| Positief | Negatief | Overig |
|---|---|---|
| `AreEqual` | `AreNotEqual` | `Fail` |
| `AreSame` | `AreNotSame` | `Inconclusive` |
| `IsTrue` | `IsFalse` | |
| `IsInstanceOfType` | `IsNotInstanceOfType` | |
| `IsNull` | `IsNotNull` | |

> Op de slide staat `IsInstanceTypeOf`; in MSTest heet de methode `IsInstanceOfType`.

- `AreEqual` is voor **waarden (variabelen)**, `AreSame` voor **objecten** (dezelfde referentie).
- **Inconclusive** = je kan het resultaat niet bepalen (bv. externe resource/internetverbinding niet beschikbaar): niet als mislukt en ook niet als geslaagd markeren, maar als inconclusive in het rapport.
- Strings: `Assert.AreEqual("Paul", "paul")` faalt; met `ignoreCase: true` (**true = case-insensitive**) en eventueel een `CultureInfo`.
- Een **bericht** voor Test Explorer toevoegen: `Assert.IsTrue(fromCall, "Value is not true");` of met `string.Format`: `"{0} is not true"`. Voorbeeldfout: *"Assert.AreEqual failed. Expected:<0>. Actual:<1>. balance is 1 and not 0 at start"*. Zie [[Assert]].
- Let op: kies `IsTrue` of `IsFalse` correct — een test die rood gaat met `IsTrue` bij de verkeerde verwachting is een foute test.

### StringAssert
Handige methoden voor strings: `Contains`, `StartsWith`, `EndsWith`, `Matches` (`MatchesRegex`) en `DoesNotMatch` (`DoesNotMatchRegex`).

## 6. Oefening Account (rood → groen)
Slides laten je extra tests schrijven:
- `Credit_999OnBalance0_Returns999()`
- `Debit_500FromBalance500_Returns0()` — **faalt** (`Expected:<0>, Actual:<500>`) omdat de `Debit`-methode `balance > amount` gebruikt in plaats van `>=`. Test run: *3 Tests (2 Passed, 1 Failed)*; na het corrigeren van je code (**de test wijst de bug aan**) draai je opnieuw → 3 geslaagd.

## 7. Test Driven Development (TDD)
> **Schrijf eerst de tests, daarna de code.** Dit geeft geldige code in alle omstandigheden en dus betrouwbaardere software.

**Red – Green – Refactor:**
1. **Red**: schrijf een **falende** test (de functionaliteit bestaat nog niet);
2. **Green**: schrijf de **minimale code** zodat de test slaagt;
3. **Refactor**: ruim de code veilig op, de tests bewaken de correctheid;
4. herhaal tot je geen tests meer kan bedenken.
De tests zijn een **vangnet** tegen regressies. Zie [[TDD]].

**Waarom TDD?** Het antwoordt op fragiele systemen bij refactoring, onduidelijk/over-engineered design, late bugontdekking en angst om bestaande code te wijzigen. Je moet vooraf nadenken over wat de code moet doen, hoe ze gebruikt wordt, welke inputs/outputs belangrijk zijn en hoe componenten samenwerken.

### Minimal implementation principle (PDF-voorbeeld BankAccount)
Test eerst (de code compileert nog niet en faalt, bewust):
```csharp
[Fact]
public void Withdraw_ShouldThrow_WhenBalanceIsTooLow()
{
    var account = new BankAccount(100);
    Assert.Throws<InvalidOperationException>(() => account.Withdraw(200));
}
```
Stappen:
1. **Minimale code om te compileren:** enkel de klasse, constructor en methode-signatuur. Compileert, maar faalt (er wordt niets gegooid).
2. **Minimale code om te slagen:**
```csharp
public class BankAccount
{
    private decimal _balance;
    public BankAccount(decimal initialBalance) { _balance = initialBalance; }
    public void Withdraw(decimal amount)
    {
        if (amount > _balance) throw new InvalidOperationException("Insufficient funds.");
    }
}
```
Je implementeert **nog niet** een geslaagde opname, geen validatie van negatieve bedragen, geen deposit of volledig domeinmodel: **enkel wat de tests nu eisen**.
3. **Volgende test** verfijnt het ontwerp: *`Withdraw_ShouldDecreaseBalance_WhenAmountIsValid`* (`Withdraw(40)` op 100 → `Balance == 60`). Dit **dwingt** een designbeslissing af (een leesbare `Balance`-property: `public decimal Balance { get; private set; }`) → terug rood (compileert niet), dan minimaal groen: `Balance -= amount;`.

Je implementeert telkens de kleinste wijziging, vermijdt speculatieve features en laat de volgende test het ontwerp "naar boven trekken". Mogelijke volgende tests: opname van exact het saldo → 0; negatief bedrag → exception; 0 opnemen → niets doen of exception (regel bepalen).

### Tests voor exceptions
Een negatief bedrag crediteren moet een `ArgumentOutOfRangeException` geven (assert en act combineren):
```csharp
[TestMethod]
public void Credit_NegativeAmount_ReturnsOutOfRangeException()
{
    // ARRANGE
    Account account = new Account();
    // ASSERT + ACT
    Assert.Throws<ArgumentOutOfRangeException>(() => account.Credit(-200));
}
```
Eerst rood (*"No exception thrown. ArgumentOutOfRangeException exception was expected."*), daarna `Credit` herschrijven tot alle tests slagen.

### Applicatiespecifieke exceptions
Bij een bankapp is `BalanceInsufficientException` logisch: wordt een rekening gedebiteerd met méér dan het saldo, dan wordt de betaling **geannuleerd**.
```csharp
namespace Bank
{
    public class BalanceInsufficientException : ApplicationException { }
    public class Account { … }
}
```
Test: `Debit_AmountBiggerThanBalance_ThrowsBalanceInsufficientException()` → daarna `Debit` herschrijven tot alle (5) tests slagen. Zie [[Exceptions (CSharp)|Exceptions (C#)]].

## 8. Testprincipes (PDF)
| Principe | Betekenis |
|---|---|
| **Isolatie** | tests delen geen state, hangen niet af van volgorde, maken eigen objecten; ze moeten alleen, parallel en in willekeurige volgorde kunnen draaien |
| **Deterministisch** | altijd hetzelfde resultaat: vermijd `DateTime.Now`, random waarden, omgevingsvariabelen, externe configuratie. Soms slagen/falen = onbetrouwbare test |
| **Async** | testmethode geeft `Task` terug (niet `void`), `await` altijd, **nooit blokkeren met `.Result`/`.Wait()`** |
```csharp
[Fact]
public async Task GetUser_ShouldReturnUser_WhenIdExists()
{
    var service = new UserService();
    var user = await service.GetUserAsync(1);
    Assert.NotNull(user);
}
```
Goede tests lezen als **documentatie**. Zie [[Async en await]].

Frameworks in .NET: **xUnit** (meest gebruikt; PDF gebruikt `[Fact]`, `Assert.Equal`), **NUnit** en **MSTest** (de slides). Zie [[MSTest en xUnit]].

## 9. Integration testing met EF Core
EF Core is een typische integratiegrens. Test: DbContext-configuratie, entity mappings, relaties, migrations, cascade delete, constraints en queries — dat kan niet met unit tests alleen. **Regel: elke testrun start met een schone database.**
```csharp
[Fact]
public async Task AddStudent_ShouldPersistStudentInDatabase()
{
    var options = new DbContextOptionsBuilder<AppDbContext>()
        .UseSqlite("DataSource=:memory:").Options;

    using var context = new AppDbContext(options);
    context.Database.OpenConnection();
    context.Database.EnsureCreated();

    context.Students.Add(new Student { Name = "Alice" });
    await context.SaveChangesAsync();

    var students = await context.Students.ToListAsync();
    Assert.Single(students);
}
```
Dit controleert de EF-configuratie, de database-interactie en het persistentiegedrag.

## 10. Code kata: StringCalculator
Een **TDD kata** is een oefening om TDD-vaardigheid te trainen; je **herhaalt** ze keer op keer. *Kata* = Japans voor "vorm"/"gechoreografeerd bewegingspatroon" (vechtsport: herhalen om beter te worden). Stappen: **falende test → minimale code → refactor** en herhalen. Zie [[Code kata]] en [[Oefening StringCalculator Kata]].

Vereisten (Roy Osherove): klasse `StringCalculator` met `static int Add(string numbers)`:
| # | Vereiste |
|---|---|
| 2 | lege string → **0** |
| 3 | één getal → het getal zelf |
| 4 | getallen gescheiden door komma → **som** (`"1,8,3"` = 12) |
| 5 | getallen **> 1000 negeren** (`"1,2,1000"` = 1003, `"1,2,1001"` = 3) |
| 6 | negatieve getallen → `ArgumentException` met "Negative numbers not allowed:" + de negatieven |

### Parameterized tests
Met `[DataTestMethod]` + `[DataRow]` loopt dezelfde test voor elke combinatie:
```csharp
[DataTestMethod]
[DataRow("1,2,3", 6)]
[DataRow("1,2,3,4", 10)]
[DataRow("1,2,3,4,5", 15)]
public void Add_MoreThanThreeNumbersSeparatedByComma_ReturnsTheirSum(string numbers, int result)
{
    //ASSERT
    Assert.AreEqual(result, StringCalculator.Add(numbers));
}
```
(AAA is minder zichtbaar maar nog aanwezig.) Zie [[Parameterized test]].

## Tips en valkuilen
- **Eén gedrag per test**; nooit tests die van elkaar afhangen.
- Faalt een test: lees eerst *Expected* vs *Actual* — meestal ligt de bug in de code (zoals `>` i.p.v. `>=`).
- In het MotoGP-project test je **Race duration** en de strategie-implementaties met unit tests ([[MotoGP - Race duration (Strategy Pattern)]]); afhankelijkheden vervang je door **mocks** ([[Mocking (Moq)]], zie [[Dependency Injection (les)]]).
- Extra oefeningen: Bowling game Kata en FizzBuzz Kata (GitHub; kata-log.rocks/tdd).

## Begrippen
[[Unit test]] · [[Integration test]] · [[Arrange-Act-Assert]] · [[MSTest en xUnit]] · [[Assert]] · [[Test naming]] · [[TDD]] · [[Code kata]] · [[Parameterized test]] · [[Mocking (Moq)]] · [[Exceptions (CSharp)|Exceptions (C#)]] · [[Async en await]]

## Oefening
[[Oefening StringCalculator Kata]]

---
Hoort bij: [[NET Development|.NET Development]]
