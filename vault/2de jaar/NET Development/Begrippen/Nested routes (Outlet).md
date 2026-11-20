---
type: begrip
vak: NET Development
onderdeel: NET Development
chapter: [18]
groep: React front end
aliases: [Outlet, Index route, Route parameter]
---
# Nested routes (Outlet)

> Een parent-`Route` met `<Outlet />` rendert **één van zijn child routes**.

```jsx
<Route path={'/class'} element={<Outlet />}>
  <Route index element={<Class />}/>       // /class
  <Route path={':id'} element={<Student />}/>   // /class/23
</Route>
```
- `index` = wat getoond wordt als de parent **exact** matcht.
- `:id` = **route parameter** (dynamisch deel van de URL), uit te lezen met [[useParams]].
- Links: `<Link to={"/class/" + student.id}>{student.name}</Link>`.

## Gerelateerd
[[React Router]] · [[NavLink]]

---
Hoort bij: [[React - Single Page Applications]]
