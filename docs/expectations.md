---
title: Expectations
---

To follow the theory, techniques and tasks brought to you in this pages and in class, you are expected to bring these **qualifications** or **tools** with you before the first lesson.

## 🔀 Git
You can handle git in basic ways. You can `clone`, `pull`, `add`, `commit` and `push` at least. You bring an understanding from previous modules what Git is used for and are at least a novice.

If not, [refresh your knowledge](https://learngitbranching.js.org/)!

## 🐳 Docker
In the previous semester you came in touch with `docker` a first time. Listen 👂🏽 , you can complete this course without docker but it will be painful and totally not future oriented. The cloud runs on containers! It is most due that you start to engage `docker`.

You are expected to have Docker at least installed and that `docker version` actually delivers a result (which in most cases means it works).

```shell
❯ docker version
Client: Docker Engine - Community
 Cloud integration: 1.0.9
  ...

Server: Docker Engine - Community
 Engine:
  Version:          20.10.5
  ...
```

If not, [install it](https://www.docker.com/products/docker-desktop).

## 🖥 IntelliJ

You have [IntelliJ](https://www.jetbrains.com/idea/) installed and know how to handle Java/Gradle projects within it.

## ☕️ Java

You have Java installed (let's say version > 8).

```shell
❯ java -version
openjdk version "14.0.2" 2020-07-14
OpenJDK Runtime Environment (build 14.0.2+12-46)
OpenJDK 64-Bit Server VM (build 14.0.2+12-46, mixed mode, sharing)
```

## 🐘 Gradle
You know how [Gradle](https://gradle.org/) in its idea works and can manage a Java project (in IntelliJ) with it.

## 🎒 Packer
You are still familiar with the Expedition Manager project and what capabilities the _server_ had when you left him in the first semester. If not, here is a reminder:

```
ExpeditionManager REST-Schnittstelle mit JSON. Version 1.0:

GET  /exman                                ->  gibt diese Beschreibung zurueck
GET  /exman/expeditions                    ->  holt alle Expeditionsnamen
GET  /exman/expedition/:name               ->  holt eine Expedition mit Name (Bsp: /exman/expedition/Mars)
POST /exman/expedition                     ->  speichert eine Expedition (der Name ist in der Expedition)
GET  /exman/algorithms                     ->  holt alle Algorithmennamen
POST /exman/pack?limit=20&algorithm=Simple ->  packt Expedition mit Limite und Algorithmus. Gibt selektierte Items zurueck.

Beispiel JSON-Format einer Expedition:
{
    "name":"Mars",
    "items":[
        {"name":"Roboter","weight":184,"profit":12400},
        {"name":"Messstation","weight":144,"profit":8900}
     ]
}

(c) M. B.
```

If that reminder does not ring a bell, haul out some slides or manuscripts from M.B. from the first semester 📚