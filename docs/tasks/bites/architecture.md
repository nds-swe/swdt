---
title: Architecture
---

:::info Metadata
This task is complementary to the lectures and lists tasks and information for the in-lesson tasks.
:::

You can read more about the C4 Model in its [technique article](/docs/techniques/c4-modeling).

:::note Task
Take **your** Jinder component diagram (result of [Jinder#component-diagram](c4-model#component-diagram)) and convert it to a layered and/or hexagonal architecture.
:::

## 🔑 points
* Containers (C4 containers) require always an abstraction
  + by an API, Adapter or Facade
* Retrieving data in any form requires an abstraction
  + maybe a repository
* Generally we want to depend _inwards_
  + the inner layers (whatever they are named) use interfaces (APIs) - how the outer layer does something is irrelevant to them

Note that hexagonal architecture is an architecture principle not a defined standard. _Outgoing actions_ can have different names like adapters, ports, data sources or similar. In the same way incoming connections can be transport layers, ports, controllers or adapters. In the end the circular layers (well, hexagonal) and the common understanding matter.