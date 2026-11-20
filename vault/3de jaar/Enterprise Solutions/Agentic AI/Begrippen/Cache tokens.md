---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 2
groep: Het model
dictionary_nr: 16
---
# Cache tokens

> [[Input tokens]] die de provider al verwerkt had in een vorige request en dus niet opnieuw moet verwerken. Ze worden aangerekend aan een veel lager tarief (vaak ±10% van input) en maken lange sessies betaalbaar.

## Wanneer wordt iets gecachet? (voorbeeld)
Elke letter = een blok gespreksinhoud.
| Request stuurt | Gecachet | Volle prijs | Waarom |
|---|---|---|---|
| `AB` | niets | `AB` | Eerste request |
| `ABC` | `AB` | `C` | `AB` is exacte prefix van de vorige |
| `ABCD` | `ABC` | `D` | Prefix nog intact |
| `AXCD` | `A` | `XCD` | `B` werd `X` → match faalt vanaf daar |

## Tips
- Bij een plots dure sessie: vergelijk **cache tokens met input tokens** in het gebruiksrapport. Een gebroken cache zie je daar eerst.
- Oorzaken van een gebroken cache: de harness herschikt content, een tijdstempel verandert, een bestand wordt anders weergegeven.

## Gerelateerd
[[Prefix cache]] · [[Input tokens]] · [[LLM-prijsmodel]] · [[Stateless]]

## Bron
- AI Coding Dictionary – term 16/71: [Cache tokens](https://github.com/mattpocock/dictionary-of-ai-coding/blob/main/dictionary/Cache%20tokens.md) · [interactieve versie](https://www.aicodingdictionary.com/?term=ai)

---
Hoort bij: [[Module 2 - Harness & Agentic AI]]
