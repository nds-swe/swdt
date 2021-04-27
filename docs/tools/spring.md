---
title: Spring
---

> Spring makes programming Java quicker, easier, and safer for everybody. Spring’s focus on speed, simplicity, and productivity has made it the world's most popular Java framework. - *[spring.io](https://spring.io/why-spring)*

🔗 [spring.io](https://spring.io/)

## Use

We get to know Spring in the [Task `spring-starter`](/docs/tasks/spring-starter).

Adhering to our principle [DRY](/docs/theory/principles#do-not-repeat) we do not repeat what others already offer for free and maintained. Spring is one of many Java frameworks (we mostly use Spring `core`) and one of hundreds of frameworks.

We use Spring and its core concepts to have a small but fine service we can use as a base for any of our further tasks (e.g. Testing, Design Patterns etc.).

## Install

This tool is not installed in a _classy_ way, check the task [`spring-starter`](/docs/tasks/spring-starter) to get started with Spring.

## Notes

### Dependencies
We want Spring primarily for this functionality. We want to import "features" that someone else already did "for us". Dependency managers and management are a key concept of modern architecture - it also helps us to stay [DRY](/docs/theory/principles#do-not-repeat).

:::note Remember
We want to reuse as much as possible but with common sense, otherwise we might end in a dependency hell 🔥

**Good example for dependency**: JSON Body De-Serialization or E-Mail templating

**Bad example for dependency**: Some library to convert a string from lower to UPPER case (Java can do that)
:::

### Annotations
As seen in the lecture, spring is heavily based on two concepts (one of which we might see later in this course):

* [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection)
* [Annotations](https://springframework.guru/spring-framework-annotations/)

These two principles you do not yet need to master, but you have to understand, that every `@Annotation` (signaled by the `@`) invokes either a configuration or injection by Spring!