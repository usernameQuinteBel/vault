---
type: chapter
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 4
groep: Onderdeel 1: Flutter
---
# Flutter UI-kwaliteit

> Van "het werkt" naar "het is af": een **consistent thema**, een layout die op elk scherm klopt, **toegankelijkheid** en gestructureerd **debuggen**. Het project vraagt expliciet een *attractive, professional-looking UI*.

## 1. Consistent design met Material 3
- Eén `ThemeData` met `ColorScheme.fromSeed(seedColor: …)` → een volledig kleurschema, ook voor **dark mode**.
- In widgets **themakleuren en tekststijlen** gebruiken (`Theme.of(context).colorScheme.primary`, `textTheme.titleLarge`) i.p.v. hardcoded `Colors.blue` of `fontSize: 22`.
- Moderne componenten: `NavigationBar`, `Card`, `FilledButton`, `ListTile`.
Zie [[Material Design (Flutter)]].

## 2. Responsive en adaptief
| | Betekenis | Gereedschap |
|---|---|---|
| Responsive | layout past in de beschikbare ruimte | `LayoutBuilder`, `Expanded`, `MediaQuery` |
| Adaptief | andere controls per toestel | `NavigationBar` (gsm) ↔ `NavigationRail` (tablet) |
| Veilige zones | niets onder notch/statusbalk | `SafeArea` |
Test op kleine en grote gsm, tablet en web. Zie [[Responsive en adaptieve UI]].

## 3. Toegankelijkheid
Contrast · tikdoelen ≥ 48×48 · meeschalende tekst · labels en tooltips · fouten met uitleg · bevestigen/ongedaan maken · testen met TalkBack/VoiceOver. Zie [[Flutter accessibility]].

## 4. Debuggen
1. **Lees de fout** (bestand, regel, Flutter/Firebase/Dart, tijdens bouwen/inloggen/lezen/opslaan?).
2. **Reproduceer** en zet een **breakpoint** of `debugPrint`.
3. **Fix** één ding, test met hot reload/restart.
> Verander niet lukraak code — zoek eerst waar de fout begint.
Zie [[Debuggen (Flutter)]] en [[Hot reload en hot restart]].

## Kwaliteitschecklist voor je project
- [ ] Eén thema, geen losse hardcoded kleuren.
- [ ] Dark mode ziet er goed uit.
- [ ] Geen overflow-strepen op een kleine gsm; nette layout op tablet.
- [ ] Laad-, fout- en lege toestanden overal afgehandeld.
- [ ] Alle iconknoppen hebben een tooltip; contrast is voldoende.
- [ ] Code opgesplitst in pagina's, widgets en een repository.

## Begrippen
[[Material Design (Flutter)]] · [[Responsive en adaptieve UI]] · [[Flutter accessibility]] · [[Debuggen (Flutter)]] · [[Hot reload en hot restart]]

---
Hoort bij: [[Mobile & AR Development]]
