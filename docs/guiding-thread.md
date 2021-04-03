---
title: Guiding Thread
---

As an engineer you need to think of a thousand things. To not lose oversight we need a guiding thread (🇩🇪 _roter Faden_). Our Guiding Thread is the DevSecOps _"eight"_ or "∞". Every bit of information we learn can be tied to the DevSecOps _"eight"_.

This thread has been chosen due to its importance in modern day software development and its close relation to practice. You can learn about DevOps in the [first theory lesson](theory/devops).

## Goal
Every single lecture (one lecture block, 45min) has its own goal. Also, each task has a goal. The summary of all these goals is:

:::info
You achieve an E* profile. You know every aspect of a Software Engineers daily work and can either reason why you did not do something, apply a minimum viable approach or deep-dive and implement a sophisticated solution. You know for every aspect the foundational theory, the techniques and the tools that can support you. You can do this with security and the customer in mind and you can work with, and not isolated, from other roles.
:::

While DevOps talks mainly about development and operations there is much more to being a capable and valued engineer in the 21st century:

* They plan, code build and test their product (Dev)
* They deploy, release, monitor and operate their own makings (Ops)
* They work closely with the product team, understanding from them the business needs
* They work closely with the user experience team in order to implement what the user needs or wants and not what they seem fit in their silo
* They keep their application secure and up to date. _"Security first"_ and _"customer first"_ approaches go hand in hand as no customer ever said: _I want this but preferably insecure..._ 🤦🏽‍♀️

For every lecture and task we do we will elaborate - using the [mindmap](#mindmap) below - how the just learned content fits into the skill set described.

### Profiles
Of course, there are companies or cultures where one aspect of engineering is more needed or encouraged than another. We want to achieve an `E` profile with the possibility to drill down, not a `T` or `I` profile where one needs to evolve out of.

What are these profiles anyway?

|Profile|Meaning|
|-|-|
|E|To understand the E profile, tilt it 90° to the right. An E profile has sufficient knowledge in many areas and is an all rounder. Most E profiles have some longer "E arms" meaning they are subject matter experts in more than one area.|
|T|A T profile has shallow knowledge of other areas and is very proficient in one area of expertise.|
|I|An I profile has no knowledge concerning other areas and is generally deeply knowledgeable and an expert in his area.|

You can also directly link this to the practice. An electrician can install many household appliances with his E profile, she/he is a handywo\*man. But a 240'000 volt transformer can only be installed by a highly-trained expert. The versatility of the handywo\*man is not always preferable, the 240'000 volts company will most probably not hire him/her, but nearly every electrician small or medium enterprise will.

## Mindmap

To better tie the goals together and provide a thread for the lecture a mindmap has been drafted. On this mindmap, you find for every _phase_ of DevOps the necessary links towards techniques and tools. Also you can see which subject knowledge you need to apply or transfer. The theory is not linked explicitly, you can derive the theory from the techniques.

As one can see, the _Ops_ part is less mature or evolved than the _Dev_ aspects. This is due to the fact that the time is limited and one can argue that everyone who wants to run something first needs to build it 😏

```plantuml
@startmindmap

<style>
node {
  BackgroundColor white
  LineColor black
  LineThickness 1.0
  RoundCorner 5
}
arrow {
  LineThickness 2
  LineColor black
}
</style>


+ DevSecOps
-- Plan
---[#orange] Subjects
----_ from: RME
---[#lightgreen] Tools
---- PlantUML
---[#lightblue] Techniques
---- C4 Model

-- Code
---[#orange] Subjects
----_ from: ALG
----_ from: OOP
----_ from/to: WEG
---[#lightgreen] Tools
---[#lightblue] Techniques

-- Build
---[#orange] Subjects
----_ from: BSY
---[#lightgreen] Tools
---- gradle
---- git
---- GitHub Actions
---- Docker
---[#lightblue] Techniques

-- Test
---[#lightgreen] Tools
---- JUnit
---- Testcontainers
---- GitHub Actions
---- Docker
---- cURL
---- Postman
---- RestAssured
---[#lightblue] Techniques
---- Continuous Integration


++ Deploy
+++[#orange] Subjects
++++_ to: CCT
+++[#lightgreen] Tools
++++ Azure

++ Release
+++[#lightgreen] Tools
++++ GitHub Actions
+++[#lightblue] Techniques

++ Operate
+++[#lightgreen] Tools
++++ Logs
+++[#lightblue] Techniques

++ Monitor
+++[#lightgreen] Tools
++++ Prometheus
@endmindmap

```

:::note
This mindmap 👆🏽 is code too, check it out by clicking **Edit this page** at the bottom!
:::