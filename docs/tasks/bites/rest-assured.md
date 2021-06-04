---
title: REST-assured
---

:::info Metadata
This task is complementary to the lectures and lists tasks and information for the in-lesson tasks.
:::

## Prerequisites

Open your [`spring-starer`](../spring-starter), which already has [tests](../github-actions) and an [empty endpoint](../architecture).

In case you did not do that, use [this](https://github.com/nds-swe/spring-starter/releases/tag/0.1.2).

## Add dependency
Do as the official [guide states](https://github.com/rest-assured/rest-assured/wiki/GettingStarted#rest-assured) to add the dependency.

## Write an integration test

```java
public class EmptyControllerTestIT {
  @Test
  @DisplayName("/empty/ returns 200")
  public void empty_returns_200() {
    when().
        get("/empty/").
        then().
        statusCode(200)
    );
  }
}
```

## Run the test
Start the server, then run the test.
:::danger
The test will fail if the server is not running! We write an integration test.
:::

## Combining with [bites/docker-compose](docker-compose)
Run your application with `docker-compose up` and run your tests again!

Hint: Now you do not need to run the backend yourself in IntelliJ, `docker-compose up` starts it!