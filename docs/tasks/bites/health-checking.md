---
title: Health-Checking
---

:::info Metadata
This task is complementary to the lectures and lists tasks and information for the in-lesson tasks.
:::

## Prerequisites

You must have completed [bites/docker-compose](docker-compose). It is also good if you have finished [bites/rest-assured](rest-assured)

## Choose project
Pick any of your existing docker projects. If you do not have one at this point something went terribly wrong... go to [echo-server](#echo-server) to get an image to play with.

## HEALTHCHECK
You can read a good article about docker health checks [on medium](https://pamit.medium.com/docker-a-health-check-story-c528d0b5fe10).

Add a HEALTHCHECK to your Dockerfile (or if you feel savvy, add it to `docker-compose.yml`).

```Dockerfile
HEALTHCHECK --interval=10s --timeout=10s --start-period=10s --retries=3 \
  CMD curl --fail http://url-from-your-app || exit 1
```

### Run the test
Start the container in any way you fancy and see if your health check works!

`docker container ls` will show you the status of the container.

### Brick it

```Dockerfile
HEALTHCHECK --interval=10s --timeout=10s --start-period=10s --retries=3 \
  CMD curl --fail http://INVALIDURL💣 || exit 1
```

Run the health check broken and see how the container gets _sick_.

## Smoke Test

This _pattern_ can also be used for simple integration tests 🧠

### Start your containers as daemons

I won't say more than: `docker-compose up -d`

### Curl an URL yourself

Run a [cURL](/docs/tools/curl) or a [Postman](/docs/tools/postman) request.

I will not provide an example here, go back to the [very first task](/docs/tasks/client-server) if you do not remember this basic.

### Terminate

`docker-compose down`

:::info 🧠
This series of commands can also be ran in GitHub Actions... Of course, it is recommended to use a bit more elaborate solution than one cURL command 😊
:::

---

## echo-server
[`ealen/echo-server`](https://hub.docker.com/r/ealen/echo-server) is a docker image that just sends back what you send it. Use that image for the exercise.

Note: You will need to use `image` instead of `build` in the `docker-compose.yml`.