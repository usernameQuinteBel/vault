---
type: begrip
vak: Mobile & AR Development
onderdeel: Mobile & AR Development
chapter: 4
groep: Flutter
aliases: [LayoutBuilder, SafeArea, NavigationRail]
---
# Responsive en adaptieve UI

> Een app die goed werkt op **telefoons, tablets, desktop en web** — niet door alles uit te rekken, maar door zich aan te passen aan de **beschikbare ruimte** en het **invoertype**.

| Begrip | Betekenis | Voorbeeld |
|---|---|---|
| **Responsive** | de layout **past in** de beschikbare ruimte | 1 kolom op gsm, 2 kolommen op tablet |
| **Adaptief** | de UI **kiest andere controls** die bij het toestel passen | `NavigationBar` onderaan op gsm, `NavigationRail` opzij op tablet |

## Gereedschap
- **`SafeArea`** — voorkomt dat content onder notches, statusbalken of afgeronde hoeken verdwijnt.
- **`LayoutBuilder`** — laat een widget reageren op de **ruimte die hij krijgt**:
```dart
LayoutBuilder(builder: (context, constraints) {
  if (constraints.maxWidth < 600) {
    return Scaffold(body: content, bottomNavigationBar: navBar);   // compact
  }
  return Scaffold(body: Row(children: [navRail, Expanded(child: content)]));
});
```
- **`MediaQuery`** — schermgrootte, oriëntatie, tekstschaal.
- `Expanded`/`Flexible` i.p.v. vaste breedtes.

## Best practices
- Geen **vaste breedtes** voor volledige layouts.
- Test op kleine en grote telefoons, tablets én web.
- Gebruik **breakpoints** (bv. 600 en 840 px, zoals Material).

## Gerelateerd
[[Material Design (Flutter)]] · [[Flutter accessibility]]

---
Hoort bij: [[Flutter UI-kwaliteit]]
