---
type: oefening
vak: NET Development
onderdeel: NET Development
chapter: 10
groep: Oefeningen
---
# Oefening StringCalculator Kata 📝

> Roy Osheroves **String Calculator kata** met **TDD**: stap voor stap eerst een falende test schrijven en daarna de methode `Add` net genoeg aanpassen om te slagen. Oefent [[TDD]], [[Arrange-Act-Assert]] en [[Parameterized test|parameterized tests]] met MSTest.

## Eisen (vereenvoudigde kata)
| # | Eis | Voorbeeld |
|---|---|---|
| 1 | klasse `StringCalculator` met `static int Add(string numbers)` | |
| 2 | lege string → **0** | `""` → 0 |
| 3 | één getal → het getal zelf | `"5"` → 5 |
| 4 | getallen gescheiden door komma's → hun **som** | `"1,8,3"` → 12 |
| 5 | getallen **groter dan 1000** negeren | `"1,2,1000"` → 1003, `"1,2,1001"` → 3 |
| 6 | negatieve getallen → **`ArgumentException`** met "Negative numbers not allowed:" + de negatieve getallen | |

## Opzet
- Class Library **`StringCalculatorKata`** + MSTest-project **`StringCalculatorKataTest`** in dezelfde solution ([[MSTest en xUnit]]).
- In het testproject een **project reference** naar het productieproject en de `using` bovenaan de testklasse.

## Aanpak per eis
| Eis | Testmethode | Wat je in `Add` doet |
|---|---|---|
| 2 | `Add_EmptyStringAsParam_ReturnsZero()` | klasse en methode laten genereren (*Show potential fixes* → *Generate new type…*, access **public**, locatie = productieproject); test faalt met `NotImplementedException`; dan gewoon 0 teruggeven |
| 3 | `Add_StringContainingSingleNumber_ReturnsTheNumberItself()` | de **luiste** oplossing die test 2 en 3 laat slagen |
| 4 | `Add_TwoNumbersSeparatedByComma_ReturnsTheirSum()` en `Add_MoreThanThreeNumbersSeparatedByComma_ReturnsTheirSum()` | nu de **correcte** implementatie; vorige tests moeten blijven slagen |
| 4+ | parameterized test met **`DataRow`** | `TestMethod` vervangen door **`DataTestMethod`**; per `DataRow` de string en het verwachte resultaat |
| 5 | extra `DataRow`'s met getallen > 1000 | `Add` aanpassen |
| 6 | `Add_StringContainingNegativeNumbers_ThrowsException()` (meerdere testgevallen) | meteen de correcte implementatie; test **controleert de exception**, niet een returnwaarde ([[Assert]]) |

## Valkuilen
- Schrijf telkens **eerst** de test en zie hem falen (rood → groen → refactor).
- Na elke aanpassing **alle** tests opnieuw draaien.
- Volg in elke test het **AAA**-patroon; bij `DataRow` is het minder zichtbaar maar nog steeds aanwezig.

## Meer oefenen
Bekende TDD-kata's zoals **Bowling Game** en **FizzBuzz** op GitHub (`garora/TDD-Katas`) of `kata-log.rocks/tdd`.

## Begrippen
[[TDD]] · [[Code kata]] · [[Unit test]] · [[Arrange-Act-Assert]] · [[Test naming]] · [[Parameterized test]] · [[Assert]] · [[MSTest en xUnit]]

---
Hoort bij: [[Unit testing en TDD]]
