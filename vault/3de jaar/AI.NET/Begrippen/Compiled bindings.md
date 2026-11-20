---
type: begrip
vak: AI.NET
onderdeel: AI.NET
chapter: 2
groep: MVVM
aliases: [x:DataType]
---
# Compiled bindings

> Bindings die al **tijdens het compileren** gecontroleerd worden, doordat je met `x:DataType` aangeeft welk type de `BindingContext` heeft.

## Waarom?
| Gewone binding | Compiled binding |
|---|---|
| propertynaam pas **tijdens runtime** gezocht (reflection) | al bij het **bouwen** gecontroleerd |
| typfout = stille fout | typfout = **compileerfout** |
| trager | **sneller** |

## Gebruik
```xml
<ContentPage x:DataType="viewModels:IListViewModel">
    <CollectionView ItemsSource="{Binding Students}">
        <CollectionView.ItemTemplate>
            <DataTemplate x:DataType="models:Student">
                <Label Text="{Binding Name}" />
            </DataTemplate>
        </CollectionView.ItemTemplate>
    </CollectionView>
</ContentPage>
```
Let op: in een `DataTemplate` verandert de context naar het **item**, dus daar zet je een nieuw `x:DataType` (het model).

## Typische fouten
| Melding / symptoom | Oorzaak |
|---|---|
| `XC0045: Binding: Property "Nam" not found` | typfout → wordt nu bij het bouwen gevonden ✔ |
| binding werkt niet in een `DataTemplate` | `x:DataType` van de template staat nog op het ViewModel |
| command van het ViewModel in een item werkt niet | binding naar de ouder nodig: `{Binding Source={RelativeSource AncestorType={x:Type viewModels:IListViewModel}}, Path=DeleteCommand}` |

## Namespaces
`x:DataType` vraagt een XML-namespace naar je C#-namespace: `xmlns:viewModels="clr-namespace:EduTrack.ViewModels"`.

## Gerelateerd
[[Data binding]] · [[View (MVVM)]] · [[XAML]]

---
Hoort bij: [[MVVM met één object]]
