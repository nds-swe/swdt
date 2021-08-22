---
title: Docker Compose
sidebar_position: 10
---

:::info Metadata
This task is complementary to the lectures and lists tasks and information for the in-lesson tasks.
:::


## Prerequisites
Open your [`spring-starer`](../spring-starter), which already has [tests](../github-actions) and an [empty endpoint](../architecture).

In case you did not do that, use [this](https://github.com/nds-swe/spring-starter/releases/tag/0.1.2).

## Get started

### Create file
Create a new file `docker-compose.yml` in the root directory.

### Add command

_Translate_ this docker run command into a compose file:

```bash
docker build -t spring-starter . && run --name spring-starter -p 8080:8080 spring-starter
```

Here is an empty compose file and an [official example](https://docs.docker.com/compose/gettingstarted/#step-3-define-services-in-a-compose-file):

```yml
version: "3.0"
services:
  ...
```

Hint: Only four lines are missing (name, `build` and ports).

## Solution
[The fast way 🚁](https://github.com/nds-swe/spring-starter/blob/main/docker-compose.yml)