---
type: begrip
vak: Enterprise Solutions
onderdeel: Agentic AI
chapter: 1
groep: Het model
aliases: [Tokenizer, Encoding, Decoding, Tokenisatie]
---
# Tokenization (encoding & decoding)

> Het omzetten van tekst naar [[Token]]s (encoding) en van tokens terug naar tekst (decoding). Gebeurt door een **tokenizer** met een vaste woordenschat.

## Encoding (tekst → tokens)
1. De tokenizer heeft een **vocabulaire** van tienduizenden tekstfragmenten, elk met een **ID-nummer**.
2. Je tekst wordt opgesplitst in fragmenten uit die woordenschat (veel modellen gebruiken een variant van *Byte Pair Encoding*: veelvoorkomende reeksen tekens worden samengevoegd tot één token).
3. Het model krijgt een **lijst van getallen** – nooit letters of woorden.

Voorbeeld (schematisch):
```
"Hallo wereld!"  →  ["Hal", "lo", " wereld", "!"]  →  [17389, 385, 54112, 0]
```

## Decoding (tokens → tekst)
Het model voorspelt een token-ID ([[Next-token prediction]]); de tokenizer zet dat ID terug om naar tekst. Zo verschijnt het antwoord stukje per stukje op je scherm.

## Waarom moet je dit snappen?
- **Kost en limieten** zijn in tokens, niet in woorden – zie [[LLM-prijsmodel]].
- **Taal maakt uit**: Engels is vaak het "goedkoopst"; Nederlands en zeker niet-Latijnse schriften worden in meer tokens opgesplitst → meer kosten, minder ruimte in het [[Context window]].
- **Code en rare strings** (hashes, base64, UUID's) kosten veel tokens.
- **Rare fouten** zoals het verkeerd tellen van letters in een woord komen doordat het model tokens ziet, geen letters.
- Elke modelfamilie heeft **zijn eigen tokenizer** → hetzelfde tekstje kan bij twee providers een ander aantal tokens zijn.

## Zelf proberen
Providers hebben online tokenizer-tools waar je tekst plakt en ziet hoe ze opgesplitst wordt.

## Gerelateerd
[[Token]] · [[LLM-prijsmodel]] · [[Next-token prediction]] · [[Input tokens]] · [[Output tokens]]

---
Hoort bij: [[Module 1 - Definitions, terms & prompting]]
