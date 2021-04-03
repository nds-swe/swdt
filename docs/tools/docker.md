---
title: Docker
---

> Docker takes away repetitive, mundane configuration tasks and is used throughout the development lifecycle for fast, easy and portable application development - desktop and cloud. Docker’s comprehensive end to end platform includes UIs, CLIs, APIs and security that are engineered to work together across the entire application delivery lifecycle. - *[docker.com](https://www.docker.com/)*

🔗 [docker.com](https://www.docker.com/)

## Use

We use docker for **many** reasons but in this modules it comes handy especially for the following areas:

- Sharing code between different operating systems becomes easy, docker unifies the platforms
- Deploying code to Azure
- Running tests against test-containers (ref follows)
- Abstract and simplify versioning
- Keeping our development machines clear from clutter
- Consistency, docker containers are always the same, there is not suddenly a new version or variable in them

There are only a handful of cloud providers or _hosters_ where you can appear without a docker image and serve it - even those where you do not bring a container will under the hood containerize it. It is therefor high time to start using it!

## Install / Get started
This is not the first time you meet docker as you can see in the [expectations](/docs/expectations). I think the course is completable without docker but it will be 😖

If, still so, [get started](https://www.docker.com/get-started) right now!


## Alternative

- [containerd](https://containerd.io/)

There are not too many [viable alternatives](https://www.aquasec.com/cloud-native-academy/docker-container/docker-alternatives/) because even docker itself, under the hood, uses _containerd_.