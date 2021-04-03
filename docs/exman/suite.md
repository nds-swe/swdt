---
title: ExMan Suite
---

The ExMan Suite was introduced in RME as the subject-spanning exercise of the NDS HF SWE. Here you can find some information about it.

```plantuml
@startuml TransferTask
!include https://raw.githubusercontent.com/plantuml-stdlib/C4-PlantUML/master/C4_Container.puml
' comment change diagram
left to right direction
skinparam linetype ortho

System_Boundary(c1, "ExMan Transferaufgabe") {
    Container(weg, "[WEG] Web Application", "HTML/JS with PHP BFF", "Allows users to see people and expeditions. Can create and pack expeditions.")
    Container(uxd, "[UXD] User eXperience Design", "Mockups", "Iterative UX Design.")
    Container(swdt, "[SWD&T] Software Design & Testing", "Java", "Wraps the packer for convenience and allows managing expedition and items in databases as well as packing them.")
    Container(cct, "[CCT] Cloud Computing", "Azure", "Iteratively deploys our task landscape to the cloud.")
    Container(rme, "[RME] Requirements Engineering", "*", "Defines and manages the functional and quality requirements.")
}

System(packer, "Packer", "'Third-party' artefact from ALG/OOP, ExManRest.jar")

Rel(swdt, packer, "Uses", "HTTPS")
Rel(weg, packer, "Can use", "HTTPS")
Rel(weg, swdt, "Consumes API", "HTTPS")
Rel(swdt, cct, "Docker Images over ACR")
Rel(weg, cct, "Docker Image over ACR")
Rel(rme, swdt, "User Stories and Cases")
Rel(uxd, weg, "Screen Designs")
Rel(rme, uxd, "User Stories and Cases")

center footer "Generated from code, ❤️ Everything as Code!"
@enduml
```

We get
* functional requirements from Requirements Engineering
* quality requirements from Cloud Computing
* requirements towards our API design from Web Engineering

These we will convert in a modern cloud stack capable solution. We will learn how to develop an application using

* C4 Model Language
* DevSecOps incl. CI and CD (partially only as example solution)
* Design patterns
* Code (☕️ Java)
* Light operational approaches to **run and operate** our app

and all of this continuously tested ✔

### Dependencies

On a first glance it could appear that we generated hard constraints between the lectures with ExMan. This is is a misconception, ExMan is a story - a context. Each lecturer has mitigated the risks of hard dependencies so that no one can block each other. With ExMan we try to react to the feedback of the last two years that in unison was:

> Each lecturer makes up his own transfer tasks and we have to learn eight new contexts, it is very difficult to switch context for every subject and task.

That feedback was true, we invented Gas stations, Football clubs, Wine tastings and many more - even we lost track now. This has been eliminated with ExMan, there is now only one background story for the transfer tasks. You need to learn the story once and you know what all the transfer tasks rotate around - an expedition organization company.

## ExMan repositories

The future of ExMan is open source: [mambax/abb-nds-hf-swe-exman-suite](https://github.com/mambax/abb-nds-hf-swe-exman-suite).

### Packer
The packer has been dockerized and uploaded (due to copyrights) to a private repository: [mambax/abb-nds-hf-swe-exman1](https://github.com/mambax/abb-nds-hf-swe-exman1).
In the [packer repo](https://github.com/mambax/abb-nds-hf-swe-exman1) you find the necessary docs around the packer.

#### Access
Ask for access by opening an issue [on the suite repository](https://github.com/mambax/abb-nds-hf-swe-exman-suite/issues/new?assignees=mambax&labels=help+wanted&template=packer-repository-access-request-for-user1.md&title=Access+request+exman1+for+user1).

### Start time
The Packer is hosted on an **Azure Free Tier F1**, which has the following properties:

* 60 CPU minutes a day
* 1GB Ram
* 1GB Storage
* 0$

While being free is good for us to train, it comes at one downside. The service will go to hibernation once not requested for a certain time. The startup takes some moments when a new request gets in, so when hitting the service with a first request you might need to wait up to **2** minutes.

ℹ️ As soon as we see this as not acceptable anymore, we can upgrade the service to a paid plan having it running 24/7.
