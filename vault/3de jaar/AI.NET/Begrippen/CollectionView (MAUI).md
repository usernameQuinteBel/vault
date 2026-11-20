---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 3
groep: MVVM
aliases: [CollectionView, DataTemplate]
---
# CollectionView (MAUI)

> De MAUI-control om een **lijst** items te tonen, met een **template per item**, selectie en verschillende layouts. Bindt aan een [[ObservableCollection]].

## Belangrijkste properties
| Property | Rol |
|---|---|
| `ItemsSource` | de collectie (`{Binding Students}`) |
| `ItemTemplate` | een `DataTemplate`: hoe één item eruitziet |
| `SelectionMode` | `None`, `Single`, `Multiple` |
| `SelectedItem` | het geselecteerde item (two-way binding naar het ViewModel) |
| `ItemsLayout` | `LinearItemsLayout` (verticaal/horizontaal, `ItemSpacing`) of `GridItemsLayout` (kolommen) |
| `EmptyView` | wat je toont als de lijst leeg is |

## Voorbeeld (EduTrack)
```xml
<CollectionView ItemsSource="{Binding Students}"
                SelectedItem="{Binding SelectedStudent}"
                SelectionMode="Single" EmptyView="Geen studenten">
  <CollectionView.ItemsLayout>
    <LinearItemsLayout Orientation="Vertical" ItemSpacing="5" />
  </CollectionView.ItemsLayout>
  <CollectionView.ItemTemplate>
    <DataTemplate x:DataType="models:Student">
      <VerticalStackLayout>
        <Label Text="{Binding Name}" FontSize="18" />
        <Label Text="{Binding Number}" FontSize="12" TextColor="Silver" />
      </VerticalStackLayout>
    </DataTemplate>
  </CollectionView.ItemTemplate>
</CollectionView>
```

## Let op
- Binnen de `DataTemplate` is de **bindingcontext het item** (`Student`), niet het ViewModel → `x:DataType="models:Student"`.
- Een command van het ViewModel vanuit een item aanroepen vraagt een binding met `Source={RelativeSource AncestorType=...}`.
- `CollectionView` vervangt de oudere `ListView` (performanter, flexibeler).

## Gerelateerd
[[ObservableCollection]] · [[Data binding]] · [[Compiled bindings]]

---
Hoort bij: [[MVVM met collections]]
