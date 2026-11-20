---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [1]
groep: C# en .NET
aliases: [public private protected internal, Zichtbaarheid]
---
# Access modifiers

> Sleutelwoorden die bepalen **wie een type of member mag gebruiken**.

| Modifier | Zichtbaar voor |
|---|---|
| `public` | alles en iedereen |
| `private` | enkel de klasse zelf |
| `protected` | de klasse en zijn afgeleide klassen |
| `internal` | enkel binnen de huidige [[Assembly]] (.dll) |
| `protected internal` | assembly, de klasse zelf en afgeleide klassen |

Toepasbaar op **types** (klassen, interfaces, structs, enums, delegates) en op **members** (properties, methodes, constructors, fields).

## Standaardpraktijk
Een `private` field + `public` property; fields maak je nooit public ([[Encapsulatie]], [[Property (CSharp)|Property (C#)]]).

## In de slides
Een methodesignatuur = *access modifier – returntype – naam – parameters*: `public int Add(int x, int y)`. Een generieke klasse in de Domain-laag is `public` zodat andere projecten ze kunnen gebruiken ([[Lagen - Contracts, Domain en Infrastructure|Lagen: Contracts, Domain en Infrastructure]]).

## Gerelateerd
[[OOP]] · [[Overerving]]

---
Hoort bij: [[CSharp basis en OOP]]
