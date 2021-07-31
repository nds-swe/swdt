---
title: Database
---

:::info Metadata
|Lecture equivalent| Duration |
|-|-|
|3| 2h 15min |

At the end of this task, students

* have linked `spring-starter` to a MySQL database using JPA
:::

## Pre-requisites
In the lecture, we started to reproduce [spring-starter#6](https://github.com/nds-swe/spring-starter/pull/6).

:::note Task
Do add the Scientist repository as H2 database to your project as you see in the [pull request](https://github.com/nds-swe/spring-starter/pull/6)!
:::

## Guide
The transfer task follows [this guide](https://spring.io/guides/gs/accessing-data-mysql/) but with one key change 🔑: We do not use a host-machine mysql server, we use a docker container [`mysql`](https://hub.docker.com/_/mysql).

## Prepare the database
In the __Environment Variables__ section of [`mysql`](https://hub.docker.com/_/mysql) you find a way to replace the database from [the guide](https://spring.io/guides/gs/accessing-data-mysql/) with some values of your choice.

:::caution Data loss
Using a docker database that is not mounted to you host machine will result in data loss. But in my case and in this transfer task, this is actually the goal because some scientists get pre-loaded at every startup as you can see in [pre-requisites](#pre-requisites).
:::

## Follow the guideline
:::note Task
Follow [the guide](https://spring.io/guides/gs/accessing-data-mysql/) now but use your docker database!

If you did complete the [pre-requisites](#pre-requisites) then stop before the _Create the @Entity Model_ part.
If not, continue the guide until the end.
:::

## Migrations
In the lecture, you learned what migrations are. In case you forgot, [read this](https://www.cloudbees.com/blog/database-migration).

It is finally time, to fease all you learned today into one smooth deliverable:

:::note Task
Complete [this tutorial](https://dzone.com/articles/integrating-spring-data-jpa-postgresql-and-liquiba) to finish your journey on the database. But:

- Do not create new entities, use the existing ones!
- Do not use [Lombok](https://projectlombok.org/) if you do not want another adventure again, just write plain code. 
:::

_But Dominik, its in PostgreSQL?!_

Yes, but you can also drive a Canyon and a Trek bike... These frameworks are capable of using another technology instead, switch it with your engineering capabilities __OR__ learn something new by switching your `spring-starter` to PostgreSQL!
