---
title: Spring Starter
---

:::note Metadata
|Lecture equivalent| Duration |
|-|-|
|5| 3h 45min |

At the end of this task, students

* have setup a spring starter app
* have added a secured endpoint to their starter
* have built a container image with their starter within
* have checked all of the above into git
* have (optionally) added a Dependabot Config to their starter
:::

## Input

This task gets two (maybe half finished) inputs:

* We have started the Spring app in the lecture, it is up to the students to finish the app within this exercise
* We have started to add a secured endpoint to our starer and will also finished it here

Also, in the lecture today we have analysed [docker](/docs/tools/docker) and we have elaborated how an app can be packaged into an image.

:::tip Task
If you did not finish the tasks in the lecture and miss the inputs above, finish this first and now. 
:::

### Inputs
If the tutorial from class was too fast for you, repeat the exercise step by step [from here](https://spring.io/guides/gs/spring-boot/). [Here](https://www.jetbrains.com/help/idea/your-first-spring-application.html#what-next) is the same tutorial from IntelliJ.

We have used [start.spring.io](https://start.spring.io/) in the lecture which was the fast lane to creating the Web Application template. Note that you cam add the `Spring Web` dependency there already.

![start.spring.io](./assets/start-spring-io.png)
<small>Caution, images are not from code, they might get deprecated!</small>

## Starter App
In the lecture we have created on the fast lane an app where we understand only 20% of. A key skill of an engineer is to be able to dive into someone elses code.

The starter (also the freshly downloaded one from ) contains the following files (shortened for brevity):

```
.
├── build.gradle
├── gradle
│   └── ...
├── ... more gradle stuff
└── src
    ├── main
    │   ├── java
    │   │   └── ch
    │   │       └── abbts
    │   │           └── nds
    │   │               └── swe
    │   │                   └── swdt
    │   │                       └── starter
    │   │                           └── StarterApplication.java
    │   └── resources
    │       ├── application.properties
    │       └── ...
    └── test
        └── java
            └── ch
                └── abbts
                    └── nds
                        └── swe
                            └── swdt
                                └── starter
                                    └── StarterApplicationTests.java
```

:::tip Task
Understand the content of the following files 

* `StarterApplication.java` in parent directory `src/main`
* `StarterApplicationTests.java` in parent directory `src/main`
* `build.gradle` in `.`

With understand it is meant that you actually know for **each** line what it does and why it exists.
:::

### Run
If your app runs smoothly, you should see something like:

```
2021-04-03 21:01:04.048  INFO 64739 --- [main] c.a.n.s.swdt.starter.StarterApplication  : Starting StarterApplication using Java 14.0.2 on C02Y91DDJGH6 with PID 64739 (/Users/i511895/SAPDevelop/abb/spring-starter/build/classes/java/main started by i511895 in /Users/i511895/SAPDevelop/abb/spring-starter)
2021-04-03 21:01:04.051  INFO 64739 --- [main] c.a.n.s.swdt.starter.StarterApplication  : No active profile set, falling back to default profiles: default
2021-04-03 21:01:04.743  INFO 64739 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2021-04-03 21:01:04.752  INFO 64739 --- [main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2021-04-03 21:01:04.752  INFO 64739 --- [main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.44]
2021-04-03 21:01:04.802  INFO 64739 --- [main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2021-04-03 21:01:04.802  INFO 64739 --- [main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 705 ms
2021-04-03 21:01:04.934  INFO 64739 --- [main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2021-04-03 21:01:05.073  INFO 64739 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2021-04-03 21:01:05.080  INFO 64739 --- [main] c.a.n.s.swdt.starter.StarterApplication  : Started StarterApplication in 1.398 seconds (JVM running for 1.93)
```

:::tip Task
Study this log, line by line and reflect what these messages signal!
:::

## Push
:::tip Task
Push the result to a GitHub repository of your chose and hand in the repository URL.
:::