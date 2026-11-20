---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [17, 18, 19]
groep: React front end
aliases: [map, Array.map, List rendering]
---
# Lijsten renderen met map

> Een array omzetten naar een lijst elementen met **`map`**, elk met een unieke [[key (React lijsten)|key]].

```jsx
export function ListMap({ students }) {
  return (
    <ol>
      {students.map((student) =>
        <li key={student.id}>{student.name} {student.grade}</li>
      )}
    </ol>
  );
}
```
Eleganter dan een `for`-lus waarin je elementen in een array pusht. Zie ook `WeatherList` → `WeatherItem` ([[React - Axios]]).

## Gerelateerd
[[Component]] · [[Props]]

---
Hoort bij: [[React - State]]
