---
title: C4 Model Sample Solution
---
:::warning
You do not find this in the sidebar and you will not. You must earn your path here 👺
:::

## Container diagram

```plantuml
@startuml Jinder Containers
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
' comment change diagram
' left to right direction
skinparam linetype ortho

Person(client, "Client", "People that search and apply for jobs.")
Person(agent, "Agent", "People that offer and negotiate jobs.")

System_Boundary(c1, "Jinder") {
    ContainerDb(db, "Database", "MySQL", "Holds job and profile information")
    Container(jinderapi, "API Application", "Java", "Service-oriented API administering jobs, applicants and applications.")
    Container(jinderapp, "Mobile App", "Ionic", "Mobile application for applicants to browse and apply for jobs.")
    Container(jinderpwa, "PWA", "Ionic", "Progressive Web App for agents to orchestrate applicants.")
    Rel(jinderapi, db, "Uses", "JDBC")
    Rel(jinderapp, jinderapi, "Uses", "JSON/HTTPS")
    Rel(jinderpwa, jinderapi, "Uses", "JSON/HTTPS")
    
}
System_Ext(notification, "Notification System", "An external notification provider sending SMS, E-Mails and Push Notifications.")
System_Ext(linkedin, "LinkedIn", "An professional community platform storing candidates profiles and/or jobs.")

Rel(client, jinderapp, "Uses", "HTTPS")
Rel(agent, jinderpwa, "Uses", "HTTPS")
Rel(jinderapi, notification, "Consumes API", "HTTPS")
Rel(jinderapi, linkedin, "Consumes API", "HTTPS")

center footer "Generated from code, ❤️ Everything as Code!"
@enduml
```

It is subject to discuss if the two frontend apps can be combined into one. Given that we want to have something to architect in this task it is viable to start separated. We can always refactor/revisit our design, challenge it and change it (that is the whole idea).

## Component diagram

```plantuml
@startuml Jinder API Application Component
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Component.puml
' comment change diagram
' left to right direction
' skinparam linetype ortho


ContainerDb(db, "Database", "MySQL", "Holds job and profile information")
Container_Boundary(jinderapi, "Jinder API", ?tags, $link){
  Component(signinController, "Sign In Controller", "Spring Rest Controller", "Allows users to sign-in, primarily using LinkedIn services")
  Component(signinService, "Sign In Service", "Spring Bean", "Allows users to sign-in, primarily using LinkedIn services")
  Rel(signinController, signinService, "Uses")
  Component(linkedinClient, "LinkedIn Facade", "Spring Bean", "Abstracts the LinkedIn API")
  Rel(signinService, linkedinClient, "Uses")

  Component(jobsController, "Jobs Controller", "Spring Rest Controller", "Allows users to create, explore and match jobs")
  Component(jobsService, "Jobs Service", "Spring Bean", "Manages jobs, applicants and their information")
  Rel(jobsController, jobsService, "Uses")
  Rel(jobsService, db, "uses", "JDBC/Hibernate")

  Component(profileService, "Profile Service", "Spring Bean", "Reflects profiles from LinkedIn into the app")
  ComponentDb(profileCache, "Profile Cache", "Spring Cache", "Stores profile information for a certain time period")
  Rel(profileService, profileCache, "Uses", "ehcache/redis")
  Rel(profileService, linkedinClient, "Uses")
  Rel(jobsService, profileService, "Uses")

  ComponentQueue(notificationQueue, "Notification Queue", "Spring Bean", "Enqueues messages")
  Component(notificationWorker, "Notification Worker", "Spring Bean", "Consumes from the queue and sends notifications")
  Rel(notificationWorker, notificationQueue, "consumes")
  Rel(jobsService, notificationQueue, "produces")
}
Container(jinderapp, "Mobile App", "Ionic", "Mobile application for applicants to browse and apply for jobs.")
Container(jinderpwa, "PWA", "Ionic", "Progressive Web App for agents to orchestrate applicants.")
Rel(jinderapp, signinController, "Uses", "JSON/HTTPS")
Rel(jinderpwa, signinController, "Uses", "JSON/HTTPS")
Rel(jinderapp, jobsController, "Uses", "JSON/HTTPS")
Rel(jinderpwa, jobsController, "Uses", "JSON/HTTPS")

System_Ext(notification, "Notification System", "An external notification provider sending SMS, E-Mails and Push Notifications.")
System_Ext(linkedin, "LinkedIn", "An professional community platform storing candidates profiles and/or jobs.")
Rel(notificationWorker, notification, "Consumes API", "HTTPS")
Rel(linkedinClient, linkedin, "Consumes API", "HTTPS")

center footer "Generated from code, ❤️ Everything as Code!"
@enduml
```

This diagram is already quite elaborate, advanced and guaranteed **not correct**. It was never challenged and also never pair-reviewed. These are two crucial factors.

Further iterations will carve out the perfect solution 💧! Good that I have it as code so I can change it easily.