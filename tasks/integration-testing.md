---
title: Integration Testing
sidebar_position: 10
---

:::info Metadata
|Lecture equivalent| Duration |
|-|-|
|3| 2h 15min |

At the end of this task, students

* have added one integration test (_IT_) to the spring-starter
* have added a `docker-compose.yml` file
* run the integration test in test containers
* run a docker security scan upon every pull request
:::

## Add test

:::warning 🧑🏽‍🎓-advice
This task combines literally everything you learned until now. Mastering this task requires time and the will to learn, there is no fast-lane. The result will be fascinating, mature and powerful. But if you expect that you can do this by clicking three times in a UI, you did not pay attention the previous 18 lessons.

**As a reward for your efforts you get a fully-automated, state-of-the-art CI pipeline using GitHub Actions!**
:::

### Refactor `EmployeesController`

In the [spring-starter task](spring-starter) we created two endpoints, one seemingly secure, the other not secure.

:::note Task
Remove the insecure endpoint. Refactor the secure endpoint to use a layered architecture to fetch three fictional employees.
Remove also the `empty` endpoints from [architecture](architecture), you also do not need them anymore.

Merge these two tasks (spring-starter and architecture) into one `/employees` endpoint!
:::

### First integration test

:::note Task
Write your first integration test as shown below.
:::

Create a new file: `EmployeeControllerTestIT.class` (the _IT_ stands for integration test and helps to distinguish files)

Use these sources to write your first own integration test (you can also cheat, learning nothing):

1. https://rest-assured.io/
2. https://github.com/rest-assured/rest-assured/wiki/GettingStarted#rest-assured
3. https://github.com/rest-assured/rest-assured/wiki/Usage#challenged-basic-authentication
4. https://github.com/rest-assured/rest-assured/wiki/Usage#root-path --> last example
  + note `body("size()", equalTo(4)).`

Compose these sources into one test. Try as hard as you can, before you cheat.

### Run tests

First, make sure that your old EmployeeTest (from [github-actions](github-actions)) still works. If the old test still passes, run the new test.

You will hit:

```bash
java.net.ConnectException: Connection refused

	at java.base/sun.nio.ch.Net.connect0(Native Method)
	at java.base/sun.nio.ch.Net.connect(Net.java:503)
	at java.base/sun.nio.ch.Net.connect(Net.java:492)
...
```

Why?

:::success
Integration test test against a running instance! So you need your server running at the same time as the tests to succeed!
:::

So, in IntelliJ (or the console), start the server, then run the tests (IntelliJ can handle that, yes).

:::note Task
Make your tests success the first time! All of them

* EmployeeTest.java
* EmployeeControllerTestIT.java

In order for this to work properly, you might give a look at [JUnit 5 Test Tagging](https://github.com/nds-swe/jinder/pull/7).
:::

## Interim report

Congrats, you have made it quite far! Now lets automate some things away!

## Automate

### Create `docker-compose.yml`
We have seen in the lecture and you can read up [here](https://docs.docker.com/compose/compose-file/) what a `docker-compose.yml` file does.

:::note Task
Add a docker compose definition to your project. You can either fill it in yourself or see its content [here](https://github.com/nds-swe/spring-starter/blob/main/docker-compose.yml).
:::

This compose file will be used by a gradle plugin to `up` and `down` your project automatically during test phase! No more manually starting the project!

### Separate unit and integration tests

Modify your gradle test task to look like so:

```gradle
test {
	useJUnitPlatform{
		includeTags 'unit'
		excludeTags 'IT'
	}
	testLogging {
		events "passed", "skipped", "failed"
	}
}
```

This will only run unit tests when `test` is called. Now it is time to modify our gradle file further, add the following content (there is already a `plugins` section, merge them):

```gradle
plugins {
	id 'com.avast.gradle.docker-compose' version "0.14.3"
	...
}

task integrationTest(type: Test) {
  dependsOn assemble
	description = 'Runs integration tests.'
	group = 'verification'
	useJUnitPlatform{
			includeTags 'IT'
			excludeTags 'unit'
	}
	testLogging {
			events "passed", "skipped", "failed"
	}
}

dockerCompose.isRequiredBy(integrationTest)
```

You find a full [example](https://github.com/nds-swe/spring-starter/blob/main/build.gradle) here. Let us check what each line does:

|Statement|Function
|-|-
|`plugins --> id 'com.avast.gradle.docker-compose' version "0.14.3"`|Imports the gradle plugin to use docker-compose
|`task integrationTest(type: Test)`|Defines a new task of type `Test` (and we want to run tests)
|`dependsOn assemble`|Before we can build the `Dockerfile` (using compose), we must assemble (build without test) our application
|`description = 'Runs integration tests.'`|Self-explaining
|`group = 'verification'`|Self-explaining
|`useJUnitPlatform`|Already seen in unit tests only this time we switch the include and exclude
|`testLogging`|Log level, known from unit tests
|`dockerCompose.isRequiredBy(integrationTest)`|Instructing gradle, that `dockerCompose` is required for `integrationTest`

:::note Task
Add the fully-automated integration tests as described above.
:::

### Verification
:::note Task
Run the tests locally, make sure they run. It will look something like shown below.
:::

#### Unit Test
```bash
❯ ./gradlew test
Starting a Gradle Daemon, 1 stopped Daemon could not be reused, use --status for details

> Task :test

EmployeeTest > Is too young PASSED

EmployeeTest > Old enough PASSED

EmployeeTest > Of exact age PASSED

StarterApplicationTests > contextLoads() PASSED

BUILD SUCCESSFUL in 10s
4 actionable tasks: 1 executed, 3 up-to-date
```

#### Integration-Test
```bash
❯ ./gradlew integrationTest

> Task :compileJava
Note: /Users/i511895/SAPDevelop/abb/spring-starter/src/main/java/ch/abbts/nds/swe/swdt/starter/CustomWebSecurityConfigurerAdapter.java uses or overrides a deprecated API.
Note: Recompile with -Xlint:deprecation for details.

> Task :composeUp
Building spring-starter
#1 [internal] load build definition from Dockerfile
#1 sha256:e1337714ae876a631a3bf45c92f841420367f90eb30d6ef5373ed94e28a5a64e
#1 transferring dockerfile: 243B 0.0s done
#1 DONE 0.0s

#2 [internal] load .dockerignore
#2 sha256:32fbaf5926bedad3eaba22b0a79f92ce2d11f6f2df2a01d5052dbe2441255ebf
#2 transferring context: 2B done
#2 DONE 0.0s

#3 [internal] load metadata for docker.io/azul/zulu-openjdk-alpine:16
#3 sha256:ec9410ded58039807916e8fe0a299ec3a2e7197e9b0ce752e04977d6f91dfe97
#3 ...

#4 [auth] azul/zulu-openjdk-alpine:pull token for registry-1.docker.io
#4 sha256:c704e25d5a25d2c7d3b59d36e5eeda887364ca8b5c1c6e4866fc4573ec2e7ef4
#4 DONE 0.0s

#3 [internal] load metadata for docker.io/azul/zulu-openjdk-alpine:16
#3 sha256:ec9410ded58039807916e8fe0a299ec3a2e7197e9b0ce752e04977d6f91dfe97
#3 DONE 1.5s

#5 [1/3] FROM docker.io/azul/zulu-openjdk-alpine:16@sha256:c7ccaaba7dfac3f2f921122a9afc857938a451f740d3c9afb53499016ce344ab
#5 sha256:4c6ecb1d4dc6e3734acab6b473c1584d377df5560c68a0fd37bd8fcb3637e821
#5 DONE 0.0s

#7 [internal] load build context
#7 sha256:66222cb7c1cd63d64d2d6c03cc5be835c62af9503e3779f1348b97b70b3cc291
#7 transferring context: 22.40MB 0.6s done
#7 DONE 0.6s

#6 [2/3] RUN addgroup -S spring && adduser -S spring -G spring
#6 sha256:cbc1aef0ebe6c25c05bb97ef259dce0878a1b5b7adc7d98c911892cc573b2b4f
#6 CACHED

#8 [3/3] COPY build/libs/*T.jar app.jar
#8 sha256:41507ef1965217d13258fab725d0c5ea680134611cff7125f3d7562e1227f9cc
#8 DONE 0.1s

#9 exporting to image
#9 sha256:e8c613e07b0b7ff33893b694f7759a10d42e180f2b4dc349fb57dc6b71dcab00
#9 exporting layers 0.1s done
#9 writing image sha256:a185e2bafb07a0d69fcb64b4b07cd5d5d7b775358b7e61f4929e1ff9109e7857 done
#9 naming to docker.io/library/ab4f8ff4365c3530a6e3290494e6ed02_starter__spring-starter done
#9 DONE 0.1s
Creating network "ab4f8ff4365c3530a6e3290494e6ed02_starter__default" with the default driver
Creating ab4f8ff4365c3530a6e3290494e6ed02_starter__spring-starter_1 ...
Creating ab4f8ff4365c3530a6e3290494e6ed02_starter__spring-starter_1 ... done
Docker Compose is now in the Docker CLI, try `docker compose up`

Will use localhost as host of spring-starter
More forwarded TCP ports for service 'spring-starter:8080 [[HostIp:0.0.0.0, HostPort:8080], [HostIp:::, HostPort:8080]]'. Will use the first one.
Probing TCP socket on localhost:8080 of 'spring-starter_1'
Waiting for TCP socket on localhost:8080 of 'spring-starter_1' (TCP connection on localhost:8080 of 'spring-starter_1' was disconnected right after connected)
Will use localhost as host of spring-starter
More forwarded TCP ports for service 'spring-starter:8080 [[HostIp:0.0.0.0, HostPort:8080], [HostIp:::, HostPort:8080]]'. Will use the first one.
Waiting for TCP socket on localhost:8080 of 'spring-starter_1' (TCP connection on localhost:8080 of 'spring-starter_1' was disconnected right after connected)
Will use localhost as host of spring-starter
More forwarded TCP ports for service 'spring-starter:8080 [[HostIp:0.0.0.0, HostPort:8080], [HostIp:::, HostPort:8080]]'. Will use the first one.
Waiting for TCP socket on localhost:8080 of 'spring-starter_1' (TCP connection on localhost:8080 of 'spring-starter_1' was disconnected right after connected)
Will use localhost as host of spring-starter
More forwarded TCP ports for service 'spring-starter:8080 [[HostIp:0.0.0.0, HostPort:8080], [HostIp:::, HostPort:8080]]'. Will use the first one.
Waiting for TCP socket on localhost:8080 of 'spring-starter_1' (TCP connection on localhost:8080 of 'spring-starter_1' was disconnected right after connected)
Will use localhost as host of spring-starter
More forwarded TCP ports for service 'spring-starter:8080 [[HostIp:0.0.0.0, HostPort:8080], [HostIp:::, HostPort:8080]]'. Will use the first one.
TCP socket on localhost:8080 of 'spring-starter_1' is ready
+------------------+----------------+----------------+
| Name             | Container Port | Mapping        |
+------------------+----------------+----------------+
| spring-starter_1 | 8080           | localhost:8080 |
+------------------+----------------+----------------+

> Task :integrationTest

EmployeeControllerTestIT > /employees/ returns 200 and a 3 employees PASSED

> Task :composeDown
Stopping ab4f8ff4365c3530a6e3290494e6ed02_starter__spring-starter_1 ...
Stopping ab4f8ff4365c3530a6e3290494e6ed02_starter__spring-starter_1 ... done
Removing ab4f8ff4365c3530a6e3290494e6ed02_starter__spring-starter_1 ...
Removing ab4f8ff4365c3530a6e3290494e6ed02_starter__spring-starter_1 ... done
Removing network ab4f8ff4365c3530a6e3290494e6ed02_starter__default

BUILD SUCCESSFUL in 33s
9 actionable tasks: 9 executed
```

Observe what happens above:

1. Docker Compose `ups` (starts) your backend
2. JUnit runs your integration tests against the new container
3. Docker Compose turns your container off

:::success F***** amazing
You literally mastered the most difficult part of our lecture 🎉🍻🥂 This technology is so fascinating!
:::

### Automate integration testing away

You know what is missing don't you... Automate the test running away!

:::note Task
Change your GitHub Action Workflow. Make it run both tests in two different `jobs` (it can do that know thanks to your work before!).
:::

## Scanning our container

:::note Task
You learned in Lesson 6 how container scanning works. You have attended multiple lessons that run GitHub Actions. Setup another workflow, that runs every sunday night and upon every Pull Request and scans your docker image for vulnerabilities.
:::

### Scan your container
First, scan your container, you will find a ton of vulnerabilities. Switch the base image to `azul/zulu-openjdk-alpine:16` to get rid of most of them.

### Add the workflow
```yml
name: Container Scan
on:
  schedule:
    - cron: '0 2 * * 0'
  pull_request:
    branches:
      - main
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1
        with:
          java-version: 11
      - run: ./gradlew build
        name: Build application
      - run: docker build . -t ndshfswe.azurecr.io/spring-starter:${{ github.sha }}
        name: Build docker image
      - uses: Azure/container-scan@v0
        name: Scan docker image
        with:
          severity-threshold: MEDIUM
          image-name: ndshfswe.azurecr.io/spring-starter:${{ github.sha }}
```

Add this point in time, I do expect that you can teach yourself what this file does. Only one point is to note.

We use `Azure/container-scan` instead of Snyk because it does not require any token or API and runs locally on our ubuntu runner.

## Sample
[Here we go](https://github.com/nds-swe/spring-starter/tree/0.1.9).

Note that at the point of writing (28th May 2021) one CVE (CVE-2021-31535) even in the latest Java image. We must await a fix - check the logs here to [see the scans failing](https://github.com/nds-swe/spring-starter/runs/2704432132?check_suite_focus=true).