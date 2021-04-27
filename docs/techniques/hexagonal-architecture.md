---
title: Hexagonal Architecture
---

🔗 [Hexagonal architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))

## Choice
**Why was this chosen as the architecture to go for this study?**

There are many architectures one could choose to lead with. Also we could look at each of them for two hours or days or years. In the end one architecture had to be chosen to orient ourselves after. I chose [Hexagonal architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)).

This had various reasons:

* It resembles a layered architecture which is another common pattern
* It is said to be the origin of microservice architectures and because microservices are important (not necessarily the future)
* If one cuts out a tranche from the hexagonal approach one can end up with a layered architecture
* It embraces and encourages flexibility, something often needed at the start of a project
* It can improve maintainability
* We can focus on the things that matter (and make 💸) - the rest we keep swappable
* It embraces a healthy testing culture (isolation)
* We use it in practice, as do [others](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749)

Certainly this is not the holy grail, not even the solution for everything. But together with the layered architecture (and as I claim, hexagonal is just circular layers kind of) it makes a stable basis for upcoming software engineers.

You can check the [books section](/docs/help/books), inside the `Clean Architecture` you should find the hexagonal/onion respectively this architecture.

## Coverage
We will cover only a small part of the hexagonal architecture - none the less the most important one[^1]: **Layered Architecture**. We will enlighten this area from two angles:

* Architectural point of view - layering your application
* _Design point_ - separating or isolating concerns, increasing cohesion and lower coupling (using design patterns and SOLID/GRASP principles)

:::note
Once more you wonder why not just _Layered Architecture_ has been chosen. We focus on learning small things with the capacity to go big and scale 💥 We want a broad horizon and foresight 🌄
Also, to be frank, implementation wise there is not too much difference [^2].
:::

## Resources

- [Hexagonal Architecture: the practical guide for a clean architecture](https://julien-topcu.medium.com/decoupling-your-technical-code-from-your-business-logic-with-the-hexagonal-architecture-hexarch-b4da7ba62079)
- [Ready for changes with Hexagonal Architecture](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749)
- [Write More Maintainable Software With a Hexagonal Architecture](https://airspeed.ca/write-more-maintainable-software-with-a-hexagonal-architecture/)
- [Hexagonal Architecture demystified](https://madewithlove.com/blog/software-engineering/hexagonal-architecture-demystified/)

:::note
Alone from these different resource we can see that `hexagonal architecture` is more of an idea than an ISO-industrial standard
:::

[^1]: My 2¢.
[^2]: [Layers, hexagons, features and components](https://www.codingthearchitecture.com/2016/04/25/layers_hexagons_features_and_components.html)