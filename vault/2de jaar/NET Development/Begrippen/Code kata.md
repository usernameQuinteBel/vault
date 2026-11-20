---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [10]
groep: Testing, DI en architectuur
aliases: [TDD kata, Kata, StringCalculator]
---
# Code kata

> Een oefening om TDD-vaardigheid te trainen die je **keer op keer herhaalt** (*kata* = Japans voor "vorm", herhaald bewegingspatroon in vechtsport).

## StringCalculator (Roy Osherove)
Klasse `StringCalculator` met `static int Add(string numbers)`:
| # | Vereiste |
|---|---|
| 2 | lege string → **0** |
| 3 | één getal → het getal zelf |
| 4 | getallen gescheiden door komma → **som** (`"1,8,3"` = 12) |
| 5 | getallen **> 1000 negeren** (`"1,2,1000"` = 1003, `"1,2,1001"` = 3) |
| 6 | negatieve getallen → `ArgumentException` met "Negative numbers not allowed:" + de negatieven |

Werk stap voor stap volgens [[TDD]]: test, minimale code, refactor. Zie [[Oefening StringCalculator Kata]].

Extra: Bowling game Kata en FizzBuzz Kata.

## Gerelateerd
[[Parameterized test]] · [[Unit test]]

---
Hoort bij: [[Unit testing en TDD]]
