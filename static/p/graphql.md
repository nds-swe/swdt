## Ziel

> Die Studierenden haben die GitHub GraphQL API abgefragt und können deren Dokumentation anwenden und mit Abfragen verknüpfen.

---

## 🎒 Ressourcen aktivieren

- REST API
- Fix beschriebene Parameter _(DTO)_ 😔
- Jede Änderung eine neue API
---
- API, die es dem Nutzer erlaubt, das abzufragende Objekt selber zu gestalten
---
![devops8](assets/devops8.png)

---

## Agenda

Drücke _Esc_ 🔘

---

## GraphQL

Was wir brauchen

[GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer) gibt es auch _online_, aber wir sind jetzt _late junior_ engineers 🧑🏽‍🎓

--

### Ein Token

[Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

--

### _PostMan_ für GraphQL

- 🍏[GraphiQL](https://github.com/skevy/graphiql-app)
- 🪟[Altair GraphQL Client](https://altair.sirmuel.design/)

```
curl -H "Authorization: bearer \
  <token>" https://api.github.com/graphql
```

--

### Docs

- [About the GraphQL API](https://docs.github.com/en/graphql/overview/about-the-graphql-api)
- [Discovering the GraphQL API](https://docs.github.com/en/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)

_🏁 Let's check it out._

---

## Aufgabe

Senden Sie diese GraphQL Query an GitHub. Welche Zahl erhalten Sie?

```
{
  viewer {
    repositories(first: 100) {
      totalCount
    }
  }
}
```