---
title: Architecture
---

:::info Metadata
|Lecture equivalent| Duration |
|-|-|
|3| 2h 15min |

At the end of this task, students

* have analysed and deepened their knowledge on microservices
* have re-visited and iterated their diagrams from the [C4 ExMan](c4-exman) task - weaving in the new architecture knowledge
:::

## Deepen microservice knowledge

We will not apply microservices in this lecture. The overhead they generate is only acceptable if certain other requirements are fulfilled. None the less it is important to be familiar with the concept.

:::note Task
Read [Hexagonal Architecture](/docs/techniques/hexagonal-architecture).

Write a summary about hexagonal architecture. Keep it between 150 and 250 words.
:::

## Iterate the diagrams
You have enjoyed 90 minutes about `architecture`. Funnel this knowledge now into your two diagrams from [C4 ExMan](c4-exman).


:::note Task

1. Book a time slot with a fellow student of 30 min
2. Revisit **your** diagrams from [C4 ExMan](c4-exman), challenge them both ways with your colleague and iterate over them, applying your latest knowledge onto them
3. Write down the findings
4. Correct the findings and document them properly

We are again not aiming for the perfect diagram, we are learning once more one of our principles: [**Iterate**](/docs/theory/principles#iterate) - this time with a buddy!

To complete this task you are expected to hand in:

* Name of your review buddy
* List of changes/challenges you and your colleague discussed (e.g. questions she/he asked)
* Diagram before and after (both container and component diagram)
* Feedback on changes you made after receiving the feedback
:::

### Example

This is an example **how** to do it (the form) **not the example solution** (the result)!

#### Before

```plantuml
@startuml ExMan Suite Containers (before)
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
' comment change diagram
' left to right direction
' skinparam linetype ortho

Person(manager, "Manager", "Accesses the system")

System_Boundary(c1, "ExMan Suite") {
    Container(exman, "ExMan App", "Java", "Manages everything around ExMan")
    Container(users, "User Store", "Java", "Manges users")
    ContainerDb(db, "Database", "MySQL", "Persists (on disk) the expedition information")
    Rel(exman, db, "Uses", "JDBC")
    Rel(exman, users, "Consumes", "HTTPS")
}
System_Ext(packer, "ExMan Packer", "External expedition packaging service")

Rel(manager, exman, "Uses", "HTTPS")
Rel(exman, packer, "Consumes API", "HTTPS")

center footer "Generated from code, ❤️ Everything as Code!"
@enduml
```
#### After

See [C4 ExMan Sample](/docs/tasks/solutions/c4-exman) - also I do not [DRY](/docs/theory/principles#do-not-repeat).

#### Changes

Interview Buddy: Peter Pettigrew 🐀

|Challenge|Changes applied|
|-|-|
|What user groups are there defined? `Manager` seems quite generic|Added more than one actor as the requirements mention at least 3 user groups|
|How does a human access the system? This is only an API|Split App into an API Application and a FrontEnd to separate backend from frontend and allow separate development|
|Does it make sense to develop the user management ourselves? There seem to be quite good SaaS or OpenSource solutions out there|Switched internal user store for an external identity provider in order to increase security and focus development efforts|

## Inspiration

:::success Attention explorers
It is allowed to take your thoughts for a ride and go wild. While I did chose a monolithic sample solution it is also possible to already split up your _design_ into more than one service. Just reason it well 🤝
:::

:::caution 👀
It is super unlikely that two **individually** drafted designs come up equal. Just saying...
:::