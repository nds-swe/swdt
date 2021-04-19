---
title: C4 Model
---

:::info Metadata
This task is complementary to the lectures and lists tasks and information for the in-lesson tasks.
:::

You can read more about the C4 Model in its [technique article](/docs/techniques/c4-modeling).

# Context

The context diagram is not invented. Capable DevOps engineers engage with the product team (in this course the subject `RME`) to derive the context from the users needs.
For this task though you get a context diagram that has already been `developed`.

```plantuml
@startuml Context
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
' comment change diagram
' left to right direction
skinparam linetype ortho

Person(client, "Client", "People that search and apply for jobs.")
Person(agent, "Agent", "People that offer and negotiate jobs.")
System(jinder, "Jinder", "Allows agents and clients to negotiate about job offers. Agents paste offers, clients choose and then apply for them.")
System_Ext(notification, "Notification System", "An external notification provider sending SMS, E-Mails and Push Notifications.")
System_Ext(linkedin, "LinkedIn", "An professional community platform storing candidates profiles and/or jobs.")

Rel(client, jinder, "Uses", "HTTPS")
Rel(agent, jinder, "Uses", "HTTPS")
Rel(jinder, notification, "Consumes API", "HTTPS")
Rel(jinder, linkedin, "Consumes API", "HTTPS")

center footer "Generated from code, ❤️ Everything as Code!"
@enduml
```

**Jinder** (short for **Job** T**inder**[^1]) is a virtual platform taking the successful _behavioral pattern_ of Tinder (swipe to match something) and ports it into the job world. The concept is simple.

[^1]: Tinder is a registered trademark ™️ to [tinder.com](https://policies.tinder.com/intellectual-property/intl/en), this is why this task is called **J**inder and the term _Tinder_ is only used for an explanatory reference.

* Agents post positions on the Jinder platform
* Clients browse and swipe positions (either signaling interest or dismissing them)
* Matched job positions get further triage by agent and client 
* Clients and agents can login using primarily their social login from _LinkedIn_[^2]

[^2]: [LinkedIn](https://brand.linkedin.com/policies)™️ is of course also a registered trademark, but where we talk about using the real social login, so its not a problem as we just consume their system.

Jinder is a quick sorting tool only replacing the first step of the job search. As soon as an interesting position has been matched, the further process can not be shortened. Jinder will offer some 2021 steps to negotiate between agents and clients but in-person applications and good letters of intents can and will not be replaced (we are still professionals).

In the first version we use two external systems, as we learn in [DRY](/docs/theory/principles#do-not-repeat) we do not implement such things ourselves.

* An external notification system to send any form of notification with nice templates etc.
* LinkedIn to import and keep profiles up to date as well as using them as Identity Provider

## Container diagram
:::note Task
Derive a container diagram from the context. You may use any tool that you want, ranging from Microsoft Word™️ to [PlantUML](/docs/tools/plantuml). Read in [C4 Modeling](/docs/techniques/c4-modeling) why in this lecture the choice of tool is second priority.
:::

Use the following bullets to make up your mind:

* A persistence will be needed (though we save as less data as possible on our side - we leverage LinkedIn and _DRY_)
* An API Application will orchestrate the traffic between users and the database as well as the external systems
* Clients primarily want to use Jinder over a mobile device
* Agents primarily use Jinder over a desktop

:::success Sample solution
_Sample solutions will be provided in the end._
:::



## Sample solutions
<a href="solutions/c4-model" target="_blank">Here.</a>